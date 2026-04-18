import { DayTab } from "./detail";

export interface Itinerary {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  tag: string;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
  dayTabs?: DayTab[];
}
