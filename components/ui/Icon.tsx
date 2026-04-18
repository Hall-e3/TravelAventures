import React from "react";
import { StyleSheet, TouchableHighlight, ViewStyle, StyleProp } from "react-native";
import { Radii } from "@/constants/theme";

interface IconProps {
  onPress: () => void;
  icon: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  underlayColor?: string;
}

export default function Icon({
  onPress,
  icon,
  style,
  underlayColor = "rgba(0,0,0,0.05)",
}: IconProps) {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.8}
      underlayColor={underlayColor}
      style={[
        styles.default,
        style,
      ]}
    >
      {icon}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  default: {
    padding: 8,
    borderRadius: Radii.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
