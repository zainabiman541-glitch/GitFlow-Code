import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [UserName , setUserName]=useState('')
  return (
    <View>
      <Text 
         style={{
            fontSize:20 , 
            fontWeight :'bold', 
            color: 'purple'
            }}>
                UserName: {UserName}
      </Text>
      <TextInput 
         style={{
            fontSize: 20,
            borderWidth: 2 , 
            borderColor: 'green', 
            margin: 10 
        }} 
            value ={UserName} 
            placeholder='Enter your UserName' 
            onChangeText={(value)=>{setUserName(value)

            }}/>
      <Button title='Clear' onPress={()=>setUserName('')}/>
    </View>
  )
}


export default InputText