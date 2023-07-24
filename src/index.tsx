const ReactNativePermissions = require('./NativeReactNativePermissions').default;

export function multiply(a: number, b: number): number {
  return ReactNativePermissions.multiply(a, b);
}
