import * as React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import { navigationRef } from "./src/components/navigation/RootNavigation";
import Login from "./src/components/Screen/Login";
import Register from "./src/components/Screen/Register";
import Home from "./src/components/Screen/Home";
import TokenService from "./src/redux/services/token.service";
import Detail from "./src/components/Screen/Detail";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const MainNavigator = () => {
  const settingOptions = {
    headerShown: false,
  };

  const data = useSelector((value) => value.isSignedIn);
  const [User, setUser] = React.useState("");

  React.useEffect(() => {
    TokenService.getUser().then((res) => setUser(res));
  }, []);

  return (
    <Stack.Navigator screenOptions={settingOptions}>
      {data.isSignedIn || User !== undefined ? (
        <>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Detail} name="Detail" />
        </>
      ) : (
        <>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
        </>
      )}
    </Stack.Navigator>
  );
};
export default App;
