

const questions = {
  1: {
    text: "The Finance Ministry doubled the loan limit under the Pradhan Mantri Mudra Yojana. What is the new maximum loan limit introduced (Tarun Plus)?",
    options: ["₹10 lakh", "₹15 lakh", "₹20 lakh", "₹25 lakh"],
    correct: "3"
  },
  2: {
    text: "Where is Vizhinjam (Vinjajam) International Sea Port — India's first deep-water transshipment port?",
    options: ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"],
    correct: "1"
  },
  3: {
    text: "DRDO's Navdurga Testing Range — India's third missile testing range — was inaugurated in which state?",
    options: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
    correct: "2"
  },
  4: {
    text: "The 12th Global Space Exploration Conference hosted by India was held in which city?",
    options: ["Mumbai", "Hyderabad", "New Delhi", "Bengaluru"],
    correct: "3"
  },
  5: {
    text: "North East India's first geothermal production well was drilled in which place?",
    options: ["Puga, Ladakh", "Manikarnika, HP", "Dirang, Arunachal Pradesh", "Tawang, Arunachal Pradesh"],
    correct: "3"
  },
  6: {
    text: "Under Operation Sindoor, India targeted sites across which regions?",
    options: ["Sri Lanka and Maldives", "Pakistan and POK", "Bangladesh and Myanmar", "Nepal and Bhutan"],
    correct: "2"
  },
  7: {
    text: "India is developing its first Cheetah Conservation Corridor linking which states?",
    options: ["Madhya Pradesh and Rajasthan", "Gujarat and Maharashtra", "Uttar Pradesh and Bihar", "Karnataka and Andhra Pradesh"],
    correct: "1"
  },
  8: {
    text: "The D9 9000 HP electric locomotive (freight engine) was launched from which Indian Railways factory?",
    options: ["Chittaranjan Locomotive Works", "Vishakhapatnam Works", "Dahod Factory, Gujarat", "Perambur Works"],
    correct: "3"
  },
  9: {
    text: "CBI launched 'Operation Hawk' to focus on what type of crime?",
    options: ["Financial fraud", "Cyber crime", "Human trafficking", "Environmental crime"],
    correct: "2"
  },
  10: {
    text: "Which portal (by CBI) helps Indian agencies connect directly with Interpol and international investigations?",
    options: ["Bharat Pol", "India Interpol", "Global Connect", "CBI Link"],
    options_extra: true,
    correct: "1"
  },
  11: {
    text: "Which year was announced as the 'Year of Defence Reforms' to modernise the Indian armed forces?",
    options: ["2023", "2024", "2025", "2026"],
    correct: "3"
  },
  12: {
    text: "PM inaugurated the Gramin Bharat Mahotsav at which venue in New Delhi?",
    options: ["Bharat Mandapam", "Pragati Maidan", "India Gate grounds", "Rashtrapati Bhavan lawns"],
    correct: "1"
  },
  13: {
    text: "Who became the youngest female to scale the highest peaks of each of the seven continents (Seven Summits)?",
    options: ["Kamakya Karthikeya", "Kamakshi Verma", "Kaamya Karthikeyan", "Kamakshi Karthik"],
    correct: "3"
  },
  14: {
    text: "Under Swamitva scheme PM distributed around how many property cards (approx)?",
    options: ["25 lakh", "40 lakh", "65 lakh", "80 lakh"],
    correct: "3"
  },
  15: {
    text: "Which visa was introduced to facilitate foreign nationals seeking treatment in traditional Indian systems of medicine (AYUSH)?",
    options: ["Medical Visa", "AYUSH Visa", "Wellness Visa", "Therapy Visa"],
    correct: "2"
  },
  16: {
    text: "The Kashi Tamil Sangam (3rd edition) was inaugurated in which city?",
    options: ["Madurai", "Chennai", "Varanasi (Kashi)", "Puducherry"],
    correct: "3"
  },
  17: {
    text: "Which 'Super App' did Indian Railways launch to provide ticketing, real-time updates and onboard services?",
    options: ["RailOne App", "SwaRail Super App", "IRCTC Next", "RailConnect"],
    correct: "2"
  },
  18: {
    text: "State Bank of India launched which collateral-free loan scheme specifically for women entrepreneurs?",
    options: ["Asmita Loan Scheme", "Stree Loan", "Nari Udyam Scheme", "Sakhi Loan Scheme"],
    correct: "1"
  },
  19: {
    text: "Which vertical lift rail sea bridge — a rail bridge that lifts to allow ships — was inaugurated in Rameswaram (approx cost ~₹550 crore)?",
    options: ["Pamban vertical rail lift bridge", "Rameswaram Sea Lift", "Palk Strait Rail Lift", "Ramesh Setu Lift Bridge"],
    correct: "1"
  },
  20: {
    text: "Begumpet Railway Station being fully operated by women is in which city?",
    options: ["Hyderabad", "Secunderabad", "Bengaluru", "Chennai"],
    correct: "1"
  },
  21: {
    text: "Who was listed in TIME magazine's Women of the Year 2025 from India (wildlife biologist)?",
    options: ["Purnima Devi Burman", "Rina Banerjee", "Purnima Rao", "Priya Devi Burman"],
    correct: "1"
  },
  22: {
    text: "Which elephant reserve was notified as the eighth national park of Assam?",
    options: ["Kaziranga", "Chirang Ripu Elephant Reserve", "Manas", "Dibru-Saikhowa"],
    correct: "2"
  },
  23: {
    text: "Six wetlands were recently designated as Ramsar sites. Which of these is among them?",
    options: ["Sakrakottai Bird Sanctuary (Tamil Nadu)", "Sundarbans (WB)", "Chilika (OD)", "Vembanad (KL)"],
    correct: "1"
  },
  24: {
    text: "The Vibrant Villages Programme (VVP) was launched with approx allocation of how much?",
    options: ["₹1,500 crore", "₹4,500 crore", "₹6,839 crore", "₹10,000 crore"],
    correct: "3"
  },
  25: {
    text: "Lakundi Group of Monuments proposed for UNESCO tentative listing are in which state?",
    options: ["Maharashtra", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    correct: "2"
  },
  26: {
    text: "The 'Hamari Parampara Hamari Virasat' (Art & Heritage) initiative was launched by which ministry?",
    options: ["Ministry of Culture", "Ministry of Panchayati Raj", "Ministry of Tourism", "Ministry of Women & Child Development"],
    correct: "2"
  },
  27: {
    text: "PM visited which famous temple in Bangkok during a foreign visit?",
    options: ["Wat Arun", "Wat Pho", "Wat Saket", "Wat Benchamabophit"],
    correct: "2"
  },
  28: {
    text: "The 7th edition of Poshan Abhiyaan was launched to combat malnutrition. Where was Poshan originally launched (district)?",
    options: ["Jhunjhunu, Rajasthan", "Udaipur, Rajasthan", "Bikaner, Rajasthan", "Alwar, Rajasthan"],
    correct: "1"
  },
  29: {
    text: "India's first High Altitude Atmospheric and Climate Research Centre was inaugurated in which region?",
    options: ["Ladakh", "Jammu & Kashmir (High Himalayan centre)", "Sikkim", "Arunachal Pradesh"],
    correct: "2"
  },
  30: {
    text: "India set a target to eliminate measles and rubella by which year (campaign launched by Health Ministry)?",
    options: ["2024", "2025", "2026", "2030"],
    correct: "3"
  },
  31: {
    text: "Dr. Bhimrao Ambedkar Wildlife Sanctuary was established in which state?",
    options: ["Uttar Pradesh", "Madhya Pradesh", "Maharashtra", "Bihar"],
    correct: "2"
  },
  32: {
    text: "Tunnel T8 — part of Rishikesh–Karanprayag rail project — is India's longest rail tunnel approx how long?",
    options: ["~9 km", "~11 km", "~14.5 km", "~20 km"],
    correct: "3"
  },
  33: {
    text: "India's sex ratio at birth (reported improvement) is approximately which number of females per 1000 males?",
    options: ["930", "914", "943", "927"],
    correct: "1"
  },
  34: {
    text: "India has achieved a Total Fertility Rate (TFR) of approximately:",
    options: ["1.8", "2.0", "2.2", "2.5"],
    correct: "2"
  },
  35: {
    text: "India allowed what percentage of FDI in the space sector (automatic route)?",
    options: ["49%", "74%", "100%", "26%"],
    correct: "3"
  },
  36: {
    text: "According to India State of Forest Report (ISFR 2023/2024 release), India's forest cover is approx:",
    options: ["15.5%", "21.76%", "25.0%", "30.2%"],
    correct: "2"
  },
  37: {
    text: "India hosted the first-ever Asian Buddhist Summit in which city?",
    options: ["Bodh Gaya", "Kolkata", "New Delhi", "Varanasi"],
    correct: "3"
  },
  38: {
    text: "Which new company/entity was approved to lead nuclear power generation in India?",
    options: ["Anushakti Vidyut Nigam", "Nuclear India Ltd", "Bharat Nuclear Power", "Indian Atomic Energy Corp"],
    correct: "1"
  },
  39: {
    text: "The Shanghai Cooperation Organisation (SCO) Heads of Government meeting referenced in notes was held in which city?",
    options: ["Beijing, China", "Islamabad, Pakistan", "Tashkent, Uzbekistan", "New Delhi, India"],
    correct: "2"
  },
  40: {
    text: "CSIR's first Mega Innovation Complex was inaugurated in which city?",
    options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
    correct: "1"
  },
  41: {
    text: "Cruise Bharat Mission aims to double cruise passenger traffic by which year (target)?",
    options: ["2025", "2027", "2029", "2031"],
    correct: "3"
  },
  42: {
    text: "Five additional languages were given 'Classical Language' status. Which of the following was included?",
    options: ["Marathi", "Gujarati", "Konkani", "Bodo"],
    correct: "1"
  },
  43: {
    text: "The Union Cabinet approved the National Mission on Edible Oil Seeds to become self-reliant by approx which time horizon?",
    options: ["2025", "2030-31", "2040", "2028"],
    correct: "2"
  },
  44: {
    text: "Supreme Court judgement (noted) held caste-based discrimination practices like segregation and forced manual labour to be:",
    options: ["Constitutional in some contexts", "Unconstitutional", "A state matter only", "Allowed under custom"],
    correct: "2"
  },
  45: {
    text: "Waves (World Audio & Visual Entertainment Summit) was hosted in which city?",
    options: ["Mumbai", "Chennai", "Kolkata", "Hyderabad"],
    correct: "1"
  },
  46: {
    text: "FCI launched which tech-driven initiative to modernize its supply chain?",
    options: ["Anna Darpan", "FoodNet", "FCI Connect", "GrainTrack"],
    correct: "1"
  },
  47: {
    text: "Which portal was launched as a one-stop solution for unorganised workers (e-shram, etc.)?",
    options: ["eShram portal", "Labour Connect", "Shramik Hub", "WorkersOne"],
    correct: "1"
  },
  48: {
    text: "Which tribal community was recently given PVTG (Particularly Vulnerable Tribal Group) status and habitat rights?",
    options: ["Mankidiya (Mankidiya/Mandkiya)", "Bhils", "Gonds", "Santhals"],
    correct: "1"
  },
  49: {
    text: "India's first coal gallery was inaugurated at which location?",
    options: ["National Science Centre, New Delhi", "Coal Museum, Dhanbad", "National Museum, Kolkata", "Science City, Mumbai"],
    correct: "1"
  },
  50: {
    text: "PM announced the names of 4 astronauts for Gaganyaan. Which of the following is one of those announced crew members?",
    options: ["Group Captain P Balakrishnan Nair", "Rakesh Sharma", "Kalpana Chawla", "Sunita Williams"],
    correct: "1"
  },
  51: {
    text: "India's first National Dolphin Research Centre was inaugurated in which city?",
    options: ["Varanasi", "Patna", "Guwahati", "Kolkata"],
    correct: "2"
  },
  52: {
    text: "The Modi government allocated approx how much for recapitalisation of Regional Rural Banks (RRBs)?",
    options: ["₹1,000 crore", "₹6,212 crore", "₹10,000 crore", "₹20,000 crore"],
    correct: "2"
  },
  53: {
    text: "In recapitalisation of RRBs the typical shareholding pattern is central govt : sponsor bank : state govt equal to?",
    options: ["50% : 35% : 15%", "60% : 30% : 10%", "40% : 40% : 20%", "70% : 20% : 10%"],
    correct: "1"
  },
  54: {
    text: "Which indigenous nuclear technology/prototype reactor was inaugurated at Kalpakkam?",
    options: ["Prototype Fast Breeder Reactor (PFBR)", "Pressurised Heavy Water Reactor", "Boiling Water Reactor", "ADS Reactor"],
    correct: "1"
  },
  55: {
    text: "Z-Morh Tunnel inaugurated in Sonam is in which union territory/state?",
    options: ["Himachal Pradesh", "Jammu & Kashmir", "Ladakh", "Uttarakhand"],
    correct: "2"
  },
  56: {
    text: "National Turmeric Board was launched by which Union Minister?",
    options: ["Piyush Goyal", "Narendra Singh Tomar", "Bhupender Yadav", "Ravi Shankar Prasad"],
    correct: "1"
  },
  57: {
    text: "Aero India (15th edition) — Asia's largest air show — was held at which Air Force Station?",
    options: ["Yelahanka (Bengaluru)", "Agra AFS", "Yamuna Nagar", "Hassan AFS"],
    correct: "1"
  },
  58: {
    text: "The first baby of 'Generation Beta' (born 2025) mentioned in notes — from which Indian state?",
    options: ["Assam", "Mizoram", "Manipur", "Nagaland"],
    correct: "2"
  },
  59: {
    text: "INROADS project secured how much funding for improving natural rubber quality in the North East?",
    options: ["₹10 crore", "₹50 crore", "₹100 crore", "₹500 crore"],
    correct: "3"
  },
  60: {
    text: "Which two Indian cities were included in the Global List of Accredited Wetland Cities under Ramsar (mentioned in notes)?",
    options: ["Indore and Udaipur", "Kolkata and Kochi", "Bengaluru and Mysuru", "Chennai and Madurai"],
    correct: "1"
  },
  61: {
    text: "A Musi River historic building was listed in the 2025 World Monuments Watch. Which city is Musi River associated with?",
    options: ["Hyderabad", "Warangal", "Vijayawada", "Rajahmundry"],
    correct: "1"
  },
  62: {
    text: "The National Critical Mineral Mission was approved with an outlay close to what amount?",
    options: ["₹1,000 crore", "₹5,000 crore", "₹16,300 crore", "₹50,000 crore"],
    correct: "3"
  },
  63: {
    text: "Port Blair (capital of Andaman & Nicobar) was announced to be renamed as what?",
    options: ["Shri Vijayapuram", "New Port Blair", "Vijayant Port", "Andaman City"],
    correct: "1"
  },
  64: {
    text: "Which animal rescue centre (Vanara/Vantara) was inaugurated in Jamnagar, Gujarat?",
    options: ["Vanara Animal Rescue Centre", "Gir Wildlife Rescue", "Kutch Animal Care", "Jam Animal Hub"],
    correct: "1"
  },
  65: {
    text: "Which two organisations were granted Navratna PSU status as per the notes?",
    options: ["IRCTC & Indian Railway Finance Corporation (IRFC)", "SBI & PNB", "BHEL & SAIL", "NTPC & Coal India"],
    correct: "1"
  },
  66: {
    text: "India unveiled its first 3-nanometer chip design centre(s) in which locations?",
    options: ["Pune and Hyderabad", "Noida and Bengaluru", "Chennai and Kochi", "Mumbai and Delhi"],
    correct: "2"
  },
  67: {
    text: "The cooperative-based ride-hailing service 'Sahakar' was launched under which ministry or minister?",
    options: ["Ministry of Road Transport", "Ministry of Cooperation (Amit Shah)", "Ministry of Housing", "Ministry of Commerce"],
    correct: "2"
  },
  68: {
    text: "Supreme Court set a time-limit (maximum) for Governors to decide on bills reserved for the President. What is the maximum period indicated in the notes?",
    options: ["1 month", "3 months", "6 months", "No limit"],
    correct: "2"
  },
  69: {
    text: "The foundation stone for the Ken-Betwa River Linking Project was laid at which historic town?",
    options: ["Khajuraho (Madhya Pradesh)", "Orchha", "Jhansi", "Gwalior"],
    correct: "1"
  },
  70: {
    text: "Supreme Court guidelines clarified that personal laws cannot be used to legitimise what act?",
    options: ["Forced labour", "Child marriage", "Land grabbing", "Caste discrimination"],
    correct: "2"
  },
  71: {
    text: "Union Minister Nitin Gadkari inaugurated a national highway stretch using bio-bitumen (bio-based bitumen) on which National Highway?",
    options: ["NH 16", "NH 44 (Mansar–Nagpur stretch)", "NH 48", "NH 66"],
    correct: "2"
  }
};


const explanations = {
 1: { text: "Mudra Yojana limit doubled; Tarun Plus introduced and overall upper limit noted as ₹20 lakh.", image: "" },
2: { text: "Vizhinjam International Seaport is in Kerala — deep-water transshipment port.", image: "" },
3: { text: "Navdurga missile testing range opened at Nagayanka, Andhra Pradesh — India's third missile range.", image: "" },
4: { text: "India hosted the 12th Global Space Exploration Conference in New Delhi.", image: "" },
5: { text: "Dirang (Arunachal Pradesh) hosts the North East's first geothermal production well.", image: "" },
6: { text: "Operation Sindoor targeted nine sites across Pakistan and Pakistan-occupied Kashmir (POK).", image: "" },
7: { text: "A Cheetah Conservation Corridor will link Madhya Pradesh and Rajasthan.", image: "" },
8: { text: "D9 9000 HP electric freight locomotive was launched from Dahod factory (Gujarat).", image: "" },
9: { text: "CBI launched Operation Hawk focused on cybercrime and cyber fraud.", image: "" },
10: { text: "Bharat Pol portal (CBI) facilitates direct connection with Interpol and international investigations.", image: "" },
11: { text: "Government announced 2025 as the Year of Defence Reforms to modernise the armed forces.", image: "" },
12: { text: "Gramin Bharat Mahotsav was inaugurated at Bharat Mandapam, New Delhi.", image: "" },
13: { text: "Karthikeyan (Kamakya Karthikeyan) became the youngest female to climb the Seven Summits.", image: "" },
14: { text: "PM distributed ~65 lakh property cards under Swamitva scheme (survey of villages, mapping of land ownership).", image: "" },
15: { text: "AYUSH visa introduced for foreign nationals seeking treatment under India’s traditional medicine systems.", image: "" },
16: { text: "Kashi Tamil Sangam (third edition) was inaugurated in Varanasi (Kashi).", image: "" },
17: { text: "SwaRail Super App launched by Indian Railways to consolidate services into one app.", image: "" },
18: { text: "SBI launched Asmita Loan Scheme — collateral-free loans for women entrepreneurs.", image: "" },
19: { text: "The Pamban (Rameswaram) vertical lift rail bridge allows ships to pass when lifted; cost approx ₹550 crore.", image: "" },
20: { text: "Begumpet Railway Station (Hyderabad) will be fully operated by women employees.", image: "" },
21: { text: "Purnima Devi Burman, wildlife biologist, was featured in Time's Women of the Year 2025 list.", image: "" },
22: { text: "Chirang Ripu Elephant Reserve (Assam) was notified as a national park.", image: "" },
23: { text: "Six wetlands (including Sakrakottai Bird Sanctuary) were designated Ramsar sites in the recent list.", image: "" },
24: { text: "Vibrant Villages Programme launched with allocation approx ₹6,839 crore to develop left-out border villages.", image: "" },
25: { text: "Lakundi Group of Monuments (Western Chalukya temples) proposed for UNESCO tentative listing — located in Karnataka.", image: "" },
26: { text: "'Hamari Parampara Hamari Virasat' art/heritage initiative launched by Ministry of Panchayati Raj.", image: "" },
27: { text: "PM Modi visited Wat Pho temple in Bangkok during foreign visit.", image: "" },
28: { text: "Poshan Abhiyaan (launched 2018 from Jhunjhunu) — 7th edition launched to address malnutrition.", image: "" },
29: { text: "India’s first High Altitude Atmospheric and Climate Research Centre set up in Jammu & Kashmir (high Himalayan centre).", image: "" },
30: { text: "Union Health Minister initiated campaign to eliminate measles and rubella by 2026.", image: "" },
31: { text: "Dr Bhimrao Ambedkar Wildlife Sanctuary was established in Madhya Pradesh.", image: "" },
32: { text: "Tunnel T8 (Rishikesh–Karanprayag rail project) approx 14½ km — India’s longest rail tunnel.", image: "" },
33: { text: "Notes report sex ratio at birth improved to around 930 females per 1000 males.", image: "" },
34: { text: "India’s Total Fertility Rate reported at approx 2.0.", image: "" },
35: { text: "Government opened space sector to 100% FDI under automatic route.", image: "" },
36: { text: "ISFR (India State of Forest Report) figures: forest cover ~21.76%, tree cover ~3.41%.", image: "" },
37: { text: "India hosted the first Asian Buddhist Summit in New Delhi.", image: "" },
38: { text: "Anushakti Vidyut Nigam approved to lead nuclear power generation initiatives.", image: "" },
39: { text: "SCO meeting referenced in the notes was held in Islamabad, Pakistan; EAM S. Jaishankar attended.", image: "" },
40: { text: "CSIR Mega Innovation Complex (first) inaugurated in Mumbai.", image: "" },
41: { text: "Cruise Bharat Mission launched to boost cruise tourism and double traffic by 2029.", image: "" },
42: { text: "Five additional classical languages approved (examples include Marathi) increasing total to 11.", image: "" },
43: { text: "National Mission on Edible Oil Seeds approved to make India more self-reliant (target 2030–31 era).", image: "" },
44: { text: "Supreme Court ruled caste-based discriminatory practices like forced segregation/manual labour unconstitutional.", image: "" },
45: { text: "WAVES (World Audio & Visual Entertainment Summit) held in Mumbai.", image: "" },
46: { text: "FCI launched 'Anna Darpan' to modernize supply chain management operations.", image: "" },
47: { text: "eShram portal launched as a one-stop digital platform for unorganised workers.", image: "" },
48: { text: "Mankidiya/Mandkiya community accorded PVTG status and habitat rights.", image: "" },
49: { text: "India’s first coal gallery inaugurated at the National Science Centre, New Delhi.", image: "" },
50: { text: "Four astronauts named for Gaganyaan crew (one example: Group Captain P Balakrishnan Nair).", image: "" },
51: { text: "India’s National Dolphin Research Centre inaugurated in Patna (Gangetic dolphin national aquatic animal).", image: "" },
52: { text: "Government allocated ~₹6,212 crore for recapitalisation of Regional Rural Banks (RRBs).", image: "" },
53: { text: "RRB recapitalisation shareholding typically: central govt 50%, sponsor bank 35%, state govt 15%.", image: "" },
54: { text: "Prototype Fast Breeder Reactor (PFBR) at Kalpakkam — indigenous breeder reactor inaugurated.", image: "" },
55: { text: "Z-Morh Tunnel in Sonam, J&K (altitude ~8,650 ft) improves all-weather connectivity.", image: "" },
56: { text: "National Turmeric Board launched by Commerce & Industry Minister Piyush Goyal.", image: "" },
57: { text: "Aero India (15th edition) held at Yelahanka Air Force Station, Bengaluru.", image: "" },
58: { text: "First baby of 'Generation Beta' mentioned in notes (Frankie Remru Zedeng) hails from Mizoram.", image: "" },
59: { text: "INROADS project (Indian Natural Rubber Operation for Assisted Development) secured ~₹100 crore for NE rubber quality enhancement.", image: "" },
60: { text: "Indore and Udaipur included in the Global List of Accredited Wetland Cities under Ramsar Convention.", image: "" },
61: { text: "Musi River historic building from Hyderabad was included in the 2025 World Monuments Watch list.", image: "" },
62: { text: "National Critical Mineral Mission approved with approx ₹16,300 crore outlay to secure critical minerals.", image: "" },
63: { text: "Port Blair's new name announced as Shri Vijayapuram (Andaman & Nicobar).", image: "" },
64: { text: "Vanara (Vantara) Animal Rescue Centre inaugurated in Jamnagar, Gujarat (Ambani-supported facility).", image: "" },
65: { text: "IRCTC and Indian Railway Finance Corporation (IRFC) granted Navratna PSU status (25th & 26th).", image: "" },
66: { text: "India unveiled first 3 nm chip design centre(s) in Noida and Bengaluru.", image: "" },
67: { text: "Sahakar cooperative ride-hailing service launched under Ministry of Cooperation (Amit Shah).", image: "" },
68: { text: "Supreme Court set a maximum period (3 months) for Governors to act on certain reserved bills.", image: "" },
69: { text: "PM laid foundation stone for Ken-Betwa river linking national project near Khajuraho, Madhya Pradesh.", image: "" },
70: { text: "Supreme Court issued guidelines reinforcing prohibition of child marriage; personal laws cannot override child-protection laws.", image: "" },
71: { text: "Nitin Gadkari inaugurated a bio-bitumen based highway stretch on NH-44 (Mansar–Nagpur) to reduce crude dependence.", image: "" }
};


