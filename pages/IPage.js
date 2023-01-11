import { View, Text, Button, StyleSheet, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/styles";

const IPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate('IIPage')
            }
            title="Go to II Page"            
          />
          <Button
            onPress={
              () => navigation.navigate('IIIPage')
            }
            title="Go to III Page"            
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

export default IPage;