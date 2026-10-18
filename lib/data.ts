// ---------------------------------------------------------------------------
// Site content — edit this file to change copy without touching components.
// ---------------------------------------------------------------------------

export const site = {
  candidateName: "Duvwon Robinson",
  officeEyebrow: "Fulton County Tax Commissioner",
  phone: "(404) 555-0142",
  email: "info@duvwonforfulton.com",
  disclaimer:
    "Paid for by the Committee to Elect Duvwon Robinson. Contributions are not tax deductible.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Issues", href: "#issues" },
  { label: "News", href: "#news" },
  { label: "Get Involved", href: "#donate" },
];

export const utilityLinks = [
  { label: "Volunteer", href: "#donate" },
  { label: "Endorsements", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export const hero = {
  eyebrow: "Duvwon Robinson for Fulton County Tax Commissioner",
  headlineLines: ["Fair taxes.", "Honest government."],
  headlineAccent: "A Fulton County that works for every homeowner.",
  subhead:
    "Duvwon believes every homeowner deserves a tax office that is transparent, responsive, and fair — no matter their zip code.",
  primaryCta: { label: "Donate Today", href: "#donate" },
  secondaryCta: { label: "Meet Duvwon", href: "#about" },
  portrait: "/images/profile.jpeg",
};

export const about = {
  eyebrow: "About Duvwon",
  title: "Meet Duvwon Robinson",
  paragraphs: [
    "Duvwon Robinson has spent two decades serving Fulton County — first as a community organizer, then as a small business owner, and now as a candidate committed to fixing a broken tax system.",
    "He's seen firsthand how confusing assessments, long wait times, and inconsistent service erode trust in local government. As Tax Commissioner, he'll bring transparency, modern technology, and genuine accountability to an office that touches every homeowner in the county.",
    "This campaign isn't about politics as usual. It's about a tax office that finally works for the people who fund it.",
  ],
  pullQuote: "Every homeowner deserves a tax office that treats them with respect and clarity — not confusion and delay.",
  video: {
    src: "/images/campaign-video.mp4",
    poster: "/images/candidate-photo.jpg",
    eyebrow: "Campaign Film",
    caption: "Why I'm running for Tax Commissioner",
  },
  portrait: "/images/candidate-photo.jpg",
  stats: [
    { value: 20, suffix: "", label: "Years of Community Service" },
    { value: 1, suffix: "", label: "Community-First Leader" },
    { value: 200, suffix: "+", label: "Homeowners Directly Helped" },
  ],
};

export const gallery = {
  eyebrow: "On the Trail",
  title: "Messages from the campaign",
  slides: [
    {
      src: "/images/IMG_6176.PNG",
      width: 1193,
      height: 1318,
      alt: "Sign quoting Dr. Martin Luther King Jr.: We need leaders not in love with money but in love with justice.",
      caption: "Leadership rooted in justice, not money.",
    },
    {
      src: "/images/IMG_6194.PNG",
      width: 1061,
      height: 1483,
      alt: "Term Tuesday graphic explaining home equity.",
      caption: "Term Tuesday: understanding home equity.",
    },
  ],
};

export const issues = [
  {
    title: "Fair & Accurate Assessments",
    description:
      "Every property assessment should be transparent, consistent, and easy to understand — with a clear, fast path to appeal when something looks wrong.",
    icon: "ScaleIcon",
  },
  {
    title: "Faster, Friendlier Service",
    description:
      "No homeowner should wait hours for a simple question. Duvwon will modernize intake, expand online services, and cut wait times across every office.",
    icon: "Clock",
  },
  {
    title: "Modernized Technology",
    description:
      "Fulton County deserves a tax system built for 2025 — secure online payments, real-time status tracking, and systems that actually talk to each other.",
    icon: "Cpu",
  },
  {
    title: "Transparent & Accountable Spending",
    description:
      "Every dollar collected should be tracked and reported clearly. Duvwon will publish plain-language budget reports so residents can see exactly where money goes.",
    icon: "FileCheck",
  },
  {
    title: "Real Community Engagement",
    description:
      "Policy shouldn't happen behind closed doors. Duvwon will hold regular town halls and build a standing resident advisory council on tax policy.",
    icon: "Users",
  },
];

export const donate = {
  eyebrow: "Get Involved",
  title: "Chip in to build a tax office that works for Fulton County",
  subhead:
    "Every contribution helps us reach more homeowners, staff a real field program, and build the case for a fairer tax office.",
  amounts: [25, 50, 100, 250],
  trust: "Secure, encrypted donation processing. Contributions are not tax deductible.",
};

export const news = [
  {
    category: "Press Release",
    date: "Sept 12, 2025",
    title: "Robinson Announces Plan to Modernize the Tax Commissioner's Office",
    excerpt:
      "Today Duvwon Robinson unveiled a five-point plan to bring faster service and greater transparency to every Fulton County homeowner.",
  },
  {
    category: "Endorsement",
    date: "Sept 3, 2025",
    title: "Local Homeowners Association Backs Robinson for Tax Commissioner",
    excerpt:
      "Community leaders across the county are lining up behind Duvwon's vision for a fairer, faster tax office.",
  },
  {
    category: "Field Update",
    date: "Aug 21, 2025",
    title: "Robinson Campaign Opens New Field Office in South Fulton",
    excerpt:
      "The new office will serve as a hub for volunteers and a resource center for residents with questions about their assessments.",
  },
];

export const footerColumns = [
  {
    heading: "About",
    links: [
      { label: "Meet Duvwon", href: "#about" },
      { label: "The Issues", href: "#issues" },
      { label: "News", href: "#news" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "#donate" },
      { label: "Volunteer", href: "#donate" },
      { label: "Contact Us", href: "#footer" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];
