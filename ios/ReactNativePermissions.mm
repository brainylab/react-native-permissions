#import <AVFoundation/AVFoundation.h>
#import <React/RCTLog.h>

#import "RNReactNativePermissionsSpec.h"
#import "ReactNativePermissions.h"

@implementation ReactNativePermissions

RCT_EXPORT_MODULE()

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (NSString *)getCameraPermissionStatus {
    AVAuthorizationStatus status = [AVCaptureDevice authorizationStatusForMediaType:AVMediaTypeVideo];

    if(status == AVAuthorizationStatusAuthorized) {
      return @"authorized";
    } else if(status == AVAuthorizationStatusDenied) {
      return @"denied";
    } else if(status == AVAuthorizationStatusRestricted) {
      return @"restricted";
    }

    return @"not-dethermined";
}

- (void)requestCameraPermission:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
      AVAuthorizationStatus status = [AVCaptureDevice authorizationStatusForMediaType:AVMediaTypeVideo];
      if(status == AVAuthorizationStatusAuthorized) {
        resolve([self getCameraPermissionStatus]);
        return;
      } else {
        [AVCaptureDevice requestAccessForMediaType:AVMediaTypeVideo
                                completionHandler:^(__unused BOOL granted) {
            if(granted) {
              resolve([self getCameraPermissionStatus]);
              return;
            } else {
              resolve([self getCameraPermissionStatus]);
              return;
            }
        }];
      }
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeReactNativePermissionsSpecJSI>(params);
}
#endif

@end
