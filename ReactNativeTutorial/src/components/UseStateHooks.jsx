import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHooks = () => {
  const [name , setName]=useState('ZAINAB')
  const changeName=()=>{
    setName('IMAN')
  }
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'italic', color:'purple'}}>Name: {name}</Text>
      <Button title='Press Here'onPress={changeName}/>
      {/* <Button title='Press Here'onPress={()=>{setName('IMAN')}}/> */}
    </View>
  )
}

export default UseStateHooks
// import { View, Text, Button } from 'react-native'
// import React from 'react'

// const OnPress = () => {
//     let Name='ZAINAB'
//     const getName=()=>{
//         Name='IMAN'
//         console.warn('Name: ', Name )
//     }
//   return (
//     <View>
//       <Text style={{fontSize:30,fontStyle:'italic',color:'purple'}}>{Name}</Text>
//       <Button title='Press Here'onPress={getName}/>
//     </View>
//   )
// }

// export default OnPress