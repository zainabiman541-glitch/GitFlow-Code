import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { loginUser } from './auth';

const RegisterdLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      const user = await loginUser(email.trim(), password);

      if (user) {
        Alert.alert('Success', `You are logged in as ${user.email}`);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <View className="w-11/12 bg-white rounded-lg p-5 shadow-lg">
        <Text className="text-2xl font-bold text-center mb-5 text-pink-600">
          Login
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:border-pink-500"
          placeholder="Email Address"
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
          secureTextEntry
        />

         <View className="flex-row justify-center mb-4">
                  <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                    <Text className="font-bold text-pink-600 text-right">forgot Password?</Text>
             </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handlePress}
          className="bg-pink-600 p-4 rounded-lg mb-4"
        >
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-4">
            <Text>Do you Have an Account? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className="font-bold text-pink-600">Register</Text>
             </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterdLogin;
