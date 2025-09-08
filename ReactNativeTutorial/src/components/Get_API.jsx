import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect , useState } from 'react'
import axios from 'axios';

const Get_API = () => {
  const [myData, setMyData] = useState([])  

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users') 
      .then((result) => {
        setMyData(result.data)   
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={myData}
        keyExtractor={(item) => item.id}  
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
            <Text style={{ fontSize: 14, color: 'blue', marginBottom: 5 }}>
              FETCH FROM API
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default Get_API
