import { View, Text } from "react-native";
import React from "react";

const Greeting = ({ name }) => {
  // const {name}= props;
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "blue" }}>Hello : {name}</Text>
    </View>
  );
};

const LotsOfGreeting = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", top: 50 }}>
      <Greeting name="Merry Christmas" />
      <Greeting name="Happy New Year" />
      <Greeting name="Songkran Festival" />
    </View>
  );
};

export default LotsOfGreeting;