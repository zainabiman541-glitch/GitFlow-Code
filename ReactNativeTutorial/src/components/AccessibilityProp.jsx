import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function AccessibilityProp() {
  return (
    <View style={styles.container}>

      {/* Heading jo screen reader ko header lage */}
      <Text
        accessible={true} // screen reader ko visible
        accessibilityRole="header" // yeh header hai
        accessibilityLabel="Welcome screen heading"
      >
        Welcome
      </Text>

      {/* Image with alt text */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        accessible={true}
        accessibilityRole="image" // yeh image hai
        accessibilityLabel="React Native logo image"
      />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        accessible={false} // yeh screen reader par show ho ga
        accessibilityRole="button" // role button hai
        accessibilityLabel="Form submit karne ka button"
        accessibilityHint="Is button ko dabane se form submit ho ga"
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    margin: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
