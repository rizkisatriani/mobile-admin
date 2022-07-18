import React, { Component } from 'react';
import { Alert,View, Dimensions, Text, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from  '../constants/http.js';

const { height, width } = Dimensions.get('window');
export class Register extends Component {
    state = {
      judul: '',
      nama_pengarang: '',
      penerbit: '',
      tahun_terbit: '', 
    };
    
  register = async() => {   
    axios({
        method: "post",
        url: BASE_URL + "/api/request",
        data: {  
                "judul":this.state.judul, 
                "nama_pengarang":this.state.nama_pengarang,
                "penerbit":this.state.penerbit,
                "tahun_terbit":this.state.tahun_terbit,
              }
      }).then(async(res)=>{
         console.log(res.data )    
         Alert.alert("Informasi","Buku berhasil di request.");
         this.props.navigation.navigate('Login');  
      }).catch((e) => {
        console.log(e)    
        Alert.alert("Informasi","Nik yang anda masukan sudah terdaftar.");
      })
  }; 
  render() {
    return (
        <View style={[main.container, { backgroundColor: "#fff" }]}> 
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
                        flex: 1,
                        width: width,
                        color: '#fff',
                        padding: 15,
                        fontSize: 24,
                        fontWeight: 'bold'
                    }]}>Request buku {this.state.Judul}</Text>
                </View>
          <Text style={[{ color: '#000', fontSize: 24,marginBottom:0,marginTop:20 }]} ></Text> 
        <ScrollView> 
          <TextInput
            style={main.inputRounded}
            placeholder="Judul buku"
            onChangeText={judul => this.setState({ judul: judul })}
            defaultValue={this.state.judul}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="Nama pengarang"
            onChangeText={nama_pengarang => this.setState({ nama_pengarang: nama_pengarang })}
            defaultValue={this.state.nama_pengarang}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="Penerbit"
            onChangeText={penerbit => this.setState({ penerbit: penerbit })}
            defaultValue={this.state.penerbit}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="Tahun terbit"
            onChangeText={tahun_terbit => this.setState({ tahun_terbit: tahun_terbit })}
            defaultValue={this.state.tahun_terbit}
          /> 
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => { 
                this.register()
            }}
            style={[main.buttonBorder,{borderColor: '#000'}]}>
            {<Text style={[{ color: '#000', fontSize: 18 }]} >Request</Text>}
          </TouchableOpacity> 
          </ScrollView>
        </View>
      )
  }
}

export default Register;
