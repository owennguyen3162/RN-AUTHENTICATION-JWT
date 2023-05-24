import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AuthService from "../../redux/services/auth.service";
const Setting = ({ navigation }) => {
  const handleLogout = () => {
    AuthService.logout().then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <View style={Style.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Setting;
