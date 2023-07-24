
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReactNativePermissionsSpec.h"

@interface ReactNativePermissions : NSObject <NativeReactNativePermissionsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReactNativePermissions : NSObject <RCTBridgeModule>
#endif

@end
