// src/screens/ProductScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function ProductScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold">Blueberry Ice Cream</Text>
      <Image
        source={{ uri: 'https://your-image-url.com/blueberry' }}
        className="w-40 h-40 mt-4 rounded-lg"
      />
      <Text className="mt-2">€5.75</Text>
      <TouchableOpacity className="mt-4 bg-purple-500 p-3 rounded-full">
        <Text className="text-white text-center">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductScreen
