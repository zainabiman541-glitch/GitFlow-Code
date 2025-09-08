import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const GET_API_LIST = () => {
    const [myData, setMyData]= useState([])
    const renderItem=({item})=>(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
        </View>
    )
    useEffect(()=>{
        axios.get('http://10.0.2.2:3000/students').then((response)=>{
            setMyData(response.data)
        })
    })
  return (
    <View 
       style={{
         flex: 1,
         padding: 20,
         justifyContent: 'center',
         backgroundColor: '#f5f7fa', 
       }}
    >
      <Text
        style={{
           fontSize: 26,
           fontWeight: 'bold',
           marginBottom: 30,
           textAlign: 'center',
           color: '#333',
        }}
      >USERS</Text>
      <FlatList
         data={myData}
         renderItems={renderItem}
         keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  )
}

export default GET_API_LIST