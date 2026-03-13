import type { ProfileBundle } from "@/types/content";

export const profileBundleData: ProfileBundle = {
  siteTitle: "Sheila's Seoul Edit",
  subtitle: "Theo's handpicked Seoul favorites for Sheila's first trip from China.",
  introNote:
    "Built for Sheila's first real Seoul wander: places that feel unmistakably Korean, deeply local, and special enough that Theo would happily put his name behind them. The list leans toward soulful food, quieter hanok moments, and hidden gems that rarely make it into generic visitor guides.",
  guest: {
    name: "Sheila",
    role: "Theo's girlfriend, visiting from China",
    shortBio:
      "Curious, style-sensitive, and more interested in Seoul's texture than its most obvious checklist stops.",
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
      "Pulled together the restaurants, cafes, bars, and hidden corners of Seoul he would genuinely want to share on a meaningful trip.",
    heroImage: "/images/people/theo-portrait.jpg",
    heroImagePosition: "center 18%",
    accentColors: {
      primary: "#0F3D3E",
      secondary: "#C3F4D6",
    },
  },
};
