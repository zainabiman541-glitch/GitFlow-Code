import { View, Text, Button } from 'react-native'
import React from 'react'

const Countermemo = ({onPress, renders}) => {
  return (
    <View>
      <Text>Countermemo rendered {renders}</Text>
      <Button title='Increment' onPress={onPress}/>
    </View>
  )
}

export default React.memo(Countermemo)