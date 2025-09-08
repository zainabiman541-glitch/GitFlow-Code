import { View, Text, TextInput, Alert,StyleSheet,  TouchableOpacity } from 'react-native'
import React ,{useState} from 'react'
import axios from 'axios'

const Post_API = () => {
    const [formData, setFormData]=useState({id:'', name: '', email: ''})
    const handleInput=(field, value)=>{
        setFormData({...formData,[field]: value})
    }
    const handlePress=async()=>{
        try{
            const response=await axios.post('http://10.0.2.2:3000/users',formData)
            Alert.alert('Sucess!','Data Submitted Successfully')
            setFormData({id:'', name: '', email: ''})
        }
        catch(error){
            Alert.alert('Error','Failed to Submit Data')
        }
        
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >POST_API</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Id'
        onChangeText={(value)=>{handleInput('id', value)}}
        value={formData.id}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Name'
         onChangeText={(value)=>{handleInput('name', value)}}
         value={formData.name}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Email'
         onChangeText={(value)=>{handleInput('email', value)}}
         keyboardType='email-address'
         value={formData.email}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f7fa', 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
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
  },
  button: {
    backgroundColor: '#007AFF', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
})

export default Post_API


// import { View, Text, TextInput, Button, Alert ,ScrollView,StyleSheet} from 'react-native'
// import React, { useState ,useEffect} from 'react'
// import axios from 'axios'

// const Api_Post = () => {
//     const [formdata,setformdata]=useState({Id:'',name:'',email:''})
//      const [mydata, setmydata] = useState([])
//     const handleinput=(feild,value)=>{
//         setformdata({...formdata,[feild]:value})
//     }
//      useEffect(() => {
//     axios.get('http://10.0.2.2:3000/students').then((result) => {
//         setmydata(result.data);
//       }).catch((err) => {
//         console.log("API Error:", err);
//       });
//   }, []);
//     const handlesubmit= async ()=>{
//         try{
//          const response= await axios.post('http://10.0.2.2:3000/students',formdata)
//          Alert.alert('Success!','Data Submitted Successfully');
//          setformdata({Id:'',name:'',email:''})
//         }catch(error){
//           Alert.alert('Error','Submitted Faild')
//         }
//     }
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:30,textAlign:'center',marginTop:10}}>Api_Post</Text>
//     <TextInput
//     style={styles.holder}
//      placeholder='Enter Id'
//      value={formdata.Id}
//      onChangeText={(value)=>handleinput('Id',value)}
//     />
//     <TextInput
//     style={styles.holder}
//      placeholder='Enter Name'
//       value={formdata.name}
//      onChangeText={(value)=>handleinput('name',value)}
//     />
//     <TextInput
//     style={styles.holder}
//      placeholder='Enter Email'
//       value={formdata.email}
//      onChangeText={(value)=>handleinput('email',value)}
//     />
//     <Button title='Submit' onPress={handlesubmit}/>
//     <ScrollView>
//           {
//           mydata.map((items) => (
//             <View>
//             <Text style={styles.nametext}>{items.Id}: {items.name}</Text>
//             <Text key={items.id}style={styles.mailtext}>{items.email}</Text>
//             </View>
//           ))
//           }
//           </ScrollView>
//     </View>
//   )
// }

// export default Api_Post
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#C5C6D0'},

//    nametext:{
//         fontSize: 20,
//         backgroundColor: "#f0f0f0",
//         color: '#333',
//         marginVertical: 15,
//         padding: 10,
//         borderRadius: 20,
//         fontWeight: 'bold',
//         borderWidth: 5,
//         borderColor: '#555',
//         borderWidth:1,
//         shadowColor: 'purple',
//         elevation:5
//     },
//       mailtext:{
//         fontSize: 20,
//         backgroundColor: "#ADADC9",
//         color: 'white',
//         marginVertical: 15,
//         padding: 10,
//         borderRadius: 20,
//         fontWeight: '400',
//         borderWidth: 5,
//         borderColor: 'black',
//         borderWidth:1,
//         shadowColor: 'purple',
//         elevation:5
//     },
//     holder:{
//         borderColor:'#333',
//         borderWidth:1,
//         marginBottom:10,
//         borderRadius:15,
//         backgroundColor:'#f0f0f0',
//         elevation:5
//     }
// })