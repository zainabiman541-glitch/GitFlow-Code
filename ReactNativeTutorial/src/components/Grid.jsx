import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'


const data =[
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
        {ID: 11 , Title: 'Item 11'},
        {ID: 12 , Title: 'Item 12'},
        {ID: 13 , Title: 'Item 13'},
        {ID: 14 , Title: 'Item 14'}
]

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
         {
             data.map((item)=>(<View key={item.ID} style={styles.gridItem}>
                <Text style={styles.itemText}>{item.Title}</Text>
             </View>))
         }
        </ScrollView> 
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        fkex:1,
        backgroundColor:'#5F9E80',
    },
   heading: {
         backgroundColor: '#D9EAD3',
         borderRadius: 8,
         padding: 12,
         marginVertical: 20,
         marginTop: 55,
         width: '90%',
         alignSelf: 'center',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         fontSize: 20,
         fontWeight: 'bold',
         color: '#2E2E38',
         textAlign: 'center',
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        flexWrap: 'wrap'
    },
    gridItem:{
        backgroundColor: '#1E1E2C',
        padding:20,
        marginBottom:10,
        width: '48%',
        borderRadius: 8,
        height: '100'
    },
    itemText:{
        textAlign:'center',
        color: 'white',
        fsz: 30,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        padding: 20
    }
})

export default Grid
