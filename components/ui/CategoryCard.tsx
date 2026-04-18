import {
  adventure,
  culture,
  food,
  nature,
  Radii,
  Shadows,
  Sizes,
  Spacing,
  Typography,
  useTheme,
} from "@/constants";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CATEGORY_IMAGES: Record<string, any> = {
  Nature: nature,
  Adventure: adventure,
  Culture: culture,
  Food: food,
};

export interface CategoryCardProps {
  label: string;
  onPress?: () => void;
}

export default function CategoryCard({ label, onPress }: CategoryCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: theme.white }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.categoryIconWrap}>
        <Image
          source={CATEGORY_IMAGES[label]}
          style={styles.categoryImage}
          contentFit="contain"
        />
      </View>
      <Text style={[styles.categoryLabel, { color: theme.textPrimary }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    borderRadius: Radii.sm,
    height: Sizes.categoryCardHeight,
    width: Sizes.categoryCardWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.xs,
    ...Shadows.category,
  },
  categoryIconWrap: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  categoryLabel: {
    ...Typography.bodySecondary,
    textAlign: "center",
    fontWeight: "600",
  },
});
