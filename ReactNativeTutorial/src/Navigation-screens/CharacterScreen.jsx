import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useGetPokemonListMutation, } from '../services/apiMutation';

export default function CharacterScreen({navigation}) {
  const [getList, { data, isLoading, error }] = useGetPokemonListMutation();
//   const [getDetail, { data: detail, isLoading: detailLoading}] = useGetPookemonDetailQuery();
  

     return (
        <View style={style.container}>
                <TouchableOpacity onPress={()=>getList(100)} style={style.button}>
                    <Text style={style.txt} >Press</Text>
                </TouchableOpacity>
                {isLoading && <ActivityIndicator />}
                {error && <Text>Error loading Pokémon</Text>}
                {data && (
                 <FlatList
                    data={data.results}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>handlePress(item.name)} style={style.list}>
                            <Text  onPress={()=>navigation.navigate('detail',{ name: item.name })} style={style.listtxt}>
                             {item.name}
                             </Text>
                        </TouchableOpacity>
                )}
                />
                )} 
        </View>
    );
}

const style= StyleSheet.create({
container: {
        flex: 1,
        backgroundColor: '#765D67',    
        padding: 16,
    },
    button: {
        backgroundColor: '#664F42',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 12,

    },
    txt: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
    },
    list: {
        marginTop: 5,
        marginBottom: 5,
    },
    listtxt: {
        fontSize: 20,
        color: '#33333',
        borderRadius: 8,
        padding:8,
        backgroundColor: '#A19B8C',
        marginHorizontal: 20,
        textAlign: 'center'

    },
})



