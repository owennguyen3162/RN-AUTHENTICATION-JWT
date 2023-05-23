import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInfo} from '../../redux/actions/auth'
const Info = ({ navigation }) => {
  const data = useSelector((data) => data.authReducer);
const dispatch = useDispatch()
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus",async () => {
     await dispatch(getInfo());
    //  console.log(data);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={Style.container}>
      {/* <Text>{data.data.data.username}</Text>
      <Text>{data.data.data.password}</Text>
      <Text>{data.data.accessToken}</Text>
      <Text>{data.data.refreshToken}</Text> */}
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Info;