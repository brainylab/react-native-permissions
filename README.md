# @brainylab/react-native-permissions

permissions

## Installation

```sh
npm install @brainylab/react-native-permissions
```

## Usage


```js
import { useCameraPermission } from '@brainylab/react-native-permissions';

// ...

export default function App() {
  const { status, requestPermission } = useCameraPermission();

  return (
    <View style={styles.container}>
      <Text>Result: {status}</Text>
      <TouchableOpacity style={styles.button} onPress={requestPermission}>
        <Text>Request Permission</Text>
      </TouchableOpacity>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
