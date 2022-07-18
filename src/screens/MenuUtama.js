import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Dimensions, Image } from 'react-native'
import main from '../styles/main'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook,faHistory,faCalendarPlus,faCalendarCheck,faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { getData,removeData } from '../helpers/storage'
import { ScrollView } from 'react-native-gesture-handler';
import { BASE_URL } from '../constants/http.js';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window');

export class MenuUtama extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [], 
        };
    }
    getFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          })   
          const URL =BASE_URL + "/api/changeAvatar"; 
    
        let data = new FormData();
        data.append('id', this.state.user.id);
        data.append('avatar', res); 
    
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
          async(response) => {
            let temp_user=this.state.user;
            temp_user.avatar=response.data.url;
            this.setState({user:temp_user})
            await AsyncStorage.setItem("user",JSON.stringify(temp_user) )
            console.log('image upload response > ', response.data)
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
        getData('user').then((user) => {
            console.log(user);
            this.setState({user});
            console.log(BASE_URL+this.state.user.avatar);
        })

    }
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <StatusBar barStyle="dard-content" backgroundColor="#00a8ff" />
                <View style={main.headerView}>
                    <View style={main.avatarContainer}>
                    <TouchableOpacity  
                        onPress={()=>{ 
                            this.getFile()
                        }}>
                        <Image
                            style={main.avatar}
                            source={{ uri: BASE_URL+this.state.user.avatar+"?time=" + new Date() }}
                        /> 
                        </TouchableOpacity>
                        <Text style={[{
                            color: '#fff',
                            padding: 15,
                            width:140 ,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }]}>Hi, {this.state.user.name} !</Text> 
                        
                        <TouchableOpacity  
                        onPress={()=>{ 
                            removeData('user').then(() => {
                                this.props.navigation.replace('Login');
                            });
                        }}
                        style={{
                            flex: 1,
                            backgroundColor: "#f39c12", 
                            margin: 10, 
                            height:50, 
                            width:40 ,
                            elevation: 1,
                            justifyContent: 'center',
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                            flexDirection: 'row',  
                            borderRadius: 40, 
                        }}>
                        <FontAwesomeIcon icon={faPowerOff} color="#fff" secondaryColor="#95a5a6" size={20} />
                        <Text style={[{
                            color: '#fff',
                            padding:  5,
                            fontSize: 14, 
                            fontWeight: 'bold'
                        }]}>Log Out </Text>
                        </TouchableOpacity>
                        <Text style={[{ 
                            color: '#fff',
                            padding: 15,
                            fontSize: 18,
                            fontWeight: 'bold'
                        }]}>Selamat datang di mobile perpustakaan GGPC</Text>
                    </View> 
                </View>
                <View style={main.contentMainView}>
                    <Text style={[{
                        color: '#000',
                        padding: 25,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }]}>Menu Perpustakaan GGPC</Text>
                    
                <ScrollView > 
                    <View  style={{ 
                        width: width ,  
                        height: 900,
                        flexDirection: "row",
                        flex: 1,
                        flexWrap: 'wrap',
                    }}>
                    {this.state.user.level===2?
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                        onPress={() => {
                            this.props.navigation.navigate('ListRequest', { type: 'anggota' });
                        }}>
                        <FontAwesomeIcon icon={faBook} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>User Register</Text>
                    </TouchableOpacity>
                    :null} 
                    {this.state.user.level===2?
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => { 
                        this.props.navigation.navigate('ListRequest', { type: 'pinjam' });
                    }}>
                        <FontAwesomeIcon icon={faCalendarPlus} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Peminjaman Buku</Text>
                    </TouchableOpacity>   
                    :null}  
                    {this.state.user.level===2?
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('ListRequest', { type: 'kembali' });
                    }}>
                        <FontAwesomeIcon icon={faCalendarCheck} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Pengembalian Buku</Text>
                    </TouchableOpacity>   
                      :null}   
                    {this.state.user.level===2?
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('ListRequest', { type: 'perpanjang' });
                    }}>
                        <FontAwesomeIcon icon={faCalendarCheck} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Perpanjang Buku</Text>
                    </TouchableOpacity>   
                      :null}   
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('Riwayat');
                    }}>
                        <FontAwesomeIcon icon={faHistory} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Riwayat peminjaman</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                        onPress={() => {
                            this.props.navigation.navigate('PeminjamanBuku');
                        }}>
                        <FontAwesomeIcon icon={faBook} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Pinjam Buku</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('Pengembalian');
                    }}>
                        <FontAwesomeIcon icon={faCalendarCheck} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Kembalikan Buku</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={{
                        backgroundColor: "#ecf0f1", margin: 10, height: 150, width: width / 2.3,
                        elevation: 3,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    onPress={() => {
                        this.props.navigation.navigate('RequestBuku');
                    }}>
                        <FontAwesomeIcon icon={faHistory} color="#34495e" secondaryColor="#95a5a6" size={52} />
                        <Text style={[{
                            color: '#2c3e50',
                            paddingBottom: 15,
                            paddingTop: 15,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }]}>Request buku</Text>
                    </TouchableOpacity>  
                    </View>
                     </ScrollView>
                </View>
            </View>)
    }
}

export default MenuUtama;
