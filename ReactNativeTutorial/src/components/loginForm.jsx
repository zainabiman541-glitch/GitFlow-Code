import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState}from 'react'
import { Button } from 'react-native/types_generated/index'

const LoginForm = () => {
    const [email, setEmail]= useState('')
     const [password,setPassword ]= useState('')
     const handleLogin=()=>{
        console.log('Email:' ,email)
        console.log('Password:' ,password)
        setEmail('')
        setPassword('')
        
     }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>login</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#aaa'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='#aaa'
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={handleLogin} activeOpacity={0.7} >
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingTop: 40,
        backgroundColor:'#1E1E2C'
    },
    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign:'center',
        color:'#F9F9F9',
        letterSpacing: 1,
    },
    input:{
        height: 55,
        borderColor: '#3A3A5A',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius:12,
        backgroundColor: '#2A2A3C',
        color: '#fff',
        fontSize:16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    Button:{
        backgroundColor:'#FF6B6B',
        paddingVertical: 15,
        alignItems:'center',
        borderRadius:12,
        backgroundColor: '#FF6B6B',
        marginTop: 10,
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,

    },
    buttonText:{
        fontSize: 18,
        fontStyle:'italic',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    }
})
export default LoginForm