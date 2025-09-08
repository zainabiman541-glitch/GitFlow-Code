// src/screens/CategoryScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

function CategoryScreen() {
  return (
    <ScrollView className="flex-1 bg-purple-100 p-4">
      <Text className="text-2xl font-bold mb-4">Pick Your Favorite Choice</Text>
      {/* map categories */}
      <View className="bg-white rounded-xl p-4 mb-4">
        <Text className="font-bold">Cup</Text>
      </View>
      <View className="bg-white rounded-xl p-4 mb-4">
        <Text className="font-bold">Sorbet</Text>
      </View>
    </ScrollView>
  );
}

export default CategoryScreen