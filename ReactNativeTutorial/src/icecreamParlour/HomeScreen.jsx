
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-purple-200">
      <Image
        source={{ uri: 'https://your-image-url.com' }}
        className="w-40 h-40 mb-4"
      />
      <Text className="text-xl font-bold">Delicious Ice Cream</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Product')}
        className="mt-4 px-6 py-3 bg-purple-500 rounded-full"
      >
        <Text className="text-white">Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen
