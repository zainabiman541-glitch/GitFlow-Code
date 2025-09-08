import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const First = () => {
  const [Name, setName]=useState('LET`S START!!!');
  const OnPress=()=>(
    setName(
      <View
         style={{
           flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
         }}
      >
     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'lightpink' }}>BEST OF LUCK BUDDY</Text>
     <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#016064' }}>KEEP SMILLIMG</Text> 
      <Text style={{ fontSize:20, fontWeight: 'bold', color: '#A1045A'}}>I AM HERE!</Text>
    </View>
    )
    
    
  )

    
  return (
    <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#48AAAD'
        }}
    >
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'purple' }}>{Name}</Text>
      <Button title='Press Here' onPress={OnPress}/>
     
    </View>
  )
}

export default First