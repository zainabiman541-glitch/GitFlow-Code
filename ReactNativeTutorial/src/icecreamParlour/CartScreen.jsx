// src/screens/CartScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function CartScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>
      {/* Items list */}
      <View className="p-4 bg-purple-50 rounded-xl mb-4">
        <Text>Blueberry Cup - €17.25</Text>
      </View>
      <TouchableOpacity className="bg-purple-500 p-4 rounded-full">
        <Text className="text-white text-center">Go to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

import defaultt 
