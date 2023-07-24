import {default as ReactNativePermissions} from './NativeReactNativePermissions';

import type {
  CameraPermissionStatus,
  CameraPermissionRequestResult,
} from './NativeReactNativePermissions';

export * from './hooks/useCameraPermission';

export function getCameraPermissionStatus(): CameraPermissionStatus {
  return ReactNativePermissions.getCameraPermissionStatus();
}

export function requestCameraPermission(): Promise<CameraPermissionRequestResult> {
  return ReactNativePermissions.requestCameraPermission();
}
