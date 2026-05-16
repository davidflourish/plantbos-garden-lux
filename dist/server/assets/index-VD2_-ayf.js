import { P as reactExports, H as jsxRuntimeExports } from "./server-DUp0z7oq.js";
import { h as hero } from "./router-B2fnGhPZ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$e = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$e);
const __iconNode$d = [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
      key: "14wa3c"
    }
  ],
  ["path", { d: "M12 7.5V9", key: "1oy5b0" }],
  ["path", { d: "M7.5 12H9", key: "eltsq1" }],
  ["path", { d: "M16.5 12H15", key: "vk5kw4" }],
  ["path", { d: "M12 16.5V15", key: "k7eayi" }],
  ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }],
  ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }],
  ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }],
  ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }]
];
const Flower = createLucideIcon("flower", __iconNode$d);
const __iconNode$c = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$9);
const __iconNode$8 = [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
];
const PackageCheck = createLucideIcon("package-check", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5", key: "slp6dd" }],
  [
    "path",
    {
      d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
      key: "o0xfot"
    }
  ],
  ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05", key: "wn3emo" }]
];
const Store = createLucideIcon("store", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
];
const Trees = createLucideIcon("trees", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const logoWhite = "/assets/logo-white-CQmazv2X.png";
const logoGreen = "/assets/logo-green-kEVIqIAT.png";
const pMonstera = "/assets/plant-monstera-BOYqc8s_.jpg";
const pFiddle = "/assets/plant-fiddle-BY9RQRaG.jpg";
const pBop = "/assets/plant-bop-DZNKllKn.jpg";
const pPhilo = "/assets/plant-philo-4vP2tAZs.jpg";
const pSnake = "/assets/plant-snake-CbEsgCNN.jpg";
const pCalathea = "/assets/plant-calathea-Br6y7hdc.jpg";
const g1 = "/assets/gallery-1-DWclZpfH.jpg";
const g2 = "/assets/gallery-2-DS4q0q_q.jpg";
const g3 = "/assets/gallery-3-DeI4SuT2.jpg";
const g4 = "/assets/gallery-4-BsgD2hg6.jpg";
const plants = [{
  img: pMonstera,
  name: "Monstera Deliciosa",
  tag: "Statement Foliage",
  price: "₦45,000"
}, {
  img: pFiddle,
  name: "Fiddle Leaf Fig",
  tag: "Indoor Tree",
  price: "₦78,000"
}, {
  img: pBop,
  name: "Bird of Paradise",
  tag: "Tropical Bloom",
  price: "₦95,000"
}, {
  img: pPhilo,
  name: "Philodendron Pink Princess",
  tag: "Rare & Exotic",
  price: "₦120,000"
}, {
  img: pSnake,
  name: "Snake Plant",
  tag: "Air Purifier",
  price: "₦18,000"
}, {
  img: pCalathea,
  name: "Calathea Orbifolia",
  tag: "Designer's Pick",
  price: "₦35,000"
}];
const services = [{
  icon: Leaf,
  title: "Rare & Exotic Plants",
  desc: "A curated catalogue of tropical and rare varieties, ethically sourced and nursery-cared."
}, {
  icon: Trees,
  title: "Garden Design & Landscaping",
  desc: "Bespoke outdoor sanctuaries — from concept sketches to full installation."
}, {
  icon: Wrench,
  title: "Maintenance & Installation",
  desc: "Ongoing care plans and expert installation that keep your green spaces thriving."
}, {
  icon: Flower,
  title: "Premium Pots & Planters",
  desc: "Ceramic, fiberglass and concrete vessels — sculptural pieces for every interior."
}];
const features = [{
  icon: Sparkles,
  title: "Curated Rarity",
  desc: "Hand-selected varieties you won't find elsewhere in Abuja."
}, {
  icon: ShieldCheck,
  title: "Healthy Guarantee",
  desc: "Every plant leaves our nursery acclimated, inspected and ready to thrive."
}, {
  icon: Truck,
  title: "Door-to-Door Delivery",
  desc: "Safe, climate-aware delivery across the FCT and surrounding states."
}, {
  icon: PackageCheck,
  title: "Expert Aftercare",
  desc: "Lifetime advice from our horticulturists — text us anytime."
}];
const testimonials = [{
  name: "Adaeze O.",
  role: "Interior Designer, Maitama",
  quote: "Plantbos transformed our showroom. The selection is unmatched and their team is meticulous."
}, {
  name: "Chinedu K.",
  role: "Homeowner, Asokoro",
  quote: "From design to install, every detail felt considered. Our garden is now the heart of the house."
}, {
  name: "Hauwa B.",
  role: "Boutique Owner, Wuse",
  quote: "Their rare collection is a dream. The Pink Princess they delivered is absolutely thriving."
}];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Plantbos", className: "h-10 w-auto opacity-95", width: 400, height: 400 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-10 text-sm tracking-wide text-foreground/80 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#shop", className: "hover:text-foreground transition", children: "Shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-foreground transition", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hover:text-foreground transition", children: "Visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground/90 hover:border-sage hover:text-sage transition", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Lush tropical landscape", className: "absolute inset-0 h-full w-full object-cover", width: 1920, height: 1280 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Plantbos Gardens & Landscape", className: "mb-10 h-24 w-auto animate-fade-in md:h-28", width: 400, height: 400 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 animate-fade-up text-xs uppercase tracking-[0.4em] text-foreground/70 delay-100", children: "Abuja · Est. Lokogoma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-fade-up text-balance font-display text-6xl font-light leading-[1.05] text-foreground md:text-8xl delay-200", children: [
        "Bring Nature ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-sage italic font-light", children: "Home." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-foreground/80 md:text-lg delay-300", children: "Rare & Exotic Plants · Professional Landscaping · Abuja's Premier Garden Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex animate-fade-up flex-col items-center gap-4 sm:flex-row delay-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#shop", className: "group inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90", children: [
          "Shop Plants",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition hover:bg-white hover:text-background", children: "Request a Quote" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-foreground/70 delay-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex text-terracotta", children: [
            [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current opacity-50" })
          ] }),
          "4.8 · 16 reviews"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-3.5 w-3.5" }),
          " Delivery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-3.5 w-3.5" }),
          " Kerbside Pickup"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-3.5 w-3.5" }),
          " In-Store"
        ] })
      ] })
    ] })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "bg-gradient-deep py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "What we do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "A complete, considered green service." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4", children: services.map(({
      icon: Icon2,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-background p-10 transition duration-500 hover:bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-8 w-8 text-sage transition group-hover:text-terracotta", strokeWidth: 1.25 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-light", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "mt-8 h-4 w-4 text-foreground/40 transition group-hover:translate-x-2 group-hover:text-sage" })
    ] }, title)) })
  ] }) });
}
function Collection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "shop", className: "bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Featured collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "Rarities, freshly potted." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm leading-relaxed text-muted-foreground", children: "A rotating selection from our greenhouse — each plant nursery-grown, acclimated, and ready to make a room feel alive." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: plants.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, loading: "lazy", className: "aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105", width: 800, height: 1e3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/90 backdrop-blur", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-light", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm tracking-wide text-sage", children: p.price })
      ] })
    ] }, p.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm uppercase tracking-widest transition hover:border-sage hover:bg-sage hover:text-sage-foreground", children: [
      "Browse Full Collection",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
    ] }) })
  ] }) });
}
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-32 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Why Plantbos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance font-display text-5xl font-light leading-tight md:text-6xl", children: "Quietly obsessed with every leaf." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-background/70", children: "For over a decade, Abuja has trusted us to bring rare botanicals indoors and design landscapes that age beautifully." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoGreen, alt: "Plantbos", className: "mt-12 h-20 w-auto", loading: "lazy", width: 400, height: 400 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl bg-background/10 sm:grid-cols-2 lg:col-span-7", children: features.map(({
      icon: Icon2,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-background text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-light", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-background/70", children: desc })
    ] }, title)) })
  ] }) }) });
}
function Visit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", className: "relative overflow-hidden bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Visit us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "The garden, in person." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground", children: "Step into our greenhouse in Lokogoma. Wander rows of rare tropicals, talk to our horticulturists, and find the piece that fits your home." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-12 space-y-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-relaxed text-foreground/90", children: [
            "Peace Court Estate, Kado–Galadima Road,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "After Living Faith Junction, Lokogoma,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Abuja 961102"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2349035912539", className: "text-foreground/90 hover:text-sage", children: "0903 591 2539" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "text-foreground/90 hover:text-sage", children: "@plant_bos" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 shadow-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Plantbos location", src: "https://www.google.com/maps?q=Lokogoma+Abuja&output=embed", className: "h-[520px] w-full grayscale-[40%] contrast-110", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
  ] }) });
}
function Gallery() {
  const images = [g1, g2, g3, g4, pMonstera, pBop];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "@plant_bos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-4xl font-light md:text-5xl", children: "From the gardens." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hidden items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 hover:text-sage md:inline-flex", children: [
        "Follow ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "group relative aspect-square overflow-hidden rounded-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 transition group-hover:bg-background/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "absolute inset-0 m-auto h-6 w-6 text-foreground opacity-0 transition group-hover:opacity-100" })
    ] }, i)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-deep py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Loved across Abuja" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "Words from our garden community." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl bg-cream p-10 text-background shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-terracotta", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-6 font-display text-2xl font-light leading-snug", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 border-t border-background/10 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-background/60", children: t.role })
      ] })
    ] }, t.name)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "border-t border-white/10 bg-background pb-12 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Plantbos", className: "h-16 w-auto", loading: "lazy", width: 400, height: 400 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "Abuja's premier garden center for rare botanicals, considered landscape design, and luxury planters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.3em] text-sage", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#shop", className: "hover:text-sage", children: "Shop Plants" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-sage", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hover:text-sage", children: "Visit" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hover:text-sage", children: "Instagram" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.3em] text-sage", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Peace Court Estate, Kado–Galadima Rd,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Lokogoma, Abuja 961102"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2349035912539", className: "hover:text-sage", children: "0903 591 2539" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hover:text-sage", children: "@plant_bos" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Plantbos Gardens & Landscape"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Designed in Abuja · Grown with care" })
    ] })
  ] }) });
}
function WhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349035912539", target: "_blank", rel: "noreferrer", className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-luxe transition hover:scale-110 hover:bg-sage/90", "aria-label": "WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6", strokeWidth: 1.75 }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Visit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsApp, {})
  ] });
}
export {
  Index as component
};
