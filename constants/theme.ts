import { useColorScheme } from "react-native";

export const Palette = {
  brand: "#2F8A77",
  white: "#FFFFFF",
  black: "#000000",
  yellow: "#F2B818",
  gray: "#666666",
  lightGray: "#EEEEEE",
  offWhite: "#FFFFFF",
  shadow: "#24242414",
};

const Fonts = {
  regular: "ProductSans-Regular",
  medium: "ProductSans-Regular", // Fallback to regular as medium is missing
  bold: "ProductSans-Bold",
};

export const Colors = {
  light: {
    bgPrimary: Palette.white,
    bgSecondary: Palette.offWhite,
    textPrimary: Palette.black,
    textSecondary: Palette.gray,
    brand: Palette.brand,
    yellow: Palette.yellow,
    white: Palette.white,
    black: Palette.black,
    border: Palette.lightGray,
    tint: Palette.brand,
    tabIconDefault: Palette.gray,
    tabIconSelected: Palette.brand,
  },
  dark: {
    bgPrimary: Palette.black,
    bgSecondary: "#1A1A1A",
    textPrimary: Palette.white,
    textSecondary: "#AAAAAA",
    brand: Palette.brand,
    yellow: Palette.yellow,
    white: Palette.white,
    black: Palette.black,
    border: "#333333",
    tint: Palette.brand,
    tabIconDefault: "#AAAAAA",
    tabIconSelected: Palette.brand,
  },
};

export const Typography = {
  screenTitle: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  heroHeading: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: -0.3,
  },
  sectionHead: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    fontWeight: "500",
  },
  cardTitle: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    fontWeight: "500",
  },
  body: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 22,
  },
  bodySecondary: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19,
  },
  inputLabel: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    fontWeight: "500",
  },
  caption: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    fontWeight: "400",
  },
  overline: {
    fontFamily: Fonts.medium,
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  badge: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    fontWeight: "500",
  },
  claimCode: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    fontWeight: "600",
    letterSpacing: 8,
  },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  section: 32,
  screenH: 20,
} as const;

export const Radii = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
} as const;

export const Sizes = {
  iconSm: 20,
  iconMd: 24,
  iconLg: 28,
  bannerHeight: 160,
  // Figma Sizes
  categoryCardWidth: 78,
  categoryCardHeight: 78,
  popularCardWidth: 250,
  popularCardHeight: 139,
  recommendedCardWidth: 141,
  recommendedCardHeight: 180,
  heroMainWidth: 209,
  heroMainHeight: 241,
  heroThumbWidth: 111,
  heroThumbHeight: 70,
} as const;

export const Shadows = {
  category: {
    shadowColor: Palette.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: Radii.sm,
    elevation: 1,
  },
};

export function useTheme() {
  const scheme = useColorScheme();
  return scheme === "dark" ? Colors.dark : Colors.light;
}
