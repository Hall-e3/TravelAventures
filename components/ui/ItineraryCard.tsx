import { Radii, Sizes, Spacing, Typography, useTheme } from "@/constants/theme";
import type { Itinerary } from "@/types";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ItineraryCardProps {
  item: Itinerary;
  onPress?: () => void;
  style?: any;
}

export default function ItineraryCard({
  item,
  onPress,
  style,
}: ItineraryCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.75)"]}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={[styles.badgeWrap, { backgroundColor: theme.white }]}>
        <Text style={[styles.badge, { color: theme.textPrimary }]}>
          {item.tag}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.white }]} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={[styles.price, { color: "rgba(255,255,255,0.85)" }]}>
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Sizes.popularCardWidth,
    height: Sizes.popularCardHeight,
    borderRadius: Radii.sm,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badgeWrap: {
    position: "absolute",
    top: Spacing.sm,
    left: Spacing.sm,
    borderRadius: Radii.xl,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.xl,
  },
  badge: {
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  info: {
    position: "absolute",
    bottom: Spacing.md,
    left: Spacing.md,
    right: Spacing.md,
  },
  title: {
    ...Typography.bodySecondary,
    fontWeight: "600",
  },
  price: {
    ...Typography.caption,
  },
});
