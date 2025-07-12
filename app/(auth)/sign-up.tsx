import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const signup = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Button title="Sign In" onPress={() => router.push("/(auth)/sign-in")} />
    </View>
  );
};

export default signup;
