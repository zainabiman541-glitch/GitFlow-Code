import { View, Text, Button } from 'react-native'
import React, {useState } from 'react'
import ShowChild from './ShowChild.jsx'

const UseEffectHook = () => {
    const[showchild,setShowChild]=useState(true)
    // const [counter, setCounter]=useState(1)
    // const [score, setScore]=useState(10)
    // useEffect(()=>{
    //      console.log('This is useEffect Hook');
    // },[counter])
    //  useEffect(()=>{ // multiple useEffectHook
    //      console.log('This is useEffect Hook');
    // },[score])
    return(
        <View>
            <Text style={{fontSize: 30 , marginBottom: 10}}>UseEffectHook</Text>
            {
                showchild?<ShowChild/>: null
            }
            <Button title='toggle'onPress={()=> setShowChild(!showchild)}/>
            {/* <Text style={{fontSize: 30}}>Count: {counter}</Text>
            <Button title='Counter' onPress={()=>setCounter(counter+1)}/>
           
            <Text style={{fontSize: 30}}>Count: {score}</Text>
            <Button title='Counter' onPress={()=>setScore(score+10)}/>
            <InfoDetail count={counter} score={score}/> */}
        </View>
    )
//     const [count , setCount]=useState(1)
// useEffect(()=>{
//     console.log('This is useEffect Hook');
// } ,[]) //Blank Array dependences
//   return (
//     <View>
//       <Text style={{fontSize: 30 , marginBottom: 10}}>UseEffectHook</Text>
//       <Text style={{fontSize: 30}}>Count: {count}</Text>
//       <Button title='Counter' onPress={()=>setCount(count+1)}/>
//     </View>
//   )
}
// const InfoDetail=({count, score})=>{
//     useEffect(()=>{
//         console.log('I am a Child Component')
//     },[count])
//     return(
//         <View>
//             <Text style={{fontSize: 30}}>InfoDetail</Text>
//             <Text style={{fontSize: 30}}>Count: {count}</Text>
//             <Text style={{fontSize: 30}}>score: {score}</Text>
//         </View>
//     )
// }
export default UseEffectHook