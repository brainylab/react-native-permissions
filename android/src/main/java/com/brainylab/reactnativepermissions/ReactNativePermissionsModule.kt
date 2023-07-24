package com.brainylab.reactnativepermissions

import android.Manifest
import android.content.pm.PackageManager

import androidx.core.content.ContextCompat

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.modules.core.PermissionListener
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.DeviceEventManagerModule;



@ReactModule(name = ReactNativePermissionsModule.NAME)
class ReactNativePermissionsModule(reactContext: ReactApplicationContext) :
  NativeReactNativePermissionsSpec(reactContext) {

  companion object {
    const val NAME = "ReactNativePermissions"

    var RequestCode = 10

    fun parsePermissionStatus(status: Int): String {
      return when (status) {
        PackageManager.PERMISSION_DENIED -> "denied"
        PackageManager.PERMISSION_GRANTED -> "authorized"
        else -> "not-determined"
      }
    }
  }

  override fun getName(): String {
    return NAME
  }

  private fun onCameraPermissionEvent(status: String) {
    reactApplicationContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit("CameraPermissionEvent", status)
  }

  override fun getCameraPermissionStatus(): String {
    val status = ContextCompat.checkSelfPermission(reactApplicationContext, Manifest.permission.CAMERA)
    return parsePermissionStatus(status)
  }


  override fun requestCameraPermission(promise: Promise) {
    val activity = reactApplicationContext.currentActivity

    if (activity is PermissionAwareActivity) {
      val currentRequestCode = RequestCode++
      val listener = PermissionListener { requestCode: Int, _: Array<String>, grantResults: IntArray ->
        if (requestCode == currentRequestCode) {
          val permissionStatus = if (grantResults.isNotEmpty()) grantResults[0] else PackageManager.PERMISSION_DENIED
          promise.resolve(parsePermissionStatus(permissionStatus))
          return@PermissionListener true
        }
        return@PermissionListener false
      }
      activity.requestPermissions(arrayOf(Manifest.permission.CAMERA), currentRequestCode, listener)
    } else {
      promise.reject("NO_ACTIVITY", "No PermissionAwareActivity was found! Make sure the app has launched before calling this function.")
    }

    // val activity = reactApplicationContext.currentActivity

    // if (activity is PermissionAwareActivity) {
    //   if(getCameraPermissionStatus() === "authorized") {
    //     promise.resolve(getCameraPermissionStatus())
    //   } else {
    //     activity.requestPermissions(arrayOf(Manifest.permission.CAMERA),RequestCode)

    //     promise.resolve("ok")
    //   }
    // } else {
    //   promise.reject("NO_ACTIVITY", "No PermissionAwareActivity was found! Make sure the app has launched before calling this function.")
    // }
  }
}
