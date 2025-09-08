import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  // const {username , age}=props.route.params
  // const {email}=props.route.params
  return (
    <View style={style.container}>
      <View style={style.box}>
      <Text style={style.heading}>WELCOME BACK!!!!!</Text>
      <Text style={style.txt}>
            Welcome back! We are so happy to have you
            here. It's great to see you again. We hope you. It`s a great to see you again
             we hope you had a safe and enjoyable time away.
      </Text>
      </View>
       <TouchableOpacity style={style.startButton} 
          onPress={() => navigation.navigate('DrawerNavigator')}
        >
          <Text style={style.startText}>Let's Start!!</Text>
       </TouchableOpacity>
    </View>
  )
}

export default About

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
