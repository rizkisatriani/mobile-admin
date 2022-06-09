import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from '../constants/http.js';
import { getData } from '../helpers/storage'

const { height, width } = Dimensions.get('window');
export default class DetilListRiwayat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originBuku: [],
            buku: [],
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
                url: BASE_URL + "/api/getByIdPinjam",
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
                    this.setState({ buku: res.data.data });
                    console.log(res.data.peminjaman)
                    this.setState({ dataPeminjam: res.data.peminjaman });
                }
            }).catch((e) => {
                console.log(e);
                // Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
            }) 
    };   
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: "#00a8ff",
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    width: width,
                    height: 100,
                    padding: 10,
                }} >
                    <Text style={[{
                        flex: 2,
                        color: '#fff',
                        padding: 15,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }]}>Detil Peminjaman</Text> 
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
                    <TextInput
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
                    />
                    <ScrollView>
                        {this.state.buku.map((data, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    style={{
                                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: 370,
                                        elevation: 3,
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        flex: 1,
                                        borderRadius: 30,
                                        flexDirection: "row",
                                        flex: 1,
                                        flexWrap: 'wrap'
                                    }}
                                    onPress={() => {
                                      
                                    }}>
                                    <Image
                                        style={main.buku}
                                        source={{ uri: `${BASE_URL}/${data.cover_buku}` }}
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
                                        <Text style={[main.text, { fontSize: 14, fontWeight: 'bold' }]}>{data.judul}</Text>
                                        <Text style={[main.text, { fontSize: 12 }]}>{data.nama_pengarang}</Text>
                                        <Text style={[main.text, { fontSize: 12 }]}>{data.penerbit}</Text>
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
