import {
  AppBar,
  CategoryCard,
  Icon,
  ItineraryCard,
  SectionHeader,
} from "@/components/ui";
import { banner, Radii, Sizes, Spacing } from "@/constants";
import { useTheme } from "@/constants/theme";
import {
  CATEGORIES,
  POPULAR_ITINERARIES,
  RECOMMENDED_ITINERARIES,
} from "@/data";
import { Category, Itinerary } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.bgSecondary }]}>
      <LinearGradient
        colors={[theme.brand, theme.bgSecondary]}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <AppBar
          leftActions={
            <Icon
              onPress={() => {}}
              underlayColor="rgba(255,255,255,0.15)"
              icon={
                <Ionicons
                  name="menu-outline"
                  size={Sizes.iconLg}
                  color={theme.white}
                />
              }
            />
          }
          rightActions={
            <View style={styles.appBarActions}>
              <Icon
                onPress={() => {}}
                underlayColor="rgba(255,255,255,0.15)"
                icon={
                  <Ionicons
                    name="search-outline"
                    size={Sizes.iconMd}
                    color={theme.white}
                  />
                }
              />
              <Icon
                onPress={() => {}}
                underlayColor="rgba(255,255,255,0.15)"
                icon={
                  <Ionicons
                    name="notifications-outline"
                    size={Sizes.iconMd}
                    color={theme.white}
                  />
                }
              />
            </View>
          }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Banner */}
          <View
            style={[styles.bannerContainer, { backgroundColor: theme.white }]}
          >
            <Image
              source={banner}
              style={styles.bannerImage}
              contentFit="fill"
            />
          </View>

          {/* Categories */}
          <View style={styles.section}>
            <SectionHeader title="Categories" />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesScroll}
            >
              {CATEGORIES.map((cat: Category) => (
                <CategoryCard key={cat.id} label={cat.label} />
              ))}
            </ScrollView>
          </View>

          {/* Popular Itineraries */}
          <View style={styles.section}>
            <SectionHeader title="Popular Itineraries" onViewAll={() => {}} />
            <FlatList
              data={POPULAR_ITINERARIES}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }: { item: Itinerary }) => (
                <ItineraryCard
                  item={item}
                  onPress={() =>
                    router.push({
                      pathname: "/detail",
                      params: { item: JSON.stringify(item) },
                    })
                  }
                />
              )}
            />
          </View>

          {/* Recommended Itineraries */}
          <View style={styles.section}>
            <SectionHeader
              title="Recommended Itineraries"
              onViewAll={() => {}}
            />
            <FlatList
              data={RECOMMENDED_ITINERARIES}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }: { item: Itinerary }) => (
                <ItineraryCard
                  item={item}
                  style={styles.recommendedCard}
                  onPress={() =>
                    router.push({
                      pathname: "/detail",
                      params: { item: JSON.stringify(item) },
                    })
                  }
                />
              )}
            />
          </View>
        </ScrollView>
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
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },
  appBarActions: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  bannerContainer: {
    marginHorizontal: Spacing.xl,
    height: Sizes.bannerHeight,
    borderRadius: Radii.xl,
    overflow: "hidden",
    marginBottom: Spacing.xl,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginBottom: Spacing.xxl,
  },
  categoriesScroll: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    gap: Spacing.lg,
  },
  listContent: {
    paddingHorizontal: Spacing.xl,
    gap: Spacing.lg,
  },
  recommendedCard: {
    width: Sizes.recommendedCardWidth,
    height: Sizes.recommendedCardHeight,
  },
});
