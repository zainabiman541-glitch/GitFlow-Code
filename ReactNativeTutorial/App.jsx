// import { View, Text } from 'react-native'
// import React from 'react' 
// import { Provider } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import CharacterScreen from './src/Navigation-screens/CharacterScreen'
// import DetailScreen from './src/Navigation-screens/DetailScreen'
// import store from './src/app/mutationstore'

// const Stack = createNativeStackNavigator()
// const App = () => {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//        <Stack.Navigator>
//           <Stack.Screen name='characters' component={CharacterScreen} options={{headerShown: false}}/>
//           <Stack.Screen name='detail' component={DetailScreen} options={{headerStyle: {
//       backgroundColor: '#765D67',
//     },}}/>
//        </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   )
// }

// export default App


// import { View, Text, AccessibilityInfo } from 'react-native'
// import React from 'react'
// import AccessibilityProp from './src/components/AccessibilityProp'

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       <AccessibilityProp/>
//     </View>
//   )
// }

// export default App


// import { TouchableOpacity, Image } from 'react-native';
// import React from 'react';

// const App=()=>{
//   return (
//     <TouchableOpacity
//       accessible={false}                    // combine for screen reader
//       accessibilityRole="button"           // tell it’s a button
//       accessibilityLabel="Send message"    // what it does
//       accessibilityHint="Double tap to send the current chat message"
//       onPress={() => console.log('Message sent')}
//     >
//       <Image source={require('./src/Image/poohimage.jpg')} />
//     </TouchableOpacity>
//   );
// }


// export default App



// import React, {useState} from 'react';
// import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// const TouchableWithoutFeedbackExample = () => {
//   const [count, setCount] = useState(0);

//   const onPress = () => {
//     setCount(count + 1);
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.countContainer}>
//           <Text style={styles.countText}>Count: {count}</Text>
//         </View>
//         <TouchableWithoutFeedback onPress={onPress}>
//           <View style={styles.button}>
//             <Text>Touch Here</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
//   countText: {
//     color: '#FF00FF',
//   },
// });

// export default TouchableWithoutFeedbackExample;



// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { GestureHandlerRootView } from "react-native-gesture-handler"; // 👈 add this
// import "./global.css";

// import Register from "./src/components/Register";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Register"
//             component={Register}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }


// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Register from './src/components/Register.jsx'
// import RegisterdLogin from './src/components/RegisterdLogin.jsx'
// import ResetPassword from './src/components/ResetPassword.jsx'
// import SplashScreen from './src/components/SplashScreen.jsx'
// import './global.css'

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//      <NavigationContainer style={{flex: 1}}>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="SplashScreen"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//           />
//          <Stack.Screen
//             name="Register"
//             component={Register}
//             // options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="RegisterdLogin"
//             component={RegisterdLogin}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="ResetPassword"
//             component={ResetPassword}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//   )
// }

// export default App


import { View, Text } from 'react-native'
import React from 'react'
import Hooks from './src/components/Hooks'

const App = () => {
  return (
    <View style={{flex:1}}> 
      <Hooks/>
    </View>
  )
}

export default App