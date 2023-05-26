import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./src/redux/store";
import Login from "./src/components/Screen/Login";
import Register from "./src/components/Screen/Register";
import Home from "./src/components/Screen/Home";
import TokenService from "./src/redux/services/token.service";
import Detail from "./src/components/Screen/Detail";
import { login } from "./src/redux/actions/auth";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const MainNavigator = () => {
  const settingOptions = {
    headerShown: false,
  };
  const dispatch = useDispatch();

  const data = useSelector((value) => value.isSignedIn);
  const [User, setUser] = React.useState({});

  React.useEffect(() => {
    TokenService.getUser()
      .then((res) => dispatch(login(res.data.username, res.data.password)))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack.Navigator screenOptions={settingOptions}>
      {data.isSignedIn ? (
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
