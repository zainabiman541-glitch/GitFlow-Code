import { View, Text, Button } from 'react-native'
import Child from './Child'
import React, { useState } from 'react'

const Props = () => {
  const [count , setCount]=useState(0)
  const [Item , setItem]=useState(10)
  return (
    <View
        //  style={{
        //   flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: '#48AAAD'
        // }}
    >
      <Text style={{fontSize:30 , fontWeight :' bold', colour: 'black'}}>Props</Text>
      <Button title='Counter' onPress={()=>{setCount(count+1)}}/>
        <Button title='Item' onPress={()=>{setItem(Item*10)}}/>
      <Child data={count} Item={Item}/>
      
    </View>
  )
}

export default Props