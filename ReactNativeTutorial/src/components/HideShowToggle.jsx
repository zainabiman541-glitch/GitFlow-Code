import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Click from './Click.jsx'

const HideShowToggle = () => {
  const [status, setStatus] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Hide / Show Toggle </Text>

      <View style={styles.card}>
        {status ? (
          <Click />
        ) : (
          <Text style={styles.hiddenText}> Nothing to show </Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.hideBtn]} 
          onPress={() => setStatus(false)}>
          <Text style={styles.btnText}>Hide</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.showBtn]} 
          onPress={() => setStatus(true)}>
          <Text style={styles.btnText}>Show</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.toggleBtn]} 
          onPress={() => setStatus(!status)}>
          <Text style={styles.btnText}>Toggle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HideShowToggle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1B1B2F', // deep navy dark
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 25,
    color: '#FFB400', // golden sunshine
    letterSpacing: 1.2,
    textShadowColor: '#FF69B4', // pink glow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  card: {
    width: '90%',
    minHeight: 130,
    backgroundColor: '#2D2D44', // stylish deep purple-gray
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 6,
  },
  hiddenText: {
    color: '#BBBBFF',
    fontSize: 18,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '85%',
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  hideBtn: {
    backgroundColor: '#FF4E50', // vibrant coral red
  },
  showBtn: {
    backgroundColor: '#21D4FD', // bright sky blue
  },
  toggleBtn: {
    backgroundColor: '#A26BF8', // magical purple
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
})