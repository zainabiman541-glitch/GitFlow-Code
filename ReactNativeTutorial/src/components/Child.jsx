import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  let count=props.data
  let Items=props.Item
  return (
    <View>
      <Text style={{fontSize:20 , fontWeight :' bold', colour: 'black'}}>Child</Text>
      <Text style={{fontSize:20 , fontWeight :' bold', colour: 'black'}}>{count}</Text>
      <Text style={{fontSize:20 , fontWeight :' bold', colour: 'black'}}>{Items}</Text>

    </View>
  )
}

export default Child