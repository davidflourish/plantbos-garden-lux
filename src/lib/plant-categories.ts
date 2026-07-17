export type PlantExample = {
  name: string;
  harmattan: string;
  rainy: string;
};

export type PlantCategory = {
  slug: string;
  number: string;
  title: string;
  description: string;
  bestFor: string;
  icon: "home" | "trees" | "flower" | "briefcase" | "sparkles" | "sprout" | "leaf";
  accent: string; // tailwind gradient classes
  examples: PlantExample[];
};

export const plantCategories: PlantCategory[] = [
  {
    slug: "indoor-plants",
    number: "01",
    title: "Indoor Plants",
    description:
      "Plants that thrive in pots indoors. They clean air, add beauty, and tolerate AC + indoor light.",
    bestFor:
      "Apartments, living rooms, bedrooms, and offices with bright indirect light",
    icon: "home",
    accent: "from-emerald-900/60 to-emerald-700/30",
    examples: [
      {
        name: "Monstera Deliciosa",
        harmattan: "Mist 2x/week to fight dry air.",
        rainy: "Water 1x/10 days. Check for fungus.",
      },
      {
        name: "Snake Plant",
        harmattan: "Dust leaves weekly. Water 1x/3 weeks.",
        rainy: "Water 1x/month. Avoid overwatering.",
      },
      {
        name: "Pothos / Money Plant",
        harmattan: "Keep away from fans. Water 1x/week.",
        rainy: "Water 1x/2 weeks. Good drainage.",
      },
      {
        name: "Fiddle Leaf Fig",
        harmattan: "Use humidifier or pebble tray.",
        rainy: "Reduce watering. Wipe leaves to prevent spots.",
      },
      {
        name: "Peace Lily",
        harmattan: "Mist daily.",
        rainy: "Water only when soil is dry. Watch for root rot.",
      },
    ],
  },
  {
    slug: "outdoor-garden-plants",
    number: "02",
    title: "Outdoor & Garden Plants",
    description:
      "Tough plants for your compound and garden. Built to handle Abuja sun, wind, and heavy rain.",
    bestFor: "Fences, driveways, landscaping, and full-sun areas",
    icon: "trees",
    accent: "from-lime-900/60 to-amber-700/30",
    examples: [
      {
        name: "Bougainvillea",
        harmattan: "Water 2x/week. Mulch to keep roots cool.",
        rainy: "No extra fertilizer. Ensure drainage.",
      },
      {
        name: "Hibiscus",
        harmattan: "Water 3x/week + spray leaves.",
        rainy: "Prune after rain to prevent fungal disease.",
      },
      {
        name: "Ixora",
        harmattan: "Deep water 2x/week.",
        rainy: "Reduce watering. Spray neem for pests.",
      },
      {
        name: "Crape Myrtle",
        harmattan: "Water deeply 1x/week.",
        rainy: "Stake young trees against wind.",
      },
      {
        name: "Croton",
        harmattan: "Mist leaves to keep colors bright.",
        rainy: "Plant in raised beds to avoid waterlogging.",
      },
    ],
  },
  {
    slug: "balcony-patio-plants",
    number: "03",
    title: "Balcony & Patio Plants",
    description:
      "Container plants that handle wind, sun, and limited space. Perfect for small outdoor areas.",
    bestFor: "Flats, duplex balconies, terraces, and potted displays",
    icon: "flower",
    accent: "from-rose-900/60 to-orange-700/30",
    examples: [
      {
        name: "Succulent Mix",
        harmattan: "Water 1x/3 weeks.",
        rainy: "Move under shelter. Water 1x/month only.",
      },
      {
        name: "Lantana",
        harmattan: "Water 2x/week.",
        rainy: "Deadhead flowers. Great drainage needed.",
      },
      {
        name: "Spider Plant",
        harmattan: "Keep out of direct dry wind. Water 1x/week.",
        rainy: "Hang where rain won't soak it.",
      },
      {
        name: "Bird of Paradise",
        harmattan: "Wipe dust off leaves. Water 2x/week.",
        rainy: "Stake big leaves to prevent tearing.",
      },
      {
        name: "Herb Garden Pot",
        harmattan: "Water 3x/week morning only.",
        rainy: "Raise pots off ground to avoid rot.",
      },
    ],
  },
  {
    slug: "office-desk-plants",
    number: "04",
    title: "Office & Desk Plants",
    description:
      "Low-maintenance plants for AC environments. Small, clean, and stress-free.",
    bestFor: "Desks, reception, and offices with low to medium light",
    icon: "briefcase",
    accent: "from-slate-800/70 to-teal-700/30",
    examples: [
      {
        name: "ZZ Plant",
        harmattan: "Dust leaves. Water 1x/month.",
        rainy: "Water 1x/6 weeks. AC makes air drier.",
      },
      {
        name: "Lucky Bamboo",
        harmattan: "Change water 1x/week.",
        rainy: "Same. Keep away from AC vents.",
      },
      {
        name: "Aglaonema",
        harmattan: "Mist 1x/week. Water 1x/10 days.",
        rainy: "Water 1x/2 weeks.",
      },
      {
        name: "Mini Rubber Plant",
        harmattan: "Wipe leaves to remove dust.",
        rainy: "Less water. Check for leaf spots.",
      },
      {
        name: "Cactus in Ceramic Pot",
        harmattan: "No water needed 1x/month.",
        rainy: "Keep indoors. No water at all.",
      },
    ],
  },
  {
    slug: "rare-collector-plants",
    number: "05",
    title: "Rare & Collector Plants",
    description:
      "Premium, unique plants for collectors. Need extra attention but give big aesthetic value.",
    bestFor: "Plant collectors, statement pieces, and gifting",
    icon: "sparkles",
    accent: "from-purple-900/60 to-pink-700/30",
    examples: [
      {
        name: "Variegated Monstera",
        harmattan: "Humidifier + mist daily.",
        rainy: "Use fan for air flow to prevent rot.",
      },
      {
        name: "Philodendron Pink Princess",
        harmattan: "Group plants for humidity.",
        rainy: "Bright light only. No direct rain.",
      },
      {
        name: "Anthurium Clarinervium",
        harmattan: "Pebble tray mandatory.",
        rainy: "Chunky soil mix. Water 1x/10 days.",
      },
      {
        name: "Calathea White Fusion",
        harmattan: "Filtered water only. Mist daily.",
        rainy: "No tap water. High humidity.",
      },
      {
        name: "Alocasia Frydek",
        harmattan: "Keep soil slightly moist.",
        rainy: "Reduce water. Watch for spider mites.",
      },
    ],
  },
  {
    slug: "edible-garden",
    number: "06",
    title: "Edible Garden",
    description:
      "Grow your own vegetables, fruits, and herbs. Fresh, organic, and perfect for Nigerian soil.",
    bestFor: "Backyards, grow-bags, sacks, and kitchen gardens",
    icon: "sprout",
    accent: "from-green-900/60 to-yellow-700/30",
    examples: [
      {
        name: "Scent Leaf / Basil",
        harmattan: "Water daily morning. Shade in afternoon.",
        rainy: "Water 3x/week. Harvest often.",
      },
      {
        name: "Tomato & Pepper Seedlings",
        harmattan: "Mulch + water daily.",
        rainy: "Use fungicide weekly. Stake plants.",
      },
      {
        name: "Dwarf Pawpaw",
        harmattan: "Deep water 2x/week.",
        rainy: "Ensure drainage. Spray for pests.",
      },
      {
        name: "Green Leafy Mix",
        harmattan: "Water daily. Partial shade.",
        rainy: "Harvest before heavy rain. Avoid waterlogging.",
      },
      {
        name: "Strawberry Plant",
        harmattan: "Water 3x/week + mulch.",
        rainy: "Grow in pots under cover to avoid fruit rot.",
      },
    ],
  },
  {
    slug: "herbs-medicinal-aromatic",
    number: "07",
    title: "Herbs: Medicinal & Aromatic",
    description:
      "Dual-purpose herbs for cooking, tea, wellness, and fragrance. Easy to grow and very useful.",
    bestFor: "Kitchen gardens, wellness, and natural remedies",
    icon: "leaf",
    accent: "from-teal-900/60 to-emerald-700/30",
    examples: [
      {
        name: "Lemongrass",
        harmattan: "Water 3x/week. Cut dry tips.",
        rainy: "Cut back after rain. Prevents fungus.",
      },
      {
        name: "Mint",
        harmattan: "Keep soil moist. Partial shade.",
        rainy: "Water 2x/week. Good drainage.",
      },
      {
        name: "Lavender",
        harmattan: "Water 1x/week.",
        rainy: "Needs full sun + airflow. Don't overwater.",
      },
      {
        name: "Neem",
        harmattan: "Very drought tolerant. Water 1x/week.",
        rainy: "No extra care. Natural pest control.",
      },
      {
        name: "Eucalyptus",
        harmattan: "Water 2x/week.",
        rainy: "Prune to improve airflow. Great for steam.",
      },
    ],
  },
];

export const getCategory = (slug: string) =>
  plantCategories.find((c) => c.slug === slug);
