

// Dependencies
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_200ExtraLight,
  Raleway_700Bold,
  Raleway_300Light,
  Raleway_100Thin,
} from "@expo-google-fonts/raleway";
import Navigation from "./src/navigator/navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthState } from "./src/contexts/auth/state";

// State
// import { AuthState } from "./src/general/contexts/auth/state";

const App = () => {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_200ExtraLight,
    Raleway_700Bold,
    Raleway_300Light,
    Raleway_100Thin,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      // keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
      try {
      } catch (e) {
        return;
      } finally {
        // tell the application to render

        //set Timeout of 2 minutes

        setTimeout(() => {
          setAppIsReady(true);
        }, 5000);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  if (!appIsReady) {
    return;
  }

  return (
    <SafeAreaProvider
      style={{ flex: 1, backgroundColor: "#E4B511" }}
      onLayout={onLayoutRootView}
    >
      <AuthState>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      </AuthState>
    </SafeAreaProvider>
  );
};

export default App;
