import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from './Parentcomp'

const SubChild = () => {
    const {count, increamentCount}= useContext(CounterContext)
  return (
    <View style={style.conatiner}>
      <Text style={style.txt}>Counter: {count}</Text>
       <Button title='Counter'onPress={increamentCount} />
    </View>
  )
}

export default SubChild

const style= StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    txt:{
        fsz: 20,
        marginBottom: 10
    }
})