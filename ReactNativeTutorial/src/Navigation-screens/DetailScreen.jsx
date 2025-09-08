import React from 'react';
import { View, Text, Image, ActivityIndicator , StyleSheet, Button} from 'react-native';
import {  useGetPokemonDetailQuery } from '../services/apiMutation';

export default function DetailScreen({ route }) {
  const { name } = route.params; 
  const { data, isLoading, error }= useGetPokemonDetailQuery(name);

  return (
    <View style={styles.container}>
        
      {isLoading && <ActivityIndicator size="large" />}
      {error && <Text>Error loading detail</Text>}
      {data && (
        <View>
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Image
            source={{ uri: data.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.points}>Height:</Text>
          <Text style={styles.value}>{data.height} </Text>
          <Text style={styles.points}>Weight: </Text>
          <Text style={styles.value}>{data.weight} </Text>

          <Text style={styles.points}>Abilities:</Text>
          {data.abilities.map((a) => (
            <Text key={a.ability.name} style={styles.item}>• {a.ability.name}</Text>
          ))}

          <Text style={styles.points}>Types:</Text>
          {data.types.map((t) => (
            <Text key={t.type.name} style={styles.item}>• {t.type.name}</Text>
          ))}

          <Text style={styles.points}>Stats:</Text>
          {data.stats.map((s) => (
            <Text key={s.stat.name} style={styles.item}>
              {s.stat.name}: {s.base_stat}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#765D67',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  points:{
     fontSize: 15,
     fontWeight:'bold',
     backgroundColor: '#664F42',
     padding: 4,
     borderRadius: 6,
     marginHorizontal:12,
     paddingHorizontal:12,
     marginBottom:3
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: 16,
  },
  value: {
    fontWeight: 600,
    marginHorizontal: 20
    
  },
  item: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 600,
    marginHorizontal: 20
  },
});

