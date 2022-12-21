import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/styles";

const IIIPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
      <Text style={styles.textTopStyle}>This is The IIIPage</Text>
      <Button
        title="Go to IPage"
        onPress={() => navigation.navigate("IPage")}
      />
      <Button
        title="Go to IIPage"
        onPress={() => navigation.navigate("IIPage")}
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

export default IIIPage;