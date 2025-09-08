import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, {useState} from 'react'


const Login = ({navigation}) => {
    const [email, setEmail]= useState('')
     const [password, setpassword]= useState('')
     return (
    <View style={style.container}>
      <View style={style.box}>
      <StatusBar
         hidden={true}
      />
      <Text style={style.header} >LogIn</Text>
      
      <TextInput
         style={style.input}
         placeholder="Phone number, username, or email"
         onChangeText={setEmail}
         value={email}
         placeholderTextColor='#aaaaaac9'
      />
      
    
     <TextInput
        style={style.input}
        placeholder="Password"
        onChangeText={setpassword}
        value={password}
        placeholderTextColor="#aaaaaac9"
        secureTextEntry
     />  
    <View style={style.forgotContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={style.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
     </View>

      
      <TouchableOpacity
         style={style.button} 
         onPress={()=>{
             if(!email||!password)
            {
                 alert('Please fill all fields before proceeding!')
           }
           else
            {
           navigation.navigate('About')
            }
            setEmail('')
            setpassword('')}}
        activeOpacity={0.7}
        >
          <Text style={style.buttonTxt}>Login</Text>
      </TouchableOpacity>
      
      <View style={style.dividerContainer}>
         <View style={style.divider} />
           <Text style={style.orText}>OR</Text>
         <View style={style.divider} />
      </View>

      <View style={style.fbContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={style.fbLogin}>Log in with facebook</Text>
      </TouchableOpacity>
     </View>
         
         <View style={style.signupContainer}>
             <Text style={style.signupText}>Do You Have an Account?</Text>
             <Text
                style={style.signupLink}
                onPress={()=> navigation.navigate('SignUp')}
             >
              {''}Sign Up
              </Text>
         </View>
       </View>
      </View>
  )
}
const style=StyleSheet.create({
  container:{
       flex:1,
       justifyContent:'center',
       paddingHorizontal: 25,
       paddingTop: 40,
       backgroundColor:'#461D3A'
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
    })

export default Login