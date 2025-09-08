import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import Home from './Home.jsx';
import Courses from './Courses.jsx';

const Profile = () => (
  <View style={styles.container}>
    <Text style={styles.text}>👤 Profile Screen</Text>
  </View>
);

const Assignments = () => (
  <View style={styles.container}>
    <Text style={styles.text}>📘 Assignments Screen</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0077b6' },
        headerTintColor: '#fff',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Drawer.Screen name="Courses" component={Courses} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Assignments" component={Assignments} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: '600' },
});
