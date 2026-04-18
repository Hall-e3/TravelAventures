import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function AuthProvider() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
