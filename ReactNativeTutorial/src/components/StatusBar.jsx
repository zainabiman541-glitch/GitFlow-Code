import { View, Text ,StatusBar, StyleSheet} from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"
      // backgroundColor="#6200FE",
       backgroundColor="rgba(0,0,0,0.2)"
       hidden={false}
       translucent={false}
       />
      <Text style={styles.text}>
        Custom StatusBar Example </Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#ef009bff'
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic'
  }
})

export default StatusBarExample