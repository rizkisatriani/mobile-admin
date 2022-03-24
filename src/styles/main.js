import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
  inputRounded: {
    borderColor: '#C6C6C6',
    backgroundColor: "#ecf0f1",
    borderRadius: 30,
    borderWidth: 0.5,
    width: width / 1.2,
    margin: 8,
    padding: 10,
    paddingLeft: 25
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBorder: {
    padding:10,
    width: width / 1.5,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height / 25,
  },
  buttonBorderReverse: {
    padding:10,
    backgroundColor:'#fff',
    width: width / 1.5,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: height / 25,
  },
  headerView: { 
    flex:1,
    flexDirection:'row',
    backgroundColor: "#00a8ff",  
    borderBottomLeftRadius:45,
    borderBottomRightRadius:45,
    width: width ,   
    padding: 10, 
  },
  contentMainView: {   
    top:190,
    backgroundColor: "#f5f6fa",
    borderRadius: 30, 
    width: width  ,
    height: height, 
    position:'absolute', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 3, 
    flexDirection: "row",
    flex: 1,
    flexWrap: 'wrap'
  },
  avatarContainer: {  
    flexDirection: "row",
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: "#00a8ff",  
    borderBottomLeftRadius:45,
    borderBottomRightRadius:45,
    width: width ,  
    padding: 10, 
  }, 
  avatar: { 
    borderColor:'#f5f6fa',
    borderWidth:1,
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  buku: { 
    borderColor:'#f5f6fa',
    borderWidth:1,
    borderRadius: 15,
    width: 100,
    height: 150,
  },
  text:{
    color: '#2c3e50', 
    paddingTop: 5,
    fontSize: 12,
  }
});