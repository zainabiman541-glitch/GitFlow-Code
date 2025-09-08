import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Congrats = ({navigation}) => {
  // const {username , age}=props.route.params
  // const {email}=props.route.params
  return (
    <View style={style.container}>
      <View style={style.box}>
      <Text style={style.heading}>Congratulation!!!!!</Text>
      <Text style={style.txt}>
            "Your password has been successfully reset. You can now log in with your
             new password and continue enjoying the app without any interruption."
      </Text>
      </View>
       <TouchableOpacity style={style.startButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={style.startText}>Now logIn</Text>
       </TouchableOpacity>
    </View>
  )
}

export default Congrats

const style=StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#461D3A',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    box:{
       width: '85%',
       backgroundColor: '#7E2A53', 
       borderRadius: 15,
       padding: 25,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.2,
       shadowRadius: 4,
       elevation: 6,
       marginBottom: 15
    },
  heading:{
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
     fontStyle: 'italic'
  },
  txt:{
      fontSize: 15,
      color: '#f1f1f1',
      textAlign: 'center',
      marginBottom: 30,
      lineHeight: 22,
      fontFamily: 'serif',
      fontWeight:'400'
  },
  startButton: {
    backgroundColor: '#8E4970',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  startText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  }
})
