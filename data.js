/* ==========================================================================
   BONFIRE ADVENTURES — MASTER INVENTORY (DEMO DATA)
   --------------------------------------------------------------------------
   This is the single source of truth used by Packages, Find Your Trip,
   Budget, Destinations, Hotels & B&Bs, Deals, Compare and Global Search.
   ALL prices, availability, ratings and reviews below are clearly labelled
   SAMPLE DATA for wiring up the interface — replace with real Bonfire
   catalogue data / a live API before launch. Nothing here should be
   treated as a real price or booking guarantee.
   ========================================================================== */

const BONFIRE_DATA = (function () {

  // ---- Experience tags used across packages, hotels & the trip finder ----
  const EXPERIENCES = [
    "Beach", "Safari", "Adventure", "Romance", "Honeymoon", "Family",
    "Group", "Corporate", "Culture", "Nature", "Relaxation", "International"
  ];

  // ---- Explore Kenya categories -> destinations -------------------------
  // Each destination carries its own `images` array so Destination cards,
  // Destination pages, Explore Kenya, Search and Find Your Trip can all
  // reuse the same photos. `source: "uploaded"` = a real supplied photo of
  // that destination. `source: "fallback"` = no exact photo was supplied
  // yet, so an appropriate regional/experience photo is used temporarily —
  // swap it out the moment a real photo of that destination is supplied.
  const DESTINATIONS = [
    { id: "mombasa", name: "Mombasa", category: "Coast & Islands", region: "Coast", tagline: "Historic port city with island charm", experiences: ["Beach","Culture","Family"],
      images: [{ src: "assets/images/destinations/mombasa/mombasa-1.jpg", source: "fallback" }] },
    { id: "diani", name: "Diani", category: "Coast & Islands", region: "Coast", tagline: "Powder-white sand and the reef beyond", experiences: ["Beach","Romance","Honeymoon","Relaxation"],
      images: [{ src: "assets/images/destinations/diani/diani-1.jpg", source: "uploaded" }] },
    { id: "watamu", name: "Watamu", category: "Coast & Islands", region: "Coast", tagline: "Marine park bays and dhow sails", experiences: ["Beach","Nature","Relaxation"],
      images: [{ src: "assets/images/destinations/watamu/watamu-1.jpg", source: "fallback" }] },
    { id: "malindi", name: "Malindi", category: "Coast & Islands", region: "Coast", tagline: "Old town lanes meet ocean resorts", experiences: ["Beach","Culture","Family"],
      images: [{ src: "assets/images/destinations/malindi/malindi-1.jpg", source: "fallback" }] },
    { id: "lamu", name: "Lamu", category: "Coast & Islands", region: "Coast", tagline: "Swahili archipelago, car-free streets", experiences: ["Culture","Romance","Relaxation"],
      images: [{ src: "assets/images/destinations/lamu/lamu-1.jpg", source: "uploaded" }] },
    { id: "maasai-mara", name: "Maasai Mara", category: "Wildlife & Safari", region: "Rift Valley", tagline: "The Great Migration's home ground", experiences: ["Safari","Nature","Honeymoon"],
      images: [{ src: "assets/images/destinations/maasai-mara/maasai-mara-1.jpg", source: "fallback" }] },
    { id: "amboseli", name: "Amboseli", category: "Wildlife & Safari", region: "Rift Valley", tagline: "Elephant herds under Kilimanjaro", experiences: ["Safari","Nature","Family"],
      images: [{ src: "assets/images/destinations/amboseli/amboseli-1.jpg", source: "uploaded" }] },
    { id: "tsavo", name: "Tsavo", category: "Wildlife & Safari", region: "Coast", tagline: "Kenya's largest wilderness, red earth", experiences: ["Safari","Adventure","Nature"],
      images: [{ src: "assets/images/destinations/tsavo/tsavo-1.jpg", source: "uploaded" }] },
    { id: "samburu", name: "Samburu", category: "Wildlife & Safari", region: "Rift Valley", tagline: "Northern species and river-fed plains", experiences: ["Safari","Nature","Culture"],
      images: [{ src: "assets/images/destinations/samburu/samburu-1.jpg", source: "fallback" }] },
    { id: "nakuru", name: "Nakuru", category: "Lakes & Nature", region: "Rift Valley", tagline: "Soda lake edged with flamingos", experiences: ["Nature","Safari","Family"],
      images: [{ src: "assets/images/destinations/nakuru/nakuru-1.jpg", source: "uploaded" }, { src: "assets/images/destinations/nakuru/nakuru-2.jpg", source: "uploaded" }] },
    { id: "naivasha", name: "Naivasha", category: "Lakes & Nature", region: "Rift Valley", tagline: "Freshwater lake, hippos and cycling trails", experiences: ["Nature","Adventure","Family"],
      images: [{ src: "assets/images/destinations/naivasha/naivasha-1.jpg", source: "uploaded" }, { src: "assets/images/destinations/naivasha/naivasha-2.jpg", source: "uploaded" }] },
    { id: "nairobi", name: "Nairobi", category: "City & Culture", region: "Nairobi", tagline: "Capital city safaris and skyline dining", experiences: ["Culture","Corporate","Family"],
      images: [{ src: "assets/images/destinations/nairobi/nairobi-1.jpg", source: "uploaded" }] },
    { id: "nanyuki", name: "Nanyuki", category: "Mountains & Highlands", region: "Central", tagline: "Equator town at Mount Kenya's foot", experiences: ["Adventure","Nature","Family"],
      images: [{ src: "assets/images/destinations/nanyuki/nanyuki-1.jpg", source: "uploaded" }] },
    { id: "mount-kenya", name: "Mount Kenya", category: "Mountains & Highlands", region: "Central", tagline: "Africa's second-highest summit", experiences: ["Adventure","Nature"],
      images: [{ src: "assets/images/destinations/mount-kenya/mount-kenya-1.jpg", source: "uploaded" }] },
    { id: "hells-gate", name: "Hell's Gate", category: "Adventure", region: "Rift Valley", tagline: "Cycle and climb through a gorge park", experiences: ["Adventure","Nature","Family"],
      images: [{ src: "assets/images/destinations/hells-gate/hells-gate-1.jpg", source: "uploaded" }] },
    { id: "lake-elementaita", name: "Lake Elementaita", category: "Lakes & Nature", region: "Rift Valley", tagline: "Quiet soda lake escape near Nakuru", experiences: ["Nature","Relaxation","Romance"],
      images: [{ src: "assets/images/destinations/lake-elementaita/lake-elementaita-1.jpg", source: "fallback" }] },
    { id: "lake-victoria", name: "Lake Victoria", category: "Lakes & Nature", region: "Nyanza", tagline: "Africa's great lake at Kisumu's edge", experiences: ["Nature","Culture","Adventure"],
      images: [{ src: "assets/images/destinations/lake-victoria/lake-victoria-1.jpg", source: "uploaded" }] },
    { id: "kakamega", name: "Kakamega", category: "Lakes & Nature", region: "Western", tagline: "Kenya's last rainforest fragment", experiences: ["Nature","Adventure"],
      images: [{ src: "assets/images/destinations/kakamega/kakamega-1.jpg", source: "uploaded" }] },
    { id: "baringo", name: "Baringo", category: "Lakes & Nature", region: "Rift Valley", tagline: "Freshwater lake beneath dry cliffs", experiences: ["Nature","Adventure","Culture"],
      images: [{ src: "assets/images/destinations/baringo/baringo-1.jpg", source: "fallback" }] }
  ];

  const DESTINATION_CATEGORIES = [
    "Coast & Islands", "Wildlife & Safari", "Lakes & Nature", "Mountains & Highlands",
    "Adventure", "City & Culture", "Romance", "Family", "Weekend Getaways"
  ];

  // ---- Hotels & B&Bs region hierarchy: Region -> Town -> Areas ----------
  const REGIONS = {
    "Coast": {
      towns: {
        "Mombasa": ["Nyali", "Bamburi", "Shanzu", "CBD"],
        "Diani / Ukunda": ["Diani Beach", "Ukunda", "Tiwi"],
        "Kilifi": ["Kilifi Town", "Mtwapa"],
        "Watamu": ["Watamu Village", "Turtle Bay"],
        "Malindi": ["Malindi Town", "Casuarina"],
        "Lamu": ["Lamu Old Town", "Shela"],
        "Taita/Taveta": ["Voi", "Wundanyi"]
      }
    },
    "Rift Valley": {
      towns: {
        "Nakuru": ["Nakuru Town", "Lake Nakuru"],
        "Naivasha": ["Naivasha Town", "Lake Naivasha"],
        "Eldoret": ["Eldoret Town"],
        "Kericho": ["Kericho Town"],
        "Baringo": ["Kampi ya Samaki"],
        "Narok": ["Narok Town", "Maasai Mara"],
        "Iten": ["Iten Town"]
      }
    },
    "Nairobi": {
      towns: {
        "Nairobi City": ["Westlands", "Kilimani", "Karen", "Lavington", "Kileleshwa", "CBD", "Gigiri", "Runda", "Parklands", "Upper Hill", "South C", "South B", "Lang'ata", "Embakasi"]
      }
    },
    "Central": {
      towns: { "Nyeri": ["Nyeri Town"], "Nanyuki": ["Nanyuki Town"], "Murang'a": ["Murang'a Town"], "Thika": ["Thika Town"] }
    },
    "Western": {
      towns: { "Kakamega": ["Kakamega Town"], "Bungoma": ["Bungoma Town"], "Busia": ["Busia Town"] }
    },
    "Nyanza": {
      towns: { "Kisumu": ["Kisumu City", "Milimani", "Dunga"], "Homa Bay": ["Homa Bay Town"], "Migori": ["Migori Town"] }
    },
    "Eastern": {
      towns: { "Machakos": ["Machakos Town"], "Meru": ["Meru Town"], "Embu": ["Embu Town"], "Kitui": ["Kitui Town"] }
    },
    "North Eastern": {
      towns: { "Garissa": ["Garissa Town"], "Wajir": ["Wajir Town"], "Mandera": ["Mandera Town"] }
    }
  };

  const FEATURED_TOWNS = ["Nairobi City", "Nakuru", "Eldoret", "Kisumu", "Mombasa", "Diani / Ukunda"];

  // ---- Packages -----------------------------------------------------------
  const PACKAGES = [
    { id: "p1", name: "Diani Beach Escape", destinationId: "diani", region: "Coast", duration: "4 Days / 3 Nights", price: 32000, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Beach","Romance","Relaxation"], travellerType: ["Couples","Solo"], rating: 4.7, reviewCount: 128, image: "diani.jpg", desc: "Beachfront stay with reef snorkelling and a sunset dhow cruise.", inclusions: ["Return transfers","3 nights bed & breakfast","Sunset dhow cruise","Airport pickup"], exclusions: ["Flights","Travel insurance","Personal expenses"], accommodation: "3-star beach resort (demo)", transport: "Road transfer", meals: "Bed & breakfast" },
    { id: "p2", name: "Maasai Mara Migration Safari", destinationId: "maasai-mara", region: "Rift Valley", duration: "3 Days / 2 Nights", price: 68000, priceBasis: "per person", budgetBand: "40-70k", experiences: ["Safari","Nature","Honeymoon"], travellerType: ["Couples","Family","Group"], rating: 4.9, reviewCount: 214, image: "mara.jpg", desc: "Game drives across the plains during peak migration season.", inclusions: ["All game drives","Park fees","Full board","Road transfers"], exclusions: ["Balloon safari","Tips","Visa fees"], accommodation: "Tented safari camp (demo)", transport: "4x4 safari vehicle", meals: "Full board" },
    { id: "p3", name: "Amboseli Family Safari", destinationId: "amboseli", region: "Rift Valley", duration: "2 Days / 1 Night", price: 24500, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Safari","Family","Nature"], travellerType: ["Family"], rating: 4.5, reviewCount: 76, image: "amboseli.jpg", desc: "Short escape to see elephant herds against Kilimanjaro's backdrop.", inclusions: ["Game drives","Park fees","Full board"], exclusions: ["Flights","Tips"], accommodation: "Lodge, family rooms (demo)", transport: "Road transfer", meals: "Full board" },
    { id: "p4", name: "Watamu Marine & Relax", destinationId: "watamu", region: "Coast", duration: "5 Days / 4 Nights", price: 45000, priceBasis: "per person", budgetBand: "40-70k", experiences: ["Beach","Relaxation","Nature"], travellerType: ["Couples","Solo","Family"], rating: 4.6, reviewCount: 95, image: "watamu.jpg", desc: "Marine park snorkelling, spa time and Gede ruins excursion.", inclusions: ["4 nights half board","Marine park entry","Gede ruins tour"], exclusions: ["Diving certification","Spa treatments"], accommodation: "Beachfront cottages (demo)", transport: "Road transfer", meals: "Half board" },
    { id: "p5", name: "Lamu Culture & Sail", destinationId: "lamu", region: "Coast", duration: "3 Days / 2 Nights", price: 39000, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Culture","Romance","Relaxation"], travellerType: ["Couples","Solo"], rating: 4.8, reviewCount: 61, image: "lamu.jpg", desc: "Old Town walking tour and a traditional dhow sunset sail.", inclusions: ["Return flights not included","2 nights B&B","Dhow sail","Guided old town walk"], exclusions: ["Flights to Lamu","Lunches"], accommodation: "Swahili boutique guesthouse (demo)", transport: "Boat & foot", meals: "Bed & breakfast" },
    { id: "p6", name: "Nakuru & Elementaita Weekend", destinationId: "nakuru", region: "Rift Valley", duration: "2 Days / 1 Night", price: 16500, priceBasis: "per person", budgetBand: "under-20k", experiences: ["Nature","Family","Safari"], travellerType: ["Family","Group"], rating: 4.4, reviewCount: 54, image: "nakuru.jpg", desc: "Flamingo lake views and a relaxed rift valley weekend.", inclusions: ["Park fees","1 night full board","Road transfer"], exclusions: ["Bike hire"], accommodation: "Lakeside lodge (demo)", transport: "Road transfer", meals: "Full board" },
    { id: "p7", name: "Naivasha Adventure Weekend", destinationId: "naivasha", region: "Rift Valley", duration: "2 Days / 1 Night", price: 14000, priceBasis: "per person", budgetBand: "under-20k", experiences: ["Adventure","Nature","Family"], travellerType: ["Family","Group","Corporate"], rating: 4.3, reviewCount: 88, image: "naivasha.jpg", desc: "Cycling with giraffes at Hell's Gate and a boat ride on the lake.", inclusions: ["Cycling at Hell's Gate","Boat ride","1 night B&B"], exclusions: ["Bike damage waiver"], accommodation: "Lakeside camp (demo)", transport: "Road transfer", meals: "Bed & breakfast" },
    { id: "p8", name: "Nairobi City & Nature Break", destinationId: "nairobi", region: "Nairobi", duration: "1 Day", price: 9500, priceBasis: "per person", budgetBand: "under-20k", experiences: ["Culture","Corporate","Family"], travellerType: ["Solo","Corporate","Family"], rating: 4.2, reviewCount: 41, image: "nairobi.jpg", desc: "Nairobi National Park game drive plus the Giraffe Centre.", inclusions: ["Park fees","Giraffe Centre entry","Guide"], exclusions: ["Lunch"], accommodation: "Day trip, no accommodation", transport: "Road transfer", meals: "None" },
    { id: "p9", name: "Mount Kenya Highlands Trek", destinationId: "mount-kenya", region: "Central", duration: "4 Days / 3 Nights", price: 58000, priceBasis: "per person", budgetBand: "40-70k", experiences: ["Adventure","Nature"], travellerType: ["Solo","Group"], rating: 4.7, reviewCount: 33, image: "mtkenya.jpg", desc: "Guided ascent toward Point Lenana with mountain-hut stays.", inclusions: ["Guide & porter","Park fees","Hut accommodation","Full board on trail"], exclusions: ["Personal trekking gear","Tips"], accommodation: "Mountain huts (demo)", transport: "On foot", meals: "Full board" },
    { id: "p10", name: "Samburu Northern Safari", destinationId: "samburu", region: "Rift Valley", duration: "3 Days / 2 Nights", price: 72000, priceBasis: "per person", budgetBand: "70-100k", experiences: ["Safari","Nature","Culture"], travellerType: ["Couples","Group"], rating: 4.8, reviewCount: 29, image: "samburu.jpg", desc: "Track reticulated giraffe and Grevy's zebra along the Ewaso Nyiro.", inclusions: ["Game drives","Park fees","Full board","Cultural village visit"], exclusions: ["Flights","Tips"], accommodation: "Riverside tented camp (demo)", transport: "4x4 safari vehicle", meals: "Full board" },
    { id: "p11", name: "Tsavo Wilderness Safari", destinationId: "tsavo", region: "Coast", duration: "3 Days / 2 Nights", price: 54000, priceBasis: "per person", budgetBand: "40-70k", experiences: ["Safari","Adventure","Nature"], travellerType: ["Family","Group"], rating: 4.5, reviewCount: 47, image: "tsavo.jpg", desc: "Red-earth plains, lava flows and the Mzima Springs hippo pools.", inclusions: ["Game drives","Park fees","Full board"], exclusions: ["Tips","Drinks"], accommodation: "Safari lodge (demo)", transport: "4x4 safari vehicle", meals: "Full board" },
    { id: "p12", name: "Kisumu & Lake Victoria Discovery", destinationId: "lake-victoria", region: "Nyanza", duration: "2 Days / 1 Night", price: 19500, priceBasis: "per person", budgetBand: "under-20k", experiences: ["Culture","Nature","Adventure"], travellerType: ["Solo","Group"], rating: 4.3, reviewCount: 22, image: "kisumu.jpg", desc: "Lakeside city tour with a boat trip to Ndere Island.", inclusions: ["Boat trip","1 night B&B","City tour"], exclusions: ["Lunch"], accommodation: "Lakeside hotel (demo)", transport: "Road & boat", meals: "Bed & breakfast" },
    { id: "p13", name: "Kakamega Rainforest Walk", destinationId: "kakamega", region: "Western", duration: "2 Days / 1 Night", price: 17500, priceBasis: "per person", budgetBand: "under-20k", experiences: ["Nature","Adventure"], travellerType: ["Solo","Group"], rating: 4.4, reviewCount: 18, image: "kakamega.jpg", desc: "Guided walks through Kenya's last remnant rainforest.", inclusions: ["Forest guide","1 night B&B","Nature walks"], exclusions: ["Meals other than breakfast"], accommodation: "Forest guesthouse (demo)", transport: "Road transfer", meals: "Bed & breakfast" },
    { id: "p14", name: "Baringo Lakes & Cliffs", destinationId: "baringo", region: "Rift Valley", duration: "3 Days / 2 Nights", price: 27500, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Nature","Adventure","Culture"], travellerType: ["Group","Solo"], rating: 4.2, reviewCount: 15, image: "baringo.jpg", desc: "Boat trips, hot springs and Njemps cultural encounters.", inclusions: ["Boat trips","2 nights full board","Cultural visit"], exclusions: ["Tips"], accommodation: "Lakeside lodge (demo)", transport: "Road & boat", meals: "Full board" },
    { id: "p15", name: "Corporate Retreat — Naivasha", destinationId: "naivasha", region: "Rift Valley", duration: "2 Days / 1 Night", price: 22000, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Corporate","Group"], travellerType: ["Corporate","Group"], rating: 4.5, reviewCount: 12, image: "corporate.jpg", desc: "Conference facilities with team-building activities on the lake.", inclusions: ["Conference hall","1 night full board","Team-building session"], exclusions: ["AV equipment hire"], accommodation: "Resort with conference facilities (demo)", transport: "Road transfer", meals: "Full board" },
    { id: "p16", name: "Chama Group Getaway — Diani", destinationId: "diani", region: "Coast", duration: "3 Days / 2 Nights", price: 26000, priceBasis: "per person", budgetBand: "20-40k", experiences: ["Group","Beach","Family"], travellerType: ["Group"], rating: 4.6, reviewCount: 37, image: "chama.jpg", desc: "Group beach villa stay with a bonfire night on the sand.", inclusions: ["2 nights self-catering villa","Bonfire night","Group transfers"], exclusions: ["Meals"], accommodation: "Beach villa, shared (demo)", transport: "Road transfer", meals: "Self-catering" },
    { id: "p17", name: "Honeymoon in Watamu", destinationId: "watamu", region: "Coast", duration: "5 Days / 4 Nights", price: 89000, priceBasis: "per person", budgetBand: "70-100k", experiences: ["Honeymoon","Romance","Beach"], travellerType: ["Couples"], rating: 4.9, reviewCount: 44, image: "honeymoon.jpg", desc: "Private beach dinners, couples spa and a snorkel excursion.", inclusions: ["4 nights half board","Couples spa session","Private beach dinner"], exclusions: ["Flights"], accommodation: "Boutique beach resort (demo)", transport: "Road transfer", meals: "Half board" },
    { id: "p18", name: "International — Zanzibar Add-On", destinationId: "diani", region: "International", duration: "5 Days / 4 Nights", price: 115000, priceBasis: "per person", budgetBand: "100k+", experiences: ["International","Beach","Romance"], travellerType: ["Couples","Group"], rating: 4.7, reviewCount: 26, image: "zanzibar.jpg", desc: "Cross-border beach extension to Zanzibar's Stone Town and spice tours.", inclusions: ["Return ferry/flight not included","4 nights B&B","Spice tour"], exclusions: ["International flights","Visa"], accommodation: "Beach resort (demo)", transport: "Regional flight/ferry", meals: "Bed & breakfast" }
  ];

  // ---- Hotels & B&Bs -------------------------------------------------------
  const HOTELS = [
    { id: "h1", name: "Baharini Beach Villas", type: "Resort", region: "Coast", town: "Diani / Ukunda", area: "Diani Beach", rating: 4.6, reviewCount: 302, priceFrom: 9500, priceBasis: "per night", amenities: ["Pool","Wi-Fi","Beach access","Breakfast","Spa"], mealPlan: "Bed & breakfast", image: "h-diani.jpg", desc: "Ocean-view villas steps from the white sand of Diani." },
    { id: "h2", name: "Nyali Garden B&B", type: "B&B", region: "Coast", town: "Mombasa", area: "Nyali", rating: 4.3, reviewCount: 118, priceFrom: 5200, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Parking","Family friendly"], mealPlan: "Bed & breakfast", image: "h-nyali.jpg", desc: "Quiet garden compound close to Nyali's beaches and cafés." },
    { id: "h3", name: "Watamu Bay Lodge", type: "Lodge", region: "Coast", town: "Watamu", area: "Turtle Bay", rating: 4.7, reviewCount: 210, priceFrom: 11000, priceBasis: "per night", amenities: ["Pool","Beach access","Breakfast","Wi-Fi","Couples"], mealPlan: "Half board", image: "h-watamu.jpg", desc: "Barefoot-luxury bandas overlooking Watamu's marine park." },
    { id: "h4", name: "Malindi Palm Suites", type: "Hotel", region: "Coast", town: "Malindi", area: "Casuarina", rating: 4.2, reviewCount: 154, priceFrom: 7800, priceBasis: "per night", amenities: ["Pool","Wi-Fi","Parking","Business"], mealPlan: "Bed & breakfast", image: "h-malindi.jpg", desc: "Mid-town suites with easy reach of Malindi's old quarter." },
    { id: "h5", name: "Shela Swahili House", type: "B&B", region: "Coast", town: "Lamu", area: "Shela", rating: 4.8, reviewCount: 76, priceFrom: 13500, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Beach access","Couples"], mealPlan: "Bed & breakfast", image: "h-lamu.jpg", desc: "Restored coral-stone house on Shela's car-free lanes." },
    { id: "h6", name: "Mara Plains Tented Camp", type: "Tented Camp", region: "Rift Valley", town: "Narok", area: "Maasai Mara", rating: 4.9, reviewCount: 188, priceFrom: 32000, priceBasis: "per night", amenities: ["Full board","Wi-Fi","Game drives","Couples"], mealPlan: "Full board", image: "h-mara.jpg", desc: "Riverine tents on the migration route in the Mara." },
    { id: "h7", name: "Lake Naivasha Cottages", type: "Lodge", region: "Rift Valley", town: "Naivasha", area: "Lake Naivasha", rating: 4.4, reviewCount: 141, priceFrom: 8200, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Family friendly","Parking"], mealPlan: "Bed & breakfast", image: "h-naivasha.jpg", desc: "Lakefront cottages with resident hippo pods offshore." },
    { id: "h8", name: "Nakuru Flamingo Inn", type: "Hotel", region: "Rift Valley", town: "Nakuru", area: "Nakuru Town", rating: 4.1, reviewCount: 96, priceFrom: 6100, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Parking","Business"], mealPlan: "Bed & breakfast", image: "h-nakuru.jpg", desc: "Convenient in-town base for Lake Nakuru game drives." },
    { id: "h9", name: "Eldoret Highland Hotel", type: "Hotel", region: "Rift Valley", town: "Eldoret", area: "Eldoret Town", rating: 4.0, reviewCount: 68, priceFrom: 5600, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Business","Gym"], mealPlan: "Bed & breakfast", image: "h-eldoret.jpg", desc: "Business-friendly stay in Kenya's highland running capital." },
    { id: "h10", name: "Westlands Loft Apartments", type: "Apartment", region: "Nairobi", town: "Nairobi City", area: "Westlands", rating: 4.5, reviewCount: 233, priceFrom: 9200, priceBasis: "per night", amenities: ["Wi-Fi","Gym","Business","Parking"], mealPlan: "Self-catering", image: "h-westlands.jpg", desc: "Serviced apartments near Nairobi's Westlands nightlife." },
    { id: "h11", name: "Karen Garden Boutique Hotel", type: "Boutique Hotel", region: "Nairobi", town: "Nairobi City", area: "Karen", rating: 4.7, reviewCount: 145, priceFrom: 14500, priceBasis: "per night", amenities: ["Pool","Wi-Fi","Breakfast","Couples","Spa"], mealPlan: "Bed & breakfast", image: "h-karen.jpg", desc: "Leafy Karen compound close to the Giraffe Centre." },
    { id: "h12", name: "CBD Business Suites", type: "Hotel", region: "Nairobi", town: "Nairobi City", area: "CBD", rating: 4.0, reviewCount: 310, priceFrom: 6800, priceBasis: "per night", amenities: ["Wi-Fi","Business","Gym","Parking"], mealPlan: "Bed & breakfast", image: "h-cbd.jpg", desc: "Central address for corporate travellers and conferences." },
    { id: "h13", name: "Kisumu Lakeview Hotel", type: "Hotel", region: "Nyanza", town: "Kisumu", area: "Milimani", rating: 4.2, reviewCount: 87, priceFrom: 6400, priceBasis: "per night", amenities: ["Pool","Wi-Fi","Breakfast","Business"], mealPlan: "Bed & breakfast", image: "h-kisumu.jpg", desc: "Views over Lake Victoria from Kisumu's Milimani hill." },
    { id: "h14", name: "Nanyuki Equator Lodge", type: "Lodge", region: "Central", town: "Nanyuki", area: "Nanyuki Town", rating: 4.5, reviewCount: 59, priceFrom: 8700, priceBasis: "per night", amenities: ["Wi-Fi","Breakfast","Family friendly","Nature"], mealPlan: "Bed & breakfast", image: "h-nanyuki.jpg", desc: "Foothill base for Mount Kenya treks and conservancy drives." }
  ];

  // ---- Deals (each deal expires — expired deals must not show as active) --
  const DEALS = [
    { id: "d1", title: "Diani Beach Escape — Early Bird", category: "Hot Deals", packageId: "p1", originalPrice: 38000, dealPrice: 32000, validUntil: "2026-09-30", travelPeriod: "Sep – Oct 2026", inclusions: ["3 nights B&B","Dhow cruise","Transfers"] },
    { id: "d2", title: "Maasai Mara Weekend Flash Sale", category: "Last-Minute", packageId: "p2", originalPrice: 79000, dealPrice: 68000, validUntil: "2026-08-24", travelPeriod: "Aug 2026 only", inclusions: ["Game drives","Full board","Transfers"] },
    { id: "d3", title: "Nakuru Weekender", category: "Weekend", packageId: "p6", originalPrice: 19500, dealPrice: 16500, validUntil: "2026-12-20", travelPeriod: "Any weekend, 2026", inclusions: ["1 night full board","Park fees"] },
    { id: "d4", title: "Festive Season — Watamu Honeymoon", category: "Seasonal", packageId: "p17", originalPrice: 102000, dealPrice: 89000, validUntil: "2026-12-15", travelPeriod: "Dec 2026", inclusions: ["4 nights half board","Couples spa"] },
    { id: "d5", title: "Holiday Family Amboseli", category: "Holiday", packageId: "p3", originalPrice: 29500, dealPrice: 24500, validUntil: "2026-09-05", travelPeriod: "School holidays 2026", inclusions: ["Game drives","Full board"] },
    { id: "d6", title: "Karen Boutique Hotel Getaway", category: "Hotel & B&B", hotelId: "h11", originalPrice: 17500, dealPrice: 14500, validUntil: "2026-10-31", travelPeriod: "Sep – Oct 2026", inclusions: ["B&B rate","Late checkout"] },
    { id: "d7", title: "SGR + Diani Combo (Advisor Assisted)", category: "SGR", packageId: "p1", originalPrice: 41000, dealPrice: 35500, validUntil: "2026-11-30", travelPeriod: "Sep – Nov 2026", inclusions: ["SGR ticket coordination","3 nights B&B"] },
    { id: "d8", title: "Family Naivasha Adventure", category: "Family", packageId: "p7", originalPrice: 17000, dealPrice: 14000, validUntil: "2026-09-15", travelPeriod: "Aug – Sep 2026", inclusions: ["Cycling","Boat ride","B&B"] },
    { id: "d9", title: "Group Diani Bonfire Weekend", category: "Group", packageId: "p16", originalPrice: 31000, dealPrice: 26000, validUntil: "2026-10-10", travelPeriod: "Sep – Oct 2026", inclusions: ["Villa stay","Bonfire night"] },
    { id: "d10", title: "Corporate Naivasha Retreat", category: "Corporate", packageId: "p15", originalPrice: 26500, dealPrice: 22000, validUntil: "2026-09-25", travelPeriod: "Weekdays, Sep 2026", inclusions: ["Conference hall","Full board"] },
    { id: "d11", title: "Zanzibar Extension Offer", category: "International", packageId: "p18", originalPrice: 132000, dealPrice: 115000, validUntil: "2026-11-01", travelPeriod: "Sep – Nov 2026", inclusions: ["Spice tour","4 nights B&B"] },
    { id: "d12", title: "Winter Sale — Nairobi Day Trip", category: "Kenya Deals", packageId: "p8", originalPrice: 12000, dealPrice: 9500, validUntil: "2026-08-20", travelPeriod: "Aug 2026", inclusions: ["Park fees","Giraffe Centre"] },
    // Intentionally expired demo deal — used to test the "expired" empty state
    { id: "d13", title: "Easter Diani Splash (Expired)", category: "Seasonal", packageId: "p1", originalPrice: 30000, dealPrice: 24000, validUntil: "2026-04-01", travelPeriod: "Mar – Apr 2026", inclusions: ["3 nights B&B"] }
  ];

  // ---- Reviews (sample, structured for later replacement) -----------------
  const REVIEWS = [
    { id: "r1", name: "Achieng O.", rating: 5, text: "Our Mara trip was seamless from booking to the last game drive. The advisor answered every WhatsApp message fast.", context: "Maasai Mara Migration Safari" },
    { id: "r2", name: "Brian K.", rating: 5, text: "Diani villa was exactly as pictured and the bonfire night with our chama was the highlight of the year.", context: "Chama Group Getaway — Diani" },
    { id: "r3", name: "Faith M.", rating: 4, text: "Great value weekend in Naivasha, cycling with the giraffes was unforgettable for the kids.", context: "Naivasha Adventure Weekend" },
    { id: "r4", name: "Peter N.", rating: 5, text: "Lamu felt like stepping into another century. Loved the dhow sunset sail and the old town walk.", context: "Lamu Culture & Sail" },
    { id: "r5", name: "Grace W.", rating: 5, text: "Booked our honeymoon through Bonfire and the private beach dinner in Watamu was worth every shilling.", context: "Honeymoon in Watamu" }
  ];

  const BUDGET_BANDS = [
    { id: "under-20k", label: "Under KSh 20,000", min: 0, max: 20000 },
    { id: "20-40k", label: "KSh 20,000 – 40,000", min: 20000, max: 40000 },
    { id: "40-70k", label: "KSh 40,000 – 70,000", min: 40000, max: 70000 },
    { id: "70-100k", label: "KSh 70,000 – 100,000", min: 70000, max: 100000 },
    { id: "100k+", label: "KSh 100,000+", min: 100000, max: Infinity }
  ];

  function formatKES(amount) {
    return "KSh " + Number(amount).toLocaleString("en-KE");
  }

  function isDealActive(deal, today) {
    today = today || new Date();
    return new Date(deal.validUntil) >= today;
  }

  function getActiveDeals() {
    const today = new Date();
    return DEALS.filter(function (d) { return isDealActive(d, today); });
  }

  function getPackageById(id) { return PACKAGES.find(function (p) { return p.id === id; }); }
  function getHotelById(id) { return HOTELS.find(function (h) { return h.id === id; }); }
  function getDestinationById(id) { return DESTINATIONS.find(function (d) { return d.id === id; }); }

  return {
    EXPERIENCES: EXPERIENCES,
    DESTINATIONS: DESTINATIONS,
    DESTINATION_CATEGORIES: DESTINATION_CATEGORIES,
    REGIONS: REGIONS,
    FEATURED_TOWNS: FEATURED_TOWNS,
    PACKAGES: PACKAGES,
    HOTELS: HOTELS,
    DEALS: DEALS,
    REVIEWS: REVIEWS,
    BUDGET_BANDS: BUDGET_BANDS,
    formatKES: formatKES,
    isDealActive: isDealActive,
    getActiveDeals: getActiveDeals,
    getPackageById: getPackageById,
    getHotelById: getHotelById,
    getDestinationById: getDestinationById
  };
})();
