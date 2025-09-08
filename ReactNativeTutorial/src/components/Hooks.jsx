// import React, { useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Hooks = () => {
//   const inputRef = useRef(); 

//   const handlePress = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>UseRef Hook Example</Text>

//       <TextInput
//         ref={inputRef}
//         style={styles.textInput}
//         placeholder="Enter Your Text"
//       />

//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Hooks;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#333',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });



import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={handleClick} />
      <Video
        ref={videoRef}
        source={{
          uri: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        }}
        style={styles.video}
        paused={!isPlaying}        
        resizeMode="contain"
        repeat={true}          
        onError={(e) => console.log('Video error:', e)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  video: { width: 300, height: 200, marginTop: 20, backgroundColor: 'black' }, // black bg ensures video visibility
});
