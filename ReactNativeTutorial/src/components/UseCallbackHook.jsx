import { View, Text ,Button} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Countermemo from './Countermemo'

const UseCallbackHook = () => {
  const [count, setCount]=useState(0)
  const [renders, setRenders]=useState(0)
  const handlePress =useCallback(()=>{
    setCount((count)=>count+1)
  })

  useEffect(()=>{
    setRenders((render)=>render+1)
  },[count])
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title=" Counter " onPress={handlePress}/>
      <Countermemo onPress={handlePress} renders={renders}/>
    </View>
  )
}

export default UseCallbackHook