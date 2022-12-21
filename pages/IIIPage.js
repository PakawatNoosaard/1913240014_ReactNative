import { View, Text, Button } from 'react-native'
import React from 'react'

const IIIPage = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          
          <Text>This is the III Page</Text>
          <Button
            title="Go to IPage"
            onPress={() => navigation.navigate("IPage")}
          />
          <Button
            title="Go to IIPage"
            onPress={() => navigation.navigate("IIPage")}
          />
        </View>
      );
}

export default IIIPage;