// src/screens/PaymentScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function PaymentScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Payment Details</Text>
      <TextInput placeholder="Cardholder Name" className="border p-3 mb-3 rounded-xl" />
      <TextInput placeholder="Card Number" className="border p-3 mb-3 rounded-xl" keyboardType="numeric" />
      <TextInput placeholder="Expiry Date" className="border p-3 mb-3 rounded-xl" />
      <TextInput placeholder="CVV" className="border p-3 mb-3 rounded-xl" secureTextEntry />
      <TouchableOpacity className="bg-purple-500 p-4 rounded-full">
        <Text className="text-white text-center">Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}
