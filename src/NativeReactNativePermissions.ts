import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type CameraPermissionStatus =
  | 'authorized'
  | 'not-determined'
  | 'denied'
  | 'restricted';
export type CameraPermissionRequestResult = 'authorized' | 'denied';
export type EventCameraName = 'CameraPermission';

export interface Spec extends TurboModule {
  getCameraPermissionStatus(): CameraPermissionStatus;
  requestCameraPermission(): Promise<CameraPermissionRequestResult>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ReactNativePermissions');
