import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Detail = () => {
  return (
    <View style={Style.container}>
      <Text>Detail</Text>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Detail;
