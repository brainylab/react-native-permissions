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
    console.log('init');
    const response = await requestCameraPermission();
    console.log('finally', response);

    setStatus(response);
  }, []);

  return {status, requestPermission};
}
