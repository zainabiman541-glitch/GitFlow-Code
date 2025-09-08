import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Click = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click</Text>
    </View>
  )
}

export default Click

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2D2D44', // stylish dark purple-gray
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700', // golden yellow text
    letterSpacing: 1,
  },
})
