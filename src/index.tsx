const ReactNativePermissions =
  require('./NativeReactNativePermissions').default;
import type {
  CameraPermissionStatus,
  CameraPermissionRequestResult,
} from './NativeReactNativePermissions';

export * from './hooks';

export function getCameraPermissionStatus(): CameraPermissionStatus {
  return ReactNativePermissions.getCameraPermissionStatus();
}

export function requestCameraPermission(): Promise<CameraPermissionRequestResult> {
  return ReactNativePermissions.requestCameraPermission();
}
