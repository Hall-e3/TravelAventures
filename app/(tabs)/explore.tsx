import { Palette, Spacing, Typography, useTheme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.bgSecondary }]}>
      <LinearGradient
        colors={["rgba(47, 138, 119, 0.25)", "#FFFFFF"]}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <LinearGradient
              colors={[Palette.brand, "#45B39D"]}
              style={styles.iconGradient}
            >
              <Ionicons name="sparkles" size={40} color="white" />
            </LinearGradient>
          </View>

          <Text style={[styles.title, { color: theme.textPrimary }]}>
            Coming Soon
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            We're building something amazing for your next adventure. Stay
            tuned!
          </Text>

          <View style={styles.brandBadge}>
            <Text style={styles.brandText}>TravelAventures Premium</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: Spacing.xxxl,
  },
  iconContainer: {
    marginBottom: Spacing.xxl,
    shadowColor: Palette.brand,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  iconGradient: {
    width: 100,
    height: 100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...Typography.screenTitle,
    textAlign: "center",
    marginBottom: Spacing.md,
  },
  subtitle: {
    ...Typography.body,
    textAlign: "center",
    color: "#666",
    lineHeight: 24,
    maxWidth: 280,
  },
  brandBadge: {
    marginTop: Spacing.xxxl,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 20,
  },
  brandText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
