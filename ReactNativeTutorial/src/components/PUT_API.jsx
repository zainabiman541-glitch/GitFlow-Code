import { View, Text,  TextInput, Button, Alert } from 'react-native'
import React,{useState}  from 'react'
import axios from 'axios'


const PUT_API = () => {
    const [formData, setFormData]=useState({id:'', name: '', email: ''})
    const handleInput=(field, value)=>{
         setFormData({...formData, [field]:value})
    }
    const handleUpdate=async()=>{
        try{
         const response= await axios.put(`http://10.0.2.2:3000/students/${formData.id}`, {name: formData.name , email: formData.email})
          Alert.alert('Sucess!','Data Submitted Successfully')
          setFormData({id:'', name: '', email: ''})
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
        >PUT_API</Text>
        <TextInput
            placeholder='Enter Id'
            onChangeText={(value)=>{handleInput('id', value)}}
            value={formData.id}

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
        <TextInput
            placeholder='Enter Name'
            onChangeText={(value)=>{handleInput('name', value)}}
            value={formData.name}

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
      <TextInput
            placeholder='Enter Email'
            onChangeText={(value)=>{handleInput('email', value)}}
            keyboardType='email-address'
            value={formData.email}

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
      <Button title='Press Here' onPress={handleUpdate}/>
    </View>
  )
}

export default PUT_API