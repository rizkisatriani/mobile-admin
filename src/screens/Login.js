import React, { Component } from 'react';
import {  Alert,View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import DocumentPicker from 'react-native-document-picker';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from  '../constants/http.js';
import { getData } from '../helpers/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Login extends Component {
  state = {
    nik: '',
    pass: ''
  };
  getFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      }) 
      console.log(
        'res.uri2',
        {
          uri: res.uri,
          type: res.type,
          name: res.name,
        }
      )
      var formData = new FormData();
      formData.append("file", {
        uri: res.uri,
        type: res.type,
        name: res.name,
      });
      const URL = 'http://192.168.43.219:443/api/addBuku'; 

    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('cover', res); 

    let config = {
      header : {
        'Content-Type' : 'image/png'
      }
    }

    axios.post(
      URL, 
      data,
      config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
    }catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  componentDidMount(){
    getData('user').then((data) => {
      if(data){
        this.props.navigation.replace('MenuUtama'); 
      }  
    })
  }
  login = async() => {  
    axios({
        method: "post",
        url: BASE_URL + "/api/login",
        data: {  
                "nik":this.state.nik,
                "password":this.state.pass,
                "level":1, 
              }
      }).then(async(res)=>{
         console.log(res.data )    
         
         await AsyncStorage.setItem("user",JSON.stringify(res.data.data) )
         this.props.navigation.replace('MenuUtama');  
      }).catch((e) => {
        Alert.alert("Informasi","Nik dan password yang anda masukan salah.");
      })
  }; 
  render() {
    return (
      <View style={[main.container, { backgroundColor: "#00a8ff" }]}>
        <StatusBar barStyle="light-content" backgroundColor="#00a8ff" />
        <Text style={[{ color: '#fff', fontSize: 24 }]} >GGPC</Text>
        <Text style={[{ color: '#fff' }]} >Pengelolaan Sistem Informasi</Text>
        <Text style={[{ color: '#fff',paddingBottom:15 }]} >Perpustakaan</Text>
        <TextInput
          style={main.inputRounded}
          placeholder="NIK pengguna"
          onChangeText={nik => this.setState({ nik: nik })}
          defaultValue={this.state.nik}
        />
        <TextInput
          style={main.inputRounded}
          placeholder="Password"
          onChangeText={pass => this.setState({ pass: pass })}
          secureTextEntry={true}
          defaultValue={this.state.pass}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => { 
            this.login()
          }}
          style={main.buttonBorder}>
          {<Text style={[{ color: '#fff', fontSize: 18 }]} >Login</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => { 
            this.props.navigation.navigate('Register');  
          }}
          style={[{ marginTop:0 },main.buttonBorderReverse]}>
          {<Text style={[{ color: '#00a8ff', fontSize: 18 }]} >Register</Text>}
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login;
