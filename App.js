import React from 'react'; 
import MyStack from './src/routes/routes.js'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}