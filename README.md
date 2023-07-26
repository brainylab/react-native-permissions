<h1 align="center">React Native Permissions</h1>

This library was developed to support the new architecture of React Native - TurboModule, it does not support old versions of react native.

> Support only New Architecture an react-native > 0.71.0

## Installation

```bash
# use npm
npm install @brainylab/react-native-permissions
# or use yarn
yarn add @brainylab/react-native-permissions
# or use pnpm
pnpm i @brainylab/react-native-permissions
```

# Enable the New Architecture
### on android
You will only need to update your `android/gradle.properties` file as follows:

```diff
-newArchEnabled=false
+newArchEnabled=true
```

### on ios
You will only need to reinstall your pods by running `pod install` with the right flag:
```bash
# Run pod install with the flag:
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

# Camera Permission

To request camera permission, you must first specify that your app requires camera permissions.

### iOS
Open your project's `Info.plist` and add the following lines inside the outermost `<dict>` tag:
```xml
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Camera.</string>
```
### Android
Open your project's `AndroidManifest.xml` and add the following lines inside the `<manifest>` tag:
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## Example

Use React Hook `useCameraPermission()`
```typescript
import { useCameraPermission } from '@brainylab/react-native-permissions';

const { status, requestPermission } = useCameraPermission();

console.log(status) // return -> 'authorized' | 'not-determined' | 'denied' | 'restricted'

```
or `getCameraPermissionStatus()` and `await requestCameraPermission()`

```typescript
const status = getCameraPermissionStatus() // return -> 'authorized' | 'not-determined' | 'denied' | 'restricted'

const status = await requestCameraPermission() // return -> 'authorized' | 'denied'

```

Example in Functional Component
```typescript
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
```

### Permission Status

| Return Value Type - `string`   | iOS | Android |
| --------------  | -------------- | --------------- |
| `authorized`    | ✅  | ✅ |
| `denied`        | ✅  | ✅ |
| `not-determined`| ✅  | ✅ |
| `restricted`    | ✅  | ❌ |


### Examples

The source code for the example (showcase) app is under the Example/ directory. If you want to play with the API but don't feel like trying it on a real app, you can run the example project.


## License

MIT
