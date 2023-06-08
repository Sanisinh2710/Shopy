/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-gesture-handler";
import React from "react";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux-duck/store";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./src/Navigation/ShopNavigator";
import { PersistGate } from "redux-persist/integration/react";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loding</Text>} persistor={persistor}>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
