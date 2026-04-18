import { Spacing, Typography, useTheme } from "@/constants/theme";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export type AppBarProps = {
  title?: string;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AppBar({
  title,
  leftActions,
  rightActions,
  style,
}: AppBarProps) {
  const theme = useTheme();

  return (
    <View style={[styles.row, style]}>
      {leftActions}
      {title && (
        <Text
          style={[styles.title, { color: theme.textPrimary }]}
          numberOfLines={1}
        >
          {title}
        </Text>
      )}
      {rightActions}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 50,
    paddingHorizontal: Spacing.md,
  },
  title: {
    ...Typography.cardTitle,
    flex: 1,
    textAlign: "center",
  },
});
