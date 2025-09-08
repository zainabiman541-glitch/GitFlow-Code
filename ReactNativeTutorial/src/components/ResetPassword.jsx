import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { updatePassword } from './auth';

export default function ResetPassword({navigation}) {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    try {
      await updatePassword(email.trim());
      Alert.alert(
        'Success',
        'Password reset email sent! Check your inbox or spam folder.'
      );
      setEmail('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-200">
      <View className="w-11/12 bg-white rounded-lg p-5 shadow-lg">
        <Text className="text-2xl font-bold text-center mb-5 text-pink-600">
          Reset Password
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 w-full focus:border-pink-500"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity
          className="bg-pink-600 p-4 rounded-lg mb-4"
          onPress={handleReset}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Send Reset Email
          </Text>
        </TouchableOpacity>

         <View className="flex-row justify-center ">
                <TouchableOpacity onPress={() => navigation.navigate('RegisterdLogin')}>
                     <Text className="font-bold text-pink-600">Back to login?</Text>
                </TouchableOpacity>
         </View>
      </View>
    </View>
  );
}
