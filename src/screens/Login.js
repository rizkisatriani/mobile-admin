import React, { Component } from 'react';
import {  Alert,View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import DocumentPicker from 'react-native-document-picker';
import main from '../styles/main'
import axios from 'axios';
import { BASE_URL } from  '../constants/http.js';
import { getData } from '../helpers/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Eye from '../../assets/Eye.svg'
import EyeSlash from '../../assets/EyeSlash.svg'

export class Login extends Component {
  state = {
    nik: '',
    pass: '',
    securePass:true
  };
  
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
        console.log(e.response.data.message);
        Alert.alert("Informasi",e.response.data.message);
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
        <View style={[main.inputRounded,{margin:0,padding:0,paddingLeft:10, paddingRight:10 ,flexDirection:'row',alignItems:'center'}]}>
        <TextInput
          style={[main.inputPass,{flexDirection:'row',flex:1}]}
          placeholder="Password"
          onChangeText={pass => this.setState({ pass: pass })}
          secureTextEntry={this.state.securePass}
          defaultValue={this.state.pass}
        />
        <TouchableOpacity
        onPress={() => {
            let bool=this.state.securePass?false:true;
            this.setState({securePass: bool});
        }}>
        {this.state.securePass?
        <EyeSlash   style={[{flexDirection:'row',flex:1 }]}/>
        : 
        <Eye   style={[{flexDirection:'row',flex:1 }]}/>
        }
        </TouchableOpacity>
        </View>
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
