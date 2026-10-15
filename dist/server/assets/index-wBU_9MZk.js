import { r as reactExports, V as jsxRuntimeExports } from "./server-BKbyORhe.js";
import { h as hero } from "./router-DZGVjmK7.js";
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
const __iconNode$l = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$l);
const __iconNode$k = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$k);
const __iconNode$j = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode$j);
const __iconNode$i = [
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
const Flower = createLucideIcon("flower", __iconNode$i);
const __iconNode$h = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$h);
const __iconNode$g = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$f);
const __iconNode$e = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$c);
const __iconNode$b = [
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
const PackageCheck = createLucideIcon("package-check", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$a);
const __iconNode$9 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$8);
const __iconNode$7 = [
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
const Sparkles = createLucideIcon("sparkles", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$6);
const __iconNode$5 = [
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
const Store = createLucideIcon("store", __iconNode$5);
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$4);
const __iconNode$3 = [
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
const Trees = createLucideIcon("trees", __iconNode$3);
const __iconNode$2 = [
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
const Truck = createLucideIcon("truck", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logoWhite = "/assets/logo-white-CQmazv2X.png";
const logoGreen = "/assets/logo-green-kEVIqIAT.png";
const g1 = "/assets/gallery-1-DWclZpfH.jpg";
const g2 = "/assets/gallery-2-DS4q0q_q.jpg";
const g3 = "/assets/gallery-3-DeI4SuT2.jpg";
const g4 = "/assets/gallery-4-BsgD2hg6.jpg";
const services = [{
  icon: Leaf,
  title: "Rare & Exotic Plants",
  desc: "A curated catalogue of tropical and rare varieties, ethically sourced and nursery-cared.",
  cta: "Shop Plants",
  href: "#shop"
}, {
  icon: Trees,
  title: "Garden Design & Landscaping",
  desc: "Bespoke outdoor sanctuaries — from concept sketches to full installation.",
  cta: "Book a Consultation",
  href: "#contact"
}, {
  icon: Wrench,
  title: "Maintenance & Installation",
  desc: "Ongoing care plans and expert installation that keep your green spaces thriving.",
  cta: "Get a Quote",
  href: "#contact"
}, {
  icon: Flower,
  title: "Premium Pots & Planters",
  desc: "Ceramic, fiberglass and concrete vessels — sculptural pieces for every interior.",
  cta: "Browse Planters",
  href: "https://instagram.com/plant_bos"
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
const careTips = [{
  icon: Droplets,
  tag: "Watering",
  title: "How often should you water indoor plants in Abuja?",
  excerpt: "In Abuja's dry season, most tropicals need water once a week — but check the top inch of soil first. Here's a simple finger-test that prevents 80% of houseplant deaths."
}, {
  icon: Sun,
  tag: "Light",
  title: "Choosing plants for low-light homes",
  excerpt: "Snake plants, ZZ plants and pothos thrive in the shaded corners of Abuja apartments. Learn the light zones in your space and the perfect plant for each."
}, {
  icon: Scissors,
  tag: "Care",
  title: "Fiddle leaf figs: a first-year survival guide",
  excerpt: "The fiddle leaf is famously fussy. Follow our five-step routine for the first twelve months and you'll grow a tree that owns the room."
}];
const navLinks = [{
  label: "Shop",
  href: "#shop"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Plant Care",
  href: "#care"
}, {
  label: "Visit",
  href: "#visit"
}, {
  label: "Contact",
  href: "#contact"
}];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-2", "aria-label": "Plantbos home", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Plantbos Gardens & Landscape logo", className: "h-10 w-auto opacity-95", width: 400, height: 400 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Primary", className: "hidden items-center gap-10 text-sm tracking-wide text-foreground/90 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "hover:text-sage transition", children: link.label }, link.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hidden rounded-full bg-sage px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-sage-foreground transition hover:bg-sage/90 md:inline-flex", children: "Get a Quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground/90 hover:border-sage hover:text-sage transition md:flex", "aria-label": "Plantbos on Instagram (opens in new tab)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOpen((v) => !v), className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground transition hover:border-sage hover:text-sage md:hidden", "aria-label": open ? "Close menu" : "Open menu", "aria-expanded": open, "aria-controls": "mobile-menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5", "aria-hidden": "true" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "mobile-menu", className: `fixed inset-x-0 top-[calc(100%+1px)] z-40 overflow-hidden bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Mobile", className: "mx-auto flex max-w-7xl flex-col px-6 py-8", children: [
      navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, onClick: () => setOpen(false), className: "border-b border-white/10 py-4 text-lg font-display text-foreground/90 transition hover:text-sage", children: link.label }, link.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", onClick: () => setOpen(false), className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-sage-foreground transition hover:bg-sage/90", children: [
        "Get a Quote",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-sage hover:text-sage", "aria-label": "Plantbos on Instagram (opens in new tab)", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4", "aria-hidden": "true" }),
        "Follow @plant_bos"
      ] })
    ] }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", "aria-labelledby": "hero-heading", className: "relative min-h-dvh w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Lush tropical garden with monstera and palms at Plantbos Abuja", className: "absolute inset-0 h-full w-full object-cover", width: 1920, height: 1280, fetchPriority: "high", decoding: "async" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "", className: "mb-10 h-24 w-auto animate-fade-in md:h-28", width: 400, height: 400, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 animate-fade-up text-xs uppercase tracking-[0.4em] text-foreground/80 delay-100", children: "Abuja · Est. Lokogoma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { id: "hero-heading", className: "animate-fade-up text-balance font-display text-6xl font-light leading-[1.05] text-foreground md:text-8xl delay-200", children: [
        "Bring Nature ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-sage italic font-light", children: "Home." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-foreground/85 md:text-lg delay-300", children: "Rare & Exotic Plants · Professional Landscaping · Abuja's Premier Garden Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex animate-fade-up flex-col items-center gap-4 sm:flex-row delay-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#shop", className: "group inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage", children: [
          "Shop Plants",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition hover:bg-white hover:text-background", children: "Book a Consultation" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-foreground/80 delay-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", "aria-label": "Rated 4.8 out of 5 from 16 reviews", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex text-terracotta", "aria-hidden": "true", children: [
            [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current opacity-50" })
          ] }),
          "4.8 · 16 reviews"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
          " Delivery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
          " Kerbside Pickup"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
          " In-Store"
        ] })
      ] })
    ] })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", "aria-labelledby": "services-heading", className: "bg-gradient-deep py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "What we do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "services-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "A complete, considered green service." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4", children: services.map(({
      icon: Icon2,
      title,
      desc,
      cta,
      href
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative bg-background p-10 transition duration-500 hover:bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-8 w-8 text-sage transition group-hover:text-terracotta", strokeWidth: 1.25, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-light", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, ...href.startsWith("http") ? {
        target: "_blank",
        rel: "noreferrer"
      } : {}, className: "mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sage transition hover:text-terracotta", children: [
        cta,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-2", "aria-hidden": "true" })
      ] })
    ] }, title)) })
  ] }) });
}
function InstagramFeed() {
  const wrapRef = reactExports.useRef(null);
  const [loaded, setLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!wrapRef.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting) && !loaded) {
        const s = document.createElement("script");
        s.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
        s.async = true;
        document.body.appendChild(s);
        setLoaded(true);
      }
    }, {
      rootMargin: "300px"
    });
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, [loaded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "shop", "aria-labelledby": "shop-heading", className: "bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Featured collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "shop-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: [
          "Straight from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic italic text-sage", children: "our greenhouse." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-md text-sm leading-relaxed text-muted-foreground", children: [
        "Every plant on our Instagram is real, in stock, and ready to travel to your home. DM us",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "text-sage underline underline-offset-4 hover:text-terracotta", children: "@plant_bos" }),
        " ",
        "to reserve, or shop in-store in Lokogoma."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: wrapRef, className: "mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://cdn.lightwidget.com/widgets/2f6c3d9f4b8a5c1e7d0a9f2b3e5c4d6a.html", title: "Plantbos Instagram feed", className: "lightwidget-widget", style: {
      width: "100%",
      border: 0,
      overflow: "hidden",
      minHeight: 520
    }, scrolling: "no", allowTransparency: true, loading: "lazy" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-3 rounded-full bg-sage px-10 py-4 text-sm uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4", "aria-hidden": "true" }),
        "See more products",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/2349035912539?text=Hi%20Plantbos%2C%20I%27d%20like%20to%20order%20a%20plant", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm uppercase tracking-widest text-foreground transition hover:border-sage hover:text-sage", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4", "aria-hidden": "true" }),
        "Get our product"
      ] })
    ] })
  ] }) });
}
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-labelledby": "why-heading", className: "bg-cream py-32 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Why Plantbos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "why-heading", className: "mt-4 text-balance font-display text-5xl font-light leading-tight md:text-6xl", children: "Quietly obsessed with every leaf." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-background/80", children: "For over a decade, Abuja has trusted us to bring rare botanicals indoors and design landscapes that age beautifully." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoGreen, alt: "Plantbos Gardens & Landscape", className: "mt-12 h-20 w-auto", loading: "lazy", width: 400, height: 400 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl bg-background/10 sm:grid-cols-2 lg:col-span-7", children: features.map(({
      icon: Icon2,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-background text-cream", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-light", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-background/80", children: desc })
    ] }, title)) })
  ] }) }) });
}
function CareTips() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "care", "aria-labelledby": "care-heading", className: "bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Plant care tips" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "care-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "Grow with confidence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: "Short, practical guides from our horticulturists — written for Abuja's climate." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-3", children: careTips.map(({
      icon: Icon2,
      tag,
      title,
      excerpt
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col rounded-3xl border border-white/10 bg-card p-8 transition hover:border-sage hover:shadow-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[10px] uppercase tracking-[0.3em] text-sage", children: tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-light leading-snug", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground", children: excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/2349035912539", target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sage transition hover:text-terracotta", children: [
        "Ask our team",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1", "aria-hidden": "true" })
      ] })
    ] }, title)) })
  ] }) });
}
function Visit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", "aria-labelledby": "visit-heading", className: "relative overflow-hidden bg-gradient-deep py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Visit us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "visit-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "The garden, in person." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground", children: "Step into our greenhouse in Lokogoma. Wander rows of rare tropicals, talk to our horticulturists, and find the piece that fits your home." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-12 space-y-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-relaxed text-foreground/95", children: [
            "Peace Court Estate, Kado–Galadima Road,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "After Living Faith Junction, Lokogoma,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Abuja 961102"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2349035912539", className: "text-foreground/95 hover:text-sage", children: "0903 591 2539" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "mt-1 h-5 w-5 shrink-0 text-sage", strokeWidth: 1.5, "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "text-foreground/95 hover:text-sage", children: "@plant_bos" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 shadow-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Plantbos Gardens location on Google Maps", src: "https://www.google.com/maps?q=Lokogoma+Abuja&output=embed", className: "h-[520px] w-full grayscale-[40%] contrast-110", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) })
  ] }) });
}
function Gallery() {
  const images = [g1, g2, g3, g4];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-labelledby": "gallery-heading", className: "bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Our landscapes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "gallery-heading", className: "mt-4 text-balance text-4xl font-light md:text-5xl", children: "Recent projects." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hidden items-center gap-2 text-sm uppercase tracking-widest text-foreground/80 hover:text-sage md:inline-flex", children: [
        "See more ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4", "aria-hidden": "true" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-4", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative aspect-square overflow-hidden rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Plantbos landscaping project ${i + 1} in Abuja`, loading: "lazy", decoding: "async", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent", "aria-hidden": "true" })
    ] }, i)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-labelledby": "reviews-heading", className: "bg-gradient-deep py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Loved across Abuja" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "reviews-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "Words from our garden community." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl bg-cream p-10 text-background shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-terracotta", "aria-label": "5 out of 5 stars", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current", "aria-hidden": "true" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-6 font-display text-2xl font-light leading-snug", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 border-t border-background/10 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-background/70", children: t.role })
      ] })
    ] }, t.name)) })
  ] }) });
}
function ContactForm() {
  const [status, setStatus] = reactExports.useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim().slice(0, 100);
    const phone = String(data.get("phone") || "").trim().slice(0, 40);
    const service = String(data.get("service") || "").trim().slice(0, 80);
    const message = String(data.get("message") || "").trim().slice(0, 1e3);
    if (!name || !message) return;
    const text = `Hi Plantbos! 🌿%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0A%0A${encodeURIComponent(message)}`;
    setStatus("sending");
    window.open(`https://wa.me/2349035912539?text=${text}`, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 400);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", "aria-labelledby": "contact-heading", className: "bg-background py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "contact-heading", className: "mt-4 text-balance text-5xl font-light leading-tight md:text-6xl", children: "Book a consultation or request a quote." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground", children: "Tell us a little about your space or the plant you're looking for. Our team responds within one working day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-4 text-sm", children: ["Free 15-minute design consultation", "Site visits across the FCT", "Aftercare & maintenance plans"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-sage/20 text-sage", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
        item
      ] }, item)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit, className: "rounded-3xl border border-white/10 bg-card/60 p-8 shadow-luxe backdrop-blur", "aria-label": "Contact and quote request form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", type: "text", required: true, maxLength: 100, autoComplete: "name", className: "w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none", placeholder: "Your name" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", name: "phone", type: "tel", maxLength: 40, autoComplete: "tel", className: "w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none", placeholder: "0903 000 0000" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", name: "service", className: "w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground focus:border-sage focus:outline-none", defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Buy plants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Garden design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Landscape installation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Maintenance plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", required: true, maxLength: 1e3, rows: 5, className: "w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none", placeholder: "Tell us about your space, budget, or the plants you love…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: status === "sending", className: "group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90 disabled:opacity-70", children: [
        status === "sending" ? "Opening WhatsApp…" : status === "sent" ? "Sent ✓ Send another" : "book appointment",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Prefer email? Reach us at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-sage hover:underline", href: "mailto:hello@plantbos.ng", children: "hello@plantbos.ng" }),
        ". By sending, you agree to be contacted about your enquiry."
      ] })
    ] }) })
  ] }) });
}
function Newsletter() {
  const [status, setStatus] = reactExports.useState("idle");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-labelledby": "news-heading", className: "bg-cream py-24 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-sage", children: "The Greenhouse Letter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "news-heading", className: "mt-4 font-display text-4xl font-light leading-tight md:text-5xl", children: "New arrivals & care tips, once a month." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-background/80", children: "Get first access to rare plant drops and seasonal care guides — never spam." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setStatus("sent");
      e.currentTarget.reset();
    }, className: "flex flex-col gap-3 sm:flex-row", "aria-label": "Newsletter signup", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "newsletter-email", className: "sr-only", children: "Email address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "newsletter-email", type: "email", required: true, maxLength: 255, autoComplete: "email", placeholder: "you@email.com", className: "w-full flex-1 rounded-full border border-background/20 bg-background/5 px-6 py-4 text-sm text-background placeholder:text-background/50 focus:border-background focus:outline-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-background/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4", "aria-hidden": "true" }),
        status === "sent" ? "Subscribed ✓" : "Subscribe"
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "footer", className: "border-t border-white/10 bg-background pb-12 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Plantbos Gardens & Landscape", className: "h-16 w-auto", loading: "lazy", width: 400, height: 400 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "Abuja's premier garden center for rare botanicals, considered landscape design, and luxury planters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Footer", className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-[0.3em] text-sage", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-foreground/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#shop", className: "hover:text-sage", children: "Shop Plants" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-sage", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#care", className: "hover:text-sage", children: "Plant Care" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hover:text-sage", children: "Visit" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-sage", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-[0.3em] text-sage", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "mt-6 space-y-3 text-sm not-italic text-foreground/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Peace Court Estate, Kado–Galadima Rd,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Lokogoma, Abuja 961102"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2349035912539", className: "hover:text-sage", children: "0903 591 2539" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/plant_bos", target: "_blank", rel: "noreferrer", className: "hover:text-sage", children: "@plant_bos" }) })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349035912539?text=Hi%20Plantbos%2C%20I%27d%20like%20to%20chat", target: "_blank", rel: "noreferrer", className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-luxe transition hover:scale-110 hover:bg-sage/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage", "aria-label": "Chat with Plantbos on WhatsApp (opens in new tab)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6", strokeWidth: 1.75, "aria-hidden": "true" }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main", className: "bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CareTips, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Visit, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Newsletter, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsApp, {})
  ] });
}
export {
  Index as component
};
