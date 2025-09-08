import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useGetPookemonByNameQuery } from '../services/pookemon';
;

export default function FetchPookemon() {
  const { data, error, isLoading } = useGetPookemonByNameQuery('Pikachu');

  return (
    <View style={styles.container}>
      {
      error ? (
        <Text style={styles.text}>Oh no, there was an error</Text>
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#666" />
      ) : data ? (
        <View style={styles.content}>
          <Text style={styles.title}>{data.species.name}</Text>
          <Image
            source={{ uri: data.sprites.front_shiny }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ) : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 16,
    color: 'red',
  },
});