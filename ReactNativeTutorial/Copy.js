//  import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import AsyncStorageScreen from './src/Navigation-screens/AsyncStorageScreen'; // remove .jsx extension

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <AsyncStorageScreen />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//   },
// });

// export default App;


// import { View, Text, StyleSheet, Button, Alert } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Home from './src/Navigation-screens/Home.jsx'
// import About from './src/Navigation-screens/About.jsx'
// import Login from './src/Navigation-screens/Login.jsx'
// import SignUp from './src/Navigation-screens/SignUp.jsx'
// import Forgotpassword from './src/Navigation-screens/Forgotpassword.jsx'sss
// import Congrats from './src/Navigation-screens/Congrats.jsx'
// import MyHeader from './src/components/MyHeader.jsx'
// import Example from './src/components/Example.jsx'

// const Stack= createNativeStackNavigator()
// // const headerTitle=()=> <Button title='One' color='red' onPress={Sayhello}/>
// // const headerRight=()=> <Button title='Two' color='green' onPress={Sayhello}/>
// // const MyExample=()=> <Example/>
// // const Sayhello=()=>{
// //   Alert.alert('Hello','Hello User')
// // }
// const App = () => {
//   return (
//    <NavigationContainer>
//        <Stack.Navigator
//           screenOptions={{
//             headerStyle: styles.header,
//             headerTitle: styles.headerTitle,
//             headerTintColor: '#ffff',
//             contentStyle: styles.screen
//           }
//           }
//        >
//         {/* <Stack.Screen
//                 name='HEADER'
//                 component={MyHeader}
//                 options={{
//                   title: '',
//                   // headerTitle: ()=> <Button title='One' color='red' />,
//                   //  headerTitle: ()=> <Button title='two' color='green' />
//                   // headerLeft: headerTitle,
//                   // headerRight: headerRight
//                   headerLeft: MyExample,
//                   // headerRight: headerRight
//                 }}
//                 /> */}
//         <Stack.Screen
//                 name='Login'
//                 component={Login}
//                 options={{headerShown: false}}
//                  // options={{headerShown: false}}
//                 // options={{
//                 //     title:'MY LOGIN fORM',
//                 //     headerTintColor:'#67e3ffff',
//                 //     headerTitleStyle:{
//                 //       fontSize: 25,
//                 //       color: '#34f7feff',
//                 //     },
//                 //     headerStyle:{
//                 //       backgroundColor: '#075a5dff'
//                 //     }
//                 // }}
//            />
//            {/* <Stack.Screen
//                 name='Home'
//                 component={Home}
//                 options={{headerShown: false}}
//            /> */}
      //  <Stack.Screen
      //           name='About'
      //           component={About}
      //           options={{headerShown: false,
      //           }}
               
      //      />

//         <Stack.Screen
//                 name='SignUp'
//                 component={SignUp}
//                 options={{headerShown: false,
//                 }}
//             />
//         <Stack.Screen
//                 name='ForgotPassword'
//                 component={Forgotpassword}
//                 options={{headerShown: false,
//                 }}
//             />
//         <Stack.Screen
//                 name='Congrats'
//                 component={Congrats}
//                 options={{headerShown: false,
//                 }}
//                />
//        </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App
// const styles=StyleSheet.create({
//   header:{
//     backgroundColor: '#0B262B'
//   },
//   headerTitle:{
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   screen:{
//     backgroundColor: '#461D3A'
//   }
// })

// import { View, Text } from 'react-native'
// import 'react-native-gesture-handler'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import React from 'react'
// import { Button, StyleSheet, Text, View } from 'react-native'
// import { ScreenContainer } from 'react-native-screens';
// const Drawer=createDrawerNavigator()
 
// const HomeScreen=({navigation})=>(
//   <View style={style.ScreenContainer}>
//     <Text style={style.Title}>HOME SCREEN</Text>
//     <Button title='Drawer' onPress={()=>navigation.openDrawer()}/>
//   </View>
// )
// const ProfileScreen =({navigation})=>(
//   <View style={style.ScreenContainer}>
//     <Text style={style.Title}>PROFILE SCREEN</Text>
//     <Button title='Drawer' onPress={()=>navigation.openDrawer()}/>
//   </View>
// )
// const SettingScreen=({navigation})=>(
//   <View style={style.ScreenContainer}>
//     <Text style={style.Title}>SETTING SCREEN</Text>
//     <Button title='Drawer' onPress={()=>navigation.openDrawer()}/>
//   </View>
// )
// const App = () => {
//   return (
//     <NavigationContainer>
//         <Drawer.Navigator
//           screenOptions={{
//             drawerStyle:{
//               backgroundColor:'#AAAD34',
//               width: '240'
//             },
//             drawerLabelStyle:{
//               fontSize:18,
//               color:'#333'
//             },
//             headerStyle:{
//               backgroundColor: '#271603ff'
//             },
//             headerTintColor:'#fff6',
//             headerTitleAlign: 'center'
//           }}
//         >
//              <Drawer.Screen
//                 name='Home'
//                 component={HomeScreen}
//              />
//              <Drawer.Screen
//                 name='Profile'
//                 component={ProfileScreen}
//              />
//              <Drawer.Screen
//                 name='Settings'
//                 component={SettingScreen}
//              />
//         </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

// const style=StyleSheet.create({
//   ScreenContainer:{
//     flex:1,
//     justifyContent:'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   Title:{
//     fontSize:22,
//     fontWeight:'bold',
//     marginBottom: 20
//   }
// })

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons'

// const HomeScreen = () => (
//   <View  style={style.container}>
//     <Text style={style.text}>Home Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={style.container}>
//     <Text style={style.text}> Profile Screen</Text>
//   </View>
// );

// const SettingScreen = () => (
//   <View style={style.container}>
//     <Text style={style.text}> Setting Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();
// const getTabBarIcon=(routeName , focused, color, size)=>{
//   let IconName
//   if(routeName==='Home'){
//      IconName= focused? 'home': 'home-outline'
//   }
//   else if(routeName==='Profile'){
//      IconName= focused? 'person': 'person-outline'
//   }
//   else if(routeName==='Setting'){
//      IconName= focused? 'settings': 'settings-outline'
//   }
//   return <Icon name={IconName} color={color} size={size}/>
// }
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route})=>({
//           tabBarIcon:({ focused , color ,size})=> getTabBarIcon(route.name , focused, color, size),
//           tabBarActiveTintColor:'#007bff',
//           tabBarInactiveTintColor:'#f6ff0014',
//           tabBarStyle:{
//             paddingBottom:1,
//             height: 60
//           }
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Setting" component={SettingScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const style= StyleSheet.create({
//    container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:'center',
//     backgroundColor:"#f9F9FA"
//    },
//    text:{
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#343a30'
//    }
// })

// export default App;


// App.js
// import 'react-native-gesture-handler';
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Switch, TouchableOpacity, Platform } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

// // ---- Dashboard (Home) ----
// const DashboardScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Business Dashboard</Text>
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Monthly Revenue</Text>
//         <Text style={styles.cardValue}>$12,450</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Active Clients</Text>
//         <Text style={styles.cardValue}>28</Text>
//       </View>
//     </View>
//   );
// };

// // ---- Profile ----
// const ProfileScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>My Profile</Text>
//       <View style={styles.profileCard}>
//         <Icon name="person-circle-outline" size={80} color="#4cc9f0" />
//         <Text style={styles.profileName}>John Smith</Text>
//         <Text style={styles.profileRole}>Business Manager</Text>
//         <Text style={styles.profileEmail}>john.smith@company.com</Text>
//       </View>
//     </View>
//   );
// };

// // ---- Settings ----
// const SettingsScreen = () => {
//   const [notifications, setNotifications] = useState(true);

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Settings</Text>

//       <View style={styles.settingRow}>
//         <Text style={styles.settingText}>Enable Notifications</Text>
//         <Switch value={notifications} onValueChange={setNotifications} />
//       </View>

//       <TouchableOpacity style={styles.settingRow}>
//         <Text style={styles.settingText}>Privacy Policy</Text>
//         <Icon name="chevron-forward-outline" size={20} color="#bbb" />
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.settingRow, { borderBottomWidth: 0 }]}>
//         <Text style={[styles.settingText, { color: 'red' }]}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // ---- Tabs ----
// const Tab = createBottomTabNavigator();

// const getIcon = (routeName, focused) => {
//   switch (routeName) {
//     case 'Dashboard':
//       return focused ? 'bar-chart' : 'bar-chart-outline';
//     case 'Profile':
//       return focused ? 'person' : 'person-outline';
//     case 'Settings':
//       return focused ? 'settings' : 'settings-outline';
//     default:
//       return 'ellipse';
//   }
// };

// // ---- App ----
// export default function App() {
//   const navTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       background: '#f8f9fa',
//       card: '#ffffff',
//       text: '#1b1b1b',
//     },
//   };

//   return (
//     <NavigationContainer theme={navTheme}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: true,
//           tabBarIcon: ({ focused, color, size }) => (
//             <Icon name={getIcon(route.name, focused)} size={size} color={color} />
//           ),
//           tabBarActiveTintColor: '#0077b6',
//           tabBarInactiveTintColor: '#adb5bd',
//           tabBarStyle: {
//             height: 64,
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//             backgroundColor: '#ffffff',
//             shadowColor: '#000',
//             shadowOpacity: 0.1,
//             shadowRadius: 8,
//             elevation: 4,
//           },
//         })}
//       >
//         <Tab.Screen name="Dashboard" component={DashboardScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// // ---- Styles ----
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#1b1b1b',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 6,
//     elevation: 2,
//   },
//   cardTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 6,
//   },
//   cardValue: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#0077b6',
//   },
//   profileCard: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 30,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   profileName: { fontSize: 20, fontWeight: '700', marginTop: 10, color: '#1b1b1b' },
//   profileRole: { fontSize: 14, color: '#6c757d', marginTop: 2 },
//   profileEmail: { fontSize: 14, color: '#0077b6', marginTop: 6 },
//   settingRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   settingText: {
//     fontSize: 16,
//     color: '#1b1b1b',
//   },
// });


// import { View, Text, StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import React from 'react'

// const Tab = createMaterialTopTabNavigator()
// const ChatScreen=()=>(
//   <View style={style.container}>
//     <Text style={style.text}>Chat Screen</Text>
//   </View>
// )
// const StatusScreen=()=>(
//   <View style={style.container}>
//     <Text style={style.text}>Status Screen</Text>
//   </View>
// )
// const CallScreen=()=>(
//   <View style={style.container}>
//     <Text style={style.text}>Call Screen</Text>
//   </View>
// )

// const App = () => {
//   return (
//    <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={{
//           tabBarActiveTintColor: 'purple',
//           tabBarInactiveTintColor: 'grey',
//           tabBarStyle: { backgroundColor: '#fff' },
//           tabBarIndicatorStyle: {
//             backgroundColor: 'lightgreen',
//             height: 3,
//           },
//           tabBarLabelStyle: {
//             fontSize: 16,
//             fontWeight: '600',
//           },
//         }}
//         >
//           <Tab.Screen  name='Chat' component={ChatScreen}/>
//            <Tab.Screen  name='Status' component={StatusScreen}/>
//             <Tab.Screen  name='Call' component={CallScreen}/>
//         </Tab.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App

// const style =StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems: 'center',
//     backgroundColor:'#163832'
//   },
// text:{
//   fontSize: 18,
//   color: 'white',
//   fontWeight: 'bold'
// }
// })

// // import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import 'react-native-gesture-handler';
// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import Login from './src/Navigation-screens/Login.jsx'
// import About from './src/Navigation-screens/About.jsx'
// import DrawerNavigator from './src/Navigation-screens/DrawerNavigator.jsx'
// // import Login from './src/Navigation-screens/Login.jsx'
// import SignUp from './src/Navigation-screens/SignUp.jsx'
// import Forgotpassword from './src/Navigation-screens/Forgotpassword.jsx'
// import Congrats from './src/Navigation-screens/Congrats.jsx'




// const Stack = createNativeStackNavigator()



// // const DrawerNavigator = () => (
// //   <Drawer.Navigator>
// //     <Drawer.Screen name="Home" component={HomeScreen} />
// //     <Drawer.Screen name="Profile" component={ProfileScreen} />
// //   </Drawer.Navigator>
// // )

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Login" 
//           component={Login} 
//           options={{ headerShown: false }} 
//         />

//         <Stack.Screen
//                 name='About'
//                 component={About}
//                 options={{headerShown: false,
//                 }}
               
//            />
         
         
//         <Stack.Screen
//                 name='SignUp'
//                 component={SignUp}
//                 options={{headerShown: false,
//                 }}
//             />
//         <Stack.Screen
//                 name='ForgotPassword'
//                 component={Forgotpassword}
//                 options={{headerShown: false,
//                 }}
//             />
//         <Stack.Screen
//                 name='Congrats'
//                 component={Congrats}
//                 options={{headerShown: false,
//                 }}
//                />

//         <Stack.Screen 
//           name="DrawerNavigator" 
//           component={DrawerNavigator} 
//           options={{ headerShown: false }} 
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App


// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React from 'react';
// import HomeScreen from '../screens/HomeScreen';
// import Courses from '../screens/Courses';
// import Profile from '../screens/Profile';
// import Assignments from '../screens/Assignments';
// import TimeTable from '../screens/TimeTable';
// import Fee from '../screens/Fee';
// import Messages from '../screens/Messages';
// import Settings from '../screens/Settings';
// import { NavigationContainer } from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#472830' },
//         headerTintColor: '#fff',
//         drawerLabelStyle: { fontSize: 15, fontWeight: '500' },
//       }}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Courses" component={Courses} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="Assignments" component={Assignments} />
//       <Drawer.Screen name="TimeTable" component={TimeTable} />
//       <Drawer.Screen name="Fee" component={Fee} />
//       <Drawer.Screen name="Messages" component={Messages} />
//       <Drawer.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;



// // import { SafeAreaView } from "react-native-safe-area-context";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import "./global.css";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
// } from "react-native-reanimated";

// export default function App() {
//   const flip = useSharedValue(0);
// // pick any images you like
// const frontimage = {
//   uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600", // new front image
// };
// const backimage = {
//   uri: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?w=600", // new back image
// };


//   const AnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { perspective: 1000 },
//         { rotateY: `${flip.value}deg` },
//       ],
//       opacity: flip.value < 90 ? 1 : 0,
//     };
//   });

//   const AnimatedStyleBack = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { perspective: 1000 },
//         { rotateY: `${flip.value + 180}deg` },
//       ],
//       opacity: flip.value >= 90 ? 1 : 0,
//     };
//   });

//   const handleflip = () => {
//     flip.value = withSpring(flip.value === 0 ? 180 : 0);
//   };

//   return (
//     <View className="flex-1 bg-[#472830] justify-center items-center">
//       <View className="w-64 h-64 relative">
//         <Animated.View
//           style={AnimatedStyle}
//           className="absolute w-full bg-white rounded-3xl shadow-xl justify-center items-center"
//         >
//           <Image
//             source={frontimage}
//             className="w-56 h-36 rounded-lg"
//             resizeMode="cover"
//           />
//           <Text className="text-lg font-semibold mt-3 text-[#333]">
//             Product Title - item front
//           </Text>
//           <Text className="text-sm mt-1 text-gray-600">
//             this is front Side
//           </Text>
//         </Animated.View>

//         <Animated.View
//           style={AnimatedStyleBack}
//           className="absolute w-full bg-white rounded-3xl shadow-xl justify-center items-center"
//         >
//           <Image
//             source={backimage}
//             className="w-56 h-36 rounded-lg"
//             resizeMode="cover"
//           />
//           <Text className="text-lg font-semibold mt-3 text-[#333]">
//             Product Title - item back
//           </Text>
//           <Text className="text-sm mt-1 text-gray-600">
//             this is back Side
//           </Text>
//         </Animated.View>
//       </View>

//       <TouchableOpacity
//         onPress={handleflip}
//         className="mt-8 px-8 py-4 bg-gray-900 rounded-lg shadow-md"
//       >
//         <Text className="text-white text-lg font-semibold">Flip</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }



// import { View, Text } from 'react-native'
// import React from 'react'
// import Register from './src/components/Register.jsx'
// import './global.css'

// const App = () => {
//   return (
//     <View className='flex-1'>
//        <Register/>
//     </View>
//   )
// }

// export default App


// import React from "react";
// import { View, Text } from "react-native";
// import "./global.css"
// import { Provider } from "react-redux";
// import { store } from "./src/app/pookestore";
// import FetchPookemon from "./src/components/FetchPookemon";
// const App = () => {
//   return (
//     <Provider store={store}>
//       <View className="flex-1 justify-center items-center bg-blue-200">
//       <Text className="text-3xl font-bold text-white mb-4">Pookemon Info</Text>
//       </View>
//       <FetchPookemon />
//     </Provider>
//   );
// };

// export default App;


// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// // Import screens
// import HomeScreen from './src/icecreamParlour/HomeScreen.jsx';
// import ProductScreen from './src/icecreamParlour/ProductScreen.jsx';
// import CategoryScreen from './src/icecreamParlour/CategoryScreen.jsx';
// import CartScreen from './src/icecreamParlour/CartScreen.jsx';
// import PaymentScreen from './src/icecreamParlour/PaymentScreen.jsx';
// import SettingsScreen from './src/icecreamParlour/SettingsScreen.jsx';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// // Stack for Home (Home + Product)
// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="HomeMain" component={HomeScreen} />
//       <Stack.Screen name="Product" component={ProductScreen} />
//     </Stack.Navigator>
//   );
// }

// // Drawer for Settings
// function SettingsDrawer() {
//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="SettingsMain" component={SettingsScreen} />
//     </Drawer.Navigator>
//   );
// }

// // Main Tabs
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') iconName = 'home';
//             else if (route.name === 'Category') iconName = 'list';
//             else if (route.name === 'Cart') iconName = 'cart';
//             else if (route.name === 'Payment') iconName = 'card';
//             else if (route.name === 'Settings') iconName = 'settings';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Category" component={CategoryScreen} />
//         <Tab.Screen name="Cart" component={CartScreen} />
//         <Tab.Screen name="Payment" component={PaymentScreen} />
//         <Tab.Screen name="Settings" component={SettingsDrawer} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

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


// import { View, Text } from 'react-native'
// import React from 'react'
// import Hooks from './src/components/Hooks'

// const App = () => {
//   return (
//     <View style={{flex:1}}> 
//       <Hooks/>
//     </View>
//   )
// }

// export default App

