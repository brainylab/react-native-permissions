import type {
  CameraPermissionStatus,
  CameraPermissionRequestResult,
} from './NativeReactNativePermissions';

export * from './hooks/useCameraPermission';

const ReactNativePermissions =
  require('./NativeReactNativePermissions').default;

export function getCameraPermissionStatus(): CameraPermissionStatus {
  return ReactNativePermissions.getCameraPermissionStatus();
}

export function requestCameraPermission(): Promise<CameraPermissionRequestResult> {
  return ReactNativePermissions.requestCameraPermission();
}
