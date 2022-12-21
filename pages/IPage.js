import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/styles";

const IPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is The IPage</Text>
      <Button
        title="Go to IIPage"
        onPress={() => navigation.navigate("IIPage")}
      />
      <Button
        title="Go to IIIPage"
        onPress={() => navigation.navigate("IIIPage")}
      />
      </View>
      <View style={{  justifyContent: "flex-end" }}>
        <Text style={styles.textBottomSytel}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </View>
  );
};

export default IPage;