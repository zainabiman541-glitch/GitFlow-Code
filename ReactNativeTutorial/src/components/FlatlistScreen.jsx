import { View, Text, FlatList, StyleSheet} from 'react-native'
import React from 'react'
const data=[
        {ID: 1 , Title: 'Item 1'},
        {ID: 2 , Title: 'Item 2'},
        {ID: 3 , Title: 'Item 3'},
        {ID: 4 , Title: 'Item 4'},
        {ID: 5 , Title: 'Item 5'},
        {ID: 6 , Title: 'Item 6'},
        {ID: 7 , Title: 'Item 7'},
        {ID: 8 , Title: 'Item 8'},
        {ID: 9 , Title: 'Item 9'},
        {ID: 10 , Title: 'Item 10'},
        ]
const FlatlistScreen = () => {
    const renderItem=({item})=>(
        <View style={styles.item}>
            <Text style={styles.title}>{item.Title}</Text>
        </View>
    )
        
        
  return (
    <View style={styles.container}>
      <FlatList 
          data={data}
          renderItem={renderItem}
          keyExtractor={item=> item.ID}
          contentContainerStyle={styles.list}
      />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'',
        paddingTop: 12
    },
    list:{
        paddingHorizontal: 20
    },
    item:{
        backgroundColor:'#008c8b',
        borderWidth:6,
        borderColor:'#2ebab8',
        padding:20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor:'#5cc9c8',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title:{
        color: 'black',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize: 18,
        alignItems: 'center'
    }
})

export default FlatlistScreen