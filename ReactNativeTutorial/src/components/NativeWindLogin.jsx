import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const NativeWindLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-slate-600 px-6">
      <Text className="text-4xl font-bold text-white mb-8">Login</Text>

      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={"#f9f9f9"}
        className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 mb-4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter Your Password"
        placeholderTextColor={"#f9f9f9"}
        className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 mb-6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="w-full bg-indigo-400 py-3 rounded-lg">
        <Text className="text-center text-white text-lg font-semibold">
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4">
        <Text className="text-indigo-300 text-center">Forgot Password?</Text>
      </TouchableOpacity>

      <View className="mt-6 flex-row justify-center items-center">
        <Text className="text-white mr-2">Don’t have an Account?</Text>
        <TouchableOpacity>
          <Text className="text-indigo-300 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NativeWindLogin;

