import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme, Spacing, Radii, Typography } from "@/constants/theme";

interface BulletSectionProps {
  title: string;
  items: string[];
  color?: string;
}

export default function BulletSection({ title, items, color }: BulletSectionProps) {
  const theme = useTheme();

  return (
    <View style={styles.bulletSection}>
      <View style={[styles.bulletBadge, { backgroundColor: color || theme.yellow }]}>
        <Text style={[styles.bulletBadgeText, { color: theme.white }]}>{title}</Text>
      </View>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={[styles.bullet, { color: theme.brand }]}>•</Text>
          <Text style={[styles.bulletText, { color: theme.textSecondary }]}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bulletSection: {
    marginBottom: Spacing.xxl,
  },
  bulletBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.sm,
    marginBottom: Spacing.lg,
  },
  bulletBadgeText: {
    ...Typography.badge,
    fontWeight: "bold",
    fontSize: 12,
  },
  bulletRow: {
    flexDirection: "row",
    gap: Spacing.md,
    marginBottom: Spacing.sm,
  },
  bullet: {
    fontSize: 18,
  },
  bulletText: {
    ...Typography.bodySecondary,
    fontSize: 14,
    flex: 1,
  },
});
