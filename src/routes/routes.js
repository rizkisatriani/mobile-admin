import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.js';
import Register from '../screens/Register.js';
import MenuUtama from '../screens/MenuUtama.js';
import PeminjamanBuku from '../screens/PeminjamanBuku.js';
import Riwayat from '../screens/Riwayat.js';
import DetilList from '../screens/DetilList.js';
import ListRequest from '../screens/ListRequest.js';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>  
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="MenuUtama" component={MenuUtama} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Riwayat" component={Riwayat} />
        <Stack.Screen options={{ headerShown: false }} name="DetilList" component={DetilList} />
        <Stack.Screen options={{ headerShown: false }} name="PeminjamanBuku" component={PeminjamanBuku} />
        <Stack.Screen options={{ headerShown: false }} name="ListRequest" component={ListRequest} />
    </Stack.Navigator>
    );
  }
  