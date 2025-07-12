import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const signin = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/(auth)/sign-up")} />
    </View>
  );
};

export default signin;
