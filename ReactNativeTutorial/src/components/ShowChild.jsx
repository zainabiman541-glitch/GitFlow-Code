import { View, Text } from 'react-native'
import React , {useEffect } from 'react'

const ShowChild = () => {
    useEffect(()=>{
       return( console.log('I am a child Component'))
    })
  return (
    <View>
      <Text>ShowChild</Text>
    </View>
  )
}

export default ShowChild