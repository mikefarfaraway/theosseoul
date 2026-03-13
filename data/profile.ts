import type { ProfileBundle } from "@/types/content";

export const profileBundleData: ProfileBundle = {
  siteTitle: "Sheila's Seoul Edit",
  subtitle: "Theo's handpicked Korean favorites for Sheila's Seoul trip from China.",
  introNote:
    "Built for Sheila's first proper Seoul wander: places that feel unmistakably Korean, locally loved, and special enough that Theo would actually put his name behind them. The list leans toward soulful food, quieter hanok moments, and hidden gems that do not usually make it into generic foreigner guides.",
  guest: {
    name: "Sheila",
    role: "Theo's girlfriend, visiting from China",
    shortBio:
      "Curious, style-sensitive, and here for the best version of Seoul rather than the most obvious one.",
    heroImage: "/images/people/sheila-portrait.jpg",
    heroImagePosition: "center center",
    heroImageScale: 1.35,
    accentColors: {
      primary: "#FF8966",
      secondary: "#FFD8C7",
    },
  },
  curator: {
    name: "Theo",
    role: "Local curator and boyfriend",
    shortBio:
      "Collected the restaurants, cafes, bars, and Korean hidden gems he would be proud to show on an actually meaningful Seoul trip.",
    heroImage: "/images/people/theo-portrait.jpg",
    heroImagePosition: "center 18%",
    accentColors: {
      primary: "#0F3D3E",
      secondary: "#C3F4D6",
    },
  },
};
