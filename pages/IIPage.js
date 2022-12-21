import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/styles";

const IIPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is The IIPage</Text>
      <Button
        title="Go to IPage"
        onPress={() => navigation.navigate("IPage")}
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

export default IIPage;