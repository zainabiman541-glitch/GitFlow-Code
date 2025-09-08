import { View, Text,  TextInput, Button, Alert } from 'react-native'
import React,{useState}  from 'react'
import axios from 'axios'


const DELETE_API = () => {
    const [id, setId]=useState({id:'', name: '', email: ''})
    const handleDelete=async()=>{
        try{
         const response= await axios.delete(`http://10.0.2.2:3000/students/${id}`,
            
         )
          Alert.alert('Sucess!','Data Submitted Successfully')
          setId('')
        }
        catch(error){
            Alert.alert('Failed','Failed to PutData')
        }
    }
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
        >DELETE_API</Text>
        <TextInput
            placeholder='Enter Id'
            onChangeText={(value)=>{setId(value)}}
            value={id}

            style={{
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                marginBottom: 15,
                fontSize: 16,
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 5,
                elevation: 2, 
            }}
        />

      <Button title='Press Here' onPress={handleDelete}/>
    </View>
  )
}

export default DELETE_API