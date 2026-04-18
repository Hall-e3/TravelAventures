import { Spacing, Typography, useTheme } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
}

export default function SectionHeader({
  title,
  onViewAll,
}: SectionHeaderProps) {
  const theme = useTheme();

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
          <Text style={[styles.viewAll, { color: theme.brand }]}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.cardTitle,
  },
  viewAll: {
    ...Typography.bodySecondary,
  },
});
