import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Forgotpassword = ({navigation}) => {
    const [newPassword, setNewPassword] = useState('')
    const [comPassword, setcomPassword] = useState('')
  return (
    <View style={style.container}>
        <View style={style.box}>
            <Text style={style.header}>Reset Password</Text>
            <TextInput
                style={style.input}
                placeholder='Enter New Password'
                value={newPassword}
                onChangeText={setNewPassword}
                placeholderTextColor='#aaaaaac9'
            />
            <TextInput
                style={style.input}
                placeholder='Confirm Password'
                value={comPassword}
                onChangeText={setcomPassword}
                placeholderTextColor='#aaaaaac9'
            />
             <TouchableOpacity
                     style={style.button} 
                     onPress={()=>{
                        navigation.navigate('Congrats') }}
                    activeOpacity={0.7}
                    >
                      <Text style={style.buttonTxt}>Send</Text>
                  </TouchableOpacity>
            <View style={style.dividerContainer}>
                     <View style={style.divider} />
                       <Text style={style.orText}>OR</Text>
                     <View style={style.divider}/>
            </View>

            <View style={style.socialContainer}>
               <TouchableOpacity style={style.socialButton} onPress={() => alert("Login with Android")}>
                    <Text style={style.socialText}>Login with Android</Text>
               </TouchableOpacity>

               <TouchableOpacity style={style.socialButton} onPress={() => alert("Login with Google")}>
                    <Text style={style.socialText}>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

  )
}

export default Forgotpassword
const style=StyleSheet.create({
  container:{
       flex:1,
       justifyContent:'center',
       paddingHorizontal: 25,
       paddingTop: 40,
  }  ,
  box:{
      width: '102%',
      height: '75%',
       backgroundColor: '#8E7692', 
       borderRadius: 15,
       padding: 25,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.2,
       shadowRadius: 4,
       elevation: 6,
       marginBottom: 15
  },
  header:{
      textAlign:'center',
      marginBottom: 20,
      color:'#140E1C',
      fontSize: 20,
      fontWeight: 'bold'
  },
  button:{
       justifyContent:'center',
       backgroundColor: '#462037',
       padding: 15,
       alignItems:'center',
       borderRadius:10,
       marginTop: 10,
       marginHorizontal: 3,
       shadowOffset: { width: 0, height: 4 },
       shadowOpacity: 0.4,
       shadowRadius: 5,
       elevation: 6,
       marginBottom: 10,
      },
  buttonTxt:{
      color:'white',
      fontSize: 18,
      fontWeight: 'bold'
  },
  input:{
       height: 55,
        borderColor: '#3A3A5A',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius:12,
        backgroundColor: '#683A46',
        color: '#fff',
        fontSize:16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
  },
  dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
  },
  divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#333',
  },
  orText: {
       color: '#482A41',
       marginHorizontal: 10,
       fontSize: 14,
       fontWeight: '600',
       
      },
  forgotContainer:{
          width: '100%',       
          textAlign:'right',
          marginTop: 5,
      },
  forgotPassword:{
      color:'#482A41',
      fontSize: 14,
      fontWeight: '600', 
      marginTop: 5,
      textAlign: 'right'

  },
  fbContainer:{
          width: '100%',       
          textAlign:'center',
          marginTop: 5,
      },
  fbLogin:{
      color:'#482A41',
      fontSize: 14,
      fontWeight: '600', 
      marginTop: 5,
      textAlign: 'center'

  },
  signupContainer: {
      position: 'absolute',
      bottom: 30,      
      left: 0,
      right: 0,
      alignItems: 'center', 
},
signupText: {
     fontSize: 13,
     color: '#482A41',
     textAlign: 'center',
},
signupContainer: {
     position: 'absolute',
     bottom: 30,
     left: 0,
     right: 0,
     justifyContent: 'center',
     alignItems: 'center',
},
signupText: {
     fontSize: 13,
     color: '#482A41',
},
signupLink: {
  fontSize: 13,
  color: '#482A41',
  fontWeight: '600',
},
socialContainer: {
  marginTop: 20,
  alignItems: "center",
},

socialButton: {
  width: "80%",
  padding: 12,
  marginVertical: 8,
  backgroundColor: "#8E7692", 
  borderColor:'black',
  borderwidth:'3',
  borderRadius: 10,
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3, 
},

socialText: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#fff",
},
    })