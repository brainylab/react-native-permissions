import {useState, useCallback} from 'react';

import {requestCameraPermission, getCameraPermissionStatus} from '../index';
import type {CameraPermissionStatus} from '../NativeReactNativePermissions';

interface UseCameraPermission {
  status: CameraPermissionStatus;
  requestPermission: () => void;
}

export function useCameraPermission(): UseCameraPermission {
  const initialStatus = getCameraPermissionStatus();

  const [status, setStatus] = useState<CameraPermissionStatus>(
    initialStatus || 'not-determined',
  );

  const requestPermission = useCallback(async () => {
    const response = await requestCameraPermission();

    setStatus(response);
  }, []);

  return {status, requestPermission};
}
