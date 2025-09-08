import { View, Text, Button ,TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'


const StyleWithButton = () => {
  return (
    <View>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Touchable Opacity</Text>
        </TouchableOpacity>
    <Button title='Press me'/>
    <TouchableHighlight style={styles.button} underlayColor={'#3A1078'} onPress={()=>{
        console.log('Hello')
    }} >
        <Text style={styles.buttonText}>Touchable Highlight</Text>
    </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
    button:{
        margin: 20,
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 8,
        elevation: 5
    },
    buttonText:{
        colour: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default StyleWithButton