import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from '../constants/http.js';
import { getData } from '../helpers/storage'

const { height, width } = Dimensions.get('window');
export default class DetilListAnggota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originBuku: [],
            anggota: [],
            bukuPinjam: [],
            dataPeminjam: []
        };
    }
    componentDidMount() {
        this.getDataPinjam();
    }
    getDataPinjam = async () => { 
        console.log(this.props.route.params.type);
            axios({
                method: "post",
                url: BASE_URL + "/api/AnggotaById",
                data: { id: this.props.route.params.id }
            }).then(async (res) => {
                if (res.data.data.length == 0) {
                    Alert.alert(
                        "Informasi",
                        "Anda belum melakukan peminjaman.",
                        [
                            {
                                text: "OK", onPress: () =>
                                    this.props.navigation.navigate('MenuUtama')
                            }
                        ]
                    );
                } else {
                    this.setState({ anggota: res.data.data });
                    console.log( res.data.data )
                    // this.setState({ dataPeminjam: res.data.peminjaman });
                }
            }).catch((e) => {
                console.log(e);
                // Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
            }) 
    };

    ACC = () => { 
        getData('user').then((data_user) => {
        const URL = `${BASE_URL}/api/accMobile`;
        let FData = new FormData();
        FData.append("id", this.state.anggota.id);
        FData.append("admin_id", data_user.id);
        FData.append("type", this.props.route.params.type);
        axios.post(URL, FData).then((response) => {
            Alert.alert(
                "Informasi",
                "Permintaan telah berhasil di setujui.",
                [
                    {
                        text: "OK", onPress: () =>
                            this.props.navigation.navigate('MenuUtama')
                    }
                ]
            );
        }).catch((e) => {
            console.log('sukses', e)
        });
    })

    } 
    Tolak = () => { 
        getData('user').then((data_user) => {
        const URL = `${BASE_URL}/api/TolakMobile`;
        let FData = new FormData();
        FData.append("id", this.state.dataPeminjam.id);
        FData.append("admin_id", data_user.id);
        FData.append("type", this.props.route.params.type);
        axios.post(URL, FData).then((response) => {
            Alert.alert(
                "Informasi",
                "Pengajuan telah berhasil di hapus.",
                [
                    {
                        text: "OK", onPress: () =>
                            this.props.navigation.navigate('MenuUtama')
                    }
                ]
            );
        }).catch((e) => {
            console.log('sukses', e)
        });
    })

    } 
    delete = (data) => {
        const bukuPinjam = this.state.bukuPinjam;
        bukuPinjam.push(data);
        this.setState({ bukuPinjam });
        let buku = [...this.state.buku];
        const index = buku.findIndex((bukuD) => {
            return bukuD.judul == data.judul;
        })
        buku.splice(index, 1);
        this.setState({ buku: buku });
        let originbuku = [...this.state.originBuku];
        const indexOrigin = originbuku.findIndex((bukuO) => {
            return bukuO.judul == data.judul;
        })
        originbuku.splice(indexOrigin, 1);
        this.setState({ originBuku: originbuku });
    }
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: "#00a8ff",
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    width: width,
                    height: 160,
                    padding: 10,
                }} >
                    <Text style={[{
                        flex: 2,
                        color: '#fff',
                        padding: 15,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }]}>Detil Permintaan Keanggotaan</Text>
                    <View style={{
                        flexDirection: 'row',
                        width: width,
                        height: 70,
                        paddingRight: 15
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.ACC()
                            }}
                            style={{
                                flex: 2,
                                backgroundColor: "#2ecc71",
                                margin: 10,
                                height: 50,
                                width: 130,
                                elevation: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'column',
                                flex: 1,
                                borderRadius: 10,
                            }}>
                            <Text style={[{
                                color: '#fff',
                                padding: 15,
                                fontSize: 14,
                                fontWeight: 'bold'
                            }]}>Setujui</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.Tolak()
                            }}
                            style={{
                                flex: 1,
                                backgroundColor: "#f39c12",
                                margin: 10,
                                height: 50,
                                width: 130,
                                elevation: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexDirection: 'column',
                                flex: 1,
                                borderRadius: 10,
                            }}>
                            <Text style={[{
                                color: '#fff',
                                padding: 15,
                                fontSize: 14,
                                fontWeight: 'bold'
                            }]}>Tolak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 8,
                    flexDirection: 'column',
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: 45,
                    borderBottomRightRadius: 45,
                    width: width,
                    padding: 10,
                }} > 
                    <View
                        style={{
                            borderBottomColor: '#7f8c8d',
                            borderBottomWidth: 1,
                            marginBottom: 15
                        }}
                    />     
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        borderBottomLeftRadius: 45,
                        borderBottomRightRadius: 45,
                        width: width,
                        height: height / 3,
                        padding: 10,
                    }}>
                        <Text style={[main.text, { fontSize: 12 }]}>Nik Anggota: {this.state.anggota.nik}</Text>
                        <Text style={[main.text, { fontSize: 12 }]}>Nama Anggota : {this.state.anggota.name}</Text>
                        <Text style={[main.text, { fontSize: 12 }]}>Email : {this.state.anggota.email}</Text>
                        <Text style={[main.text, { fontSize: 12 }]}>No. Hp : {this.state.anggota.no_hp }</Text> 
                    </View>
                </View>
            </View>
        );
    }
}
