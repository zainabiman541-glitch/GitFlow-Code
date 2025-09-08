module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    // Keep this LAST
    'react-native-reanimated/plugin',
  ],
};
