# Android APK wrapper (not a compiled APK)
This is an Android Studio project starter. The online multiplayer server must first be deployed at a stable HTTPS URL.

The recommended route is to build a Trusted Web Activity with Google's Bubblewrap CLI, or use Android Studio with the WebView starter below. A Trusted Web Activity requires site ownership verification and a valid web app manifest. A WebView wrapper can be used for testing but must not claim that the hosted site works offline.

To use the WebView starter, create an Android Studio Empty Views Activity (Java) with package `com.neonpokerclub.app`, copy `MainActivity.java` to its Java source directory, and set `INTERNET` permission in AndroidManifest.xml. Replace `https://YOUR-HOSTED-SITE.example/` with the real HTTPS site before building an APK. The server code is in the parent folder.

**No APK is included.** A signed APK requires Android SDK/build tools, a configured HTTPS deployment, and a signing key controlled by the app owner.
