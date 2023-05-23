import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
const Login = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const data = useSelector((data) => data.authReducer);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login(username, password));
  };

  return (
    <View style={Style.container}>
      <Text>LOGIN</Text>
      <TextInput
        style={Style.textInput}
        placeholder="username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={Style.textInput}
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="LOGIN" onPress={() => handleLogin()} />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>You don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "blue" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  textInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
  },
});

export default Login;
