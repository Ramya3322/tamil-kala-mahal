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
    id: "Ezhilan Ramarajan ",
    name: "Ezhilan Ramarajan (President)",
    role: "Tamil Community Leader & Cultural Advocate",
    domain: "Tamil Community Service & Heritage",
    quote:
      "Leadership is about bringing people together, listening with maturity, and moving forward collectively for the greater good of the community.",
    image: "src/assets/WhatsApp Image 2026-05-23 at 3.15.30 PM.jpeg",
    bio: "Ezhilan Ramarajan is a longtime Tamil community volunteer, technology leader, entrepreneur, and cultural advocate with more than 17 years of active service in Tamil Sangam and FeTNA initiatives. Born and raised in Chennai, Tamil Nadu, he currently serves as Vice President of FeTNA and has held multiple leadership roles within the Greater Atlanta Tamil Sangam. Alongside his organizational leadership, he is also a Varmakalai Aasan dedicated to preserving and promoting ancient Tamil martial arts and heritage for future generations.",
    achievements: [
      "Current Vice President of FeTNA",
      "Former Joint Treasurer of FeTNA",
      "Former President and Chairman of Greater Atlanta Tamil Sangam",
      "17+ years of Tamil Sangam and FeTNA service",
      "FeTNA Convention Coordinator for 2020 & 2021",
      "Technology leader and entrepreneur focused on AI and digital modernization",
    ],
    contributions:
      "Ezhilan has contributed extensively to governance, transparency, finance, youth leadership, convention planning, technology modernization, Tamil education, and preservation of Tamil martial arts including Adimurai, Varmakalai, Kuthuvarisai, and Silambam through FeTNA and Tamil Sangam initiatives.",
    timeline: [
      { year: "1997", event: "Moved to the United States and began Tamil community involvement" },
      { year: "2009", event: "Started FeTNA committee leadership and advisory service" },
      { year: "2020", event: "Served as FeTNA Convention Coordinator" },
      { year: "2025", event: "Steering Committee Member for Raleigh FeTNA Convention" },
    ],
    social: [{ label: "YouTube", href: "#" }],
    images: [
      "src/assets/20200227_140148.jpg",
      "src/assets/20240427_204759.jpg",
      "src/assets/20240427_210203.jpg",
      "src/assets/20240515_111618.jpg",
      "src/assets/Chocolate Krishna-37.jpg",
      "src/assets/Chocolate Krishna-132.jpg",
      "src/assets/DSC_0054.JPG",
      "src/assets/DSC00656.JPG"

    ],
  },
  {
    id: "dr-kapilan-vellaiya",
    name: "முனைவர் கபிலன் வெள்ளையா (Vice President)",
    role: "பேரவை (FeTNA) துணைத் தலைவர் வேட்பாளர்",
    // organization: "New Jersey Tamil Peravai",
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
    id: "vallikkannan-maruthappan",
    name: "வள்ளிக்கண்ணன் மருதப்பன்",
    role: "பேரவை (FeTNA) செயலாளர் வேட்பாளர் (2026–2028)",
    organization: "FeTNA",
    domain: "நிர்வாகம் • நிதி மேலாண்மை • சமூக சேவை",
    quote: "உண்மை • வெளிப்படைத்தன்மை • நம்பிக்கை",
    image: "src/assets/p10-activist.jpeg",

    bio: "பேரவை (FeTNA) அமைப்பில் பல ஆண்டுகளாக நிர்வாகம், நிதி மேலாண்மை மற்றும் சமூக சேவைகளில் முக்கிய பங்காற்றி வரும் வள்ளிக்கண்ணன் மருதப்பன் அவர்கள், 2024–2026 காலகட்டத்தில் பொருளாளராக இருந்து முழுமையான நிதி நிர்வாக மாற்றங்களை முன்னெடுத்தார். வெளிப்படைத்தன்மை, பொறுப்புணர்வு மற்றும் நம்பகத்தன்மையை அடிப்படையாகக் கொண்டு பேரவையின் கணக்கியல் மற்றும் நிர்வாக முறைகளை நவீனப்படுத்தியுள்ளார்.",

    achievements: [
      "பேரவை பொருளாளர் (2024–2026)",
      "4 மில்லியன் டாலருக்கும் மேற்பட்ட நிதி பரிவர்த்தனைகளுக்கான ஒழுங்குபடுத்தப்பட்ட கணக்கியல் நடைமுறை உருவாக்கம்",
      "பேரவை வரலாற்றில் முதல் முறையாக மென்பொருள் அடிப்படையிலான கணக்கியல் முறை அறிமுகம்",
      "நிதி ஆவணப்படுத்தல் மற்றும் வெளிப்படைத்தன்மை நடைமுறைகள் உருவாக்கம்",
      "Raleigh மாநாடு 2025 ஒருங்கிணைப்புக் குழு உறுப்பினர்",
      "FeTNA – தமிழ்நாடு அரசு இணைப்புக் குழுத் தலைவர்",
    ],

    contributions:
      "பேரவையின் நிதி நிர்வாகத்தில் வெளிப்படைத்தன்மை மற்றும் தொழில்முறை நடைமுறைகளை கொண்டு வந்ததுடன், உறுப்பினர் சங்கங்கள் மற்றும் பொதுக்குழுக்களுடன் நிதி அறிக்கைகளை முறையாக பகிர்ந்துள்ளார். தமிழ் சங்கங்களை இணைக்கும் முயற்சிகள், மாநாட்டு ஒருங்கிணைப்பு மற்றும் சமூக சேவை திட்டங்களிலும் தொடர்ந்து பங்களித்து வருகிறார்.",

    leadership: [
      "பேரவை பொருளாளர் (2024–2026)",
      "FeTNA – தமிழ்நாடு அரசு இணைப்புக் குழுத் தலைவர்",
      "Raleigh மாநாடு 2025 ஒருங்கிணைப்புக் குழு உறுப்பினர்",
      "2020 மெய்நிகர் மாநாட்டு தொழில்நுட்பக் குழு உறுப்பினர்",
      "வட அமெரிக்க தமிழ் சங்க ஒருங்கிணைப்பு WhatsApp குழு நிர்வாகி",
    ],

    financialManagement: [
      "மென்பொருள் அடிப்படையிலான கணக்கியல் முறை அறிமுகம்",
      "நிதி ஆவணங்கள் மற்றும் ரசீதுகளுக்கான முறைப்படுத்தப்பட்ட சேமிப்பு",
      "நிதி அறிக்கைகள் மற்றும் பொதுக்குழு விளக்கங்கள்",
      "செலவுக் கட்டுப்பாடு மற்றும் சேமிப்பு மேலாண்மை",
      "எதிர்கால பொருளாளர்களுக்கான கணக்கியல் வழிகாட்டி உருவாக்கம்",
    ],

    tamilService: [
      "தமிழர் மாநாடுகள் மற்றும் தமிழ் விழாக்கள் ஒருங்கிணைப்பு",
      "தமிழ் கலை, இலக்கிய மற்றும் இளைஞர் நிகழ்ச்சிகள் நடத்தல்",
      "தமிழ் சங்கங்களுக்கிடையிலான ஒற்றுமை முயற்சிகள்",
      "தமிழ் சமூக உரிமை மற்றும் பண்பாட்டு ஆதரவு செயல்பாடுகள்",
    ],

    humanitarianWorks: [
      "COVID காலத்தில் மாணவர்களுக்கு உணவு உதவி வழங்கல்",
      "தேவையுள்ள கலைஞர்களுக்கு நிதி உதவி",
      "இசை மற்றும் கலை நிகழ்ச்சிகள் மூலம் சமூக ஆதரவு",
      "தமிழ் பண்பாட்டு வளர்ச்சிக்கான தன்னார்வ சேவை",
    ],

    awards: [
      "மனிதநேய தீபம் விருது (2009)",
      "தமிழன்பன் விருது (2019)",
      "COVID ஹீரோஸ் விருது (2020)",
      "தொண்டுச் செம்மல் விருது (2020)",
      "மாமனிதன் விருது (2021)",
      "உலகத் தமிழ் ஒளி விருது (2022)",
    ],

    principles: [
      "வெளிப்படைத்தன்மை",
      "நம்பிக்கை",
      "பொறுப்புணர்வு",
      "தொழில்முறை நிர்வாகம்",
      "சமூக ஒற்றுமை",
      "நேர்மையான சேவை",
    ],

    timeline: [
      {
        year: "2020",
        event: "மெய்நிகர் மாநாட்டு தொழில்நுட்பக் குழுவில் பணியாற்றினார்",
      },
      {
        year: "2022",
        event: "தமிழ் ஒளி விருது பெற்றார்",
      },
      {
        year: "2024",
        event: "பேரவை பொருளாளராக பொறுப்பேற்றார்",
      },
      {
        year: "2025",
        event: "Raleigh மாநாடு ஒருங்கிணைப்பில் முக்கிய பங்கு வகித்தார்",
      },
      {
        year: "2026",
        event: "பேரவை செயலாளர் பதவிக்குப் போட்டியிடுகிறார்",
      },
    ],

    closingStatement:
      "‘பதவிக்காக வரவில்லை, பொறுப்புக்காக வந்துள்ளேன்’ என்ற எண்ணத்துடன், வெளிப்படைத்தன்மை, நம்பிக்கை மற்றும் பொறுப்புணர்வை அடிப்படையாகக் கொண்டு பேரவைக்கு தொடர்ந்து சேவை செய்ய உறுதியளிக்கிறார்.",

    social: [
      {
        label: "FeTNA",
        href: "#",
      },
    ],
  },
  {
    id: "shan-kuthalingan",
    name: "Shan kuthalingan (Joint Secretary)",
    role: "துணைச்செயலாளர் வேட்பாளர்",
    domain: "தமிழ் சமூகம் & பேரவைப் பணி",
    quote:
      "ஒரே குழு… ஒரே நோக்கம்… என்ற எண்ணத்தோடு சமூக ஒற்றுமைக்கும் தமிழர் முன்னேற்றத்திற்கும் தொடர்ந்து பணியாற்றுகிறேன்.",
    image: "src/assets/p8-writer.jpeg",
    bio: "ஷான் குத்தாலிங்கன் அவர்கள் டுவின்சிட்டீஸ் தமிழ் அசோசியேசன் மற்றும் டுவின்சிட்டீஸ் தமிழ் பாடசாலையின் நிறுவனர்களில் ஒருவராக இருந்து, கடந்த இருபதுக்கும் மேற்பட்ட ஆண்டுகளாக அமெரிக்கா முழுவதும் உள்ள தமிழ்ச் சங்கங்களுடன் நெருங்கிய தொடர்பு மற்றும் சமூகப்பணியில் தொடர்ந்து ஈடுபட்டு வருகிறார். கல்வி, தமிழ் வளர்ச்சி, பேரவை நிர்வாகம் மற்றும் சமூக ஒற்றுமை ஆகிய துறைகளில் முக்கிய பங்களிப்புகளை வழங்கி வருகிறார்.",
    achievements: [
      "டுவின்சிட்டீஸ் தமிழ் பாடசாலையின் முன்னாள் பள்ளி முதல்வர் (2013–2014)",
      "டுவின்சிட்டீஸ் தமிழ் அசோசியேசன் தலைவராக இரண்டு முறை பணியாற்றினார்",
      "பேரவையின் இயக்குநராக பல்வேறு குழுக்களில் செயல்பட்டவர்",
      "பேரவையின் 38வது தமிழ் விழாவில் நிகழ்ச்சி மற்றும் விசா குழுக்களில் பங்காற்றினார்",
      "2026 பன்னாட்டு தமிழ் தொழில் முனைவோர் மாநாட்டில் ஒருங்கிணைப்புப் பொறுப்புகளில் பணியாற்றினார்",
      "20 ஆண்டுகளுக்கும் மேலான தமிழ்ச் சங்க அனுபவம் கொண்டவர்",
    ],
    contributions:
      "புதிய தமிழ்ச் சங்கங்களை வரவேற்பது, இளைஞர்களின் பங்களிப்பை அதிகரிப்பது, ஒற்றுமை மற்றும் வெளிப்படைத்தன்மையை வலுப்படுத்துவது ஆகிய நோக்கங்களுடன் சமூக மற்றும் பேரவைப் பணிகளில் தொடர்ந்து ஈடுபட்டு வருகிறார்.",
    timeline: [
      { year: "2013", event: "டுவின்சிட்டீஸ் தமிழ் பாடசாலையின் பள்ளி முதல்வராக பணியாற்றினார்" },
      { year: "2016", event: "டுவின்சிட்டீஸ் தமிழ் அசோசியேசன் தலைவராக பொறுப்பேற்றார்" },
      { year: "2024", event: "பேரவையின் இயக்குநராக பல்வேறு குழுக்களில் செயல்பட்டார்" },
      {
        year: "2026",
        event: "கோவையில் நடைபெற்ற பன்னாட்டு தமிழ் தொழில் முனைவோர் மாநாட்டில் பங்காற்றினார்",
      },
    ],
    social: [{ label: "Facebook", href: "#" }],
  },
  {
    id: "karthikeyan-perumal",
    name: "கார்த்திகேயன் பெருமாள் (Treasurer)",
    role: "பேரவை (FeTNA) பொருளாளர் வேட்பாளர் (2026–2028)",
    // organization: "சான் ஃபிரான்சிஸ்கோ வளைகுடாப் பகுதித் தமிழ் மன்றம்",
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


    timeline: [
      {
        year: "2007",
        event: "தமிழ் மன்ற நிகழ்ச்சிகளில் தன்னார்வத் தொண்டராக செயல்படத் தொடங்கினார்",
      },
      {
        year: "2015",
        event:
          "FeTNA வளைகுடாப் பகுதி மாநாட்டு திட்டமிடல் மற்றும் நிதி திரட்டலில் முக்கிய பங்கு வகித்தார்",
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
    id: "jancyrani-prabhakaran ",
    name: "திருமதி ஜான்சிராணி பிரபாகரன் (Assistant Treasurer)",
    role: "வட அமெரிக்கத் தமிழ்ச் சங்கப் பேரவையின் உதவிப் பொருளாளர் பதவிக்கான வேட்பாளர்",
    // organization: "விஸ்கான்சின் தமிழ்ச் சங்கம்",
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


    // leadership: [
    //   "விஸ்கான்சின் தமிழ்ச் சங்கத்தின் நிறுவனர் உறுப்பினர்",
    //   "தலைவர், செயலாளர், துணைத் தலைவர் உள்ளிட்ட பல்வேறு நிர்வாகப் பொறுப்புகள்",
    //   "FeTNA திட்டக்குழு, மக்கள் தொடர்பு குழு, மலர்க் குழு மற்றும் வழிநடத்தல் குழு உறுப்பினர்",
    //   "FiTEN உலகத் தமிழ் தொழில்முனைவோர் மாநாடு ஒருங்கிணைப்புக் குழு",
    //   "தமிழ்ப் பள்ளி ஆசிரியர் மற்றும் இளைஞர் வழிகாட்டி",
    // ],


    // socialImpact: [
    //   "2009 வாஷிங்டன் டி.சி தமிழர் பேரணியில் பங்கேற்பு மற்றும் ஒருங்கிணைப்பு",
    //   "ஜல்லிக்கட்டு ஆதரவு போராட்டங்களில் பங்கேற்பு",
    //   "கிராமத் தத்தெடுப்பு திட்டங்கள்",
    //   "மாணவர்களுக்கு கல்வி உதவி",
    //   "பெண்கள் முன்னேற்ற மற்றும் சுகாதார உதவித் திட்டங்கள்",
    // ],


    // vision: [
    //   "வெளிப்படையான மற்றும் பொறுப்புணர்வான நிதி நிர்வாகம்",
    //   "உறுப்பினர் சங்கங்களுடன் நம்பிக்கை மற்றும் ஒற்றுமையை வலுப்படுத்துதல்",
    //   "FiTEN அனுபவத்தின் மூலம் நிதி வளங்களை மேம்படுத்துதல்",
    //   "தமிழ்ச் சமூக வளர்ச்சிக்காக நிதியை பயனுள்ளதாக பயன்படுத்துதல்",
    //   "அடுத்த தலைமுறைக்கான தமிழ் கல்வி மற்றும் பண்பாட்டு வளர்ச்சியை உறுதி செய்தல்",
    // ],


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
    ],
  },
  {
    id: "subha-suntharalingam",
    name: "Subha Suntharalingam (Board of Director) ",
    role: "சமூக சேவையாளர் & பேரவை இயக்குநர் வேட்பாளர்",
    domain: "தமிழர் சமூக சேவை & ஈழ இணைப்பு",
    quote: "ஈழத்தின் உணர்வு… பேரவையின் ஒற்றுமை… சேவையின் தொடர்ச்சி…",
    image: "src/assets/p9-weaver.jpeg",
    bio: "ஈழத்தின் வலியையும் தமிழரின் உயிர்ப்பையும் மனதில் சுமந்து, கடந்த 30 ஆண்டுகளுக்கும் மேலாக சமூகப்பணியில் அர்ப்பணிப்புடன் செயல்பட்டு வரும் தமிழ்ப்பெண் சுபா சுந்தரலிங்கம். யாழ்ப்பாணத்தில் பிறந்து வளர்ந்த அவர், 1989 ஆம் ஆண்டு அமெரிக்காவின் போஸ்டனில் குடியேறிய பின்னரும் தமிழர் சமூகப்பணியில் தொடர்ந்து ஈடுபட்டு வருகிறார். தற்போது வட அமெரிக்கத் தமிழ்ச்சங்கப் பேரவையின் உதவி பொருளாளராகவும், போஸ்டன் தமிழ்ச் சங்கத்தின் துணைத் தலைவராகவும், இலங்கைத் தமிழ் சங்கத்தின் குழு உறுப்பினராகவும், “நவ்-வாவ்” அமைப்பின் நிறுவனரும் தலைவருமாகவும் பணியாற்றி வருகிறார்.",
    achievements: [
      "வட அமெரிக்கத் தமிழ்ச்சங்கப் பேரவையின் உதவி பொருளாளராக பணியாற்றுகிறார்",
      "போஸ்டன் தமிழ்ச் சங்கத்தின் துணைத் தலைவராக செயல்படுகிறார்",
      "“நவ்-வாவ்” இலாப நோக்கமற்ற அமைப்பின் நிறுவனர் மற்றும் தலைவர்",
      "3,000-க்கும் மேற்பட்ட நிதி பரிவர்த்தனைகளை முறையாக ஆவணப்படுத்தியுள்ளார்",
      "மாவீரர் நாள் மற்றும் மே 18 இனஅழிப்பு நாள் நினைவேந்தல் நிகழ்வுகளை முன்னெடுத்தார்",
      "இளைஞர் வழிகாட்டல் மற்றும் தமிழர் அடையாள விழிப்புணர்வு திட்டங்களில் தொடர்ந்து பங்காற்றுகிறார்",
    ],
    contributions:
      "ஈழத் தமிழர் சமூகத்திற்கும் பேரவைக்கும் இடையே இணைப்புப் பாலமாக இருந்து, அவசர உதவிகள், கல்வி உதவிகள், நினைவேந்தல் நிகழ்வுகள், நிதி மேலாண்மை, இளைஞர் தலைமைத்துவ வளர்ச்சி மற்றும் சமூக ஒற்றுமை பணிகளில் தொடர்ந்து அர்ப்பணிப்புடன் செயல்பட்டு வருகிறார்.",
    timeline: [
      { year: "1989", event: "அமெரிக்காவின் போஸ்டனில் குடியேறினார்" },
      { year: "2022", event: "பேரவையின் பல்வேறு உபகுழுக்களில் செயல்படத் தொடங்கினார்" },
      { year: "2024", event: "பேரவையின் நிதி நிர்வாக பொறுப்பில் முக்கிய பங்காற்றினார்" },
      { year: "2026", event: "பேரவை இயக்குநர் பதவிக்குப் போட்டியிட்டார்" },
    ],
    social: [{ label: "Facebook", href: "#" }],
  },
  {
    id: "kathirvel-kumararaja",
    name: "Kathirvel Kumararaja (Board of Director)",
    role: "Entrepreneur & Community Leader",
    domain: "Technology & Tamil Diaspora",
    quote:
      "Empowering communities through technology, leadership, and lifelong service to Tamil culture.",
    image: "src/assets/p4-farmer.jpeg",
    bio: "Kathirvel Kumararaja is the Founder & CEO of DevJee Inc., an AI consulting company headquartered in New York. With strong involvement in Tamil diaspora initiatives and community leadership, he has actively contributed to cultural, charitable, and professional organizations across the United States while supporting Tamil development initiatives globally.",
    achievements: [
      "Rang the NASDAQ opening bell on behalf of TiE New York",
      "Awarded the Outstanding Leader Award from the Queens Borough President, New York",
      "Received Outstanding Tamil Diaspora Honoree award from the US House of Representatives during the first Tamil Heritage Month celebrations at Capitol Hill in 2026",
      "Immediate Past President of New York Tamil Sangam",
      "Founder & CEO of DevJee Inc.",
      "Served as Chief Election Officer for FeTNA 2025 Board Election",
    ],
    contributions:
      "Kathirvel Kumararaja has continuously supported Tamil cultural growth, disaster relief efforts, educational initiatives, and diaspora engagement through organizations including New York Tamil Sangam, FeTNA, FiTEN, and Tamil Nadu Foundation.",
    timeline: [
      { year: "2018", event: "Contributed to Harvard Tamil Chair fundraising event" },
      { year: "2022", event: "Served as Chair for FiTEN during FeTNA New York" },
      { year: "2025", event: "Served as Chief Election Officer for FeTNA Board Election" },
      { year: "2026", event: "Honored at Capitol Hill during Tamil Heritage Month celebrations" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
  {
    id: "rajesh",
    name: "Rajesh (Board of Director)",
    role: "Community Volunteer & Tamil Organizer",
    domain: "Tamil Diaspora & Social Service",
    quote:
      "Dedicated to serving communities through leadership, volunteering, and humanitarian support.",
    image: "src/assets/p6-leader.jpeg",
    bio: "An active Tamil community leader and volunteer known for contributions to humanitarian initiatives, fundraising efforts, and Tamil diaspora engagement through the Kansas City Tamil Sangam. With years of service and leadership, they have supported disaster rehabilitation efforts and community development initiatives benefiting Tamil Nadu and Tamil communities abroad.",
    achievements: [
      "Recipient of the PVSA Gold Award for volunteering",
      "Recognized as part of the 2025 FeTNA event",
      "Served as Past President of Kansas City Tamil Sangam in 2019",
      "Current Board Member of Kansas City Tamil Sangam",
      "Led large-scale fundraising events for Chennai Cyclone relief",
      "Contributed to Gaja Cyclone rehabilitation initiatives",
    ],
    contributions:
      "Played a major role in organizing fundraising campaigns and rehabilitation support efforts for people affected by natural disasters in Tamil Nadu while actively supporting Tamil cultural and community initiatives through Kansas City Tamil Sangam.",
    timeline: [
      { year: "2019", event: "Served as President of Kansas City Tamil Sangam" },
      { year: "2020", event: "Participated in Chennai Cyclone fundraising and relief efforts" },
      { year: "2021", event: "Contributed to Gaja Cyclone rehabilitation initiatives" },
      { year: "2025", event: "Recognized during the FeTNA event" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Facebook", href: "#" },
    ],
  },
  {
    id: "ravi-shankar",
    name: "Ravi Shankar (Board of Director)",
    role: "தமிழ் சமூக தலைவர்",
    domain: "தமிழ் புலம்பெயர் சமூகம் & கலாச்சார வளர்ச்சி",
    quote:
      "ஒற்றுமை, வெளிப்படைத் தலைமையியல் மற்றும் தமிழ் பண்பாட்டு பெருமையின் மூலம் சமூக முன்னேற்றத்தை உருவாக்குவது என் நோக்கம்.",
    image: "src/assets/p7-artist.jpeg",
    bio: "ரவிசங்கர் அவர்கள் டென்னசி தமிழ்ச் சங்கம் மற்றும் FeTNA அமைப்புகளில் நீண்டகாலமாகச் செயல்பட்டு வரும் சமூகத் தலைவர் மற்றும் தன்னார்வலர் ஆவார். அவரது தலைமையின் மூலம் அமைப்பு வளர்ச்சி, கலாச்சாரப் பாதுகாப்பு, நிதி முன்னேற்றம் மற்றும் அவசரகால உதவி திட்டங்கள் போன்ற பல்வேறு சமூக முயற்சிகளில் முக்கிய பங்காற்றி வருகிறார்.",
    achievements: [
      "டென்னசி தமிழ்ச் சங்கத்தின் முன்னாள் தலைவர் (2022–2023)",
      "டென்னசி தமிழ்ச் சங்கத்தின் தற்போதைய இயக்குநர் குழுத் தலைவர்",
      "2017 முதல் 9 ஆண்டுகளுக்கும் மேலான தன்னார்வ சேவை",
      "சங்க சமூக வளர்ச்சியை 2 மடங்கு உயர்த்தியதில் பங்கு",
      "வணிக ஆதரவு மற்றும் நிதியுதவிகளை 5 மடங்கு உயர்த்தினார்",
      "சிலம்பம், பறை, கரகம், கும்மி மற்றும் தமிழ்பாடம் போன்ற பாரம்பரிய கலைகளை முன்னெடுத்தார்",
    ],
    contributions:
      "2022 முதல் FeTNA அமைப்பில் தொடர்ந்து பங்களித்து வரும் ரவிசங்கர் அவர்கள், சமூக சேவை, அவசரகால உதவி, விளையாட்டு முன்னேற்றம் மற்றும் தமிழ் கலாச்சார வளர்ச்சிக்காக அர்ப்பணிப்புடன் செயல்பட்டு வருகின்றார்.",
    timeline: [
      { year: "2017", event: "டென்னசி தமிழ்ச் சங்கத்தில் தன்னார்வலராக இணைந்தார்" },
      { year: "2022", event: "FeTNA பணிகளில் இணைந்து TTS தலைவராக பொறுப்பேற்றார்" },
      { year: "2023", event: "TTS அமைப்பின் கலாச்சார மற்றும் நிதி வளர்ச்சியை முன்னெடுத்தார்" },
      { year: "2025", event: "FiST சர்வதேச விளையாட்டு முயற்சியில் பங்களித்தார்" },
    ],
    social: [{ label: "Facebook", href: "#" }],
  },
  {
    id: "guhan-sivakumar",
    name: "Guhan Sivakumar (Youth Representative)",
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
  
];
