import { View, Text, SectionList, StyleSheet} from 'react-native'
import React from 'react'

const SectionsData=[
    {
        title: 'Fruits',
        data:[
            {ID:1 , Item:'Apple'},
            {ID:2 , Item:'banana'},
            {ID:3 , Item:'orange'},
            {ID:4 , Item:'kiwi'},
        ]
    },
    {
        title: 'Vegetables',
        data:[
            {ID:5 , Item:'Potato'},
            {ID:6 , Item:'Tomato'},
            {ID:7 , Item:'Bringle'},
            {ID:8 , Item:'Pumpkin'},
        ]
    }
]
const SectionlistScreen = () => {
    const renderItem=({item})=>(
        <View style={styles.item}>
           <Text style={styles.title}>{item.Item}</Text>
        </View>
    )
    const renderSection=({section})=>(
        <View style={styles.header}>
           <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
      <SectionList
          sections={SectionsData}
          renderItem={renderItem}
          renderSectionHeader={renderSection}
          keyExtractor={(item)=>item.ID}
      />
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop: 15

    },
    item: {
        backgroundColor: '#4806464f', 
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
    },
    title:{
        fontSize:18,
        fontStyle:'italic'
    },
    header: {
        backgroundColor: '#85d1deff', 
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    headerTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

export default SectionlistScreen