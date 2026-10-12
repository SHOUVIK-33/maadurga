/* ============================================================
   Maa Durga • Navratri — Data layer
   All static content (dates, 9 roops, shloks, shaktipeeth)
   lives here so pages render dynamically and stay in sync.
   ============================================================ */

/* ---------- Navratri start/end dates (ISO) ---------- */
const NAVRATRI_DATES = [
  { key: "sharad26",  name: "Shardiya Navratri 2026",  nameHi: "शारदीय नवरात्रि", start: "2026-10-11", end: "2026-10-20", note: "Durga Puja • Dussehra 20 Oct", type: "Pramukh" },
  { key: "magha27",   name: "Magha Gupt Navratri 2027", nameHi: "माघ गुप्त नवरात्रि", start: "2027-02-07", end: "2027-02-16", note: "Tantra & Sadhana", type: "Gupt" },
  { key: "chaitra27", name: "Chaitra Navratri 2027",    nameHi: "चैत्र नवरात्रि", start: "2027-04-07", end: "2027-04-15", note: "Hindu Nav Varsh • Ram Navami", type: "Pramukh" },
  { key: "ashadha27", name: "Ashadha Gupt Navratri 2027", nameHi: "आषाढ़ गुप्त नवरात्रि", start: "2027-07-04", end: "2027-07-12", note: "Gupt Upasana", type: "Gupt" },
  { key: "sharad27",  name: "Shardiya Navratri 2027",   nameHi: "शारदीय नवरात्रि", start: "2027-09-30", end: "2027-10-09", note: "Durga Puja • Dussehra 9 Oct", type: "Pramukh" }
];

/* ---------- The four Navratris ---------- */
const FOUR_NAVRATRI = [
  { name: "Sharad Navratri", nameHi: "शारद नवरात्रि", season: "September – October", month: "Ashwin Shukla Pratipada",
    icon: "🍂", tag: "Sarva-pramukh",
    desc: "Varsh ki sabse badi Navratri. Ashwin maas ke Shukla paksh mein aati hai aur Durga Puja, Garba-Dandiya, Ramlila ke saath poore Bharat mein dhoom se manai jaati hai. Navami ke baad Vijayadashami (Dussehra) hoti hai — Ravan-parajay aur burai par acchai ki jeet ka pratik.",
    katha: "Markandeya Puran ke anusaar isi samay Mahishasura ka vadh hua tha. Devtaon ke tej se Maa Durga prakat hui aur nav raat ke yuddh ke baad Mahishasura ka sanhar kiya." },
  { name: "Chaitra Navratri", nameHi: "चैत्र नवरात्रि", season: "March – April", month: "Chaitra Shukla Pratipada",
    icon: "🌸", tag: "Hindu Nav Varsh",
    desc: "Chaitra Shukla Pratipada se shuru hoti hai — ise Hindu Nav Varsh (Vikram Samvat ka prarambh) maana jaata hai. Gudi Padwa aur Ugadi bhi isi samay aate hain. Navami ko Ram Navami hoti hai, jis din Bhagwan Ram ka janm hua tha.",
    katha: "Chaitra Navratri ka sambandh Srishti aur Nav-Varsh se hai. Maa ke nav roop srishti ki nav avasthayein darshaate hain, isliye yeh Nav Varsh ke saath juda hai." },
  { name: "Magha Gupt Navratri", nameHi: "माघ गुप्त नवरात्रि", season: "January – February", month: "Magha Shukla Pratipada",
    icon: "🌙", tag: "Tantra Sadhana",
    desc: "Ise 'Gupt Navratri' kehte hain kyunki yeh jan-sadharan mein utni prasiddh nahi. Sadhu, sant aur tantra-sadhak is dauran Dash Mahavidya ki upasana, mantra jaap aur vashikaran-stambhan jaise anushthan karte hain.",
    katha: "Gupt Navratri mein Maa Kali, Tara, Tripura Sundari, Bhuvaneshwari, Chhinnamasta, Bhairavi, Dhumavati, Baglamukhi, Matangi aur Kamala — Dash Mahavidya ki aradhana hoti hai." },
  { name: "Ashadha Gupt Navratri", nameHi: "आषाढ़ गुप्त नवरात्रि", season: "June – July", month: "Ashadha Shukla Pratipada",
    icon: "🪔", tag: "Gupt Upasana",
    desc: "Yeh doosri Gupt Navratri hai, jo Ashadha maas mein aati hai. Dakshin Bharat mein yeh adhik prachalit hai. Gupt upasna, sadhana aur vishesh mantra-anushthan ke liye uttam samay maana jaata hai.",
    katha: "Ashadha Gupt Navratri bhi Dash Mahavidya aur Devi ke gopaniya roopon ki sadhana ke liye samarpit hai; bahari dikhave se adhik bheetari tapasya par zor hai." }
];

/* ---------- Nine forms (Navadurga) ---------- */
const NAVADURGA = [
  { day: 1, name: "Shailaputri", hi: "शैलपुत्री", meaning: "Parvat ki Putri", vahan: "Nandi (Vrishabh / Bail)", vahanEn: "Nandi (Bull)",
    mantra: "Om Devi Shailaputryai Namah", mantraHi: "ॐ देवी शैलपुत्र्यै नमः", beej: "ॐ ह्रीं शिवायै नमः",
    bhog: "Shuddh Ghee", bhogEn: "Pure desi ghee", colour: "Orange", colourHex: "#F58220",
    weapon: "Trishul (right) • Kamal (left)", blessing: "Rog-mukti aur sthairya",
    desc: "Shailaputri 'parvat ki putri' hain — Prakriti aur sthirta ka pratik. Yeh Maa Parvati / Sati ka punarjanm roop hai. Nandi par virajit, haath mein trishul aur kamal liye. Pehle din inki upasana se sadhana ki bhoomi mazboot hoti hai.",
    katha: "Daksh-yagya mein Sati ne deh tyaag diya. Agle janm mein ve Himalaya ki putri Parvati ke roop mein janmi aur Shiv ko paya — isi liye 'Shailaputri'." },
  { day: 2, name: "Brahmacharini", hi: "ब्रह्मचारिणी", meaning: "Tapasya karni wali", vahan: "Pad-yatra (bina vahan / Yogini)", vahanEn: "On foot (no mount)",
    mantra: "Om Devi Brahmacharinyai Namah", mantraHi: "ॐ देवी ब्रह्मचारिण्यै नमः", beej: "ॐ ह्रीं श्रीं अम्बिकायै नमः",
    bhog: "Shakkar / Mishri aur Phal", bhogEn: "Sugar and fruits", colour: "White", colourHex: "#F4F4F4",
    weapon: "Jap-mala (right) • Kamandal (left)", blessing: "Vairagya, dhairya aur tapas-shakti",
    desc: "Brahmacharini tapasya, bhakti aur aatm-sanyam ki devi hain. Nange paanv chalti hui, jap-mala aur kamandal liye — Parvati ke kathin tap ki smriti. Inki upasana se sahan-shakti aur dheeraj milta hai.",
    katha: "Shiv ko paane ke liye Parvati ne hazaron varsh ki tapasya ki — pehle ek paanv par khadi rahi, phir thandi-jal mein, phir sookhe patte khaakar, phir nirahar. Brahma bhi unki tapasya par chamatkit ho gaye." },
  { day: 3, name: "Chandraghanta", hi: "चंद्रघण्टा", meaning: "Chandra-ghanti dharini", vahan: "Baghin / Sher (Tigress)", vahanEn: "Tigress",
    mantra: "Om Devi Chandraghantayai Namah", mantraHi: "ॐ देवी चंद्रघण्टायै नमः", beej: "ॐ ह्रीं श्रीं चन्द्रघण्टायै नमः",
    bhog: "Doodh aur Kheer", bhogEn: "Milk and kheer", colour: "Red", colourHex: "#D32F2F",
    weapon: "Das bhujein — trishul, gada, dhanush, baan, talwar, ghanti", blessing: "Man ki shanti aur nirbhayata",
    desc: "Chandraghanta ke maathe par aadhe-chandra ke aakar ki ghanti shobha paati hai, isliye yeh naam. Das bhujaon mein shastra liye veer-roop hain, jo Mahishasura ke vadh ke liye prakat hui. Inki puja se bhay door hota hai.",
    katha: "Shiv ke saath vivah ke samay Maa ne apne tejasvi roop ko shaant kiya aur maathe par chandra-ghanti dhaaran ki — tabhi Chandraghanta kehlayi." },
  { day: 4, name: "Kushmanda", hi: "कुष्माण्डा", meaning: "Srishti ki janani", vahan: "Sherni (Lioness)", vahanEn: "Lioness",
    mantra: "Om Devi Kushmandayai Namah", mantraHi: "ॐ देवी कुष्माण्डायै नमः", beej: "ॐ ऐं ह्रीं क्लीं कुष्माण्डायै नमः",
    bhog: "Malpua", bhogEn: "Malpua", colour: "Royal Blue", colourHex: "#1F3A93",
    weapon: "Aath bhujein — chakra, gada, kamal, dhanush, baan", blessing: "Urja, aarogya aur samriddhi",
    desc: "Kushmanda ne apni mand-hansi se srishti ki rachna ki — 'Ku' (alpa) + 'ushma' (garmi) + 'anda' (brahmand). Surya-mandal mein nivas karti hain aur surya ko urja deti hain. Inki upasana se bal aur aarogya badhta hai.",
    katha: "Jab brahmand andhkar mein tha, tab Kushmanda ne maatra halki hansi se srishti ka prakash kiya — isliye veh 'Srishti ki janani' kehlayi." },
  { day: 5, name: "Skandamata", hi: "स्कन्दमाता", meaning: "Skand (Kartikeya) ki Mata", vahan: "Sher (Lion)", vahanEn: "Lion",
    mantra: "Om Devi Skandamatayai Namah", mantraHi: "ॐ देवी स्कन्दमातायै नमः", beej: "ॐ ह्रीं श्रीं स्कन्दमातायै नमः",
    bhog: "Kela", bhogEn: "Banana", colour: "Yellow", colourHex: "#F2C200",
    weapon: "Chaar bhujein — do kamal, ek mein Kartikeya", blessing: "Gyaan, vatsalya aur kutumb-kalyan",
    desc: "Skandamata apne putra Kartikeya (Skand) ko god mein liye baithi hain. Maa aur shishu ka vatsalya-roop. Inki upasana se gyaan, bal aur parivaar ki khushhali milti hai. Sirf naam japne se bhi maa prasann hoti hain.",
    katha: "Shiv-Parvati ke putra Kartikeya (Skand) devtaon ke senapati bane. Putra ko god mein liye Maa Skandamata kehlayi." },
  { day: 6, name: "Katyayani", hi: "कात्यायनी", meaning: "Katyayan rishi ki putri", vahan: "Sher (Lion)", vahanEn: "Lion",
    mantra: "Om Devi Katyayanyai Namah", mantraHi: "ॐ देवी कात्यायन्यै नमः", beej: "ॐ ह्रीं श्रीं कात्यायन्यै नमः",
    bhog: "Shahad", bhogEn: "Honey", colour: "Green", colourHex: "#2E7D32",
    weapon: "Chaar bhujein — talwar, dhaal, kamal, trishul", blessing: "Vijay, saahas aur saubhagya",
    desc: "Katyayan rishi ki tapasya se putri-roop mein prakat hui, isliye Katyayani. Mahishasura ka vadh inke hi haathon hua. Inki upasana se vivaah-badha door hoti hai aur vijay milti hai — isliye kanyaayein unki puja karti hain.",
    katha: "Katyayan rishi ne Devi se putri-roop mein janm lene ki prarthana ki. Devi ne unke ghar janm liya aur Mahishasura ka vadh kiya." },
  { day: 7, name: "Kalaratri", hi: "कालरात्रि", meaning: "Andhkar aur kaal ki raat", vahan: "Gadha (Donkey)", vahanEn: "Donkey",
    mantra: "Om Devi Kalaratryai Namah", mantraHi: "ॐ देवी कालरात्र्यै नमः", beej: "ॐ ह्रीं श्रीं कालरात्र्यै नमः",
    bhog: "Gur (Gud)", bhogEn: "Jaggery", colour: "Grey", colourHex: "#78909C",
    weapon: "Trishul, khadag, vajra", blessing: "Bhay-nash aur shatru-nash",
    desc: "Kalaratri ka roop ghan-shyam, bikhre kes, gale mein mund-mala — dekne mein bhayanak par mangalmayi. Yeh Maa ka sabse ugra aur shatru-nashak roop hai. Inki puja se bhoot-pret, bhay aur badhaayein door hoti hain.",
    katha: "Jab Shumbh-Nishumbh ke asur bhag gaye, tab Devi ne Kalaratri ka roop dhaaran kiya. Kalaratri kehlaane ka arth — kaal (samay) ki raat, jisme sab kuch samaapt ho jaata hai." },
  { day: 8, name: "Mahagauri", hi: "महागौरी", meaning: "Ati gaur-varn wali", vahan: "Bail / Vrishabh (Ox)", vahanEn: "White bull / ox",
    mantra: "Om Devi Mahagauryai Namah", mantraHi: "ॐ देवी महागौर्यै नमः", beej: "ॐ ह्रीं श्रीं महागौर्यै नमः",
    bhog: "Nariyal", bhogEn: "Coconut", colour: "Purple", colourHex: "#7B2CBF",
    weapon: "Trishul, damaru, kamal", blessing: "Pavitrata, shanti aur saubhagya",
    desc: "Tapasya ke kaaran Parvati ka rang shaam ho gaya tha; Shiv ne Ganga-jal se unhe snan karaya aur veh punah gaur-varn ho gayin — isliye Mahagauri. Chaar bhujein, shubhra-vastra. Kanya-pujan isi din se juda hai.",
    katha: "Kalaratri roop ke baad Devi ne snan kiya aur punah gaur-varn ho gayin. Ashtami/Navami ko Mahagauri aur Mahagauri ke roop mein Kanya Pujan hota hai." },
  { day: 9, name: "Siddhidatri", hi: "सिद्धिदात्री", meaning: "Siddhi dene wali", vahan: "Kamal (Lotus)", vahanEn: "Lotus",
    mantra: "Om Devi Siddhidatryai Namah", mantraHi: "ॐ देवी सिद्धिदात्र्यै नमः", beej: "ॐ ह्रीं क्लीं ऐं सिद्धयै नमः",
    bhog: "Til (Sesame Seeds)", bhogEn: "Sesame seeds", colour: "Peacock Green", colourHex: "#00897B",
    weapon: "Chakra, shankh, gada, kamal", blessing: "Sarva-siddhi aur moksha",
    desc: "Siddhidatri Maa ka sarvochch roop hain — sabhi siddhiyon ki daatri. Aath siddhiyan (Anima, Mahima, Garima, Laghima, Prapti, Prakamya, Ishitva, Vashitva) inhi se milti hain. Shiv ko bhi inhi ne siddhiyan di, jisse veh Ardhanarishwar bane. Inki puja se sadhak ko moksha milta hai.",
    katha: "Devi ne Shiv ko sabhi siddhiyan pradan ki. Siddhidatri ke roop mein veh srishti ke sabhi jeevon ko siddhi aur mukti deti hain." }
];

/* ---------- Shlok of the day pool ---------- */
const SHLOKS = [
  { sanskrit: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
    hi: "हे नारायणी! आप सब मंगलों में मंगलमयी, कल्याणकारिणी, सब पुरुषार्थों को सिद्ध करने वाली, शरणागत-वत्सला, तीन नेत्रों वाली और गौरी हैं — आपको नमस्कार है।",
    en: "O Narayani, you are auspiciousness itself among all that is auspicious, the giver of all welfare, the fulfiller of all aims, the refuge of the surrendered, the three-eyed Gauri — salutations to you.",
    src: "Durga Saptashati 11.10" },
  { sanskrit: "दुर्गे स्मृता हरसि भीतिमशेषजन्तोः\nस्वस्थैः स्मृता मतिमतीव शुभां ददासि।\nदारिद्र्यदुःखभयहारिणि का त्वदन्या\nसर्वोपकारकरणाय सदार्द्रचित्ता॥",
    hi: "हे दुर्गे! स्मरण करने पर आप समस्त जीवों के भय को हर लेती हैं, और स्वस्थ लोगों को स्मरण करने पर अत्यंत शुभ बुद्धि देती हैं। दरिद्रता, दुःख और भय को हरने वाली आपके सिवा दूसरी कौन है, जिसका चित्त सबके उपकार के लिए सदा द्रवित रहता है।",
    en: "O Durga, remembered, you remove the fear of every living being; remembered by the healthy, you grant the most auspicious intellect. Who but you can destroy poverty, sorrow and fear — you whose heart is ever melting with compassion for all.",
    src: "Durga Saptashati 4.17" },
  { sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    hi: "जो देवी समस्त प्राणियों में शक्ति-रूप में स्थित हैं — उन्हें नमस्कार, नमस्कार, नमस्कार है।",
    en: "To the Goddess who dwells in all beings in the form of power — salutations, salutations, salutations again and again.",
    src: "Devi Kavacham / Argala" },
  { sanskrit: "या देवी सर्वभूतेषु मातृरूपेण संस्थिता।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
    hi: "जो देवी समस्त प्राणियों में माता-रूप में स्थित हैं — उन्हें बार-बार नमस्कार है।",
    en: "To the Goddess who dwells in all beings in the form of the Mother — salutations, salutations, salutations again and again.",
    src: "Devi Kavacham" },
  { sanskrit: "सर्वस्वरूपे सर्वेशे सर्वशक्तिसमन्विते।\nभयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तु ते॥",
    hi: "हे देवि! आप सर्वरूपा, सर्वेश्वरी और सब प्रकार की शक्ति से युक्त हैं — सब भयों से हमारी रक्षा करें। हे दुर्गे देवि, आपको नमस्कार है।",
    en: "O Devi, you exist in all forms, are the ruler of all and are endowed with every power — protect us from all fears. O Durga Devi, salutations to you.",
    src: "Durga Saptashati 11.24" },
  { sanskrit: "शरणागतदीनार्तपरित्राणपरायणे।\nसर्वस्यार्तिहरे देवि नारायणि नमोऽस्तु ते॥",
    hi: "हे देवि! शरण में आए दीन और दुःखी जनों की रक्षा में तत्पर, सबकी पीड़ा हरने वाली नारायणी — आपको नमस्कार है।",
    en: "O Devi, ever devoted to protecting the distressed and the oppressed who take refuge in you, remover of everyone's suffering — O Narayani, salutations to you.",
    src: "Durga Saptashati 11.12" },
  { sanskrit: "ज्ञानिनामपि चेतांसि देवी भगवती हि सा।\nबलादाकृष्य मोहाय महामाया प्रयच्छति॥",
    hi: "वही भगवती देवी महामाया हैं, जो ज्ञानियों के चित्त को भी बलपूर्वक खींचकर मोह में डाल देती हैं।",
    en: "She indeed is the Goddess Bhagavati, the Mahamaya, who by her power draws even the minds of the wise and leads them into delusion.",
    src: "Durga Saptashati 1.55" },
  { sanskrit: "नमस्ते शरण्ये शिवे सानुकम्पे\nनमस्ते जगद्व्यापिके विश्वरूपे।\nनमस्ते जगद्वन्द्यपादारविन्दे\nनमस्ते जगत्तारिणि त्राहि दुर्गे॥",
    hi: "हे शरण देने वाली, कल्याणमयी और करुणामयी देवी, आपको नमस्कार! हे जगत में व्याप्त विश्वरूपा, आपको नमस्कार! हे जगत-वंदित चरण-कमलों वाली, आपको नमस्कार! हे जगत की तारिणी दुर्गे, हमारी रक्षा करें।",
    en: "Salutations to you, O refuge of all, auspicious and compassionate one; salutations to you who pervades the world in universal form; salutations to your lotus feet adored by the world; O Durga, saviour of the world, protect us.",
    src: "Durga Stuti" },
  { sanskrit: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे।",
    hi: "ऐं (सरस्वती-ज्ञान), ह्रीं (महालक्ष्मी-माया), क्लीं (महाकाली-शक्ति) सहित चामुंडा को नमस्कार — यही नवार्ण मंत्र है।",
    en: "The Navarna Mantra: Aim (wisdom/Saraswati), Hreem (cosmic Maya/Lakshmi), Kleem (desire-power/Kali) — salutations to Chamunda.",
    src: "Navarna Mantra" },
  { sanskrit: "सर्वबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि।\nएवमेव त्वया कार्यमस्मद्वैरिविनाशनम्॥",
    hi: "हे अखिलेश्वरी! इसी प्रकार आप तीनों लोकों की समस्त बाधाओं को शांत करें और हमारे शत्रुओं का नाश करती रहें।",
    en: "O ruler of all, thus indeed should you calm all the obstacles of the three worlds and keep destroying our enemies.",
    src: "Durga Saptashati 11.35" }
];

/* ---------- Navratri 2026 colours (day-wise) ---------- */
const NAVRATRI_COLORS = [
  { day: 1, colour: "Orange",      hi: "नारंगी", hex: "#F58220", meaning: "Utsaah, urja aur poshitivity ka pratik." },
  { day: 2, colour: "White",       hi: "सफ़ेद",  hex: "#F5F5F5", meaning: "Pavitrata, shanti aur saadgi ka pratik." },
  { day: 3, colour: "Red",         hi: "लाल",    hex: "#D32F2F", meaning: "Shakti, prem aur saahas ka pratik." },
  { day: 4, colour: "Royal Blue",  hi: "रॉयल ब्लू", hex: "#1F3A93", meaning: "Gahraai, vaibhav aur shaanti." },
  { day: 5, colour: "Yellow",      hi: "पीला",   hex: "#F2C200", meaning: "Khushi, aashavadi aur prakash." },
  { day: 6, colour: "Green",       hi: "हरा",    hex: "#2E7D32", meaning: "Vikas, nav-nirmaan aur prakriti." },
  { day: 7, colour: "Grey",        hi: "स्लेटी", hex: "#78909C", meaning: "Santulan, sthirta aur zameen se judav." },
  { day: 8, colour: "Purple",      hi: "बैंगनी", hex: "#7B2CBF", meaning: "Vaibhav, gairva aur uddaan." },
  { day: 9, colour: "Peacock Green", hi: "मोर-हरा", hex: "#00897B", meaning: "Visheshtaa, taazgi aur poornata." }
];

/* ---------- 51 Shaktipeeth ---------- */
const SHAKTIPEETH = [
  { n:1,  name:"Amarnath",            loc:"Pahalgam, Jammu & Kashmir",     country:"India",     part:"Kanth (Throat)",              shakti:"Mahamaya",        bhairav:"Trisandhyeshwar" },
  { n:2,  name:"Attahas",             loc:"Labhpur, Birbhum, West Bengal", country:"India",     part:"Adhar (Lips)",                shakti:"Phullara",        bhairav:"Vishweshwar" },
  { n:3,  name:"Bahula",              loc:"Ketugram, Purba Bardhaman, WB", country:"India",     part:"Baayan Baahu (Left arm)",     shakti:"Bahula",          bhairav:"Bhirukeshwar" },
  { n:4,  name:"Bakreshwar",          loc:"Birbhum, West Bengal",          country:"India",     part:"Bhroomadhya (Eyebrows)",      shakti:"Mahishamardini",  bhairav:"Vakranatheshwar" },
  { n:5,  name:"Bhairavparvat (Ujjain)", loc:"Ujjain, Madhya Pradesh",     country:"India",     part:"Kohni (Elbow)",               shakti:"Avanti",          bhairav:"Lambakarneshwar" },
  { n:6,  name:"Bhabanipur",          loc:"Sherpur, Rajshahi",             country:"Bangladesh",part:"Baayan Payal (Left anklet)",  shakti:"Aparna",          bhairav:"Vamaneshwar" },
  { n:7,  name:"Biraja (Girija)",     loc:"Jajpur, Odisha",                country:"India",     part:"Naabhi (Navel)",              shakti:"Biraja (Girija)", bhairav:"Varaheshwar" },
  { n:8,  name:"Mithila (Janakpur)",  loc:"Janakpur",                      country:"Nepal",     part:"Baayan Skandh (Left shoulder)",shakti:"Uma (Mahadevi)",  bhairav:"Mahodareshwar" },
  { n:9,  name:"Mahamaya (Gupteshwar)",loc:"Kathmandu",                    country:"Nepal",     part:"Dono Ghutne (Both knees)",    shakti:"Mahamaya",        bhairav:"Kapali" },
  { n:10, name:"Guhyeshwari",         loc:"Kathmandu",                     country:"Nepal",     part:"Dono Ghutne/Kamar",           shakti:"Mahashira (Guhyakali)", bhairav:"Kapali" },
  { n:11, name:"Gandaki (Muktinath)", loc:"Muktinath, Mustang",            country:"Nepal",     part:"Maathe (Forehead)",           shakti:"Gandaki Chandi",  bhairav:"Chakrapani" },
  { n:12, name:"Saptashrungi",        loc:"Nashik, Maharashtra",           country:"India",     part:"Thudi (Chin)",                shakti:"Bhramari",        bhairav:"Vikritaksha" },
  { n:13, name:"Hinglaj Mata",        loc:"Balochistan",                   country:"Pakistan",  part:"Mastak (Top of head)",        shakti:"Kottari",         bhairav:"Bhimalochan" },
  { n:14, name:"Kalighat (Kalipeeth)",loc:"Kolkata, West Bengal",          country:"India",     part:"Daayan Pairo ka angutha",     shakti:"Kalika",          bhairav:"Nakuleshwar" },
  { n:15, name:"Kamakhya",            loc:"Nilachal Hill, Guwahati, Assam",country:"India",     part:"Yoni (Garbh)",                shakti:"Kamakhya",        bhairav:"Umananda" },
  { n:16, name:"Kankalitala",         loc:"Birbhum, West Bengal",          country:"India",     part:"Kamar (Waist)",               shakti:"Devagarbha",      bhairav:"Ruru" },
  { n:17, name:"Kanyakumari",         loc:"Kanyakumari, Tamil Nadu",       country:"India",     part:"Peeth (Back)",                shakti:"Sarvani (Kanyakumari)", bhairav:"Nimisha" },
  { n:18, name:"Bajreshwari (Kangra)",loc:"Kangra, Himachal Pradesh",      country:"India",     part:"Baayan Stan (Left breast)",   shakti:"Vajreshwari",     bhairav:"Abhiru" },
  { n:19, name:"Kiriteswari",         loc:"Murshidabad, West Bengal",      country:"India",     part:"Kirit (Crown)",               shakti:"Vimala",          bhairav:"Sanvarta" },
  { n:20, name:"Manas (Mansarovar)",  loc:"Near Lake Mansarovar, Tibet",   country:"Tibet",     part:"Daayan Haath (Right hand)",   shakti:"Dakshayani",      bhairav:"Amar" },
  { n:21, name:"Bhramari (Jalpaiguri)",loc:"Boda, Jalpaiguri, West Bengal",country:"India",     part:"Baayan Pair (Left leg)",      shakti:"Bhramari",        bhairav:"Ambar" },
  { n:22, name:"Nainativu (Indrakshi)",loc:"Nainativu, Jaffna",            country:"Sri Lanka", part:"Payal (Anklets)",             shakti:"Indrakshi",       bhairav:"Naguleshwar" },
  { n:23, name:"Draksharama (Manikyamba)",loc:"Draksharamam, Andhra Pradesh",country:"India",  part:"Baayan Gaal (Left cheek)",    shakti:"Manikyamba",      bhairav:"Dandapani" },
  { n:24, name:"Jwalamukhi",          loc:"Kangra, Himachal Pradesh",      country:"India",     part:"Jeebh (Tongue)",              shakti:"Siddhida (Ambika)",bhairav:"Unmatta" },
  { n:25, name:"Kalmadhav (Shondesh)",loc:"Amarkantak, Madhya Pradesh",    country:"India",     part:"Baayan Nityambh (Left buttock)",shakti:"Kali",         bhairav:"Asitanga" },
  { n:26, name:"Nalhati",             loc:"Birbhum, West Bengal",          country:"India",     part:"Kanth (Throat)",              shakti:"Kalika",          bhairav:"Yogesh" },
  { n:27, name:"Prabhas (Chandrabhaga)",loc:"Veraval, Gir Somnath, Gujarat",country:"India",    part:"Udar (Stomach)",              shakti:"Chandrabhaga",    bhairav:"Vakratunda" },
  { n:28, name:"Alopi / Lalita",      loc:"Prayagraj, Uttar Pradesh",      country:"India",     part:"Ungliyan (Fingers)",          shakti:"Lalita",          bhairav:"Bhava" },
  { n:29, name:"Kurukshetra (Bhadrakali)",loc:"Kurukshetra, Haryana",      country:"India",     part:"Daayan Takhnа (Right ankle)", shakti:"Savitri (Bhadrakali)", bhairav:"Sthanu" },
  { n:30, name:"Sharada (Maihar)",    loc:"Maihar, Madhya Pradesh",        country:"India",     part:"Haar (Necklace)",             shakti:"Sharada (Shivani)",bhairav:"Chanda" },
  { n:31, name:"Nandikeshwari (Sainthia)",loc:"Birbhum, West Bengal",      country:"India",     part:"Haar (Necklace)",             shakti:"Nandini",         bhairav:"Nandikeshwar" },
  { n:32, name:"Naina Devi",          loc:"Bilaspur, Himachal Pradesh",    country:"India",     part:"Aankhein (Eyes)",             shakti:"Mahishamardini",  bhairav:"Krodhish" },
  { n:33, name:"Srisailam (Bhramaramba)",loc:"Srisailam, Andhra Pradesh",  country:"India",     part:"Kanth (Neck)",                shakti:"Bhramaramba",     bhairav:"Mallikarjuna" },
  { n:34, name:"Shondesh (Narmada)",  loc:"Amarkantak, Madhya Pradesh",    country:"India",     part:"Daayan Nityambh (Right buttock)",shakti:"Narmada",      bhairav:"Bhadrasen" },
  { n:35, name:"Shriparvat",          loc:"Srisailam hills, Andhra Pradesh",country:"India",   part:"Daayan Takhnа (Right ankle)", shakti:"Shri Sundari",    bhairav:"Sundaranand" },
  { n:36, name:"Shri Shail (Sylhet)", loc:"Sylhet",                        country:"Bangladesh",part:"Kanth (Neck)",                shakti:"Mahalakshmi",     bhairav:"Sambaranand" },
  { n:37, name:"Suchindram",          loc:"Kanyakumari, Tamil Nadu",       country:"India",     part:"Upar ke Daant (Upper teeth)", shakti:"Narayani",        bhairav:"Sanhar" },
  { n:38, name:"Sugandha",            loc:"Shikarpur, Barisal",            country:"Bangladesh",part:"Naak (Nose)",                 shakti:"Sugandha",        bhairav:"Tryambak" },
  { n:39, name:"Tripura Sundari",     loc:"Udaipur, Tripura",              country:"India",     part:"Daayan Pair (Right foot)",    shakti:"Tripurasundari",  bhairav:"Tripuresh" },
  { n:40, name:"Vishalakshi (Manikarnika)",loc:"Varanasi, Uttar Pradesh",  country:"India",     part:"Kundal (Earring)",            shakti:"Vishalakshi",     bhairav:"Kala Bhairava" },
  { n:41, name:"Vibhash (Tamluk)",    loc:"Tamluk, Purba Medinipur, WB",   country:"India",     part:"Baayan Takhnа (Left ankle)",  shakti:"Kapalini",        bhairav:"Sarvananda" },
  { n:42, name:"Virat (Bharatpur)",   loc:"Bharatpur, Rajasthan",          country:"India",     part:"Baayan Pairo ke anguthe",     shakti:"Ambika",          bhairav:"Amriteshwar" },
  { n:43, name:"Vrindavan (Katyayani)",loc:"Mathura, Uttar Pradesh",       country:"India",     part:"Kes-kunch (Ringlets of hair)",shakti:"Uma (Katyayani)", bhairav:"Bhuteshwar" },
  { n:44, name:"Devi Talab (Tripurmalini)",loc:"Jalandhar, Punjab",        country:"India",     part:"Baayan Stan (Left breast)",   shakti:"Tripurmalini",    bhairav:"Bhishan" },
  { n:45, name:"Baidyanath (Deoghar)",loc:"Deoghar, Jharkhand",            country:"India",     part:"Hriday (Heart)",              shakti:"Jaya Durga",      bhairav:"Baidyanath" },
  { n:46, name:"Kamakshi (Kanchi)",   loc:"Kanchipuram, Tamil Nadu",       country:"India",     part:"Asthi/Kamar (Back)",          shakti:"Kamakshi",        bhairav:"Ekambar" },
  { n:47, name:"Jogadya (Khirgram)",  loc:"Purba Bardhaman, West Bengal",  country:"India",     part:"Daayan Bada Angutha",         shakti:"Jogadya",         bhairav:"Ksheerkant" },
  { n:48, name:"Chattal (Sitakunda)", loc:"Chittagong",                    country:"Bangladesh",part:"Daayan Baahu (Right arm)",    shakti:"Bhawani",         bhairav:"Chandrashekhar" },
  { n:49, name:"Yashoreshwari",       loc:"Jessore",                       country:"Bangladesh",part:"Hathelian aur Talve",         shakti:"Yashoreshwari",   bhairav:"Chanda" },
  { n:50, name:"Tara Tarini",         loc:"Kumari Hills, Ganjam, Odisha",  country:"India",     part:"Stan (Breasts)",              shakti:"Tara Tarini",     bhairav:"Tumbeshwar" },
  { n:51, name:"Danteshwari",         loc:"Dantewada, Chhattisgarh",       country:"India",     part:"Daant (Teeth)",               shakti:"Danteshwari",     bhairav:"Kapalbhairav" }
];

/* ---------- Famous temple directory ---------- */
const MANDIRS = [
  { name:"Kamakhya Devi", hi:"कामाख्या देवी", place:"Nilachal Hill, Guwahati, Assam",
    about:"51 Shaktipeeth mein sarvopari maana jaata hai — yahan Sati ka Yoni gira tha. Tantra-sadhana ka pramukh kendra. Ambubachi Mela (Ahaar maas) mein yahan lakhon shraddhalu aate hain. Yahaan koi murti nahi, ek patthar ki darar (Yoni) ki puja hoti hai.",
    best:"Ambubachi Mela (June) • Navratri • Durga Puja" },
  { name:"Vaishno Devi", hi:"वैष्णो देवी", place:"Katra, Reasi, Jammu & Kashmir",
    about:"Trikuta Parvat ki gufа mein Maa Vaishno Devi ke teen pind (Maha Kali, Maha Lakshmi, Maha Saraswati) darshan hote hain. 'Jai Mata Di' ke naare ke saath 12 km ki paidal yatra hoti hai. Yahan Maa ne Bhairon Nath ka vadh kiya tha.",
    best:"Navratri • Poora saal darshan" },
  { name:"Vindhyachal Devi", hi:"विंध्याचल देवी", place:"Mirzapur, Uttar Pradesh",
    about:"Maa Vindhyavasini ka mandir, Vindhya parvat par sthit. Yeh ek pramukh Shaktipeeth hai. Teen pramukh mandir ek hi parisar mein — Vindhyavasini, Kali Khoh aur Ashtabhuja. Navratri mein yahan vishesh bheed hoti hai.",
    best:"Navratri • Kajali Teej" },
  { name:"Kalighat Kali", hi:"कालीघाट", place:"Kolkata, West Bengal",
    about:"51 Shaktipeeth mein se ek — yahan Sati ke daayan pair ka angutha gira tha. Maa Kali ki bhay-nashak murti. Kalighat Kolkata ka sabse purana aur pramukh Shakti-sthal hai; Bengali 'Kali' shabd isi se aaya maana jaata hai.",
    best:"Kali Puja (Deepavali) • Navratri" },
  { name:"Dakshineswar Kali", hi:"दक्षिणेश्वर काली", place:"Dakshineswar, North 24 Parganas, West Bengal",
    about:"Rani Rashmoni dwara 1855 mein nirmit, Hooghly nadi ke kinare. Yahan Bhavatarini Maa Kali ki puja hoti hai. Sri Ramakrishna Paramhansa ne yahan sadhana ki aur Maa ke darshan kiye — yahi unki sadhana-sthali rahi.",
    best:"Kali Puja • Navratri • Snan Yatra" },
  { name:"Maihar Devi (Sharada)", hi:"मैहर देवी", place:"Maihar, Satna, Madhya Pradesh",
    about:"Trikuta parvat ki choti par sthit, Maa Sharada (Sharda) ka mandir — 51 Shaktipeeth mein se ek, yahan Maa ka haar (necklace) gira tha. 1063 seedhiyan chadhkar darshan hote hain. Alha-Udal ki katha se juda, isliye 'Maihar' naam pada.",
    best:"Navratri • Poora saal darshan" }
];

/* ---------- Puja samagri checklist ---------- */
const SAMAGRI = {
  "Ghatasthapana / Kalash": ["Mitti ka Kalash (matka)", "Jau (barley) ke beej", "Shuddh mitti / saaf bhoomi", "Aam ke patte (5-7)", "Nariyal", "Laal chunri aur kalava", "Safed aasan / chowki", "Ganga jal", "Akshat (chawal)", "Roli, haldi, kumkum"],
  "Puja Thali": ["Diya aur ghee/batti", "Dhoop aur agarbatti", "Kapoor", "Roli, Sindoor, Haldi", "Akshat", "Phool (laal genda, kamal)", "Mishri / Prasad", "Itra / attar", "Ghanti aur shankh"],
  "Hawan / Homa": ["Hawan kund", "Aam ki lakdi / samidha", "Ghee", "Hawan samagri", "Kala til", "Jau", "Kapoor", "Dhoop", "Matchbox"],
  "Kanya Pujan": ["9 kanyaon ka swagat", "Chane (kala chana)", "Poori", "Halwa", "Nariyal", "Phal aur mithai", "Kanyaon ke liye chunri/kalava", "Dakshina / upahaar", "Charanamrit"]
};

/* ---------- Navratri fasting — seasonal science ---------- */
const SEASON_SCIENCE = [
  { title:"Ritu Parivartan ka Samay", text:"Chaitra aur Sharad Navratri ritu-badal ke sandhikaal mein aati hain. Is waqt sharir ki immunity kamzor hoti hai aur bimaariyan aasaani se lagti hain. Vrat se pachan-tantra ko aaram milta hai aur sharir detox hota hai." },
  { title:"Halka aur Sattvik Bhaajan", text:"Vrat mein sirf halka, sattvik aur aasaani se pachne wala bhojan liya jaata hai — sabudana, kuttu, samak, phal, dahi. Isse digestive system ko aaram milta hai aur acidity-gas kam hoti hai." },
  { title:"Manasik aur Aadhyatmik Labh", text:"Upvas se mann shaant hota hai, dhyaan lagana aasan hota hai aur ichchhaon par sanyam badhta hai. Sanyam aur sadhana se mansik tanaav, chinta aur neend ki samasya kam hoti hai." },
  { title:"Satat Jala-Sevan aur Aaram", text:"Vrat ke dauran khub paani, nariyal paani aur chaach peena chahiye. Zaroorat se zyada kadha upvas na karein; sugar/BP ke mariz doctor ki salaah zaroor lein. Upvas sabke liye ek jaisa nahi hota." }
];

/* ---------- Stotram / Aarti hub ---------- */
const STOTRAMS = [
  { name:"Mahishasura Mardini Stotram", hi:"महिषासुर मर्दिनी स्तोत्रम्", type:"Stotram",
    about:"Adi Shankaracharya dwara rachit, 21 shlokon ka yeh stotra Maa ke Mahishasura-vadh roop ki stuti karta hai. 'Ayi Giri Nandini' se prarambh hota hai. Iska niyamit paath bhay, rog aur shatru-nash mein sahayak maana jaata hai.",
    sample:"अयि गिरिनन्दिनि नन्दितमेदिनि विश्वविनोदिनि नन्दनुते..." },
  { name:"Durga Chalisa", hi:"दुर्गा चालीसा", type:"Chalisa",
    about:"40 chaupaiyon ka lokpriya stotra, jisme Maa ke nav roopon aur unki kripaon ka varnan hai. Saral bhasha aur laybaddh hone ke kaaran ghar-ghar mein paath hota hai. 'Namo Namo Durge Sukh Karani' se aarambh hota hai.",
    sample:"नमो नमो दुर्गे सुख करनी। नमो नमो दुर्गे दुःख हरनी॥" },
  { name:"Argala Stotram", hi:"अर्गला स्तोत्रम्", type:"Stotram",
    about:"Durga Saptashati ka ek mahatvapurn ang. Isme Maa ke vishnu-roop aur unki shakti ki stuti hai. Keelak ke pehle iska paath kiya jaata hai, jo stotra-path ke 'dwaar' ko kholne wala maana jaata hai.",
    sample:"जय त्वं देवि चामुण्डे जय भूतार्तिहारिणि..." },
  { name:"Siddha Kunjika Stotram", hi:"सिद्ध कुंजिका स्तोत्रम्", type:"Stotram",
    about:"Devi Mahatmya ka 'kunjika' (chaabi) — jo bina poora Saptashati padhe bhi utna hi fal deta hai. Iska paath bade vegh se aur ekagra mann se kiya jaata hai. Iska sambandh Navarna Mantra se hai.",
    sample:"शिव उवाच — शृणु देवि प्रवक्ष्यामि कुंजिकास्तोत्रमुत्तमम्..." },
  { name:"Durga Saptashati (Devi Mahatmya)", hi:"दुर्गा सप्तशती", type:"Granth",
    about:"Markandeya Puran ka bhag, 700 shlok aur 13 adhyaay. Mahishasura, Shumbh-Nishumbh aur Raktabija ke vadh ki katha. Chandi Path aur Chandi Homa ka aadhar. Navratri mein iska path sabse uttam maana jaata hai.",
    sample:"13 adhyaay — Medha Rishi ki katha se Surath-Vaishya ki katha tak" },
  { name:"Devi Kavacham", hi:"देवी कवचम्", type:"Stotram",
    about:"Maa ka 'kavach' (raksha-kavach) — jisme Devi apne sabhi roopon se bhakta ki raksha karne ka vachan deti hain. Iska paath shuruaat mein kiya jaata hai taaki path ke dauran raksha bani rahe.",
    sample:"ॐ अस्य श्रीचण्डिकावचन... नमश्चण्डिकायै" }
];

window.DURGA_DATA = {
  NAVRATRI_DATES, FOUR_NAVRATRI, NAVADURGA, SHLOKS,
  NAVRATRI_COLORS, SHAKTIPEETH, MANDIRS, SAMAGRI, SEASON_SCIENCE, STOTRAMS
};
