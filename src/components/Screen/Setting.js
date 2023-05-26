import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
const Setting = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
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
