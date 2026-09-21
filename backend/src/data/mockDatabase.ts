import {
  IDestination,
  ITour,
  IBooking,
  ILead,
  IDriver,
  IVehicle,
  ITrip
} from '../../../shared/types';

export interface IMockDatabase {
  destinations: IDestination[];
  tours: ITour[];
  bookings: IBooking[];
  leads: ILead[];
  drivers: IDriver[];
  vehicles: IVehicle[];
  trips: ITrip[];
  maintenance: any[];
  fuelRecords: any[];
  campaigns: any[];
  reviews: any[];
  faqs: any[];
}

export const mockDatabase: IMockDatabase = {
  destinations: [
    {
      id: "dest-1",
      name: "Mysore & Srirangapatna",
      slug: "mysore-srirangapatna",
      tagline: "The City of Royal Palaces and Cultural Heritage",
      description: "Experience the royal opulence of the Mysore Palace, serene Brindavan Gardens, Chamundi Hills, and the historical fortress of Tipu Sultan in Srirangapatna.",
      heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Karnataka, India",
      highlights: ["Mysore Palace Illumination", "Chamundeshwari Temple", "Brindavan Gardens Musical Fountain", "Tipu Sultan Summer Palace"],
      bestTimeToVisit: "October to March",
      travelTips: "Best visited on weekends when the grand palace is lit with over 97,000 bulbs.",
      isFeatured: true,
      isActive: true,
      toursCount: 4,
      startingPrice: "₹4,999"
    },
    {
      id: "dest-2",
      name: "Coorg (Kodagu)",
      slug: "coorg-kodagu",
      tagline: "The Scotland of India & Coffee Country",
      description: "Immerse in misty hills, emerald coffee and spice plantations, breathtaking Abbey and Iruppu waterfalls, and the tranquil Golden Temple at Bylakuppe Tibetan settlement.",
      heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Karnataka, India",
      highlights: ["Raja's Seat Sunset", "Abbey Falls", "Dubare Elephant Camp", "Bylakuppe Golden Temple", "Mandalpatti 4x4 Jeep Safari"],
      bestTimeToVisit: "September to June",
      travelTips: "Try authentic Kodava cuisine like Pandi Curry and freshly roasted Arabica coffee.",
      isFeatured: true,
      isActive: true,
      toursCount: 5,
      startingPrice: "₹7,499"
    },
    {
      id: "dest-3",
      name: "Ooty & Nilgiris",
      slug: "ooty-nilgiris",
      tagline: "Queen of the Blue Mountains",
      description: "Traverse rolling tea gardens, scenic Nilgiri Mountain Toy Train rides, peaceful Ooty Lake, Pykara Waterfalls, and the panoramic vantage point of Doddabetta Peak.",
      heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Tamil Nadu, India",
      highlights: ["UNESCO Toy Train Ride", "Doddabetta Peak View", "Botanical & Rose Gardens", "Pykara Lake Boating", "Coonoor Tea Estate Walk"],
      bestTimeToVisit: "Throughout the year",
      travelTips: "Advance booking is recommended for the heritage toy train ride from Mettupalayam to Ooty.",
      isFeatured: true,
      isActive: true,
      toursCount: 4,
      startingPrice: "₹8,999"
    },
    {
      id: "dest-4",
      name: "Chikmagalur",
      slug: "chikmagalur",
      tagline: "The Birthplace of Indian Coffee & Mountain Treks",
      description: "Marvel at the majestic Mullayanagiri Peak (Karnataka's highest point), Baba Budangiri, enchanting Hebbe Falls, and peaceful hillside coffee estate homestays.",
      heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Karnataka, India",
      highlights: ["Mullayanagiri Trek", "Baba Budangiri & Manikyadhara", "Hebbe Falls Jeep Ride", "Coffee Plantation Walk", "Bhadra Wildlife Sanctuary"],
      bestTimeToVisit: "September to May",
      travelTips: "Jeep rides to Hebbe Falls require early morning starts for optimal sightings.",
      isFeatured: true,
      isActive: true,
      toursCount: 3,
      startingPrice: "₹6,999"
    },
    {
      id: "dest-5",
      name: "Hampi & Badami Heritage",
      slug: "hampi-badami",
      tagline: "UNESCO World Heritage of Vijayanagara Splendor",
      description: "Step back in time among monumental granite boulders, monolithic statues, Virupaksha Temple, the famed Stone Chariot, and the ancient Chalukyan rock-cut cave temples of Badami.",
      heroImage: "https://images.unsplash.com/photo-1600100397608-f010e42e47e3?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Karnataka, India",
      highlights: ["Vittala Temple & Stone Chariot", "Virupaksha Temple", "Lotus Mahal & Elephant Stables", "Badami Rock-cut Caves", "Tungabhadra River Coracle Ride"],
      bestTimeToVisit: "October to March",
      travelTips: "Sunset from Matanga Hill or Hemakuta Hill is breathtaking for photography.",
      isFeatured: true,
      isActive: true,
      toursCount: 3,
      startingPrice: "₹9,499"
    },
    {
      id: "dest-6",
      name: "Kashmir Paradise Valley",
      slug: "kashmir-paradise",
      tagline: "Heaven on Earth - Srinagar, Gulmarg & Pahalgam",
      description: "Glide on Dal Lake in traditional Shikaras, stay in luxury heritage houseboats, experience the snow-capped gondola at Gulmarg, and stroll through the Betaab Valley.",
      heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Jammu & Kashmir, India",
      highlights: ["Dal Lake Shikara & Houseboat", "Gulmarg Gondola Phase 1 & 2", "Pahalgam Betaab & Aru Valley", "Mughal Gardens of Srinagar", "Sonamarg Thajiwas Glacier"],
      bestTimeToVisit: "March to October (Summer) & Dec-Feb (Snow)",
      travelTips: "Enjoy traditional Wazwan dinner and pure saffron Kehwa tea.",
      isFeatured: true,
      isActive: true,
      toursCount: 4,
      startingPrice: "₹24,999"
    },
    {
      id: "dest-7",
      name: "Kerala Backwaters & Munnar",
      slug: "kerala-backwaters",
      tagline: "God's Own Country - Tea Valleys & Houseboats",
      description: "Cruises through tranquil palm-fringed Alleppey backwaters on private Kettuvallam houseboats, endless Munnar tea gardens, and wildlife safaris in Thekkady Periyar Lake.",
      heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Kerala, India",
      highlights: ["Alleppey Private Houseboat Cruise", "Munnar Tea Plantations & Eravikulam", "Thekkady Spice Garden & Periyar Safari", "Kovalam Beach Sunset", "Kathakali Cultural Show"],
      bestTimeToVisit: "September to April",
      travelTips: "Overnight houseboat stay includes authentic Kerala Karimeen fish curry and sadhya meals.",
      isFeatured: true,
      isActive: true,
      toursCount: 4,
      startingPrice: "₹16,499"
    },
    {
      id: "dest-8",
      name: "Himachal & Manali Peaks",
      slug: "himachal-manali",
      tagline: "Valley of the Gods & Snow Adventures",
      description: "Explore the snow corridor of Atal Tunnel and Rohtang Pass, paragliding in Solang Valley, hot springs of Manikaran, and the colonial charm of Shimla Mall Road.",
      heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Himachal Pradesh, India",
      highlights: ["Solang Valley Paragliding", "Atal Tunnel & Sissu Valley", "Rohtang Pass Snow Point", "Hadimba Temple", "Kasol & Manikaran Valley"],
      bestTimeToVisit: "October to June",
      travelTips: "Warm clothing and sturdy boots are essential for high altitude excursions.",
      isFeatured: true,
      isActive: true,
      toursCount: 3,
      startingPrice: "₹18,999"
    },
    {
      id: "dest-9",
      name: "Goa Coastal Escapes",
      slug: "goa-coastal",
      tagline: "Golden Sunsets, Heritage Forts & Ocean Breezes",
      description: "Pristine white sand beaches of South Goa, historic Portuguese churches of Old Goa, thrilling water sports at Calangute, and luxury catamaran yacht cruises on the Mandovi River.",
      heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "Goa, India",
      highlights: ["Aguada & Chapora Forts", "Basilica of Bom Jesus", "Dudhsagar Waterfalls Trek", "Palolem & Morjim Beaches", "Mandovi River Sunset Cruise"],
      bestTimeToVisit: "October to April",
      travelTips: "Opt for private chauffeur-driven vehicles for seamless beach-hopping across North and South Goa.",
      isFeatured: true,
      isActive: true,
      toursCount: 3,
      startingPrice: "₹11,999"
    },
    {
      id: "dest-10",
      name: "Dubai & Abu Dhabi Royal Tour",
      slug: "dubai-abu-dhabi",
      tagline: "Futuristic Wonderlands and Arabian Nights",
      description: "Breathtaking Burj Khalifa 148th floor views, thrilling desert dune bashing with barbecue dinner, Palm Jumeirah luxury yacht rides, and the majestic Sheikh Zayed Grand Mosque.",
      heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      stateOrCountry: "UAE (International)",
      highlights: ["Burj Khalifa & Dubai Mall Fountain", "4x4 Desert Safari & Belly Dance", "Sheikh Zayed Grand Mosque Abu Dhabi", "Museum of the Future", "Marina Dhow Cruise Dinner"],
      bestTimeToVisit: "November to March",
      travelTips: "Modest attire is required when visiting the Sheikh Zayed Grand Mosque.",
      isFeatured: true,
      isActive: true,
      toursCount: 2,
      startingPrice: "₹45,999"
    }
  ],

  tours: [
    {
      id: "tour-1",
      tourCode: "SCT-KAR-01",
      title: "Royal Mysore & Coorg Coffee Hills Odyssey",
      slug: "royal-mysore-coorg-coffee-hills-odyssey",
      destinationName: "Mysore & Coorg",
      destinationSlug: "mysore-srirangapatna",
      tourType: "FAMILY",
      durationDays: 4,
      durationNights: 3,
      startingPrice: 13999,
      originalPrice: 16999,
      maxTravellers: 12,
      badge: "BESTSELLER",
      overview: "An enchanting 4-day private holiday covering royal palaces, historic forts, misty coffee plantations, waterfalls, and the golden Tibetan monastery with premium vehicle transport.",
      heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Bangalore to Mysore & Royal Heritage Tour",
          description: "Morning pickup from Bangalore residence/airport in private sanitized AC vehicle. Drive to Mysore via Srirangapatna. Check in to luxury hotel, visit Mysore Palace and Chamundi Hills. Evening musical fountain at Brindavan Gardens.",
          stay: "Royal Orchid Metropole / Grand Mercure Mysore",
          meals: "Breakfast, Lunch & Dinner",
          activities: ["Srirangapatna Ranganathaswamy Temple", "Mysore Palace Royal Tour", "Chamundeshwari Darshan", "Brindavan Gardens Fountain"]
        },
        {
          day: 2,
          title: "Mysore to Coorg via Bylakuppe Tibetan Monastery",
          description: "Scenic drive from Mysore into the western ghats of Coorg. Visit the world-famous Namdroling Monastery (Golden Temple) and Dubare Elephant Camp along the Cauvery River.",
          stay: "Heritage Resort / Club Mahindra Madikeri",
          meals: "Breakfast & Authentic Kodava Dinner",
          activities: ["Golden Temple Tibetan Monks Prayer", "Dubare Elephant Interaction", "Kaveri River Walk"]
        },
        {
          day: 3,
          title: "Abbey Falls, Raja's Seat & Mandalpatti 4x4 Safari",
          description: "Explore lush coffee and cardamom plantations, witness roaring Abbey Falls, visit Omkareshwara Temple, and take a thrilling 4x4 open jeep safari to Mandalpatti peak for cloud sunset views.",
          stay: "Heritage Resort / Club Mahindra Madikeri",
          meals: "Breakfast & Dinner",
          activities: ["Mandalpatti Peak Jeep Safari", "Abbey Falls Photography", "Raja's Seat Sunset", "Madikeri Fort"]
        },
        {
          day: 4,
          title: "Coffee Plantation Tour & Return to Bangalore",
          description: "Morning private guided coffee estate tasting tour. Shop for genuine spices, homemade chocolates, and honey. Relaxing drive back to Bangalore with drop at your doorstep.",
          stay: "Return Journey",
          meals: "Breakfast & South Indian Traditional Lunch",
          activities: ["Coffee Tasting Session", "Spice & Souvenir Shopping", "Safe Drop to Bangalore"]
        }
      ],
      inclusions: [
        "Dedicated AC Chauffeur Driven Vehicle (Innova Crysta / Tempo Traveller)",
        "3 Nights Accommodation in 4-Star / Luxury Heritage Resorts",
        "Daily Buffet Breakfast and Curated Dinners",
        "All Tolls, Parking, Inter-State Permits and Fuel Charges Included",
        "Experienced Professional Chauffeur with Local Sightseeing Knowledge",
        "Mandalpatti 4x4 Jeep Safari Passes Included"
      ],
      exclusions: [
        "Monuments Entry Tickets and Camera Fees",
        "Personal Expenses, Laundry, and Tips",
        "Airfare or Train Tickets to/from Bangalore"
      ],
      isFeatured: true,
      isActive: true,
      rating: 4.9,
      reviewsCount: 142
    },
    {
      id: "tour-2",
      tourCode: "SCT-NIL-02",
      title: "Misty Ooty & Coonoor Nilgiri Mountain Express",
      slug: "misty-ooty-coonoor-nilgiri-mountain-express",
      destinationName: "Ooty & Nilgiris",
      destinationSlug: "ooty-nilgiris",
      tourType: "HONEYMOON",
      durationDays: 3,
      durationNights: 2,
      startingPrice: 11499,
      originalPrice: 13999,
      maxTravellers: 8,
      badge: "POPULAR",
      overview: "A romantic 3-day getaway to the Queen of Hill Stations featuring heritage Nilgiri toy train rides, botanical walks, tea factory tasting, and Pykara lake boating.",
      heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Bangalore to Ooty via Bandipur Tiger Reserve",
          description: "Early morning drive through Bandipur and Mudumalai forests with wildlife spotting opportunities. Climb 36 hairpin bends to Ooty. Check in and evening stroll at Ooty Lake.",
          stay: "Savoy - IHCL SeleQtions / Gem Park Ooty",
          meals: "Breakfast & Dinner",
          activities: ["Bandipur Forest Scenic Drive", "Ooty Lake Boating", "Botanical Gardens"]
        },
        {
          day: 2,
          title: "Heritage Toy Train to Coonoor & Sim's Park",
          description: "Board the iconic UNESCO Nilgiri Mountain Railway toy train to Coonoor. Visit Dolphin's Nose, Lamb's Rock, Sim's Park, and high-altitude tea factory with tasting.",
          stay: "Savoy - IHCL SeleQtions / Gem Park Ooty",
          meals: "Breakfast & Candlelight Dinner",
          activities: ["UNESCO Toy Train Experience", "Dolphin's Nose Viewpoint", "Tea Factory & Chocolate Museum"]
        },
        {
          day: 3,
          title: "Doddabetta Peak, Pykara Falls & Return",
          description: "Visit Doddabetta peak for panoramic vistas of the Nilgiri hills. Enjoy Pykara waterfalls and speed boat ride before starting the return drive to Bangalore.",
          stay: "Return Journey",
          meals: "Breakfast & Lunch",
          activities: ["Doddabetta Peak Observatory", "Pykara Lake Speedboat", "Return to Bangalore"]
        }
      ],
      inclusions: [
        "Private AC Chauffeur Driven Innova / Sedan",
        "2 Nights Luxury Hill Resort Stay",
        "Daily Breakfast and Specially Arranged Candlelight Dinner",
        "Nilgiri Toy Train Reserved Tickets",
        "All Toll, Fuel, Parking, Driver Bata included"
      ],
      exclusions: [
        "Boat ride charges at Pykara / Ooty lake",
        "Anything not mentioned in inclusions"
      ],
      isFeatured: true,
      isActive: true,
      rating: 4.8,
      reviewsCount: 98
    },
    {
      id: "tour-3",
      tourCode: "SCT-KER-03",
      title: "God's Own Kerala: Munnar Hills & Alleppey Houseboat",
      slug: "gods-own-kerala-munnar-alleppey-houseboat",
      destinationName: "Kerala Backwaters",
      destinationSlug: "kerala-backwaters",
      tourType: "FAMILY",
      durationDays: 5,
      durationNights: 4,
      startingPrice: 22499,
      originalPrice: 27999,
      maxTravellers: 10,
      badge: "SIGNATURE",
      overview: "5 Days of scenic bliss covering Cochin heritage, Munnar tea hills, Eravikulam National Park, Thekkady spice plantations, and an unforgettable private luxury houseboat cruise in Alleppey.",
      heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Cochin Arrival & Scenic Transfer to Munnar",
          description: "Pickup from Cochin Airport / Railway station. Drive through Cheeyappara and Valara waterfalls to Munnar. Evening at leisure in the midst of tea gardens.",
          stay: "Fragrant Nature / Elixir Hills Munnar",
          meals: "Dinner",
          activities: ["Cheeyappara Waterfalls Stop", "Tea Garden Sunset Walk"]
        },
        {
          day: 2,
          title: "Munnar Tea Estates & Eravikulam National Park",
          description: "Full day sightseeing in Munnar. Visit Eravikulam National Park (home to the Nilgiri Tahr), Mattupetty Dam, Echo Point, and the Tata Tea Museum.",
          stay: "Fragrant Nature / Elixir Hills Munnar",
          meals: "Breakfast & Dinner",
          activities: ["Nilgiri Tahr Safari", "Mattupetty Dam Boating", "Tea Museum & Processing Tour"]
        },
        {
          day: 3,
          title: "Munnar to Thekkady Periyar Wildlife Sanctuary",
          description: "Drive to Thekkady. Experience a guided spice plantation walk, evening Periyar lake boat safari to spot elephants and bisons, followed by an ancient Kalaripayattu martial arts show.",
          stay: "Elephant Court / Spice Village Thekkady",
          meals: "Breakfast & Dinner",
          activities: ["Periyar Lake Boat Safari", "Spice Plantation Guided Tour", "Kalaripayattu Martial Arts Show"]
        },
        {
          day: 4,
          title: "Thekkady to Alleppey Private Houseboat Cruise",
          description: "Drive to Alleppey and embark on your private air-conditioned luxury Kettuvallam houseboat. Cruise through narrow canals, paddy fields, and lagoons with fresh onboard meals.",
          stay: "Private Luxury AC Houseboat",
          meals: "Breakfast, Traditional Kerala Lunch, Evening Snacks & Dinner",
          activities: ["Private Backwaters Cruise", "Village Life Experience", "Sunset over Vembanad Lake"]
        },
        {
          day: 5,
          title: "Alleppey to Cochin Sightseeing & Departure",
          description: "Disembark after breakfast. Visit Fort Kochi, Chinese Fishing Nets, and Jewish Synagogue before airport drop.",
          stay: "Departure",
          meals: "Breakfast",
          activities: ["Fort Kochi Heritage Walk", "Chinese Fishing Nets", "Airport Transfer"]
        }
      ],
      inclusions: [
        "All transfers & sightseeing by private dedicated AC vehicle",
        "3 Nights 4-Star Resort stay + 1 Night Private Houseboat stay",
        "All meals during the Houseboat stay",
        "Breakfast & Dinner at all resorts",
        "Driver allowance, interstate permits, toll and parking"
      ],
      exclusions: [
        "Airfare to/from Cochin",
        "Entry fees to monuments and safari rides"
      ],
      isFeatured: true,
      isActive: true,
      rating: 5.0,
      reviewsCount: 189
    },
    {
      id: "tour-4",
      tourCode: "SCT-KAS-04",
      title: "Kashmir Crown: Dal Lake, Gulmarg Snow & Pahalgam Valley",
      slug: "kashmir-crown-dal-lake-gulmarg-pahalgam",
      destinationName: "Kashmir Valley",
      destinationSlug: "kashmir-paradise",
      tourType: "LUXURY",
      durationDays: 6,
      durationNights: 5,
      startingPrice: 34999,
      originalPrice: 42999,
      maxTravellers: 8,
      badge: "PREMIUM LUXURY",
      overview: "Experience paradise with 5 nights of sheer luxury. Includes luxury houseboat stay on Dal Lake, Phase 1 & 2 Gulmarg Gondola rides, pony treks in Betaab Valley, and saffron farms.",
      heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Srinagar Arrival & Dal Lake Luxury Shikara Sunset",
          description: "VIP reception at Srinagar Airport. Transfer to luxury heritage houseboat on Dal Lake. Enjoy a relaxing sunset Shikara ride across floating gardens and Char Chinar.",
          stay: "Mascot Luxury Heritage Houseboat / The LaLiT Grand Palace",
          meals: "Authentic Kashmiri Wazwan Dinner",
          activities: ["VIP Airport Transfer", "Dal Lake Shikara Sunset Ride", "Floating Flower & Spice Market"]
        },
        {
          day: 2,
          title: "Srinagar to Gulmarg: Meadow of Flowers & Gondola Ride",
          description: "Scenic transfer to Gulmarg. Take the world's highest cable car (Gondola Phase 1 & 2) up to Mt. Apharwat at 13,780 feet for breathtaking snow panoramas.",
          stay: "The Khyber Himalayan Resort & Spa / Grand Mumtaz Gulmarg",
          meals: "Breakfast & Dinner",
          activities: ["Gulmarg Gondola Phase 1 & 2 Cable Car", "Snow Sledging & Skiing Excursion", "St. Mary's Church"]
        },
        {
          day: 3,
          title: "Gulmarg to Pahalgam: Valley of Shepherds via Saffron Fields",
          description: "Drive to Pahalgam. En route visit saffron fields of Pampore and historic Awantipora ruins. Evening walk along the gushing Lidder River.",
          stay: "Pahalgam Hotel / Pine N Peak IHCL",
          meals: "Breakfast & Dinner",
          activities: ["Pampore Saffron Farms", "Awantipora Sun Temple Ruins", "Lidder River Nature Walk"]
        },
        {
          day: 4,
          title: "Pahalgam Excursion: Aru, Betaab & Chandanwari Valleys",
          description: "Full day excursion in local union 4x4 vehicles to scenic Betaab Valley, Aru Valley and Chandanwari (starting point of Amarnath Yatra).",
          stay: "Pahalgam Hotel / Pine N Peak IHCL",
          meals: "Breakfast & Dinner",
          activities: ["Betaab Valley Exploration", "Aru Valley Eco Trek", "Chandanwari Snow Bridge"]
        },
        {
          day: 5,
          title: "Pahalgam to Srinagar & Mughal Heritage Gardens",
          description: "Return to Srinagar. Visit UNESCO nominee Mughal Gardens: Nishat Bagh, Shalimar Bagh, Chashme Shahi, and Shankaracharya Temple hilltop.",
          stay: "The LaLiT Grand Palace Srinagar",
          meals: "Breakfast & Farewell Dinner",
          activities: ["Shalimar & Nishat Bagh Gardens", "Shankaracharya Temple View", "Old City Heritage Walk"]
        },
        {
          day: 6,
          title: "Souvenir Shopping & Airport Departure",
          description: "Morning shopping for authentic Pashmina shawls, Kashmiri dry fruits, and walnut wood carvings. Transfer to airport for flight home.",
          stay: "Departure",
          meals: "Breakfast",
          activities: ["Pashmina & Saffron Shopping", "Airport Drop"]
        }
      ],
      inclusions: [
        "5 Nights Luxury 5-Star / Heritage Houseboat stay",
        "Dedicated VIP Chauffeur Driven Toyota Innova Crysta throughout",
        "Daily Buffet Breakfast and Royal 4-Course Dinners",
        "Dal Lake Sunset Shikara Ride Included",
        "Phase 1 Gulmarg Gondola Tickets Pre-Booked",
        "All Tolls, Parking, Driver Bata, Airport Transfers Included"
      ],
      exclusions: [
        "Airfare to/from Srinagar",
        "Gulmarg Phase 2 Gondola / Pony rides at personal expense"
      ],
      isFeatured: true,
      isActive: true,
      rating: 4.95,
      reviewsCount: 167
    },
    {
      id: "tour-5",
      tourCode: "SCT-HAM-05",
      title: "Glorious Hampi & Badami Cave Temples UNESCO Trail",
      slug: "glorious-hampi-badami-cave-temples-trail",
      destinationName: "Hampi & Badami",
      destinationSlug: "hampi-badami",
      tourType: "PILGRIMAGE",
      durationDays: 3,
      durationNights: 2,
      startingPrice: 12999,
      originalPrice: 15499,
      maxTravellers: 15,
      badge: "HERITAGE SPECIAL",
      overview: "Discover the architectural wonders of the Vijayanagara Empire and Chalukya rock-cut cave temples with certified heritage guide services and comfortable luxury coach travel.",
      heroImage: "https://images.unsplash.com/photo-1600100397608-f010e42e47e3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600100397608-f010e42e47e3?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Bangalore to Hampi & Virupaksha Sunset",
          description: "Early departure from Bangalore. Check in to resort near Hampi. Afternoon visit to Virupaksha Temple, Hemakuta Hill, and Tungabhadra river sunset.",
          stay: "Heritage Resort Hampi / Evolve Back Kamalapura Palace",
          meals: "Breakfast, Lunch & Dinner",
          activities: ["Virupaksha Temple", "Hemakuta Hill Monolithic Ganesha", "Tungabhadra Sunset"]
        },
        {
          day: 2,
          title: "Vijayanagara Monuments: Stone Chariot & Royal Enclosure",
          description: "Full day exploration with expert historian guide. Visit Vittala Temple complex, iconic Stone Chariot, musical pillars, Lotus Mahal, and Elephant Stables.",
          stay: "Heritage Resort Hampi / Evolve Back Kamalapura Palace",
          meals: "Breakfast & Royal Karnataka Thali Dinner",
          activities: ["Vittala Temple & Stone Chariot", "Lotus Mahal & Queen's Bath", "Elephant Stables", "Coracle Boat Ride"]
        },
        {
          day: 3,
          title: "Badami Cave Temples, Aihole, Pattadakal & Return",
          description: "Morning visit to Badami rock-cut caves, Agastya Lake, and the UNESCO monuments of Pattadakal. Return drive to Bangalore.",
          stay: "Return Journey",
          meals: "Breakfast & Lunch",
          activities: ["Badami Cave Temples", "Pattadakal UNESCO Complex", "Return Transfer"]
        }
      ],
      inclusions: [
        "Private AC Chauffeur Driven Vehicle",
        "2 Nights Luxury Resort Accommodation",
        "All meals included as per itinerary",
        "Certified English & Kannada Speaking Archeological Guide",
        "All state taxes, parking, tolls and fuel included"
      ],
      exclusions: [
        "Camera fees at monuments"
      ],
      isFeatured: true,
      isActive: true,
      rating: 4.9,
      reviewsCount: 84
    },
    {
      id: "tour-6",
      tourCode: "SCT-DUB-06",
      title: "Dubai & Abu Dhabi Royal Arabian Wonders",
      slug: "dubai-abu-dhabi-royal-arabian-wonders",
      destinationName: "Dubai & Abu Dhabi",
      destinationSlug: "dubai-abu-dhabi",
      tourType: "INTERNATIONAL",
      durationDays: 5,
      durationNights: 4,
      startingPrice: 48999,
      originalPrice: 58999,
      maxTravellers: 20,
      badge: "INTERNATIONAL SPECIAL",
      overview: "An opulent 5-day international holiday covering Burj Khalifa At The Top, Premium 4x4 Desert Safari with VIP Majlis Dinner, Marina Dhow Cruise, and Abu Dhabi Grand Mosque tour.",
      heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
      ],
      itinerary: [
        {
          day: 1,
          title: "Dubai Arrival & Luxury Marina Dhow Cruise Dinner",
          description: "VIP Meet & Greet at Dubai International Airport. Luxury transfer to 5-star hotel in Downtown/Marina. Evening Marina Dhow Cruise with international 5-star buffet and Tanoura dance show.",
          stay: "JW Marriott Marquis / Grand Millennium Dubai",
          meals: "Dinner on Luxury Cruise",
          activities: ["Airport VIP Transfer", "Marina Dhow Cruise Dinner", "Dubai Marina Skyline Views"]
        },
        {
          day: 2,
          title: "Dubai City Tour, Museum of the Future & Burj Khalifa 124/125th Floor",
          description: "Panoramic Dubai city tour covering Palm Jumeirah, Atlantis the Palm, and Dubai Frame. Afternoon visit to the stunning Museum of the Future. Evening Burj Khalifa observation deck and Dubai Mall Fountain Show.",
          stay: "JW Marriott Marquis / Grand Millennium Dubai",
          meals: "Breakfast & Dinner",
          activities: ["Burj Khalifa Observation Deck", "Museum of the Future", "Palm Jumeirah Monorail", "Dubai Fountain Show"]
        },
        {
          day: 3,
          title: "Desert Dune Bashing Safari & VIP Arabian Camp Barbecue",
          description: "Morning leisure for shopping at Gold Souk and Dubai Mall. Afternoon 4x4 Land Cruiser desert safari with high-dune bashing, sandboarding, camel rides, falconry, and VIP table barbecue dinner with live belly dance & fire show.",
          stay: "JW Marriott Marquis / Grand Millennium Dubai",
          meals: "Breakfast & VIP Desert Barbecue",
          activities: ["4x4 Dune Bashing", "Sandboarding & Camel Ride", "VIP Arabian Majlis Dinner", "Fire & Tanoura Show"]
        },
        {
          day: 4,
          title: "Abu Dhabi Full Day Tour: Sheikh Zayed Grand Mosque & Louvre",
          description: "Full day excursion to Abu Dhabi capital. Visit the majestic Sheikh Zayed Grand Mosque, Emirates Palace photo stop, Ferrari World photo stop, and Louvre Abu Dhabi museum.",
          stay: "JW Marriott Marquis / Grand Millennium Dubai",
          meals: "Breakfast & Dinner",
          activities: ["Sheikh Zayed Grand Mosque", "Emirates Palace Photo Stop", "Louvre Abu Dhabi", "Ferrari World Abu Dhabi Drive"]
        },
        {
          day: 5,
          title: "Dubai Duty Free Shopping & Departure",
          description: "Buffet breakfast at hotel. Transfer to Dubai International Airport for return flight.",
          stay: "Departure",
          meals: "Breakfast",
          activities: ["Duty Free Shopping", "Airport Transfer"]
        }
      ],
      inclusions: [
        "4 Nights 5-Star Hotel Stay with Daily Buffet Breakfast",
        "Burj Khalifa 124th + 125th Floor Standard Entry Tickets",
        "4x4 Desert Safari with VIP Table Barbecue Dinner",
        "Dubai Marina 5-Star Luxury Dhow Cruise Dinner",
        "Abu Dhabi City Tour & Grand Mosque Entry",
        "All Private Luxury Airport and Tour Transfers with Chauffeur",
        "UAE Tourist Visa and Travel Insurance Included"
      ],
      exclusions: [
        "International Flight Tickets (Can be arranged on request)",
        "Tourism Dirham Fee payable directly at hotel"
      ],
      isFeatured: true,
      isActive: true,
      rating: 4.96,
      reviewsCount: 112
    }
  ],

  bookings: [
    {
      id: "book-1",
      bookingReference: "SCT-2026-891024",
      tourTitle: "Royal Mysore & Coorg Coffee Hills Odyssey",
      destinationName: "Mysore & Coorg",
      customerName: "Dr. Rameshwar Rao & Family",
      customerEmail: "rameshwar.rao@gmail.com",
      customerPhone: "+91 98450 12844",
      travelStartDate: "2026-04-10",
      travelEndDate: "2026-04-13",
      guestsCount: 4,
      netAmount: 55996,
      paidAmount: 55996,
      status: "CONFIRMED",
      paymentStatus: "PAID",
      pickupAddress: "45, 14th Main, Indiranagar, Bangalore 560038",
      createdAt: "2026-03-15T10:30:00Z"
    },
    {
      id: "book-2",
      bookingReference: "SCT-2026-784192",
      tourTitle: "God's Own Kerala: Munnar Hills & Alleppey Houseboat",
      destinationName: "Kerala Backwaters",
      customerName: "Vikram & Ananya Sharma",
      customerEmail: "vikram.sharma@techcorp.in",
      customerPhone: "+91 99801 44521",
      travelStartDate: "2026-04-18",
      travelEndDate: "2026-04-22",
      guestsCount: 2,
      netAmount: 44998,
      paidAmount: 20000,
      status: "IN_PROGRESS",
      paymentStatus: "PARTIAL",
      pickupAddress: "Prestige Shantiniketan, Whitefield, Bangalore",
      createdAt: "2026-03-18T14:15:00Z"
    },
    {
      id: "book-3",
      bookingReference: "SCT-2026-651230",
      tourTitle: "Kashmir Crown: Dal Lake, Gulmarg Snow & Pahalgam Valley",
      destinationName: "Kashmir Valley",
      customerName: "Kavitha Sundaram & Group",
      customerEmail: "kavitha.s@infosys.com",
      customerPhone: "+91 94482 77319",
      travelStartDate: "2026-05-01",
      travelEndDate: "2026-05-06",
      guestsCount: 6,
      netAmount: 209994,
      paidAmount: 209994,
      status: "CONFIRMED",
      paymentStatus: "PAID",
      pickupAddress: "Srinagar International Airport Terminal 1",
      createdAt: "2026-03-12T09:00:00Z"
    },
    {
      id: "book-4",
      bookingReference: "SCT-2026-540198",
      tourTitle: "Dubai & Abu Dhabi Royal Arabian Wonders",
      destinationName: "Dubai & Abu Dhabi",
      customerName: "Manjunath Hegde",
      customerEmail: "manjunath.hegde@hegdegroup.com",
      customerPhone: "+91 98860 99420",
      travelStartDate: "2026-04-25",
      travelEndDate: "2026-04-29",
      guestsCount: 4,
      netAmount: 195996,
      paidAmount: 100000,
      status: "QUOTATION_SENT",
      paymentStatus: "PARTIAL",
      pickupAddress: "Sadashivanagar, Bangalore",
      createdAt: "2026-03-19T11:45:00Z"
    },
    {
      id: "book-5",
      bookingReference: "SCT-2026-439912",
      tourTitle: "Misty Ooty & Coonoor Nilgiri Mountain Express",
      destinationName: "Ooty & Nilgiris",
      customerName: "Sandeep Kumar & Neha",
      customerEmail: "sandeep.k@gmail.com",
      customerPhone: "+91 97312 88410",
      travelStartDate: "2026-04-05",
      travelEndDate: "2026-04-07",
      guestsCount: 2,
      netAmount: 22998,
      paidAmount: 0,
      status: "NEW",
      paymentStatus: "PENDING",
      pickupAddress: "Jayanagar 4th Block, Bangalore",
      createdAt: "2026-03-20T08:20:00Z"
    }
  ],

  leads: [
    {
      id: "lead-1",
      leadCode: "LEAD-2026-101",
      fullName: "Srikanth Acharya",
      email: "srikanth.a@wipro.com",
      phone: "+91 98451 22334",
      destination: "Coorg (Kodagu)",
      tourTitle: "Coorg Coffee Estate 3D/2N Weekend Break",
      travelDate: "2026-04-14",
      travellersCount: 4,
      estimatedBudget: 35000,
      status: "NEW",
      source: "Google Search (SEO)",
      assignedStaffName: "Anand Kumar (Senior Sales)",
      nextFollowUp: "2026-03-21T11:00:00Z",
      createdAt: "2026-03-20T10:15:00Z"
    },
    {
      id: "lead-2",
      leadCode: "LEAD-2026-102",
      fullName: "Deepa Nambiar",
      email: "deepa.nambiar@gmail.com",
      phone: "+91 94480 55678",
      destination: "Kashmir Paradise Valley",
      tourTitle: "Kashmir Crown 6D/5N Family Tour",
      travelDate: "2026-05-10",
      travellersCount: 5,
      estimatedBudget: 175000,
      status: "CONTACTED",
      source: "WhatsApp Campaign",
      assignedStaffName: "Pooja Hegde (Holiday Specialist)",
      nextFollowUp: "2026-03-21T14:30:00Z",
      createdAt: "2026-03-19T16:00:00Z"
    },
    {
      id: "lead-3",
      leadCode: "LEAD-2026-103",
      fullName: "Rajesh Gopinath (Titan Corp)",
      email: "rajesh.g@titancorp.in",
      phone: "+91 98802 33411",
      destination: "Chikmagalur",
      tourTitle: "Corporate Offsite Retreat 40 Pax",
      travelDate: "2026-04-20",
      travellersCount: 40,
      estimatedBudget: 450000,
      status: "QUOTATION",
      source: "Direct Referral",
      assignedStaffName: "Suresh Gowda (Operations Head)",
      nextFollowUp: "2026-03-22T10:00:00Z",
      createdAt: "2026-03-18T09:45:00Z"
    },
    {
      id: "lead-4",
      leadCode: "LEAD-2026-104",
      fullName: "Arjun & Sneha Mathur",
      email: "arjun.mathur@deloitte.com",
      phone: "+91 97400 99881",
      destination: "Dubai & Abu Dhabi",
      tourTitle: "Dubai Royal Arabian Honeymoon",
      travelDate: "2026-04-28",
      travellersCount: 2,
      estimatedBudget: 110000,
      status: "NEGOTIATION",
      source: "Instagram Ad",
      assignedStaffName: "Pooja Hegde (Holiday Specialist)",
      nextFollowUp: "2026-03-21T17:00:00Z",
      createdAt: "2026-03-17T11:20:00Z"
    },
    {
      id: "lead-5",
      leadCode: "LEAD-2026-105",
      fullName: "Bharath Kumar Shetty",
      email: "bharath.shetty@shettyinfra.com",
      phone: "+91 99001 77223",
      destination: "Hampi & Badami Heritage",
      tourTitle: "Hampi Heritage 3D/2N Innova Chauffeur Tour",
      travelDate: "2026-04-08",
      travellersCount: 6,
      estimatedBudget: 42000,
      status: "WON",
      source: "Website Booking Form",
      assignedStaffName: "Anand Kumar (Senior Sales)",
      nextFollowUp: "2026-03-25T10:00:00Z",
      createdAt: "2026-03-16T13:30:00Z"
    }
  ],

  drivers: [
    {
      id: "drv-1",
      driverCode: "DRV-101",
      fullName: "Someshwara 'Soma' Gowda",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      mobile: "+91 98450 78120",
      experienceYears: 14,
      licenseNumber: "KA-04-2010004921",
      licenseType: "LMV & HMV Commercial",
      licenseExpiry: "2028-11-30",
      status: "AVAILABLE",
      assignedVehicle: "KA-04-MQ-7842 (Innova Crysta Luxury)"
    },
    {
      id: "drv-2",
      driverCode: "DRV-102",
      fullName: "Manjunath 'Manju' Naik",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      mobile: "+91 94481 66321",
      experienceYears: 11,
      licenseNumber: "KA-05-2013009842",
      licenseType: "LMV & HMV Commercial",
      licenseExpiry: "2027-08-15",
      status: "ON_TRIP",
      assignedVehicle: "KA-04-NB-1199 (Tempo Traveller 17S)"
    },
    {
      id: "drv-3",
      driverCode: "DRV-103",
      fullName: "Lokesh 'Loki' Murthy",
      photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      mobile: "+91 97310 44552",
      experienceYears: 9,
      licenseNumber: "KA-01-2015003310",
      licenseType: "LMV Commercial",
      licenseExpiry: "2029-04-10",
      status: "ASSIGNED",
      assignedVehicle: "KA-04-NC-4520 (Toyota Fortuner 4x4)"
    },
    {
      id: "drv-4",
      driverCode: "DRV-104",
      fullName: "Ramesh Babu",
      photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      mobile: "+91 98801 22904",
      experienceYears: 16,
      licenseNumber: "KA-51-2008001198",
      licenseType: "Heavy Passenger Coach",
      licenseExpiry: "2026-12-31",
      status: "AVAILABLE",
      assignedVehicle: "KA-04-EX-9900 (Mercedes Luxury 35S Coach)"
    }
  ],

  vehicles: [
    {
      id: "veh-1",
      registrationNumber: "KA-04-MQ-7842",
      make: "Toyota",
      model: "Innova Crysta 2.4 ZX Luxury Captain Seats",
      year: 2024,
      vehicleType: "MUV",
      fuelType: "Diesel",
      seatingCapacity: 7,
      currentOdometer: 38450,
      status: "AVAILABLE",
      assignedDriver: "Someshwara 'Soma' Gowda",
      insuranceExpiry: "2026-10-15",
      pucExpiry: "2026-08-10",
      fitnessExpiry: "2028-05-20"
    },
    {
      id: "veh-2",
      registrationNumber: "KA-04-NB-1199",
      make: "Force Motors",
      model: "Urbania Luxury Air Suspended 17 Seater",
      year: 2024,
      vehicleType: "TEMPO_TRAVELLER",
      fuelType: "Diesel",
      seatingCapacity: 17,
      currentOdometer: 24900,
      status: "ON_TRIP",
      assignedDriver: "Manjunath 'Manju' Naik",
      insuranceExpiry: "2026-11-20",
      pucExpiry: "2026-09-15",
      fitnessExpiry: "2028-07-10"
    },
    {
      id: "veh-3",
      registrationNumber: "KA-04-NC-4520",
      make: "Toyota",
      model: "Fortuner 4x4 Legender VIP",
      year: 2023,
      vehicleType: "SUV",
      fuelType: "Diesel",
      seatingCapacity: 7,
      currentOdometer: 48200,
      status: "ASSIGNED",
      assignedDriver: "Lokesh 'Loki' Murthy",
      insuranceExpiry: "2026-07-30",
      pucExpiry: "2026-06-25",
      fitnessExpiry: "2027-12-15"
    },
    {
      id: "veh-4",
      registrationNumber: "KA-04-EX-9900",
      make: "Mercedes-Benz / BharatBenz",
      model: "Super Luxury Glider 35 Seater Executive Coach",
      year: 2023,
      vehicleType: "LUXURY_COACH",
      fuelType: "Diesel",
      seatingCapacity: 35,
      currentOdometer: 72100,
      status: "AVAILABLE",
      assignedDriver: "Ramesh Babu",
      insuranceExpiry: "2026-09-18",
      pucExpiry: "2026-07-05",
      fitnessExpiry: "2027-09-10"
    }
  ],

  trips: [
    {
      id: "trip-1",
      tripCode: "TRP-2026-501",
      bookingReference: "SCT-2026-891024",
      tourTitle: "Royal Mysore & Coorg Coffee Hills Odyssey",
      customerName: "Dr. Rameshwar Rao (4 Pax)",
      vehicleReg: "KA-04-MQ-7842 (Innova Crysta)",
      driverName: "Someshwara Gowda",
      startDateTime: "2026-04-10T06:00:00Z",
      endDateTime: "2026-04-13T21:00:00Z",
      pickupLocation: "Indiranagar, Bangalore",
      dropLocation: "Indiranagar, Bangalore",
      passengersCount: 4,
      status: "SCHEDULED",
      revenue: 55996,
      expenses: 18400,
      estimatedProfit: 37596
    },
    {
      id: "trip-2",
      tripCode: "TRP-2026-502",
      bookingReference: "SCT-2026-784192",
      tourTitle: "God's Own Kerala: Munnar & Alleppey",
      customerName: "Vikram Sharma (2 Pax)",
      vehicleReg: "KA-04-NB-1199 (Force Urbania)",
      driverName: "Manjunath Naik",
      startDateTime: "2026-04-18T05:30:00Z",
      endDateTime: "2026-04-22T22:00:00Z",
      pickupLocation: "Prestige Shantiniketan, Whitefield",
      dropLocation: "Whitefield, Bangalore",
      passengersCount: 2,
      status: "IN_PROGRESS",
      revenue: 44998,
      expenses: 16200,
      estimatedProfit: 28798
    }
  ],

  maintenance: [
    {
      id: "maint-1",
      vehicleReg: "KA-04-MQ-7842 (Innova Crysta)",
      serviceType: "Periodic 40,000 KM Major Service",
      vendor: "Nandi Toyota Bangalore",
      cost: 14500,
      serviceDate: "2026-02-28",
      nextDueOdo: 50000,
      status: "COMPLETED",
      notes: "Engine oil change, synthetic filter, brake pad inspection, AC disinfection completed."
    },
    {
      id: "maint-2",
      vehicleReg: "KA-04-NB-1199 (Force Urbania)",
      serviceType: "Air Suspension & Wheel Alignment",
      vendor: "Force Motors Authorized Service Center",
      cost: 8200,
      serviceDate: "2026-03-05",
      nextDueOdo: 35000,
      status: "COMPLETED",
      notes: "4-wheel laser balancing, suspension bushing lubrication, air pressure calibration."
    }
  ],

  fuelRecords: [
    {
      id: "fuel-1",
      vehicleReg: "KA-04-MQ-7842",
      date: "2026-03-18",
      odometer: 38100,
      liters: 55,
      costPerLiter: 88.50,
      totalCost: 4867.50,
      fuelStation: "HP Auto Fuel Point Bangalore",
      fuelEconomyKmpl: 13.8
    },
    {
      id: "fuel-2",
      vehicleReg: "KA-04-NB-1199",
      date: "2026-03-19",
      odometer: 24650,
      liters: 68,
      costPerLiter: 88.50,
      totalCost: 6018.00,
      fuelStation: "Indian Oil Highway Hub Mysore Road",
      fuelEconomyKmpl: 10.4
    }
  ],

  campaigns: [
    {
      id: "camp-1",
      name: "Summer 2026 Karnataka Hillstations & Kashmir Blast",
      channel: "WhatsApp RCS + Meta Ads",
      budget: 50000,
      leadsGenerated: 148,
      bookingsCount: 26,
      revenueGenerated: 684000,
      roiMultiplier: 13.68,
      status: "ACTIVE"
    },
    {
      id: "camp-2",
      name: "Corporate Mysore & Coorg Offsite Q1",
      channel: "LinkedIn Direct + Email (Brevo)",
      budget: 35000,
      leadsGenerated: 42,
      bookingsCount: 8,
      revenueGenerated: 420000,
      roiMultiplier: 12.0,
      status: "ACTIVE"
    }
  ],

  reviews: [
    {
      id: "rev-1",
      customerName: "Dr. Rameshwar Rao",
      location: "Bangalore",
      rating: 5,
      date: "March 2026",
      tour: "Mysore & Coorg 4D Odyssey",
      comment: "Outstanding experience with Shree Chowdeshwari Travels! Soma Gowda our chauffeur was exceptionally courteous, punctual, and knew all the scenic spots. The Innova Crysta was spotless. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "rev-2",
      customerName: "Ananya & Vikram Sharma",
      location: "Hyderabad",
      rating: 5,
      date: "February 2026",
      tour: "Kerala Backwaters & Munnar",
      comment: "Our 5-day Kerala trip was seamlessly organized. The private houseboat in Alleppey was pure luxury. Not a single hitch from airport pickup to drop. Truly 'Your Journey. Our Priority.'",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "rev-3",
      customerName: "Siddharth Namboodiri",
      location: "Chennai",
      rating: 5,
      date: "January 2026",
      tour: "Hampi & Badami Heritage Trail",
      comment: "The archeologist guide and luxury transport made our Hampi vacation unforgettable. Excellent value, zero hidden charges, and world-class professionalism.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ],

  faqs: [
    {
      question: "Why choose Shree Chowdeshwari Tours and Travels?",
      answer: "We are Karnataka's trusted premier travel partner with over 15+ years of operational excellence, our own verified luxury fleet (Innova Crysta, Fortuner, Force Urbania, Luxury Coaches), licensed professional chauffeurs, zero hidden fees, and 24/7 round-the-clock trip support."
    },
    {
      question: "Are your vehicle chauffeurs experienced and verified?",
      answer: "Yes, 100%. All our chauffeurs undergo rigorous background checks, police verification, medical testing, and defensive driving training. They speak Kannada, English, Hindi, and regional languages and have deep local knowledge of sightseeing routes."
    },
    {
      question: "What is your booking and cancellation policy?",
      answer: "You can book any tour with a nominal 20% advance token amount. Full flexibility is provided: free date rescheduling up to 7 days before departure, and transparent cancellation refund terms."
    },
    {
      question: "Can we customize an itinerary for our family or corporate group?",
      answer: "Absolutely! Our custom trip planner allows you to choose your preferred dates, vehicle category, hotel tier (3-Star, 4-Star, 5-Star Heritage), and specific sightseeing interests. Our travel experts will send you a tailored quote within 2 hours."
    }
  ]
};
