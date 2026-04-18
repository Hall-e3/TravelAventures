import type { Itinerary } from "@/types";

const COMMON_HIGHLIGHTS = [
  "Relax in your own private cabana and soak in the views",
  "Enjoy an authentic Bahamian lunch served at your cabana",
  "Snorkel through the vibrant coral reef and discover",
];

const COMMON_INCLUDES = [
  "Unlimited water, soft drinks, beer, and selected cocktails",
  "Roundtrip ferry transportation",
  "Private cabana for 2 people",
];

const COMMON_DESCRIPTION = "Feel on cloud nine as you enjoy a day on Pearl Island, on your luxurious cabana. Walk along the two idyllic beaches and discover the island's lighthouse with stunning views of the surrounding seascape.";

export const POPULAR_ITINERARIES: Itinerary[] = [
  {
    id: "1",
    title: "Ocean View Cabana with Lunch",
    subtitle: "Relax and sunbathe like a VIP on a private 2-person cabana.",
    price: "From $1100",
    tag: "NATURE",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    description: COMMON_DESCRIPTION,
    highlights: COMMON_HIGHLIGHTS,
    includes: COMMON_INCLUDES,
  },
  {
    id: "2",
    title: "Eco Forest Retreat",
    subtitle: "Immerse yourself in the tranquility of the deep woods.",
    price: "From $850",
    tag: "NATURE",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    description: "A peaceful journey into the heart of the forest. Discover rare flora and fauna while staying in luxury eco-pods.",
    highlights: ["Night safari tour", "Organic breakfast", "Guided meditation sessions"],
    includes: ["Eco-pod accommodation", "Local guide", "All meals included"],
  },
  {
    id: "3",
    title: "Sunset Yacht Cruise",
    subtitle: "Experience the magic of the golden hour on the open sea.",
    price: "From $1500",
    tag: "NATURE",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    description: "Sail away on a luxury yacht as the sun sets. Enjoy premium appetizers and live music on board.",
    highlights: ["Champagne toast at sunset", "Live acoustic band", "Gourmet seafood dinner"],
    includes: ["Private yacht rental", "Full crew", "Premium bar access"],
  },
];

export const RECOMMENDED_ITINERARIES: Itinerary[] = [
  {
    id: "4",
    title: "Andes Mountain Trek",
    subtitle: "Conquer the peaks and witness breathtaking vistas.",
    price: "From $1200",
    tag: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
    description: "A challenging yet rewarding trek through the Andes. Perfect for adventure seekers wanting to push their limits.",
    highlights: ["Summit achievement", "Stargazing at base camp", "Indigenous culture immersion"],
    includes: ["Camping equipment", "Professional trekking guide", "Oxygen supply if needed"],
  },
  {
    id: "5",
    title: "Safari Jungle Expedition",
    subtitle: "Get up close with nature's most majestic predators.",
    price: "From $2100",
    tag: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
    description: "Experience the thrill of a lifetime in the wild. Our expert trackers will take you deep into the jungle.",
    highlights: ["Big five spotting", "Riverside bush dinner", "Photography masterclass"],
    includes: ["4x4 Safari vehicle", "Luxury tent stay", "Park entry fees"],
  },
  {
    id: "6",
    title: "Volcano Crater Hike",
    subtitle: "Walk on the edge of fire in this unique geological tour.",
    price: "From $900",
    tag: "ADVENTURE",
    image: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?w=400",
    description: "Explore the raw power of a dormant volcano. Witness the unique landscape and mineral-rich springs.",
    highlights: ["Crater rim walk", "Hot spring dip", "Geological expert talk"],
    includes: ["Safety gear", "Lunch pack", "Transport to base"],
  },
];
