
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
    try { 
      const jsonValue = await AsyncStorage.getItem(key) 
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value 
      console.log(e) 
    } 
  }

  const removeData = async (key) => {
    try { 
       await AsyncStorage.removeItem(key) 
      return true;
    } catch(e) {
      // error reading value 
      console.log(e) 
    } 
  }
const  clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
  export {
    getData,
    clearAsyncStorage,
    removeData
  };