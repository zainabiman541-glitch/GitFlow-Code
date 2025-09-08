import { View, Text, TextInput, TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useRef } from 'react'


const UseRefHook = () => {
    const myRef=useRef();
    const handlePress=()=>{
        myRef.current.setNativeProps({
            text: 'Zainab Iman',
            style:{color:'#3f0303ff', backgroundColor: '#06cfbbff', fontWeight:'bold',fontStyle:'italic',fontSize: 20}
        })
        myRef.current.focus()
    }
  return (
    <View style={styles.container}>
     <TextInput
        ref={myRef}
        style={styles.TextInput}
        placeholder='Enter Your Text'
        placeholderTextColor='#999'
     />
     <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttontxt}>Submitt</Text>
     </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#03333aff',
        padding:20
    },
    TextInput:{
       width:'100%',
       backgroundColor:'#fff',
       padding:15,
       fontSize:15,
       borderWidth:3,
       borderColor:'#0bddf0ff',
       marginBottom: 20,
       borderRadius: 10,
       marginHorizontal:13
    },
    button:{
        width:'100',
        height: 50,
        backgroundColor:'#0bbad1c2',
        borderRadius: '10',
        justifyContent:'center',
        alignItems: 'center',
        },
    buttontxt:{
        color:'#fff',
        fontSize: 20,
        fontStyle:'italic',
        fontWeight:'bold',

    }
})
export default UseRefHook