import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Dimensions, Image } from 'react-native'
import main from '../styles/main'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const { height, width } = Dimensions.get('window');

export class MenuUtama extends Component {
    render() {
        return (
            <View style={[main.container, { backgroundColor: "#fff", justifyContent: 'flex-start', }]}>
                <StatusBar barStyle="dard-content" backgroundColor="#00a8ff" />
                <View style={main.headerView}>
                    <View style={main.avatarContainer}>
                        <Image
                            style={main.avatar}
                            source={{ uri: 'https://www.inpixio.com/remove-background/images/main-before.jpg' }}
                        />
                        <Text style={[{
                            color: '#fff',
                            padding: 15,
                            fontSize: 16,
                            fontWeight: 'bold'
                        }]}>Hi, User !</Text>
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

                </View>
            </View>)
    }
}

export default MenuUtama;
