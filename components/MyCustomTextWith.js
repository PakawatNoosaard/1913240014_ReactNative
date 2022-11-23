import { View, Text } from "react-native";
import React from "react";

const MyCustomTextWiths = ({ fname, lname }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Your First Name is {fname} and Last name is {lname}{" "}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View>
      <MyCustomTextWiths fname="Pakawat" lname="Noosaard" />
      <MyCustomTextWiths fname="Aekkachai" lname="Raweewan" />
    </View>
  );
};

export default MyCustomTextWith;