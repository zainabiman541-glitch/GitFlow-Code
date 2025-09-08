import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressAble = () => {
    const handlePressIn=()=>{
        console.log('On press In')
    }
    const handlePressOut=()=>{
        console.log('On press Out')
    }
    const handlLongPress=()=>{
        console.log('Long Press')
    }
  return (
    <View style={style.container}>
      <Pressable style={style.button} onPressIn={handlePressIn} onPressOut={handlePressOut} onLongPress={handlLongPress} delayLongPress={5000}>
        <Text style={style.buttonTxt}>Press Me</Text>
      </Pressable>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#f9f9f990'
    },
    button:{
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(117, 0, 119, 0.73)',
    },
    buttonTxt:{
       fontSize: 19,
       color: '#fff'
    }
})

export default PressAble