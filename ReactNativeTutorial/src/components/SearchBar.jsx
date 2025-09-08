import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'

const SearchBar = () => {
    const [searchQuerry, setSearchQuerry]= useState('')
const handlePress = (name) => {
    if (name) {
        Alert.alert('Found!!', `Your contact ${name} was found`)
    } 
    else {
          Alert.alert('Not Found', 'No contact selected')
    }
}

    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>handlePress(item.name)}>
                <View style={style.contactItem}>
                <Text style={style.conatctName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
             
        )
       
    }
    const contacts=[
        {id: 1, name: 'Zainab'},
        {id: 2, name: 'Esha'},
        {id: 3, name: 'Maham'},
        {id: 4, name: 'Ujala'},
        {id: 5, name: 'Malaika'},
    ]
    const filteredContacts= contacts.filter(contact=>(
        contact.name.toLowerCase().includes(searchQuerry.toLowerCase())
    ))
  return (
    <View style={style.container}>
     <Text style={style.title}>SearchBar</Text>
      <TextInput
        style={style.searchBar}
         placeholder='Search Contacts'
         value={searchQuerry}
         onChangeText={setSearchQuerry}
         placeholderTextColor='rgba(255, 255, 255, 0.11)'
      />
      <FlatList
         data={filteredContacts}
         renderItem={renderItem}
         keyExtractor={item=> item.id}
         contentContainerStyle={style.listContainer}
      />
        </View>
  )
}

export default SearchBar
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#10010188',
        padding: 20
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color: '#00060bff',
        marginBottom: 20,
        textAlign: 'center'
    },
    searchBar:{
        height:40,
        borderColor:'#90caf973',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 8,
        marginBottom: 20,
        backgroundColor:'#fff'
    },
    listContainer:{
        paddingBottom: 20
    },
    contactItem:{
        padding: 15,
        backgroundColor: '#250202ff',
        borderRadius: 15,
        marginBottom:10,
        shadowColor:'black',
        shadowOffset:{width: 0 , height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation:3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    conatctName:{
        fontSize:18,
        color: "#fff"
    }
})

