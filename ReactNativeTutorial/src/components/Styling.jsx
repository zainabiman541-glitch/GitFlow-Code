import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import style from './style/style'
const Styling = () => {
  return (
    <View>
      {/* <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 'bold', color: 'black', backgroundColor: '#48AAAD' }}>
        Inline Styling
      </Text> */}
      <Text style={styles.text}>Inline Styling</Text>
      <Text style={styles.text}>Internal Styling</Text>
      <Text style={style.text}>External Styling</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    backgroundColor: '#00302f',
    color: 'white',
    fontStyle: 'italic',
    marginVertical: 10,
    padding: 6,
    fontSize: 30,
    textAlign: 'center',
    borderColor: '#48AAAD',
    borderWidth: 6,
  },
})

export default Styling
