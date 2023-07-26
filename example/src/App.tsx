import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {requestCameraPermission} from '@brainylab/react-native-permissions';

export default function App() {
  // const {status, requestPermission} = useCameraPermission();

  const handleButton = async () => {
    console.log('init');
    const result = await requestCameraPermission();
    console.log('finally', result);
  };

  return (
    <View style={styles.container}>
      {/* <Text>Result: {status}</Text> */}
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text>Request Permission</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 40,
    backgroundColor: 'green',
    padding: 10,
  },
});
