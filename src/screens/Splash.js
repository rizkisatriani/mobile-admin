import React, { Component } from 'react'
import { View, Text, Image,StatusBar} from 'react-native'
import splash from '../styles/splash'
import SafeAreaView from 'react-native-safe-area-view'; 
import { getData } from '../helpers/storage'
import { BASE_URL } from '../constants/http.js';

export class Splash extends Component {
    componentDidMount(){   
        setTimeout(()=>{   
          getData('setuju').then((data) => {
            if(!data){
              this.props.navigation.replace('Perjanjian');
            }else{
              getData('user').then((data) => {
                  if(data){
                    this.props.navigation.replace('MenuUtama'); 
                  }  else {
                    this.props.navigation.replace('Login'); 
                  } 
                })
            }
            })
        }, 3000);  
       }  

       getData = async (key) => {
        try { 
          const jsonValue = await AsyncStorage.getItem(key) 
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value 
          console.log(e)
           this.props.navigation.navigate('Intro'); 
        }
      }
    render() {
        return (
            <SafeAreaView style={{backgroundColor: "#fff"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View style={[splash.container]}>  
                
                    <Image
                    style={{
                        width: 180,
                        height: 150,
                      }}
                    source={{uri: `${BASE_URL}/perpus.png`}}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Splash
