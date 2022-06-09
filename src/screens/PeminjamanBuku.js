import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView,TouchableOpacity, Image, Alert, TextInput  } from 'react-native';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from '../constants/http.js';
import { getData } from '../helpers/storage'

const { height, width } = Dimensions.get('window');
export default class PeminjamanBuku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originBuku: [],
            buku: [],
            bukuPinjam: []
        };
    }
    componentDidMount() {
        this.getbuku();
    }
    getbuku = async () => {
        getData('user').then((data_user) => {
            console.log(data_user.id);
        axios({
            method: "post",
            url: BASE_URL + "/api/getMobile",
            data: { user_id: data_user.id }
        }).then(async (res) => {
            console.log(res.data);
            if(res.data.status==1){
                Alert.alert(
                    "Informasi",
                    "Anda sudah melakukan peminjaman silahkan selesaikan peminjaman yang pertama",
                    [ 
                      { text: "OK", onPress: () => 
                      this.props.navigation.navigate('MenuUtama')}
                    ]
                  );
            }
            this.setState({ buku : res.data.data}); 
            this.setState({ originBuku : res.data.data}); 
        }).catch((e) => {
            console.log(e);
            // Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
        })
    })
    };
    
    simpan=()=> {   
        getData('user').then((data) => {
            const data_buku = JSON.stringify(this.state.bukuPinjam.map((dataBuku)=>{
                console.log(dataBuku.id)
            return {id:dataBuku.id}
          })); 
           
          const URL = `${BASE_URL}/api/simpanPeminjaman`;
          let FData = new FormData();
          FData.append("data_buku", data_buku); 
          FData.append("user_id", data.id); 
          axios.post(URL, FData).then((response) => {
              console.log('sukses',response)
            this.props.navigation.navigate('MenuUtama');
          }).catch((e)=>{
            console.log('sukses',e)
          });  
      })
        
      }
      delete=(data)=>{
        const bukuPinjam=this.state.bukuPinjam;
        bukuPinjam.push(data);
        this.setState({bukuPinjam});
        let buku=  [...this.state.buku];
        const index=buku.findIndex((bukuD)=>{
            return bukuD.judul==data.judul;
        }) 
          buku.splice(index,1);   
         this.setState({buku:buku});     
         let originbuku= [...this.state.originBuku]; 
         const indexOrigin=originbuku.findIndex((bukuO)=>{
            return bukuO.judul==data.judul;
        })  
        originbuku.splice(indexOrigin, 1); 
         this.setState({originBuku:originbuku}); 
      }
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <View style={{ 
                    flexDirection: 'row',
                    backgroundColor: "#00a8ff",
                    borderBottomLeftRadius:25,
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
                    }]}>Peminjaman</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            this.simpan()
                        }}
                    style={{
                        flex: 1,
                        backgroundColor: "#f39c12", 
                        margin: 10, 
                        height:50, 
                        width:130 ,
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
                    }]}>Simpan</Text>
                    </TouchableOpacity>
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
                        style={[main.inputRounded,{width: width-35} ]}
                        placeholder="Cari Buku"
                        onChangeText={text => {
                            let buku=this.state.originBuku; 
                            console.log('cari',buku)
                            if(text.length>=0){
                                buku=buku.filter((buku) => buku.judul.includes(text));
                                this.setState({ buku })
                            } 
                        }}
                        defaultValue={this.state.text}
        />
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
                                "Tambahkan buku",
                                `Anda akan menambahakan buku ${data.judul} untuk dipinjam`,
                                [ 
                                  { text: "Iya", 
                                  onPress: () => {
                                    this.delete(data);
                                  }},
                                  { text: "Tidak", 
                                  onPress: () => { 
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
