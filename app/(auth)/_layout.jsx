import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const AuthLayout = () => {
  return (
   <>
    <Stack>
      <Stack.Screen
        name="login"
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="signup"
        options={{headerShown:false}}
      />
    </Stack>
    <StatusBar backgroundColor="blue" style="light"/>
   </>
  )
}
export default AuthLayout