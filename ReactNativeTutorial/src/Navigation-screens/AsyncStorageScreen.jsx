import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageScreen = () => {
  const [userName, setUserName] = useState('');
  const [storedUserName, setStoredUserName] = useState('');

  const saveUserName = async () => {
    await AsyncStorage.setItem('Username', userName);
    setStoredUserName(userName);
    setUserName('');
    Alert.alert('Username Saved');
  };

  const getUserName = async () => {
    const savedname = await AsyncStorage.getItem('Username');
    if (savedname) {
      setStoredUserName(savedname);
    } else {
      Alert.alert('Username Not Found');
    }
  };

  const removeUserName = async () => {
    await AsyncStorage.removeItem('Username');
    setStoredUserName('');
    Alert.alert('Username Removed');
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter username"
        value={userName}
        onChangeText={setUserName}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title="Save Username" onPress={saveUserName} />
      </View>
      <View style={styles.button}>
        <Button title="Get Username" onPress={getUserName} />
      </View>
      <View style={styles.button}>
        <Button title="Remove Username" onPress={removeUserName} />
      </View>
      <Text style={styles.storedText}>Stored Username: {storedUserName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: { marginVertical: 5 },
  storedText: { marginTop: 20, fontSize: 16 },
});

export default AsyncStorageScreen;
