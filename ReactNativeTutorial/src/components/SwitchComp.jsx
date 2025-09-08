// import React, { useState } from 'react';
// import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';

// const SwitchComp = () => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleSwitch = () => setIsDark(prev => !prev);

//   // Define dynamic styles based on theme
//   const backgroundColor = isDark ? '#121212' : '#ffffff';
//   const textColor = isDark ? '#ffffff' : '#000000';

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       {/* Optional: StatusBar color change */}
//       <StatusBar
//         barStyle={isDark ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundColor}
//       />

//       <Text style={[styles.text, { color: textColor }]}>
//         {isDark ? 'Dark Mode' : 'Light Mode'}
//       </Text>

     

//       <Switch
//         style={{
          
//         }}
//         value={isDark}
//         onValueChange={toggleSwitch}
//         thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
//         trackColor={{ false: '#767577', true: '#81b0ff' }}
//       />

//        <Text style={[styles.text, { color: textColor }]}>Mind Blowing</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 10,
//     textAlign: 'right',
//     marginTop: 30,
//     marginHorizontal: 5
//   },
// });

// export default SwitchComp;

import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

const SwitchComp = () => {
  const [isDark, setIsDark] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! 👋', sender: 'other' },
    { id: '2', text: 'Hi! How are you?', sender: 'me' },
  ]);

  const theme = {
    background: isDark ? '#121212' : '#f2f2f2',
    header: isDark ? '#1f1f1f' : '#075E54',
    text: isDark ? '#ffffff' : '#000000',
    inputBackground: isDark ? '#2c2c2c' : '#ffffff',
    bubbleMe: isDark ? '#054640' : '#DCF8C6',
    bubbleOther: isDark ? '#2a2a2a' : '#ffffff',
    sendButton: isDark ? '#25D366' : '#075E54',
  };

  const toggleTheme = () => setIsDark(prev => !prev);

  const handleSend = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'me',
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
  };

  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <View
        style={[
          styles.messageContainer,
          {
            alignSelf: isMe ? 'flex-end' : 'flex-start',
            backgroundColor: isMe ? theme.bubbleMe : theme.bubbleOther,
          },
        ]}
      >
        <Text style={{ color: isDark ? '#fff' : '#000' }}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.header} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.header }]}>
        <Text style={styles.headerText}>WhatsApp Clone</Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Area */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.inputContainer, { backgroundColor: theme.inputBackground }]}>
          <TextInput
            placeholder="Type a message"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            style={[styles.textInput, { color: theme.text }]}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity onPress={handleSend} style={[styles.sendButton, { backgroundColor: theme.sendButton }]}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default SwitchComp
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 17
  },
  chatContainer: {
    padding: 10,
    flexGrow: 1,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sendButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
