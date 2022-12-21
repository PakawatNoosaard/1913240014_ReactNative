import { View, Text, Button } from "react-native";
import React from "react";
import {Ionicons,FontAwesome } from '@expo/vector-icons'

const IPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the I Page</Text>
      <Button
        title="Go to IIPage"
        onPress={() => navigation.navigate("IIPage")}
      />
      <Button
        title="Go to IIIPage"
        onPress={() => navigation.navigate("IIIPage")}
      />
    </View>
  );
};
export default IPage;