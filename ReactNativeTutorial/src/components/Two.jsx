import { View, Text, Button } from 'react-native'
import React from 'react'
import {useCreateStore} from '../Zustand/ZustandStore.js'

const Two = () => {
    const {count, increment, decrement}=useCreateStore()
  return (
    <View > 
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Counter: {count}</Text>
      <Button title='Increment' onPress={increment}/>
       <Button title='Decrement' onPress={decrement}/>
    </View>
  )
}

export default Two