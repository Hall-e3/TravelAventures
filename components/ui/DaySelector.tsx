import { Radii, Spacing, useTheme } from "@/constants/theme";
import { DAY_TABS } from "@/data";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface DaySelectorProps {
  selected: number;
  onSelect: (index: number) => void;
}

export default function DaySelector({ selected, onSelect }: DaySelectorProps) {
  const theme = useTheme();

  return (
    <View style={styles.daySelectorRow}>
      {DAY_TABS.map((d, i) => {
        const isSelected = i === selected;
        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.dayTab,
              { borderColor: isSelected ? theme.brand : theme.border },
            ]}
            onPress={() => onSelect(i)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.dayTabTopPart,
                {
                  backgroundColor: isSelected ? theme.brand : theme.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.dayTabMonth,
                  { color: isSelected ? theme.white : theme.textSecondary },
                ]}
              >
                {d.day}
              </Text>
            </View>
            <Text
              style={[
                styles.dayTabLabel,
                { color: isSelected ? theme.brand : theme.textPrimary },
              ]}
            >
              {d.label} {d.date}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  daySelectorRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginBottom: Spacing.xxl,
  },
  dayTab: {
    flex: 1,
    borderRadius: Radii.sm,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "white",
  },
  dayTabTopPart: {
    width: "100%",
    paddingVertical: Spacing.xs,
    alignItems: "center",
  },
  dayTabMonth: {
    fontSize: 10,
    fontWeight: "bold",
  },
  dayTabLabel: {
    fontSize: 12,
    paddingVertical: Spacing.sm,
    fontWeight: "500",
  },
});
