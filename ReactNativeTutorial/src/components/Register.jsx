import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './auth'; 

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    try {
      await registerUser(email.trim(), password);
      Alert.alert(
        'Success',
        'Registration Successful! You can now log in with your credentials.'
      );
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <View className="w-11/12 bg-white rounded-lg p-5 shadow-lg">
        <Text className="text-2xl font-bold text-center mb-5 text-pink-600">
          Create Account
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:border-pink-500"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:border-pink-500"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:border-pink-500"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          className="bg-pink-600 p-4 rounded-lg mb-4"
          onPress={handleRegister}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Register
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
          <Text>Do you Have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterdLogin')}>
            <Text className="font-bold text-pink-600">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
