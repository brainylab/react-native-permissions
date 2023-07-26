import ReactNativePermissions from './NativeReactNativePermissions';

export type CameraPermissionStatus =
  | 'authorized'
  | 'not-determined'
  | 'denied'
  | 'restricted';
export type CameraPermissionRequestResult = 'authorized' | 'denied';

export * from './hooks/useCameraPermission';

export function getCameraPermissionStatus(): CameraPermissionStatus {
  return ReactNativePermissions.getCameraPermissionStatus();
}

export function requestCameraPermission(): Promise<CameraPermissionRequestResult> {
  return ReactNativePermissions.requestCameraPermission();
}
