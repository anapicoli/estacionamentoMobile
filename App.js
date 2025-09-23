import React, { useCallback, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Login from "./src/login";
import Cadastro from "./src/cadastro";
import ListaVeiculos from "./src/listaveiculos";
import RegistrarEntrada from "./src/registrarentrada";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
      "BebasNeue-Regular": require("./assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf"),
      "Inter-Regular": require("./assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
      "Inter-Medium": require("./assets/fonts/Inter/static/Inter_18pt-Medium.ttf"),
      "Nunito-SemiBold": require("./assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
      "Nunito-Regular": require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
  });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onLayout={onLayoutRootView}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ListaVeiculos" component={ListaVeiculos} />
        <Stack.Screen name="RegistrarEntrada" component={RegistrarEntrada} />
        {/* <Stack.Screen name="RegistrarSaida" component={RegistrarSaida} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}