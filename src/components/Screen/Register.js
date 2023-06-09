import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/auth";
const Register = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const data = useSelector((value) => value.authReducer);

  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(register(username, password));
  };

  return (
    <View style={Style.container}>
      {data.isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={Style.container}>
          <Text>Register</Text>
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
          <Button title="REGISTER" onPress={() => handleRegister()} />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text>You have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "blue" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    width: "100%",
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

export default Register;
