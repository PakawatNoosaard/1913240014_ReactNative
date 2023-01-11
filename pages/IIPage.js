import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/styles";

const IIPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is Second Page under Second Page Option
          </Text>
          <Button
            title="Go to I Page"
            onPress={
              () => navigation.navigate('IPage')
            }
          />
          <Button
            title="Go to III Page"
            style = {{padding:20}}
            onPress={
              () => navigation.navigate('IIIPage')
            }
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          Create by: YourName
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default IIPage;