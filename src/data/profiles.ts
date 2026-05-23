

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
  images: string[];
};

export const profiles: Profile[] = [
  {
    id: "guhan-sivakumar",
    name: "Guhan Sivakumar",
    role: "Student Leader & Business Scholar",
    domain: "Leadership & Finance",
    quote:
      "Driven by service, leadership, and ambition to create meaningful impact across business, education, and the Tamil community.",
    image: "src/assets/p1-dancer.JPEG",
    bio: "Guhan Sivakumar is a student leader, finance aspirant, and community advocate currently studying at Indiana University’s Kelley School of Business. From leading student government initiatives for over 14,000 students to representing student voices at the university level, Guhan has demonstrated excellence in leadership, academics, and service.",
    achievements: [
      "Elected President of the Student Body at Kelley School of Business",
      "Selected to the Kelley Honors Program and Hutton Honors College",
      "Recipient of the Dean’s Scholar $28,000 merit award",
      "Chosen as 1 of 12 students on Indiana University’s 105th Board of Aeons",
      "Selected for the Investment Banking Workshop program",
      "Awarded scholarship for Varsity Volleyball leadership and commitment",
    ],
    contributions:
      "Through student government, professional development programs, and Tamil community involvement, Guhan has worked to amplify student voices, expand access to career resources, and foster cultural engagement across campus and beyond.",
    timeline: [
      {
        year: "2022",
        event: "Elected Executive Student Council Secretary at Farmington High School",
      },
      { year: "2024", event: "Joined Indiana University Kelley School of Business" },
      { year: "2025", event: "Selected to Investment Banking Workshop and Board of Aeons" },
      { year: "2026", event: "Elected President of the Student Body at Kelley School of Business" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
    images: [
      "src/assets/FETNA_1.jpg",
      "src/assets/FETNA_2.jpeg",
      "src/assets/FETNA_3.jpg",
      "src/assets/FETNA_4.jpg",
      "src/assets/FETNA_5.jpg",

    ],
  },
  {
    id: "jancyrani-prabhakaran",
    name: "திருமதி ஜான்சிராணி பிரபாகரன்",
    role: "வட அமெரிக்கத் தமிழ்ச் சங்கப் பேரவையின் உதவிப் பொருளாளர் பதவிக்கான வேட்பாளர்",
    organization: "விஸ்கான்சின் தமிழ்ச் சங்கம்",
    domain: "தமிழ் பண்பாடு • சமூக சேவை • தலைமைத்துவம்",
    quote: "மொழியே அடையாளம் • கலையே வாழ்வு • சேவையே இலக்கு",
    image: "src/assets/p2-entrepreneur.JPG",

    bio: "கடந்த நான்கு தசாப்தங்களாக தமிழ் மொழி, கலை, பண்பாடு மற்றும் சமூக சேவைக்காக tireless-ஆக செயல்பட்டு வரும் திருமதி ஜான்சிராணி பிரபாகரன், இந்தியக் குடியரசுத் தலைவரின் சிறந்த இளம் சாரணியர் விருதிலிருந்து அமெரிக்க ஜனாதிபதியின் தன்னார்வ சேவை விருது வரை பல்வேறு அங்கீகாரங்களைப் பெற்றுள்ளார். விஸ்கான்சின் தமிழ்ச் சங்கத்தின் நிறுவனர் உறுப்பினர்களில் ஒருவராகவும், FeTNA-வில் 20 ஆண்டுகளுக்கும் மேலாக பல்வேறு பொறுப்புகளில் பணியாற்றியவராகவும் திகழ்கிறார். கரகம், பறை, வில்லுப்பாட்டு போன்ற பாரம்பரியக் கலைகளை அமெரிக்க மேடைகளில் கொண்டு சென்றதுடன், கிராமத் தத்தெடுப்பு, கல்வி உதவி, பெண்கள் முன்னேற்றம் மற்றும் ஹார்வர்ட் தமிழ் இருக்கை நிதி திரட்டல் போன்ற சமூகப் பணிகளிலும் பெரும் பங்காற்றியுள்ளார்.",

    achievements: [
      "இந்தியக் குடியரசுத் தலைவரின் சிறந்த சாரணி விருது (1986)",
      "சிறந்த கலாச்சார ஒருங்கிணைப்பாளர் விருது (2018)",
      "உலகத் தமிழ்ப் பெண் விருது (2021)",
      "சிறந்த பெண் சாதனையாளர் விருது (2022)",
      "அமெரிக்க ஜனாதிபதி தன்னார்வ சேவை விருது (2023)",
      "கின்னஸ் உலகச் சாதனை அங்கீகாரம் – தெருக்கூத்து கலை (2024)",
    ],

    contributions:
      "18 ஆண்டுகளுக்கும் மேலாக கலை ஒருங்கிணைப்பாளராக இருந்து பாரம்பரியத் தமிழ்க் கலைகளை அமெரிக்கத் தமிழர் சமூகத்துக்கு கொண்டு சென்றுள்ளார். மாநில அரசு நிதி உதவிகளை விஸ்கான்சின் தமிழ்ச் சங்கத்திற்காக பெற்றுத்தந்ததுடன், கிராமத் தத்தெடுப்பு திட்டங்கள் மூலம் கல்வி, பெண்கள் சுகாதாரம் மற்றும் வாழ்வாதார உதவிகளை வழங்கியுள்ளார். ஹார்வர்ட் தமிழ் இருக்கை நிதி திரட்டலிலும் முக்கிய பங்களிப்பு செய்துள்ளார்.",

    leadership: [
      "விஸ்கான்சின் தமிழ்ச் சங்கத்தின் நிறுவனர் உறுப்பினர்",
      "தலைவர், செயலாளர், துணைத் தலைவர் உள்ளிட்ட பல்வேறு நிர்வாகப் பொறுப்புகள்",
      "FeTNA திட்டக்குழு, மக்கள் தொடர்பு குழு, மலர்க் குழு மற்றும் வழிநடத்தல் குழு உறுப்பினர்",
      "FiTEN உலகத் தமிழ் தொழில்முனைவோர் மாநாடு ஒருங்கிணைப்புக் குழு",
      "தமிழ்ப் பள்ளி ஆசிரியர் மற்றும் இளைஞர் வழிகாட்டி",
    ],

    socialImpact: [
      "2009 வாஷிங்டன் டி.சி தமிழர் பேரணியில் பங்கேற்பு மற்றும் ஒருங்கிணைப்பு",
      "ஜல்லிக்கட்டு ஆதரவு போராட்டங்களில் பங்கேற்பு",
      "கிராமத் தத்தெடுப்பு திட்டங்கள்",
      "மாணவர்களுக்கு கல்வி உதவி",
      "பெண்கள் முன்னேற்ற மற்றும் சுகாதார உதவித் திட்டங்கள்",
    ],

    vision: [
      "வெளிப்படையான மற்றும் பொறுப்புணர்வான நிதி நிர்வாகம்",
      "உறுப்பினர் சங்கங்களுடன் நம்பிக்கை மற்றும் ஒற்றுமையை வலுப்படுத்துதல்",
      "FiTEN அனுபவத்தின் மூலம் நிதி வளங்களை மேம்படுத்துதல்",
      "தமிழ்ச் சமூக வளர்ச்சிக்காக நிதியை பயனுள்ளதாக பயன்படுத்துதல்",
      "அடுத்த தலைமுறைக்கான தமிழ் கல்வி மற்றும் பண்பாட்டு வளர்ச்சியை உறுதி செய்தல்",
    ],

    timeline: [
      {
        year: "1986",
        event: "இந்தியக் குடியரசுத் தலைவரின் சிறந்த இளம் சாரணி விருது பெற்றார்",
      },
      {
        year: "2002",
        event: "விஸ்கான்சின் தமிழ்ச் சங்கத்தின் நிறுவலில் பங்காற்றினார்",
      },
      {
        year: "2003",
        event: "தமிழ்ப் பள்ளி ஆசிரியராக பணியைத் தொடங்கினார்",
      },
      {
        year: "2009",
        event: "வாஷிங்டன் டி.சி தமிழர் பேரணியில் விஸ்கான்சின் குழுவை வழிநடத்தினார்",
      },
      {
        year: "2018",
        event: "சிறந்த கலாச்சார ஒருங்கிணைப்பாளர் விருது பெற்றார்",
      },
      {
        year: "2023",
        event: "அமெரிக்க ஜனாதிபதி தன்னார்வ சேவை விருது பெற்றார்",
      },
      {
        year: "2024",
        event: "தெருக்கூத்து கலை வழியாக கின்னஸ் உலகச் சாதனை படைத்தார்",
      },
    ],

    social: [
      {
        label: "Wisconsin Tamil Sangam",
        href: "#",
      },
      {
        label: "FeTNA",
        href: "#",
      },
    ],
    images: [
      "src/assets/30th_FeTNA.PNG",
      "src/assets/2023FeTNA_Sangangalin Sangamam.PNG",
      "src/assets/2023FeTNA.PNG",
      "src/assets/2025FITEN_Madurai.PNG",
      "src/assets/2025NallaKannu_Aiyaa.PNG",
      "src/assets/2025NRT.JPG",
      "src/assets/2025NRT.PNG",
      "src/assets/2026_FeTNA.PNG",
      "src/assets/2026NRT (1).PNG",
      "src/assets/2026NRT (2).PNG",
      "src/assets/2026NRT.PNG",
      "src/assets/2026Tamilisai_Chennai.PNG",
      "src/assets/Chicago_Tirukkural_Manaadu.PNG",
      "src/assets/Parai.PNG",
      "src/assets/Therukoothu_2024.PNG",
      "src/assets/Unconfirmed 96451.crdownload",
      "src/assets/Unconfirmed 875047.crdownload",
    ],
  },
  {
    id: "dr-kapilan-vellaiya",
    name: "முனைவர் கபிலன் வெள்ளையா",
    role: "பேரவை (FeTNA) துணைத் தலைவர் வேட்பாளர்",
    organization: "New Jersey Tamil Peravai",
    domain: "தமிழ்க்கல்வி • நிர்வாகம் • சமூக சேவை",
    quote: "வெளிப்படைத்தன்மை • அணுகக்கூடிய தலைமைத்துவம் • சேவை • ஒற்றுமை",
    image: "src/assets/WhatsApp Image 2026-05-23 at 12.03.56 PM.jpeg",

    bio: "Rutgers University-யில் கடந்த 28 ஆண்டுகளாக கல்வி மற்றும் ஆராய்ச்சி துறையில் பணியாற்றி வரும் முனைவர் கபிலன் வெள்ளையா அவர்கள், Rutgers School of Dental Medicine-இல் துணைப் பேராசிரியராக 16 ஆண்டுகளுக்கும் மேலாக சேவை செய்து வருகிறார். மருத்துவம், பல் மருத்துவம், PhD மற்றும் சர்வதேச மாணவர்களுக்கு கற்பித்துவருவதுடன், இரும்புச் சத்து குறைபாடு மற்றும் Alzheimer நோய் தொடர்பான முக்கிய ஆராய்ச்சிகளில் ஈடுபட்டு வருகிறார். தமிழ் மொழி, கல்வி, சமூக ஒற்றுமை மற்றும் பேரவை நிர்வாக வளர்ச்சிக்காக tireless-ஆக செயல்பட்டு வரும் இவர், FeTNA செயலாளராக வெளிப்படையான நிர்வாகத்தையும் வலுவான தகவல் தொடர்பையும் உருவாக்கியுள்ளார்.",

    achievements: [
      "Rutgers University-யில் 28 ஆண்டுகளுக்கும் மேலான கல்விச் சேவை",
      "Rutgers School of Dental Medicine துணைப் பேராசிரியர்",
      "46 சர்வதேச முனைவர் பட்ட ஆய்வுக்கட்டுரைகளுக்கான தேர்வுக்குழு உறுப்பினர்",
      "பேரவை செயலாளர் (2024–2026)",
      "New Jersey Tamil Peravai இணை நிறுவனர் மற்றும் நிறுவனர் தலைவர்",
      "குமாரசாமி தமிழ்ப்பள்ளி இணை நிறுவனர்",
    ],

    contributions:
      "தமிழ் மொழிக் கல்வி, இருமொழி முத்திரை (Seal of Biliteracy), தமிழ் பள்ளிகள் ஒருங்கிணைப்பு மற்றும் சமூக ஒற்றுமைக்காக தொடர்ந்து செயல்பட்டு வருகிறார். COVID காலத்தில் நிவாரண திட்டங்களை ஒருங்கிணைத்ததுடன், பேரவையின் தகவல் தொடர்பு, உறுப்பினர் ஒருங்கிணைப்பு மற்றும் நிர்வாக வெளிப்படைத்தன்மையை வலுப்படுத்தியுள்ளார்.",

    leadership: [
      "பேரவை தமிழ் அறிவியல் குழு உறுப்பினர் (2020–2024)",
      "பேரவை மாநாட்டு பதிவுப் பொறுப்பாளர் மற்றும் இணை அரங்கு ஒருங்கிணைப்பாளர்",
      "பேரவை செயலாளர் (2024–2026)",
      "New Jersey Tamil Peravai நிறுவனர் தலைவர்",
      "குமாரசாமி தமிழ்ப்பள்ளி தலைவர் மற்றும் துணைத் தலைவர்",
      "அமெரிக்கத் தமிழ்க்கல்விக் கழக இயக்குநர் (2017–2018)",
    ],

    educationAndResearch: [
      "மருத்துவம், பல் மருத்துவம் மற்றும் PhD மாணவர்களுக்கு கற்பித்தல்",
      "19 முதுநிலை மாணவர்களுக்கு ஆய்வுக்கட்டுரை வழிகாட்டி",
      "28 ஆய்வகப் பயிற்சி மாணவர்களுக்கு ஆராய்ச்சி வழிகாட்டுதல்",
      "உயர்நிலைப் பள்ளி மற்றும் பல் மருத்துவ மாணவர்களுக்கு கோடை கால ஆராய்ச்சி வழிகாட்டுதல்",
      "Iron Deficiency Anemia மற்றும் Alzheimer நோய் தொடர்பான ஆராய்ச்சிகள்",
    ],

    tamilService: [
      "தமிழ் பள்ளிகள் ஒருங்கிணைப்பு மற்றும் கல்வி மேம்பாடு",
      "Seal of Biliteracy பெற மாணவர்களுக்கு வழிகாட்டுதல்",
      "பொங்கல், சித்திரை, உலகத் தாய்மொழி தின விழாக்கள் ஒருங்கிணைப்பு",
      "தமிழ் மொழி மற்றும் பண்பாட்டு வளர்ச்சிக்கான சமூக நிகழ்ச்சிகள்",
      "தமிழ் இளைஞர்களுக்கான கல்வி மற்றும் தலைமைத்துவ ஊக்குவிப்பு",
    ],

    administrativeWorks: [
      "வெளிப்படையான நிர்வாகம் மற்றும் Minutes பகிர்வு",
      "ஒழுங்குபடுத்தப்பட்ட தகவல் தொடர்பு அமைப்பு",
      "உறுப்பினர் சங்கங்களுடனான தொடர்ச்சியான தொடர்பு",
      "32 பேரவை குழுக்களுக்கு ஆதரவு மற்றும் ஒருங்கிணைப்பு",
      "மாநாட்டு நிர்வாக மற்றும் ஒருங்கிணைப்பு ஆதரவு",
      "ஆவணப்படுத்தல் மற்றும் பொறுப்புணர்வு நடைமுறைகள்",
    ],

    vision: [
      "தமிழ் பள்ளிகள் மற்றும் தமிழ்க்கல்வியை வட அமெரிக்கா முழுவதும் வலுப்படுத்துதல்",
      "தமிழ் சங்கங்களுக்கிடையிலான ஒற்றுமையை மேம்படுத்துதல்",
      "இளைஞர் தலைமைத்துவ வளர்ச்சிக்கான வாய்ப்புகளை உருவாக்குதல்",
      "வெளிப்படையான மற்றும் எளிதில் அணுகக்கூடிய நிர்வாகத்தை உறுதி செய்தல்",
      "தமிழ் மொழி, இலக்கியம், கலை மற்றும் சமூக சேவையை அடுத்த தலைமுறைக்கு கொண்டு செல்லுதல்",
    ],

    timeline: [
      {
        year: "1998",
        event: "Rutgers University-யில் பணியைத் தொடங்கினார்",
      },
      {
        year: "2014",
        event: "குமாரசாமி தமிழ்ப்பள்ளியை இணை நிறுவினார்",
      },
      {
        year: "2016",
        event: "FeTNA மாநாட்டில் தமிழ்ப்பள்ளி ஒருங்கிணைப்பாளராக பணியாற்றினார்",
      },
      {
        year: "2019",
        event: "New Jersey Tamil Peravai-யை நிறுவினார்",
      },
      {
        year: "2020",
        event: "பேரவை தமிழ் அறிவியல் குழு உறுப்பினராக சேர்ந்தார்",
      },
      {
        year: "2024",
        event: "பேரவை செயலாளராக பொறுப்பேற்றார்",
      },
      {
        year: "2026",
        event: "பேரவை துணைத் தலைவர் வேட்பாளராக போட்டியிடுகிறார்",
      },
    ],

    social: [
      {
        label: "New Jersey Tamil Peravai",
        href: "#",
      },
      {
        label: "Kumarasamy Tamil School",
        href: "#",
      },
      {
        label: "FeTNA",
        href: "#",
      },
    ],
    images: [
      "src/assets/vk2.png",
      "src/assets/NJTaP.JPG",
      "src/assets/NJTaP Foundars.png",
      "src/assets/B 01 (50)_Original.JPG",
      "src/assets/B 01 (129)_Original.JPG",
      "src/assets/aa59d0eb-7719-458a-b54b-7698d0398a00.jpg"
    ],
  },
  {
    id: "k-selvam",
    name: "K. Selvam",
    role: "Organic Farmer & Seed Keeper",
    domain: "Agriculture",
    quote: "The soil remembers every song our grandparents sang to it.",
    image: "src/assets/p4-farmer.jpeg",
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
    id: "karthikeyan-perumal",
    name: "கார்த்திகேயன் பெருமாள்",
    role: "பேரவை (FeTNA) பொருளாளர் வேட்பாளர் (2026–2028)",
    organization: "சான் ஃபிரான்சிஸ்கோ வளைகுடாப் பகுதித் தமிழ் மன்றம்",
    domain: "நிதி நிர்வாகம் • சமூக சேவை • தலைமைத்துவம்",
    quote: "வலுவான நிதி • வலுவான சேவைக்கு அடித்தளம்",
    image: "src/assets/p5-musician.jpeg",

    bio: "2007 முதல் வட அமெரிக்கத் தமிழ் அமைப்புகள் மற்றும் சமூக சேவைகளில் தொடர்ந்து தன்னார்வத் தொண்டாற்றி வரும் கார்த்திகேயன் பெருமாள் அவர்கள், பேரவை (FeTNA) மற்றும் வளைகுடாப் பகுதித் தமிழ் மன்றத்தின் பல்வேறு நிர்வாக, நிதி மற்றும் மாநாட்டு குழுக்களில் முக்கிய பங்களிப்புகளை வழங்கியுள்ளார். நிதி வெளிப்படைத்தன்மை, பொறுப்புணர்வு மற்றும் சமூக நலனுக்கான அர்ப்பணிப்புடன் செயல்பட்டு வரும் இவர், பல்வேறு நிதி திரட்டல் முயற்சிகள், பேரிடர் நிவாரணப் பணிகள் மற்றும் தமிழ் பண்பாட்டு வளர்ச்சித் திட்டங்களில் சிறப்பாக செயல்பட்டு வருகிறார்.",

    achievements: [
      "பேரவை இயக்குநர் (2024 முதல்)",
      "Raleigh FeTNA மாநாட்டிற்கு $60,000 நிதி திரட்டலில் முக்கிய பங்கு",
      "தமிழக வெள்ள நிவாரணத்திற்காக $320,000-க்கும் மேல் திரட்ட உதவி",
      "ஹார்வர்ட் தமிழ் இருக்கை நிதி திரட்டலில் பங்களிப்பு",
      "COVID நிவாரண பணிகளில் ஒருங்கிணைப்பாளர்",
      "தமிழ் பண்பாட்டு மையத்திற்கான நிதி திரட்டலில் முக்கிய பங்களிப்பு",
    ],

    contributions:
      "பேரவை மற்றும் வளைகுடாப் பகுதித் தமிழ் மன்றத்தின் பல்வேறு குழுக்களில் தொடர்ந்து பணியாற்றி, நிதி மேலாண்மை, நிதி திரட்டல், மாநாட்டு திட்டமிடல் மற்றும் சமூக சேவை நடவடிக்கைகளில் முக்கிய பங்களிப்புகளை வழங்கியுள்ளார். ரத்ததான முகாம்கள், COVID நிவாரணப் பணிகள், தமிழ் கல்வி மற்றும் பண்பாட்டு முயற்சிகளிலும் தொடர்ந்து ஈடுபட்டு வருகிறார்.",

    leadership: [
      "பேரவை இயக்குநர் (2024–தற்போது)",
      "Raleigh FeTNA மாநாட்டு நிதி திரட்டும் குழு உறுப்பினர்",
      "Marketing & Sponsorship பொறுப்பாளர் – தமிழ் மன்றம்",
      "தமிழ் மன்ற அமைப்பாளர் / ஒருங்கிணைப்பாளர் (2018)",
      "COVID NGO ஒருங்கிணைப்பாளர்",
      "பல்வேறு பேரவை துணைக்குழு உறுப்பினர்",
    ],

    financialExperience: [
      "வரவு–செலவு கணக்குகள் சரிபார்ப்பு மற்றும் நிர்வாக அனுபவம்",
      "பெரிய அளவிலான நிதி திரட்டல் முயற்சிகளில் தலைமைத்துவம்",
      "நிதி வெளிப்படைத்தன்மை மற்றும் உறுப்பினர் அறிக்கை பகிர்வு",
      "நெருக்கடி கால நிதி மேலாண்மை",
      "நுட்ப நிதி மேலாண்மை மற்றும் திட்டமிடல்",
    ],

    communityService: [
      "தமிழக வெள்ள நிவாரணப் பணிகள்",
      "COVID நிவாரணத் திட்ட ஒருங்கிணைப்பு",
      "ரத்ததான முகாம்கள் நடத்தல்",
      "தமிழ் பள்ளி தன்னார்வ சேவை",
      "தமிழ் பண்பாட்டு மைய நிதி திரட்டல்",
      "ஹார்வர்ட் தமிழ் இருக்கை நிதி ஆதரவு",
    ],

    organizations: [
      "Bay Area Tamil Manram",
      "Bay Area Fine Arts (BAFA)",
      "TEAM",
      "We Reach Out",
      "Association of Indo Americans (AIA)",
      "California Tamil Academy (CTA)",
    ],

    vision: [
      "வெளிப்படையான நிதி நிர்வாகத்தை உருவாக்குதல்",
      "உறுப்பினர்களுடன் முறைப்படியான நிதி அறிக்கை பகிர்வு",
      "பேரவையின் எதிர்கால வளர்ச்சிக்கான நிதி அடித்தளத்தை வலுப்படுத்துதல்",
      "சமூக சேவைக்கான நிதி வளங்களை மேம்படுத்துதல்",
      "தமிழ் அமைப்புகளுக்கிடையிலான ஒருங்கிணைப்பை வலுப்படுத்துதல்",
      "நம்பிக்கை மற்றும் பொறுப்புணர்வை அடிப்படையாகக் கொண்ட நிர்வாகம்",
    ],

    timeline: [
      {
        year: "2007",
        event: "தமிழ் மன்ற நிகழ்ச்சிகளில் தன்னார்வத் தொண்டராக செயல்படத் தொடங்கினார்",
      },
      {
        year: "2015",
        event: "FeTNA வளைகுடாப் பகுதி மாநாட்டு திட்டமிடல் மற்றும் நிதி திரட்டலில் முக்கிய பங்கு வகித்தார்",
      },
      {
        year: "2015",
        event: "தமிழக வெள்ள நிவாரணத்திற்காக $320,000+ திரட்ட உதவினார்",
      },
      {
        year: "2017",
        event: "ஹார்வர்ட் தமிழ் இருக்கை நிதி திரட்டலில் பங்கேற்றார்",
      },
      {
        year: "2018",
        event: "தமிழ் மன்ற அமைப்பாளர் / ஒருங்கிணைப்பாளராக தேர்ந்தெடுக்கப்பட்டார்",
      },
      {
        year: "2020",
        event: "COVID நிவாரண பணிகளில் ஒருங்கிணைப்பாளராக செயல்பட்டார்",
      },
      {
        year: "2024",
        event: "பேரவை இயக்குநராக தேர்ந்தெடுக்கப்பட்டார்",
      },
      {
        year: "2026",
        event: "பேரவை பொருளாளர் பதவிக்குப் போட்டியிடுகிறார்",
      },
    ],

    principles: [
      "வெளிப்படைத்தன்மை",
      "நேர்மை",
      "பொறுப்புணர்வு",
      "தொழில்முறை நிதி நிர்வாகம்",
      "கூட்டுழைப்பு",
      "முடிவுகளை நோக்கிய செயல்பாடு",
    ],

    social: [
      {
        label: "FeTNA",
        href: "#",
      },
      {
        label: "Bay Area Tamil Manram",
        href: "#",
      },
    ],
  },
  {
    id: "anand-murugan",
    name: "Anand Murugan",
    role: "Community Social Leader",
    domain: "Social Impact",
    quote: "A community rises only when its smallest voice is heard the loudest.",
    image: "src/assets/p6-leader.jpeg",
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
    image: "src/assets/p7-artist.jpeg",
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
    image: "src/assets/p8-writer.jpeg",
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
    image: "src/assets/p9-weaver.jpeg",
    bio: "A fourth-generation Kanchipuram silk weaver, Palanivel revived a forgotten temple-border motif and trained over 60 young weavers, ensuring the craft survives industrialisation.",
    achievements: [
      "National Award for Master Craftsperson",
      "Revived 6 temple-border motifs",
      "Trained 60+ young weavers",
    ],
    contributions: "Operates a fair-wage handloom cooperative serving 22 weaver families.",
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
    image: "src/assets/p10-activist.jpeg",
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
