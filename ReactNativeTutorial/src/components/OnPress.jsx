import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const OnPress = () => {
    const [message, setMessage]= useState("OnPress");
    const handlePress=()=>{
           setMessage("I DID IT!!!");
           console.warn()
    };
  return (
    <View
    style={{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }} >
      <Text style={{fontSize: 30, fontFamily:'serif' , color: 'black'}}>{message}</Text>
      <Button title='press here'  onPress={handlePress}/>
    </View>
  );
};

export default OnPress;