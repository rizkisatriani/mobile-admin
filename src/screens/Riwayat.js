import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from '../constants/http.js';
import { getData } from '../helpers/storage'

const { height, width } = Dimensions.get('window');
export default class Riwayat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            buku: [],
            bukuPinjam: []
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        getData('user').then((data) => {

            const URL = `${BASE_URL}/api/getById`;
            let FData = new FormData(); 
            FData.append("nik", data.nik);
            axios.post(URL, FData).then((response) => {
                console.log(response.data.data);
                this.setState({ data: response.data.data }); 
            }).catch((e) => {
                console.log(e);
                // Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
            })
        })
    };
 
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
                    flexDirection: 'row',
                    backgroundColor: "#00a8ff",
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    width: width,
                    height: 100,
                    padding: 10,
                }} >
                    <Text style={[{
                        flex: 3,
                        color: '#fff',
                        padding: 15,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }]}>Riwayat</Text> 
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
                    {/* <TextInput
                        style={[main.inputRounded, { width: width - 35 }]}
                        placeholder="Cari Buku"
                        onChangeText={text => {
                            let buku = this.state.originBuku;
                            console.log('cari', buku)
                            if (text.length >= 0) {
                                buku = buku.filter((buku) => buku.judul.includes(text));
                                this.setState({ buku })
                            }
                        }}
                        defaultValue={this.state.text}
                    /> */}
                    <ScrollView>
                        {this.state.data.map((data, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    style={{
                                        backgroundColor: "#ecf0f1", margin: 10, 
                                        height: 110, 
                                        width: 370,
                                        elevation: 3,
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        flex: 1,
                                        borderRadius:10,
                                        flexDirection: "row",
                                        flex: 1,
                                        flexWrap: 'wrap'
                                    }}
                                    onPress={() => {
                                        Alert.alert(
                                            "Tambahkan buku",
                                            `Anda akan menambahakan buku ${data.judul} untuk dipinjam`,
                                            [
                                                {
                                                    text: "Iya",
                                                    onPress: () => {
                                                        // this.delete(data);
                                                    }
                                                },
                                                {
                                                    text: "Tidak",
                                                    onPress: () => {
                                                    }
                                                }
                                            ]
                                        );
                                    }}> 
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        borderBottomLeftRadius: 45,
                                        borderBottomRightRadius: 45,
                                        width: width,
                                        height: height / 3,
                                        padding: 10,
                                    }}>
                                        <Text style={[main.text, { fontSize: 18, fontWeight: 'bold' }]}>No Peminjaman : {data.id}</Text>
                                        <Text style={[main.text, { fontSize: 12 }]}>Tanggal pinjam : {data.tanggal_pinjam}</Text>
                                        <Text style={[main.text, { fontSize: 12 }]}>Status : {data.peminjam_nik!='-'?'Disetujui':'Pending'}</Text>
                                        <Text style={[main.text, { fontSize: 12 }]}>{data.tahun_terbit}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
