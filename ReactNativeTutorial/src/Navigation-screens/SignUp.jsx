import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'

const SignUp = ({navigation}) => {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setpassword]=useState('')
  const [confirmpass, setConfirmpass]=useState('')
  return (
    <View style={style.container}>
      <View style={style.box}>
         <Text style={style.header}>Sign Up</Text>
         <TextInput 
            style={style.input}
            placeholder='Full Name'
            value={name}
            onChangeText={setName}
            placeholderTextColor='#aaaaaac9'
         />
          <TextInput 
            style={style.input}
            placeholder='Email Address'
            value={email}
            onChangeText={setEmail}
            placeholderTextColor='#aaaaaac9'
         />
          <TextInput 
            style={style.input}
            placeholder='Password'
            value={password}
            onChangeText={setpassword}
            placeholderTextColor='#aaaaaac9'
         />
          <TextInput 
            style={style.input}
            placeholder='Confirm Password'
            value={confirmpass}
            onChangeText={setConfirmpass}
            placeholderTextColor='#aaaaaac9'
         />
         <TouchableOpacity style={style.button} onPress={()=>{
           
           if(!name||!email||!password||!confirmpass)
            {
                 alert('Please fill all fields before proceeding!')
           }
           else if(!password)
            {
                alert('Failed','Passwords do not match!')
           }
           else
            {
           navigation.navigate('About')
         }}}>
              <Text style={style.buttonTxt}> Create Account</Text>
         </TouchableOpacity>
          
          <View style={style.signupContainer}>
           <Text style={style.signupText}>Do You Have an Account?</Text>
                  <Text
                      style={style.signupLink}
                      onPress={()=> navigation.navigate('Login')}
                      >
                       {''}Log In
                  </Text>
          </View>
      </View>
    </View>
  )
}

export default SignUp
const style=StyleSheet.create({
  container:{
       flex:1,
       justifyContent:'center',
       paddingHorizontal: 25,
       paddingTop: 40,
       backgroundColor:'#461D3A'
  },
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
     marginTop: 10
},
signupLink: {
  fontSize: 13,
  color: '#482A41',
  fontWeight: '600',
},
})