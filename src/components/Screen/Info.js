import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../redux/actions/auth";
const Info = ({ navigation }) => {
  const data = useSelector((data) => data.authReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      dispatch(getInfo());
    });
    return unsubscribe;
  }, [navigation]);

  // console.log(data);
  return (
    <View style={Style.container}>
      {data.isLoading || data.data === null ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>{data.data.data.username}</Text>
          <Text>{data.data.data.password}</Text>
          <Text>{data.data.data.refreshToken}</Text>
          <Button
            title="Go to Detail"
            onPress={() => navigation.navigate("Detail")}
          />
        </>
      )}
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
