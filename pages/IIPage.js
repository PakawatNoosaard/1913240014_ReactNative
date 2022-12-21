import { View, Text, Button } from 'react-native'
import React from 'react'

const IIPage = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          
          <Text>This is the II Page</Text>
          <Button
            title="Go to IPage"
            onPress={() => navigation.navigate("IPage")}
          />
          <Button
            title="Go to IIIPage"
            onPress={() => navigation.navigate("IIIPage")}
          />
        </View>
      );
}

export default IIPage;