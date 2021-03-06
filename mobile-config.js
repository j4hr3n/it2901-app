/**
  This file holds configuration of a number of mobile related properties.
**/

/**
  Icons for the app, built using the Ionic Resource tool
**/
App.icons({

//iOS icons
'iphone': 'resources/ios/icon/icon-60.png',
'iphone_2x': 'resources/ios/icon/icon-60@2x.png',
'iphone_3x': 'resources/ios/icon/icon-60@3x.png',
'ipad': 'resources/ios/icon/icon-76.png',
'ipad_2x': 'resources/ios/icon/icon-76@2x.png',

//Android icons
'android_ldpi': 'resources/android/icon/drawable-ldpi-icon.png',
'android_mdpi': 'resources/android/icon/drawable-mdpi-icon.png',
'android_hdpi': 'resources/android/icon/drawable-hdpi-icon.png',
'android_xhdpi': 'resources/android/icon/drawable-xhdpi-icon.png'
});

/**
  Splashscreens for the app, built using the Ionic Resource tool
**/
App.launchScreens({

//iOS Splashscreens
'iphone': 'resources/ios/splash/Default~iphone.png',
'iphone_2x': 'resources/ios/splash/Default@2x~iphone.png',
'iphone5': 'resources/ios/splash/Default-568h@2x~iphone.png',
'iphone6': 'resources/ios/splash/Default-667h.png',
'iphone6p_portrait': 'resources/ios/splash/Default-736h.png',
'ipad_portrait': 'resources/ios/splash/Default-Portrait~ipad.png',
'ipad_portrait_2x': 'resources/ios/splash/Default-Portrait@2x~ipad.png',
'ipad_landscape': 'resources/ios/splash/Default-Landscape~ipad.png',
'ipad_landscape_2x': 'resources/ios/splash/Default-Landscape@2x~ipad.png',

//Android Splashscreens
'android_ldpi_portrait': 'resources/android/splash/drawable-port-ldpi-screen.png',
'android_ldpi_landscape': 'resources/android/splash/drawable-land-ldpi-screen.png',
'android_mdpi_portrait': 'resources/android/splash/drawable-port-mdpi-screen.png',
'android_mdpi_landscape': 'resources/android/splash/drawable-land-mdpi-screen.png',
'android_hdpi_portrait': 'resources/android/splash/drawable-port-hdpi-screen.png',
'android_hdpi_landscape': 'resources/android/splash/drawable-land-hdpi-screen.png',
'android_xhdpi_portrait': 'resources/android/splash/drawable-port-xhdpi-screen.png',
'android_xhdpi_landscape': 'resources/android/splash/drawable-land-xhdpi-screen.png'
});

/**
  Whitelist all network requests
**/
App.accessRule('*');
