import { FONTS, LOCAL_IMAGES } from "@/constants/cachedAssets";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { AppProvider, AuthProvider } from "@/providers";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAppReady, setIsAppReady] = useState(false);

  const [fontsLoaded, fontError] = useFonts(FONTS);

  const cacheResources = async () => {
    const localImages = LOCAL_IMAGES.map((image) =>
      Asset.fromModule(image).downloadAsync(),
    );

    try {
      await Promise.all([...localImages]);
      return true;
    } catch (error) {
      console.warn("Error caching resources:", error);
      return false;
    }
  };

  const prepareApp = useCallback(async () => {
    try {
      await cacheResources();
      setIsAppReady(true);
    } catch (e) {
      console.warn(e);
      setIsAppReady(true);
    }
  }, []);

  const hideSplashScreen = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn("Error hiding splash screen:", error);
    }
  }, []);

  useEffect(() => {
    if ((fontsLoaded || fontError) && !isAppReady) {
      prepareApp();
    }
  }, [fontsLoaded, fontError, isAppReady, prepareApp]);

  useEffect(() => {
    if (isAppReady) {
      hideSplashScreen();
    }
  }, [isAppReady, hideSplashScreen]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (!isAppReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <AuthProvider />
            <StatusBar style="auto" />
          </ThemeProvider>
        </AppProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
