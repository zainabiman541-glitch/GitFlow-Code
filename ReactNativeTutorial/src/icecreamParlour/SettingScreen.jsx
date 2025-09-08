// src/screens/SettingsScreen.js
import React from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <View className="flex-1 bg-purple-200 p-4">
      <Text className="text-2xl font-bold mb-4">Settings</Text>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>
    </View>
  );
}
