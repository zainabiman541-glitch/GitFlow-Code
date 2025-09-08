import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Loader = () => {
    const [loading,setloading]=useState(false)
    const ToogleLoader=()=>{
      setloading(!loading)
    }
  return (
    <View style={styles.container}> 
     {/* <ActivityIndicator color='rgba(49, 168, 109, 1)' size='large'/> */}
     <TouchableOpacity style={styles.button} onPress={ToogleLoader}>
        <Text style={styles.buttontext}>{loading? 'Hide Loader':'show Loader'}</Text>
     </TouchableOpacity>
     {
      loading && (
       <View style={styles.loaderContainer}>
          <ActivityIndicator color='rgba(168, 49, 128, 1)' size='large'/>
          <Text style={styles.loadingTxt}> Loading.....</Text>
       </View>
      )
     }
     
    </View>
  )
}

export default Loader
const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#5F9E80'
  },
  button:{
    paddingVertical:12,
    padding: 20,
    backgroundColor: '#071b45ff',
    borderRadius: 10,
    marginBottom:10
  },
  buttontext:{
    color:'#fff',
    fontSize: 18,
    fontWeight:'bold'
  },
  loaderContainer:{
    width: 120,
    height:120,
    backgroundColor: '#78e3fe5a',
    borderRadius: 12,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: 'rgba(211, 223, 248, 0.53)',
    elevation: 8,
  },
  loadingTxt:{
    marginTop: 10,
    fontSize:16,
    backgroundColor:'rgba(15, 217, 248, 0.53)',
    fontWeight: 600
  }
})