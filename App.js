import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { navigationRef } from "./src/components/navigation/RootNavigation"
import Login from "./src/components/Screen/Login";
import Register from "./src/components/Screen/Register";
import Home from "./src/components/Screen/Home";
const Stack = createNativeStackNavigator();
const App = () => {
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
