import React, { Component } from 'react';
import { Alert,View, Text, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from  '../constants/http.js';

export class Register extends Component {
    state = {
      nik: '',
      pass: '',
      name: '',
      email: '',
      no_hp: '',
      level: '', 
    };
    
  register = async() => { 
    console.log("asdasd" )    
    axios({
        method: "post",
        url: BASE_URL + "/api/register",
        data: {  
                "nik":this.state.nik,
                "password":this.state.pass,
                "name":this.state.name,
                "email":this.state.email,
                "no_hp":this.state.no_hp, 
                "level":1, 
              }
      }).then(async(res)=>{
         console.log(res.data )    
         Alert.alert("Informasi","Proses registrasi telah dikirim tunggu hingga konfirmasi admin.");
         this.props.navigation.navigate('Login');  
      }).catch((e) => {
        console.log(e)    
        Alert.alert("Informasi","Nik yang anda masukan sudah terdaftar.");
      })
  }; 
  render() {
    return (
        <View style={[main.container, { backgroundColor: "#00a8ff" }]}>
          <StatusBar barStyle="light-content" backgroundColor="#00a8ff" />
          <Text style={[{ color: '#fff', fontSize: 24,marginBottom:30,marginTop:50 }]} >Register</Text> 
        <ScrollView> 
          <TextInput
            style={main.inputRounded}
            placeholder="NIK pengguna"
            onChangeText={nik => this.setState({ nik: nik })}
            defaultValue={this.state.nik}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="Nama pengguna"
            onChangeText={name => this.setState({ name: name })}
            defaultValue={this.state.name}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="Email pengguna"
            onChangeText={email => this.setState({ email: email })}
            defaultValue={this.state.email}
          />
          <TextInput
            style={main.inputRounded}
            placeholder="No HP pengguna"
            onChangeText={no_hp => this.setState({ no_hp: no_hp })}
            defaultValue={this.state.no_hp}
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
                this.register()
            }}
            style={main.buttonBorder}>
            {<Text style={[{ color: '#fff', fontSize: 18 }]} >Register</Text>}
          </TouchableOpacity> 
          </ScrollView>
        </View>
      )
  }
}

export default Register;
