import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
  // Background and remote images
  const background = { uri: 'https://i.pinimg.com/1200x/1e/22/55/1e2255458f5cd104bb28f91d66ef5bec.jpg' };
  const remote = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

  return (
    <ImageBackground source={background} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.txt}>ImageComponent</Text>
        <Image source={remote} style={styles.image} resizeMode="contain" />
      </View>
    </ImageBackground>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fill the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',            // Ensure full width
    height: '100%',           // Ensure full height
  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 10,
    alignItems: 'center',
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});
