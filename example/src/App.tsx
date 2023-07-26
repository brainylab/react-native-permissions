import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {useCameraPermission} from '@brainylab/react-native-permissions';

export default function App() {
  const {status, requestPermission} = useCameraPermission();

  return (
    <View style={styles.container}>
      <Text>Result: {status}</Text>
      <TouchableOpacity style={styles.button} onPress={requestPermission}>
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
