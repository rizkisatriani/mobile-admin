import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView,TouchableOpacity, Image, Alert  } from 'react-native';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from '../constants/http.js';

const { height, width } = Dimensions.get('window');
export default class PeminjamanBuku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buku: [],
            bukuPinjam: []
        };
    }
    componentDidMount() {
        this.getbuku();
    }
    getbuku = async () => {
        axios({
            method: "get",
            url: BASE_URL + "/api/getBuku",
        }).then(async (res) => {
            this.setState({ buku : res.data.data});
            console.log(this.state.buku);
        }).catch((e) => {
            console.log(e);
            // Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
        })
    };
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: "#00a8ff",
                    borderBottomLeftRadius: 45,
                    borderBottomRightRadius: 45,
                    width: width,
                    height: height / 3,
                    padding: 10,
                }} >
                    <Text style={[{
                        color: '#fff',
                        padding: 15,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }]}>Peminjaman</Text>
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
                    <ScrollView>
                        
            { this.state.buku.map((data, i) => {
              return (
                    <TouchableOpacity 
                    key={i}
                    style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width:370 ,
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
                            Alert.alert(
                                "Pilih buku",
                                `Anda telah menambahakan buku ${data.judul} untuk dipinjam`,
                                [ 
                                  { text: "OK", 
                                  onPress: () => {
                                    const bukuPinjam=this.state.bukuPinjam;
                                    bukuPinjam.push(data);
                                    this.setState(bukuPinjam);
                                    this.state.buku.splice(i, 1);
                                  }}
                                ]
                              );
                        }}>
                         <Image
                            style={main.buku}
                            source={{ uri: `${BASE_URL}/${data.cover_buku}`}}
                        />
                        <View style={{flex: 1,
                    flexDirection: 'column', 
                    borderBottomLeftRadius: 45,
                    borderBottomRightRadius: 45,
                    width: width,
                    height: height / 3,
                    padding: 10,}}>
                        <Text style={[main.text,{fontSize: 14, fontWeight: 'bold'}]}>{data.judul}</Text>
                        <Text style={[main.text,{fontSize: 12 }]}>{data.nama_pengarang}</Text>
                        <Text style={[main.text,{fontSize: 12}]}>{data.penerbit}</Text>
                        <Text style={[main.text,{fontSize: 12}]}>{data.tahun_terbit}</Text>
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
