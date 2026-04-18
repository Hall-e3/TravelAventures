import { AppBar, BulletSection, DaySelector, Icon } from "@/components/ui";
import {
  Palette,
  Radii,
  Sizes,
  Spacing,
  Typography,
  useTheme,
} from "@/constants/theme";
import { DAY_TABS, FILTERS, HIGHLIGHTS, INCLUDES } from "@/data";
import { Itinerary } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const theme = useTheme();
  const [selectedDay, setSelectedDay] = useState(0);

  const itemData: Itinerary | null = params.item
    ? JSON.parse(params.item as string)
    : null;

  const title = itemData?.title ?? "Ocean View Cabana with Lunch";
  const subtitle =
    itemData?.subtitle ??
    "Relax and sunbathe like a VIP on a private 2-person cabana.";
  const price = itemData?.price ?? "From $1100";
  const tag = itemData?.tag ?? "NATURE";
  const image =
    itemData?.image ??
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800";
  const description =
    itemData?.description ??
    "Feel on cloud nine as you enjoy a day on Pearl Island, on your luxurious cabana. Walk along the two idyllic beaches and discover the island's lighthouse with stunning views of the surrounding seascape.";
  const highlights = itemData?.highlights ?? HIGHLIGHTS;
  const includes = itemData?.includes ?? INCLUDES;
  const dayTabs = itemData?.dayTabs ?? DAY_TABS;

  const thumbnails = [image, image, image];

  return (
    <View style={[styles.container, { backgroundColor: theme.bgSecondary }]}>
      <LinearGradient
        colors={["rgba(47, 138, 119, 0.25)", "#FFFFFF"]}
        style={styles.gradient}
      />
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <AppBar
          leftActions={
            <Icon
              onPress={() => router.back()}
              underlayColor="rgba(0,0,0,0.1)"
              icon={
                <Ionicons
                  name="chevron-back"
                  size={Sizes.iconSm}
                  color={theme.black}
                />
              }
            />
          }
          rightActions={
            <View style={styles.headerActions}>
              <Icon
                onPress={() => {}}
                underlayColor="rgba(0,0,0,0.1)"
                icon={
                  <Ionicons
                    name="heart-outline"
                    size={Sizes.iconSm}
                    color={theme.black}
                  />
                }
              />
              <Icon
                onPress={() => {}}
                underlayColor="rgba(0,0,0,0.1)"
                icon={
                  <Ionicons
                    name="share-social-outline"
                    size={Sizes.iconSm}
                    color={theme.black}
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
          <View style={styles.heroWrap}>
            <View style={styles.heroMain}>
              <Image source={{ uri: image }} style={styles.heroImage} />
            </View>

            <View style={styles.heroSide}>
              <View style={styles.thumbnailsWrap}>
                {thumbnails.slice(0, 2).map((uri, i) => (
                  <View key={i} style={styles.thumbContainer}>
                    <Image source={{ uri }} style={styles.thumb} />
                    {i === 1 && (
                      <View style={styles.thumbOverlay}>
                        <Text style={styles.thumbOverlayText}>(12 Photos)</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Content */}
          <View style={styles.content}>
            <View style={[styles.tagBadge, { backgroundColor: theme.yellow }]}>
              <Text style={[styles.tagText, { color: theme.white }]}>
                {tag}
              </Text>
            </View>

            <Text style={[styles.itemTitle, { color: theme.textPrimary }]}>
              {title}
            </Text>
            <Text style={[styles.itemSubtitle, { color: theme.textSecondary }]}>
              {subtitle}
            </Text>

            <View style={[styles.filterRow, { borderColor: theme.brand }]}>
              <View style={styles.filterPills}>
                {FILTERS.map((f, i) => (
                  <View key={i} style={styles.filterPill}>
                    <Text
                      style={[styles.filterText, { color: theme.textPrimary }]}
                    >
                      {f}
                    </Text>
                    {i < FILTERS.length - 1 && (
                      <View
                        style={[
                          styles.filterDot,
                          { backgroundColor: theme.brand },
                        ]}
                      />
                    )}
                  </View>
                ))}
              </View>
              <TouchableOpacity>
                <Text style={[styles.changeText, { color: theme.yellow }]}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Itinerary
            </Text>
            <DaySelector selected={selectedDay} onSelect={setSelectedDay} />

            <View style={styles.activityCard}>
              <View
                style={[styles.dayBadge, { backgroundColor: theme.yellow }]}
              >
                <Text style={[styles.dayBadgeText, { color: theme.white }]}>
                  DAY 1
                </Text>
              </View>
              <Text
                style={[styles.activityTitle, { color: theme.textPrimary }]}
              >
                Hotel Pickup & Drop-off ( Mexico )
              </Text>
            </View>

            <Text
              style={[styles.subSectionTitle, { color: theme.textPrimary }]}
            >
              Day Meals
            </Text>
            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            <Text
              style={[styles.activitiesLine, { color: theme.textSecondary }]}
            >
              Boat Riding, Water Activity, Sunset Cruise, Etc.
            </Text>

            <View style={[styles.divider, { backgroundColor: theme.border }]} />

            <BulletSection title="HIGHLIGHTS" items={highlights} />
            <BulletSection title="INCLUDES" items={includes} />

            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Description
            </Text>
            <Text style={[styles.bodyText, { color: theme.textSecondary }]}>
              {description}
            </Text>

            <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>
              Cancellation Policy
            </Text>
            <Text style={[styles.bodyText, { color: theme.textSecondary }]}>
              Cancel up to 24 hours in advance for a full refund
            </Text>
          </View>
        </ScrollView>
        <View style={[styles.bottomBar, { backgroundColor: theme.black }]}>
          <View>
            <Text style={[styles.bottomPrice, { color: theme.white }]}>
              ${price.replace("From $", "")}
            </Text>
            <Text
              style={[styles.bottomPriceSub, { color: theme.textSecondary }]}
            >
              Per Person
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.bookBtn, { backgroundColor: theme.yellow }]}
          >
            <Text style={[styles.bookBtnText, { color: theme.white }]}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  headerActions: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 150,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },
  heroWrap: {
    flexDirection: "row",
    gap: Spacing.sm,
    justifyContent: "center",
    marginTop: Spacing.md,
  },
  heroMain: {
    width: Sizes.heroMainWidth,
    height: Sizes.heroMainHeight,
    borderRadius: Radii.xs,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroSide: {
    gap: Spacing.sm,
  },
  thumbnailsWrap: {
    gap: Spacing.sm,
  },
  thumbContainer: {
    width: Sizes.heroThumbWidth,
    height: Sizes.heroThumbHeight,
    borderRadius: Radii.xs,
    overflow: "hidden",
    position: "relative",
  },
  thumb: {
    width: "100%",
    height: "100%",
  },
  thumbOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbOverlayText: {
    color: Palette.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  content: {
    padding: Spacing.xl,
  },
  tagBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs,
    borderRadius: Radii.xl,
    marginBottom: Spacing.md,
  },
  tagText: {
    ...Typography.inputLabel,
  },
  itemTitle: {
    ...Typography.sectionHead,
    fontWeight: "600",
    marginBottom: Spacing.xs,
  },
  itemSubtitle: {
    ...Typography.bodySecondary,
    marginBottom: Spacing.xl,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: Radii.full,
    padding: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
  filterPills: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  filterPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  filterText: {
    ...Typography.bodySecondary,
    fontSize: 12,
    fontWeight: "500",
  },
  filterDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  changeText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginVertical: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.sectionHead,
    marginBottom: Spacing.lg,
  },
  subSectionTitle: {
    ...Typography.sectionHead,
    fontSize: 16,
    marginTop: Spacing.xl,
  },
  activityCard: {
    gap: Spacing.md,
  },
  dayBadge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radii.md,
    alignSelf: "flex-start",
  },
  dayBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  activityTitle: {
    ...Typography.cardTitle,
  },
  activitiesLine: {
    ...Typography.bodySecondary,
    fontSize: 14,
  },
  bodyText: {
    ...Typography.body,
    fontSize: 14,
    marginBottom: Spacing.xxl,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
  },
  bottomPrice: {
    ...Typography.heroHeading,
  },
  bottomPriceSub: {
    ...Typography.caption,
  },
  bookBtn: {
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.sm,
    borderRadius: Radii.xs,
  },
  bookBtnText: {
    ...Typography.body,
    fontWeight: "600",
  },
});
