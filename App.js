import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Screen/Login";
import Register from "./components/Screen/Register";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import setup from "./src/redux/services/setupInterceptors";
import Home from "./components/Screen/Home";
import { navigationRef } from "./components/navigation/RootNavigation"
const Stack = createNativeStackNavigator();
const App = () => {
  setup(store);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
