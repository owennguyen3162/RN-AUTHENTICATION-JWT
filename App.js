import * as React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { navigationRef } from "./src/components/navigation/RootNavigation";
import Login from "./src/components/Screen/Login";
import Register from "./src/components/Screen/Register";
import Home from "./src/components/Screen/Home";
import TokenService from "./src/redux/services/token.service";
const Stack = createNativeStackNavigator();
const App = () => {
  const [user, setUser] = React.useState(undefined);
  const [Loading, setLoading] = React.useState(true);

  const settingOptions = {
    headerShown: false,
  };
  React.useEffect(() => {
    getCurrent();
  }, []);

  const getCurrent = async () => {
    try {
      const value = await TokenService.getUser();
      setUser(value);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return Loading ? (
    <ActivityIndicator />
  ) : (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={settingOptions}>
          {user === undefined
            ? (() => AuthNavigator())()
            : (() => MainNavigator())()}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const MainNavigator = () => {
  return (
    <>
      <Stack.Screen component={Home} name="Home" />
    </>
  );
};

const AuthNavigator = () => {
  return (
    <>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={Home} name="Home" />
    </>
  );
};
export default App;
