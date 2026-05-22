import p1 from "@/assets/p1-dancer.jpg";
import p2 from "@/assets/p2-entrepreneur.jpg";
import p3 from "@/assets/p3-scholar.jpg";
import p4 from "@/assets/p4-farmer.jpg";
import p5 from "@/assets/p5-musician.jpg";
import p6 from "@/assets/p6-leader.jpg";
import p7 from "@/assets/p7-artist.jpg";
import p8 from "@/assets/p8-writer.jpg";
import p9 from "@/assets/p9-weaver.jpg";
import p10 from "@/assets/p10-activist.jpg";

export type Profile = {
  id: string;
  name: string;
  role: string;
  domain: string;
  quote: string;
  image: string;
  bio: string;
  achievements: string[];
  contributions: string;
  timeline: { year: string; event: string }[];
  social: { label: string; href: string }[];
};

export const profiles: Profile[] = [
  {
    id: "ananya-selvam",
    name: "Ananya Selvam",
    role: "Classical Bharatanatyam Dancer",
    domain: "Classical Arts",
    quote: "Movement is the visual representation of our ancestors' silent prayers.",
    image: p1,
    bio: "Trained since age five in the Pandanallur tradition, Ananya has performed across thirty-two countries, carrying the abhinaya of Tamil temple dance into contemporary stages while mentoring the next generation in Chennai's Kalakshetra circle.",
    achievements: [
      "Sangeet Natak Akademi Yuva Puraskar, 2022",
      "Performed at the Edinburgh International Festival",
      "Founder of the Naatya Sangam Trust for rural arts education",
    ],
    contributions:
      "Pioneered a free open-air dance series across Tamil Nadu's heritage temples, training over 400 young dancers from underrepresented districts.",
    timeline: [
      { year: "1995", event: "Born in Thanjavur to a family of nattuvanars" },
      { year: "2010", event: "Arangetram at Sri Kapaleeswarar Temple" },
      { year: "2018", event: "International debut, Esplanade Singapore" },
      { year: "2024", event: "Founded Naatya Sangam Trust" },
    ],
    social: [
      { label: "Instagram", href: "#" },
      { label: "Website", href: "#" },
    ],
  },
  {
    id: "karthik-raja",
    name: "Karthik Raja",
    role: "Agri-Tech Pioneer",
    domain: "Innovation",
    quote: "Blending Sangam wisdom with silicon to revolutionise the fields that fed empires.",
    image: p2,
    bio: "After a decade in Silicon Valley, Karthik returned to his ancestral village in Erode to build sensor networks for smallholder farmers, marrying ancestral water-harvesting knowledge with modern machine learning.",
    achievements: [
      "Forbes 30 Under 30, Asia",
      "20,000+ farmers onboarded to Vellam, his irrigation platform",
      "TED Madras speaker, 2023",
    ],
    contributions:
      "His open-source soil intelligence toolkit is now used by agriculture departments across three South Indian states.",
    timeline: [
      { year: "1992", event: "Born in Erode district" },
      { year: "2016", event: "Joined a Bay Area climate startup" },
      { year: "2021", event: "Returned home to found Vellam" },
      { year: "2025", event: "Vellam crosses 20,000 active farmers" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
  {
    id: "dr-meenakshi",
    name: "Dr. Meenakshi Iyer",
    role: "Linguistics Scholar",
    domain: "Literature",
    quote: "Our language is not just a tool; it is the geography of our soul.",
    image: p3,
    bio: "A lifelong scholar of Old Tamil and Sangam-era poetics, Dr. Meenakshi has spent five decades translating palm-leaf manuscripts and mentoring a generation of Tamil philologists.",
    achievements: [
      "Padma Shri for contributions to Tamil literature",
      "Translated the Akananuru into English",
      "Honorary Doctorate, Madras University",
    ],
    contributions:
      "Her digital archive of Sangam manuscripts is freely accessible to researchers worldwide.",
    timeline: [
      { year: "1948", event: "Born in Madurai" },
      { year: "1979", event: "PhD in Tamil literature" },
      { year: "2001", event: "Akananuru translation published" },
      { year: "2019", event: "Awarded Padma Shri" },
    ],
    social: [{ label: "Academia.edu", href: "#" }],
  },
  {
    id: "k-selvam",
    name: "K. Selvam",
    role: "Organic Farmer & Seed Keeper",
    domain: "Agriculture",
    quote: "The soil remembers every song our grandparents sang to it.",
    image: p4,
    bio: "On his three-acre farm in Sivaganga, Selvam preserves over 90 indigenous rice varieties that were nearly lost to monoculture, distributing seeds freely to farmers across the Cauvery delta.",
    achievements: [
      "Recipient of the Plant Genome Saviour Award",
      "Preserved 90+ heirloom paddy varieties",
      "Mentor to the Save Our Rice Tamil Nadu collective",
    ],
    contributions:
      "His annual seed festival has grown into a movement, drawing thousands of farmers and gardeners every Pongal.",
    timeline: [
      { year: "1956", event: "Born into a family of paddy farmers" },
      { year: "1998", event: "Began collecting native paddy seeds" },
      { year: "2012", event: "Hosted first annual seed festival" },
      { year: "2023", event: "Plant Genome Saviour Award" },
    ],
    social: [{ label: "Community Page", href: "#" }],
  },
  {
    id: "rajalakshmi",
    name: "Rajalakshmi Venkatesan",
    role: "Carnatic Vocalist & Veena Artist",
    domain: "Classical Music",
    quote: "Every raga is a temple built of breath and time.",
    image: p5,
    bio: "Performing across the Margazhi season for over thirty years, Rajalakshmi is known for her devotion to the compositions of Muthuswami Dikshitar and her rare command of the veena.",
    achievements: [
      "Sangeetha Kalanidhi recipient",
      "Recorded the complete Navagraha Kritis",
      "Mentors over 200 students globally via virtual gurukulam",
    ],
    contributions:
      "Founded a scholarship for young women musicians from rural Tamil Nadu.",
    timeline: [
      { year: "1968", event: "Born into a musical family in Chennai" },
      { year: "1985", event: "Debut at Madras Music Academy" },
      { year: "2010", event: "Released Navagraha Kritis cycle" },
      { year: "2022", event: "Sangeetha Kalanidhi honour" },
    ],
    social: [{ label: "YouTube", href: "#" }],
  },
  {
    id: "anand-murugan",
    name: "Anand Murugan",
    role: "Community Social Leader",
    domain: "Social Impact",
    quote: "A community rises only when its smallest voice is heard the loudest.",
    image: p6,
    bio: "From a fishing village in Nagapattinam, Anand has built grassroots cooperatives that empower coastal Tamil communities with education, micro-credit, and disaster preparedness.",
    achievements: [
      "Built 12 community schools post-tsunami",
      "Ashoka Fellow",
      "Organised the Coastal Tamil Youth Congress",
    ],
    contributions:
      "His cooperative model has been replicated across 40 fishing villages on the Coromandel coast.",
    timeline: [
      { year: "1985", event: "Born in Nagapattinam" },
      { year: "2004", event: "Lost family in the Indian Ocean tsunami" },
      { year: "2008", event: "Founded the Kadal Trust" },
      { year: "2020", event: "Named Ashoka Fellow" },
    ],
    social: [{ label: "Trust Site", href: "#" }],
  },
  {
    id: "vignesh-arumugam",
    name: "Vignesh Arumugam",
    role: "Contemporary Visual Artist",
    domain: "Visual Arts",
    quote: "I paint to keep a conversation going with the wall paintings of Chola caves.",
    image: p7,
    bio: "Vignesh translates the iconography of Tamil temple murals into bold contemporary canvases that have travelled from Kochi to Venice, redefining how the world sees South Indian visual heritage.",
    achievements: [
      "Featured at the Kochi-Muziris Biennale",
      "Solo show at Tate Modern's Tamil Modernisms",
      "Charles Wallace India Trust grantee",
    ],
    contributions:
      "Runs a residency in Mahabalipuram pairing traditional sthapatis with contemporary artists.",
    timeline: [
      { year: "1988", event: "Born in Madurai" },
      { year: "2014", event: "First solo show in Chennai" },
      { year: "2020", event: "Tate Modern group exhibition" },
      { year: "2024", event: "Opened Mahabalipuram residency" },
    ],
    social: [{ label: "Instagram", href: "#" }],
  },
  {
    id: "perumal-velan",
    name: "Perumal Velan",
    role: "Novelist & Essayist",
    domain: "Literature",
    quote: "Words are the only vessels that carry an entire civilisation across centuries.",
    image: p8,
    bio: "Author of nine novels chronicling the lives of caste-oppressed communities in Tamil Nadu, Perumal's prose is widely taught in universities and translated into eleven languages.",
    achievements: [
      "Sahitya Akademi Award",
      "JCB Prize for Literature shortlist",
      "Translated into 11 languages",
    ],
    contributions:
      "Founded a Tamil writing collective supporting first-time novelists from rural districts.",
    timeline: [
      { year: "1966", event: "Born in Karur" },
      { year: "1995", event: "Debut novel published" },
      { year: "2017", event: "Sahitya Akademi Award" },
      { year: "2023", event: "Founded Eluthu Collective" },
    ],
    social: [{ label: "Publisher", href: "#" }],
  },
  {
    id: "palanivel-s",
    name: "S. Palanivel",
    role: "Master Silk Weaver",
    domain: "Craft",
    quote: "Gold thread carries an oath; you weave only what you can stand by.",
    image: p9,
    bio: "A fourth-generation Kanchipuram silk weaver, Palanivel revived a forgotten temple-border motif and trained over 60 young weavers, ensuring the craft survives industrialisation.",
    achievements: [
      "National Award for Master Craftsperson",
      "Revived 6 temple-border motifs",
      "Trained 60+ young weavers",
    ],
    contributions:
      "Operates a fair-wage handloom cooperative serving 22 weaver families.",
    timeline: [
      { year: "1962", event: "Born in Kanchipuram" },
      { year: "1980", event: "Inherited family loom" },
      { year: "2009", event: "National Award for Master Craftsperson" },
      { year: "2018", event: "Founded weaver cooperative" },
    ],
    social: [{ label: "Co-op", href: "#" }],
  },
  {
    id: "muthu-pandian",
    name: "Muthu Pandian",
    role: "Folk Performer & Cultural Activist",
    domain: "Folk Heritage",
    quote: "The parai is not just a drum; it is the heartbeat of a forgotten people.",
    image: p10,
    bio: "Muthu has reclaimed the parai drum from caste stigma, taking it into schools, universities, and global stages as an instrument of Tamil pride and resistance.",
    achievements: [
      "Performed at the British Museum",
      "Founded Parai Pasanga, a youth ensemble",
      "Speaker at the World Tamil Conference",
    ],
    contributions:
      "His ensemble has trained over 3,000 young people across Tamil Nadu and the diaspora in parai performance.",
    timeline: [
      { year: "1979", event: "Born in Madurai district" },
      { year: "2005", event: "Started teaching parai in colleges" },
      { year: "2014", event: "Founded Parai Pasanga" },
      { year: "2022", event: "British Museum performance" },
    ],
    social: [{ label: "YouTube", href: "#" }],
  },
];
