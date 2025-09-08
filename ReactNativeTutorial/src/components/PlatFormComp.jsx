import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const PlatFormComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeTxt}>{
        Platform.OS === 'IOS' ? 'Welcome IOS User': 'Welcome Android User'
        }</Text>
      <Text style={styles.txt}>{
           Platform.select({
            android: 'You are Using Android Device!!',
            ios: 'You are Using IOS Device!!',
            macos: 'You are Using MACOS!!'
           })
        }</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Platform.select({
            ios: '#78ff3e',
            android: '#22ffc5',
            macos: '#22e2ffff'
        })
    },
    WelcomeTxt:{
         backgroundColor: '#ead3d3ff',
         borderRadius: 8,
         padding: 12,
         marginVertical: 20,
         marginTop: 55,
         width: '80%',
         alignSelf: 'center',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 20,
         fontWeight: 'bold',
         color: '#342e38ff',
         textAlign: 'center',
      },
      txt:{
        fontSize: 18,
        fontWeight:'bold',
        color:'#1f0707ff'
      }
})

export default PlatFormComp