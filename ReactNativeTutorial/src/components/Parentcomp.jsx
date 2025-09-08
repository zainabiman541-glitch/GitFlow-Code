import { View, Button } from 'react-native'
import { createContext , useState } from 'react'
import FirstChild from './FirstChild'


// create, provide, use

export const CounterContext=createContext()

const Parentcomp = () => {
    const [count, setCount]=useState(0)
    const increamentCount=()=>{
        setCount(count+1)
    }
  return (
    <CounterContext.Provider value={{count,increamentCount}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <FirstChild/>
         </View>
    </CounterContext.Provider>
  )
}

export default Parentcomp