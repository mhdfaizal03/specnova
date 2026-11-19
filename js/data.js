/**
 * 99MOBILES / SPECNOVA - Global Mobile Database
 * Comprehensive technical specifications covering world-class smartphone manufacturers.
 */

const SMARTPHONES_DATA = [
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    tagline: "The Pinnacle of Galaxy AI & Titanium Craftsmanship",
    price: { USD: 1299, EUR: 1349, INR: 129999, GBP: 1199 },
    releaseDate: "January 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King", "Battery Beast"],
    specScore: 97,
    userRating: 4.8,
    reviewCount: 3840,
    badge: "Editor's Choice",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.8\" Dynamic LTPO AMOLED 2X, 120Hz, 2600 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ramStorage: "12GB RAM | 256GB / 512GB / 1TB UFS 4.0",
      rearCamera: "200MP (OIS) + 50MP (5x Periscope) + 10MP (3x) + 12MP (Ultra)",
      frontCamera: "12MP Dual Pixel PDAF, 4K60 HDR",
      batteryCharging: "5000 mAh | 45W Wired, 15W Wireless, 4.5W Reverse",
      os: "Android 14, One UI 6.1 (7 Years OS Updates)",
      weight: "232g | Titanium Frame"
    },
    detailedSpecs: {
      display: {
        type: "Dynamic LTPO AMOLED 2X, HDR10+, 120Hz Adaptive",
        size: "6.8 inches (88.5% screen-to-body ratio)",
        resolution: "1440 x 3120 pixels, 19.5:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "505 ppi density",
        protection: "Corning Gorilla Armor (75% reflection reduction)",
        peakBrightness: "2600 nits (Peak)",
        features: "Always-on display, Vision Booster, Flat Display"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4 nm)",
        cpu: "Octa-core (1x3.39 GHz Cortex-X4 & 5x3.1 GHz & 2x2.2 GHz)",
        gpu: "Adreno 750 (1 GHz) with Hardware Ray Tracing",
        ram: "12GB LPDDR5X",
        storage: "256GB / 512GB / 1TB",
        storageType: "UFS 4.0 High-Speed",
        coolingSystem: "1.9x Larger Vapor Chamber Cooling"
      },
      camera: {
        rearSetup: "Quad Camera System (200MP + 50MP + 10MP + 12MP)",
        mainSensor: "200 MP, f/1.7, 24mm (wide), 1/1.3\", 0.6µm, multi-directional PDAF, Laser AF, OIS",
        periscope: "50 MP, f/3.4, 111mm (5x optical periscope zoom), PDAF, OIS, 100x Space Zoom",
        telephoto: "10 MP, f/2.4, 67mm (3x optical zoom), 1/3.52\", Dual Pixel PDAF, OIS",
        ultrawide: "12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55\", Super Steady video",
        videoRecording: "8K@30fps, 4K@120fps, 4K@60fps, 1080p@240fps, HDR10+, stereo sound rec.",
        frontCamera: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF, 4K@60fps",
        features: "Galaxy AI ProVisual Engine, Generative Edit, Nightography Zoom"
      },
      battery: {
        capacity: "5000 mAh Li-Ion non-removable",
        wiredCharging: "45W Wired (65% in 30 mins, PD3.0)",
        wirelessCharging: "15W Fast Wireless (Qi/PMA)",
        reverseCharging: "4.5W Reverse Wireless PowerShare",
        batteryLifeScore: "16h 45m Active Usage Score"
      },
      build: {
        dimensions: "162.3 x 79 x 8.6 mm (6.39 x 3.11 x 0.34 in)",
        weight: "232 g (8.18 oz)",
        frameMaterial: "Grade 2 Titanium Frame",
        backMaterial: "Corning Gorilla Armor Glass Back",
        ipRating: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
        colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
        stylus: "Built-in Bluetooth S-Pen (2.8ms latency)"
      },
      connectivity: {
        fiveG: "SA/NSA/Sub6/mmWave",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
        bluetooth: "5.3, A2DP, LE",
        nfc: "Yes, with Samsung Pay & Google Wallet",
        usb: "USB Type-C 3.2, DisplayPort 1.2, OTG",
        sim: "Nano-SIM and eSIM or Dual SIM",
        audioJack: "No (32-bit/384kHz audio by AKG)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "One UI 6.1 with Galaxy AI suite",
        promisedUpdates: "7 Major Android OS upgrades & 7 Years Security",
        aiFeatures: "Circle to Search, Live Call Translation, Note Assist, Generative Photo Edit"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 1299 },
      { ram: "12GB", storage: "512GB", priceUSD: 1419 },
      { ram: "12GB", storage: "1TB", priceUSD: 1659 }
    ],
    pros: ["Flawless flat anti-reflective display", "7 full years of software support", "Versatile quad camera with 5x & 100x zoom", "Built-in S-Pen and Grade 2 Titanium finish"],
    cons: ["Heavy at 232 grams", "Charging capped at 45W"]
  },
  {
    id: "apple-iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    tagline: "Apple Intelligence, A18 Pro & Dedicated Camera Control",
    price: { USD: 1199, EUR: 1449, INR: 144900, GBP: 1199 },
    releaseDate: "September 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King", "Battery Beast"],
    specScore: 98,
    userRating: 4.9,
    reviewCount: 4210,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.9\" Super Retina XDR OLED, ProMotion 120Hz, 2000 nits",
      processor: "Apple A18 Pro (3nm, 6-core GPU, 16-core NPU)",
      ramStorage: "8GB RAM | 256GB / 512GB / 1TB NVMe",
      rearCamera: "48MP Fusion (OIS) + 48MP Ultra + 12MP (5x Tetraprism Tele)",
      frontCamera: "12MP TrueDepth, Autofocus, 4K60 Dolby Vision",
      batteryCharging: "4685 mAh | 30W Wired, 25W MagSafe, Qi2",
      os: "iOS 18 (Apple Intelligence Enabled)",
      weight: "227g | Grade 5 Titanium"
    },
    detailedSpecs: {
      display: {
        type: "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision",
        size: "6.9 inches (91.4% screen-to-body ratio, ultra-thin borders)",
        resolution: "1320 x 2868 pixels, 19.5:9 ratio",
        refreshRate: "1Hz - 120Hz ProMotion",
        ppi: "460 ppi density",
        protection: "Ceramic Shield glass (2024 latest generation)",
        peakBrightness: "2000 nits (Outdoor peak), 1 nit minimum",
        features: "Dynamic Island, Always-On display, True Tone, Wide Color (P3)"
      },
      performance: {
        chipset: "Apple A18 Pro (3 nm 2nd Gen TSMC)",
        cpu: "6-core (2 performance cores + 4 efficiency cores)",
        gpu: "Apple 6-core GPU with 2x faster hardware-accelerated ray tracing",
        ram: "8GB Unified Memory",
        storage: "256GB / 512GB / 1TB",
        storageType: "NVMe High Throughput",
        coolingSystem: "Graphene Thermal Substructure + 100% Recycled Aluminum Frame"
      },
      camera: {
        rearSetup: "Triple Camera System + LiDAR Scanner + Camera Control Button",
        mainSensor: "48 MP Fusion, f/1.78, 24mm (wide), 1/1.28\", 1.22µm, sensor-shift OIS, 100% Focus Pixels",
        periscope: "12 MP Tetraprism, f/2.8, 120mm (5x optical zoom), 3D sensor-shift OIS",
        ultrawide: "48 MP, f/2.2, 13mm (ultrawide), hybrid focus pixels, macro photography",
        videoRecording: "4K@120fps Dolby Vision, ProRes, 1080p@240fps, Spatial Video Capture",
        frontCamera: "12 MP, f/1.9, 23mm (wide), PDAF, OIS, Cinematic mode 4K@30fps",
        features: "Camera Control capacitive sapphire button, Photographic Styles 2.0, Studio Mics"
      },
      battery: {
        capacity: "4685 mAh Li-Ion",
        wiredCharging: "Up to 30W Wired (50% in 30 mins)",
        wirelessCharging: "25W MagSafe with 30W adapter, 15W Qi2 wireless",
        reverseCharging: "4.5W Reverse Wired via Type-C",
        batteryLifeScore: "33h Video Playback (Industry Leading)"
      },
      build: {
        dimensions: "163 x 77.6 x 8.25 mm (6.42 x 3.06 x 0.32 in)",
        weight: "227 g (8.01 oz)",
        frameMaterial: "Grade 5 Titanium with Micro-blasted texture",
        backMaterial: "Textured Matte Glass Back",
        ipRating: "IP68 dust/water resistant (up to 6m for 30 mins)",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        buttons: "Action Button + Camera Control Button"
      },
      connectivity: {
        fiveG: "5G (sub-6 GHz and mmWave) with 4x4 MIMO",
        wifi: "Wi-Fi 7 (802.11be) with 2x2 MIMO",
        bluetooth: "5.3, LE",
        nfc: "Yes with Reader Mode & Apple Pay",
        usb: "USB Type-C 3.2 Gen 2 (up to 10Gbps), DisplayPort",
        sim: "eSIM only (USA) / Nano-SIM and eSIM (Global)",
        audioJack: "No (Spatial Audio & Dolby Atmos speakers)"
      },
      software: {
        osVersion: "iOS 18",
        customUI: "Apple iOS Ecosystem with Apple Intelligence",
        promisedUpdates: "6-7 Years of iOS Software Updates",
        aiFeatures: "Writing Tools, Clean Up in Photos, Genmoji, Siri with Personal Context"
      }
    },
    variants: [
      { ram: "8GB", storage: "256GB", priceUSD: 1199 },
      { ram: "8GB", storage: "512GB", priceUSD: 1399 },
      { ram: "8GB", storage: "1TB", priceUSD: 1599 }
    ],
    pros: ["Astounding battery endurance", "ProRes 4K 120fps Dolby Vision video", "Tactile Camera Control button", "Class-leading A18 Pro processing power"],
    cons: ["Slow baseline 25-30W charging speed", "Thick and large 6.9\" form factor"]
  },
  {
    id: "google-pixel-9-pro-xl",
    name: "Google Pixel 9 Pro XL",
    brand: "Google",
    tagline: "Gemini Nano on Device, Super Res Zoom & Pure Android",
    price: { USD: 1099, EUR: 1199, INR: 124999, GBP: 1099 },
    releaseDate: "August 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King"],
    specScore: 95,
    userRating: 4.7,
    reviewCount: 2190,
    badge: "Best AI Smartphone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.8\" Super Actua LTPO OLED, 120Hz, 3000 nits",
      processor: "Google Tensor G4 (4nm) + Titan M2 Security",
      ramStorage: "16GB RAM | 128GB / 256GB / 512GB / 1TB",
      rearCamera: "50MP (OIS) + 48MP (5x Periscope) + 48MP (Ultra/Macro)",
      frontCamera: "42MP Dual PD, 103° Ultrawide, 4K60",
      batteryCharging: "5060 mAh | 37W Wired (70% in 30 min), 23W Wireless",
      os: "Android 14 (7 Years OS, Feature Drops & Security)",
      weight: "221g | Polished Aluminum & Matte Glass"
    },
    detailedSpecs: {
      display: {
        type: "Super Actua LTPO OLED, 120Hz, HDR10+, 24-bit color",
        size: "6.8 inches (88.0% screen-to-body ratio)",
        resolution: "1344 x 2992 pixels, 20:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO Smooth Display",
        ppi: "486 ppi density",
        protection: "Corning Gorilla Glass Victus 2",
        peakBrightness: "3000 nits (Peak), 2000 nits (HBM)",
        features: "Ultrasonic under-display fingerprint reader, Always-on"
      },
      performance: {
        chipset: "Google Tensor G4 (4 nm)",
        cpu: "Octa-core (1x3.1 GHz Cortex-X4 & 3x2.6 GHz & 4x1.92 GHz)",
        gpu: "Mali-G715 MC7",
        ram: "16GB LPDDR5X (Dedicated RAM partition for Gemini AI)",
        storage: "128GB / 256GB / 512GB / 1TB",
        storageType: "UFS 3.1",
        coolingSystem: "Custom Dual Vapor Chamber"
      },
      camera: {
        rearSetup: "Triple Camera Bar (50MP Wide + 48MP 5x Tele + 48MP Ultrawide)",
        mainSensor: "50 MP, f/1.68, 25mm, 1/1.31\", 1.2µm, dual pixel PDAF, multi-zone Laser AF, OIS",
        periscope: "48 MP, f/2.8, 110mm (5x optical zoom), dual pixel PDAF, OIS, 30x Super Res Zoom",
        ultrawide: "48 MP, f/1.7, 123˚ (ultrawide), 1/2.55\", PDAF, Macro Focus",
        videoRecording: "8K@30fps (Video Boost), 4K@60fps, 1080p@240fps, 10-bit HDR",
        frontCamera: "42 MP, f/2.2, 17mm (ultrawide), PDAF, 4K@60fps",
        features: "Add Me, Best Take, Magic Editor, Zoom Enhance, Audio Magic Eraser"
      },
      battery: {
        capacity: "5060 mAh Li-Ion",
        wiredCharging: "37W Wired (70% in 30 mins with 45W Google charger)",
        wirelessCharging: "23W with Pixel Stand, 12W Qi",
        reverseCharging: "Battery Share (Reverse Wireless)",
        batteryLifeScore: "15h 30m Active Use"
      },
      build: {
        dimensions: "162.8 x 76.6 x 8.5 mm (6.41 x 3.02 x 0.33 in)",
        weight: "221 g (7.80 oz)",
        frameMaterial: "100% Recycled Polished Aluminum Frame",
        backMaterial: "Corning Gorilla Glass Victus 2 Matte Finish",
        ipRating: "IP68 water and dust resistance",
        colors: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"]
      },
      connectivity: {
        fiveG: "5G mmWave + Sub 6GHz, Satellite SOS support",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.3 with dual antennas",
        nfc: "Yes, Google Wallet ready",
        usb: "USB Type-C 3.2 Gen 1",
        sim: "Single Nano-SIM and eSIM",
        audioJack: "No (Stereo speakers with Spatial Audio)"
      },
      software: {
        osVersion: "Android 14 (Upgrade to Android 15 ready)",
        customUI: "Google Pixel UI with Gemini Nano on-device",
        promisedUpdates: "7 Years of Full OS & Pixel Feature Drops",
        aiFeatures: "Pixel Screenshots app, Gemini Live conversational voice, Pixel Studio AI image generator"
      }
    },
    variants: [
      { ram: "16GB", storage: "128GB", priceUSD: 1099 },
      { ram: "16GB", storage: "256GB", priceUSD: 1199 },
      { ram: "16GB", storage: "512GB", priceUSD: 1319 }
    ],
    pros: ["Top-tier photographic natural rendering", "7 years of direct Google feature updates", "Ultrasonic sensor & brilliant 3000 nits display", "16GB RAM with deeply integrated Gemini"],
    cons: ["Tensor G4 lags behind Snapdragon in heavy 3D gaming", "Base model starts with 128GB storage"]
  },
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    tagline: "Leica Quad Summilux Optics with 1-Inch Variable Aperture",
    price: { USD: 1199, EUR: 1499, INR: 99999, GBP: 1299 },
    releaseDate: "February 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King"],
    specScore: 96,
    userRating: 4.8,
    reviewCount: 1850,
    badge: "Ultimate Camera",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.73\" LTPO AMOLED, 120Hz, Dolby Vision, 3000 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "16GB RAM | 512GB UFS 4.0",
      rearCamera: "Quad 50MP Leica: 1\" LYT-900 (f/1.63-4.0) + 50MP (3.2x) + 50MP (5x) + 50MP (Ultra)",
      frontCamera: "32MP f/2.0 wide, 4K60fps",
      batteryCharging: "5000 mAh | 90W Wired (100% in 33 min), 80W Wireless",
      os: "Xiaomi HyperOS (Android 14)",
      weight: "220g | Vegan Leather / Nano-tech Ceramic"
    },
    detailedSpecs: {
      display: {
        type: "LTPO AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+",
        size: "6.73 inches (89.6% screen-to-body ratio)",
        resolution: "1440 x 3200 pixels, 20:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "522 ppi density",
        protection: "Xiaomi Shield Glass (10x drop resistance)",
        peakBrightness: "3000 nits peak brightness",
        features: "1920Hz PWM dimming, DC dimming, All Around Liquid Display"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core (1x3.3 GHz Cortex-X4 & 5x3.2 GHz & 2x2.3 GHz)",
        gpu: "Adreno 750",
        ram: "16GB LPDDR5X",
        storage: "512GB / 1TB",
        storageType: "UFS 4.0",
        coolingSystem: "Dual-Channel IceLoop Liquid Cooling"
      },
      camera: {
        rearSetup: "Leica Vario-Summilux Quad 50MP System with Stepless Variable Aperture",
        mainSensor: "50 MP, f/1.63-f/4.0 stepless variable, 23mm, 1.0\"-type Sony LYT-900, multi-directional PDAF, Laser AF, OIS",
        periscope: "50 MP, f/2.5, 120mm (5x optical periscope), Dual-Pixel PDAF, OIS, 30cm telemacro",
        telephoto: "50 MP, f/1.8, 75mm (3.2x optical floating telephoto), Dual-Pixel PDAF, OIS, 10cm macro",
        ultrawide: "50 MP, f/1.8, 12mm, 122˚ (ultrawide), Dual-Pixel PDAF, 5cm macro",
        videoRecording: "8K@30fps, 4K@120fps, 4K@60fps 10-bit Dolby Vision HDR, MasterCinema mode",
        frontCamera: "32 MP, f/2.0, 22mm (wide), 4K@60fps",
        features: "Leica Authentic & Vibrant color profiles, 35mm/50mm/75mm/90mm portrait kit support"
      },
      battery: {
        capacity: "5000 mAh Silicon-Carbon (5300mAh China version)",
        wiredCharging: "90W HyperCharge (100% in 33 mins)",
        wirelessCharging: "80W Wireless HyperCharge (100% in 46 mins)",
        reverseCharging: "10W Reverse Wireless",
        batteryLifeScore: "14h 20m Active Use"
      },
      build: {
        dimensions: "161.4 x 75.3 x 9.2 mm (6.35 x 2.96 x 0.36 in)",
        weight: "219.8 g or 229.5 g",
        frameMaterial: "High-strength Aluminum 6M42 Uni-body frame",
        backMaterial: "Nano-tech Vegan Leather with 6x wear resistance",
        ipRating: "IP68 dust and water resistance (1.5m for 30m)",
        colors: ["Black", "White", "Titanium Edition"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 Tri-Band with MLO",
        bluetooth: "5.4, aptX HD, LHDC 5.0",
        nfc: "Yes, dual-facing NFC",
        usb: "USB Type-C 3.2 Gen 2 (up to 10Gbps)",
        sim: "Dual Nano-SIM",
        audioJack: "No (Hi-Res & Hi-Res Wireless Audio certified)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Xiaomi HyperOS",
        promisedUpdates: "4 Major OS Upgrades, 5 Years Security",
        aiFeatures: "HyperMind, AI Subtitles, AI Portrait generation, Gallery Erase Pro"
      }
    },
    variants: [
      { ram: "16GB", storage: "512GB", priceUSD: 1199 },
      { ram: "16GB", storage: "1TB", priceUSD: 1399 }
    ],
    pros: ["True 1-inch variable aperture main sensor", "Unmatched 80W wireless & 90W wired charging", "All four rear cameras are 50MP Leica lenses", "Optional dedicated camera grip accessory"],
    cons: ["Noticeable camera island bulge", "HyperOS still has bloatware in certain regions"]
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    tagline: "Smooth Beyond Belief: 5400mAh, 100W SUPERVOOC & 4th Gen Hasselblad",
    price: { USD: 799, EUR: 949, INR: 64999, GBP: 849 },
    releaseDate: "January 2024",
    status: "In Stock",
    category: ["Flagship", "Battery Beast", "Value for Money"],
    specScore: 94,
    userRating: 4.8,
    reviewCount: 3120,
    badge: "Value Flagship Champion",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.82\" 2K 120Hz ProXDR Oriental AMOLED, 4500 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "12GB / 16GB RAM | 256GB / 512GB UFS 4.0",
      rearCamera: "50MP Sony LYT-808 (OIS) + 64MP 3x Periscope (OIS) + 48MP Ultra",
      frontCamera: "32MP f/2.4, 4K30fps",
      batteryCharging: "5400 mAh | 100W Wired (100% in 26 min), 50W AIRVOOC",
      os: "OxygenOS 14 (Android 14)",
      weight: "220g | Emerald Green / Silky Black"
    },
    detailedSpecs: {
      display: {
        type: "LTPO4 AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+",
        size: "6.82 inches (90.8% screen-to-body ratio)",
        resolution: "1440 x 3168 pixels (510 ppi)",
        refreshRate: "1Hz - 120Hz LTPO 4.0",
        ppi: "510 ppi",
        protection: "Corning Gorilla Glass Victus 2",
        peakBrightness: "4500 nits Peak, 1600 nits HBM",
        features: "Aqua Touch (operates smoothly with wet hands), 2160Hz PWM"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core (1x3.3 GHz Cortex-X4)",
        gpu: "Adreno 750",
        ram: "12GB / 16GB LPDDR5X",
        storage: "256GB / 512GB",
        storageType: "UFS 4.0",
        coolingSystem: "Dual Cryo-velocity VC (9,140 mm² cooling area)"
      },
      camera: {
        rearSetup: "Triple Hasselblad Camera (50MP + 64MP + 48MP)",
        mainSensor: "50 MP, f/1.6, 23mm, 1/1.4\", 1.12µm, multi-directional PDAF, OIS (Sony LYT-808)",
        periscope: "64 MP, f/2.6, 70mm (3x optical, 6x in-sensor zoom, 120x digital), 1/2.0\", PDAF, OIS (OmniVision OV64B)",
        ultrawide: "48 MP, f/2.2, 14mm, 114˚, 1/2.0\", 0.8µm, PDAF (Sony IMX581)",
        videoRecording: "8K@24fps, 4K@60fps/30fps Dolby Vision HDR, 1080p@240fps",
        frontCamera: "32 MP, f/2.4, 21mm, 1/2.74\", 4K@30fps",
        features: "Hasselblad Natural Color Calibration, Master Mode, XPAN mode"
      },
      battery: {
        capacity: "5400 mAh dual-cell Li-Po",
        wiredCharging: "100W Wired (1-100% in 26 minutes)",
        wirelessCharging: "50W AIRVOOC Wireless (1-100% in 55 mins)",
        reverseCharging: "10W Reverse Wireless",
        batteryLifeScore: "17h 10m Active Usage"
      },
      build: {
        dimensions: "164.3 x 75.8 x 9.2 mm (6.47 x 2.98 x 0.36 in)",
        weight: "220 g (7.76 oz)",
        frameMaterial: "Aluminum frame with ceramic glaze finish",
        backMaterial: "Gorilla Glass Victus 2 / Matte Ag Glass",
        ipRating: "IP65 water and dust resistance",
        colors: ["Silky Black", "Flowy Emerald", "Glacial White"],
        alertSlider: "3-Position Alert Slider (Silent, Vibrate, Ring)"
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.4, LHDC 5.0, aptX Adaptive",
        nfc: "Yes, 360-degree NFC antenna",
        usb: "USB Type-C 3.2 Gen 1",
        sim: "Dual Nano-SIM or eSIM support",
        audioJack: "No (Dolby Atmos stereo speakers, Bionic Vibration Motor 0916T)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "OxygenOS 14 (Global) / ColorOS 14",
        promisedUpdates: "4 Major Android OS Updates & 5 Years Security",
        aiFeatures: "Trinity Engine performance optimizer, Smart Cutout, AI Eraser"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 799 },
      { ram: "16GB", storage: "512GB", priceUSD: 899 }
    ],
    pros: ["Incredible value at $799 with top-tier specs", "Massive 5400mAh battery with blisteringly fast 100W charging", "Class-leading 4500 nits display with Aqua Touch", "Superb Hasselblad 3x periscope portrait camera"],
    cons: ["IP65 rating instead of full IP68 submersible", "Curved screen edges not preferred by all"]
  },
  {
    id: "samsung-galaxy-z-fold-6",
    name: "Samsung Galaxy Z Fold 6",
    brand: "Samsung",
    tagline: "Ultra-Lightweight Foldable Productivity Powered by Galaxy AI",
    price: { USD: 1899, EUR: 1999, INR: 164999, GBP: 1799 },
    releaseDate: "July 2024",
    status: "In Stock",
    category: ["Foldable", "Flagship"],
    specScore: 95,
    userRating: 4.6,
    reviewCount: 1480,
    badge: "Best Foldable",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "7.6\" Foldable QXGA+ AMOLED 120Hz + 6.3\" Cover AMOLED",
      processor: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      ramStorage: "12GB RAM | 256GB / 512GB / 1TB UFS 4.0",
      rearCamera: "50MP (OIS) + 10MP (3x Tele OIS) + 12MP (Ultra)",
      frontCamera: "4MP Under Display + 10MP Cover Camera",
      batteryCharging: "4400 mAh | 25W Wired, 15W Wireless, 4.5W Reverse",
      os: "Android 14, One UI 6.1.1 (7 Years OS Updates)",
      weight: "239g | Enhanced Armor Aluminum Frame"
    },
    detailedSpecs: {
      display: {
        type: "Main: 7.6\" Foldable Dynamic LTPO AMOLED 2X, 120Hz, 2600 nits; Cover: 6.3\" Dynamic AMOLED 2X, 120Hz",
        size: "Main: 7.6 inches; Cover: 6.3 inches (22.1:9 aspect ratio)",
        resolution: "Main: 1856 x 2160 pixels; Cover: 968 x 2376 pixels",
        refreshRate: "1Hz - 120Hz Adaptive on both displays",
        ppi: "374 ppi (Main) / 410 ppi (Cover)",
        protection: "Corning Gorilla Glass Victus 2 (Cover & Back), Ultra Thin Glass (Inner)",
        peakBrightness: "2600 nits Peak",
        features: "S-Pen Fold Edition support, Flex Mode, Dual-rail hinge"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4 nm)",
        cpu: "Octa-core up to 3.39 GHz",
        gpu: "Adreno 750",
        ram: "12GB LPDDR5X",
        storage: "256GB / 512GB / 1TB",
        storageType: "UFS 4.0",
        coolingSystem: "1.6x larger vapor chamber compared to Fold 5"
      },
      camera: {
        rearSetup: "Triple Camera System (50MP + 10MP + 12MP)",
        mainSensor: "50 MP, f/1.8, 23mm (wide), Dual Pixel PDAF, OIS",
        periscope: "None",
        telephoto: "10 MP, f/2.4, 66mm (3x optical zoom), PDAF, OIS",
        ultrawide: "12 MP, f/2.2, 12mm, 123˚ (ultrawide)",
        videoRecording: "8K@30fps, 4K@60fps, 1080p@240fps",
        frontCamera: "4 MP f/1.8 under-display (Main) + 10 MP f/2.2 (Cover)",
        features: "Dual Preview, Rear Cam Selfie, FlexCam auto-framing, ProVisual Engine"
      },
      battery: {
        capacity: "4400 mAh dual battery",
        wiredCharging: "25W Wired (50% in 30 mins)",
        wirelessCharging: "15W Fast Wireless",
        reverseCharging: "4.5W Wireless PowerShare",
        batteryLifeScore: "13h 40m Active Use"
      },
      build: {
        dimensions: "Unfolded: 153.5 x 132.6 x 5.6 mm; Folded: 153.5 x 68.1 x 12.1 mm",
        weight: "239 g (14g lighter than Fold 5)",
        frameMaterial: "Enhanced Armor Aluminum",
        backMaterial: "Gorilla Glass Victus 2 Matte Glass",
        ipRating: "IP48 water resistance and particle ingress protection",
        colors: ["Silver Shadow", "Navy", "Pink", "Crafted Black (Online)", "White (Online)"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 6E (802.11ax), tri-band",
        bluetooth: "5.3, A2DP, LE",
        nfc: "Yes, Samsung Pay & Google Wallet",
        usb: "USB Type-C 3.2, DisplayPort 1.2, Samsung DeX",
        sim: "Nano-SIM + eSIM or Dual Nano-SIM",
        audioJack: "No (Dolby Atmos stereo sound)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "One UI 6.1.1 (Foldable optimized)",
        promisedUpdates: "7 Generations of OS Upgrades & 7 Years Security",
        aiFeatures: "Sketch to Image, Interpreter Dual Screen Conversation mode, Note Assist, PDF Overlay Translation"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 1899 },
      { ram: "12GB", storage: "512GB", priceUSD: 2019 },
      { ram: "12GB", storage: "1TB", priceUSD: 2259 }
    ],
    pros: ["Thinner, lighter (239g) and flatter square silhouette", "7 full years of software support with unmatched foldable multitasking", "IP48 certified dust/water protection", "Wider, much more comfortable cover display"],
    cons: ["Very expensive starting price", "Camera hardware unchanged from predecessors"]
  },
  {
    id: "asus-rog-phone-8-pro",
    name: "Asus ROG Phone 8 Pro",
    brand: "Asus",
    tagline: "Unleash Ultimate Mobile Gaming with 165Hz & AniMe Matrix LED",
    price: { USD: 1199, EUR: 1199, INR: 94999, GBP: 1099 },
    releaseDate: "January 2024",
    status: "In Stock",
    category: ["Gaming", "Flagship"],
    specScore: 96,
    userRating: 4.8,
    reviewCount: 1120,
    badge: "Ultimate Gaming King",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.78\" Samsung LTPO AMOLED, 165Hz, 720Hz Touch, 2500 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 with X Mode (Overclocked)",
      ramStorage: "16GB / 24GB LPDDR5X | 512GB / 1TB UFS 4.0",
      rearCamera: "50MP Sony IMX890 Gimbal OIS + 32MP (3x Tele OIS) + 13MP Ultra",
      frontCamera: "32MP RGBW sensor, 1080p60",
      batteryCharging: "5500 mAh | 65W HyperCharge, 15W Qi Wireless",
      os: "Android 14 with ROG UI / Zen UI",
      weight: "225g | IP68 Rated Gaming Chassis"
    },
    detailedSpecs: {
      display: {
        type: "LTPO AMOLED, 1B colors, 165Hz, HDR10, 720Hz touch sampling rate",
        size: "6.78 inches (89.4% screen-to-body ratio)",
        resolution: "1080 x 2400 pixels, 20:9 ratio",
        refreshRate: "1Hz to 120Hz LTPO, boosts to 165Hz in supported games",
        ppi: "388 ppi density",
        protection: "Corning Gorilla Glass Victus 2",
        peakBrightness: "2500 nits Peak brightness",
        features: "AniMe Vision (341 programmable mini-LED matrix on back), 1ms response time"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core 3.3 GHz Cortex-X4 with ROG X-Mode performance profile",
        gpu: "Adreno 750",
        ram: "Up to 24GB LPDDR5X (8533 Mbps)",
        storage: "512GB / 1TB",
        storageType: "UFS 4.0 + NTFS external hard drive support",
        coolingSystem: "GameCool 8 360° SoC Cooling System Gen 2 with Boron Nitride & Rapid-Cooling Vapor Chamber"
      },
      camera: {
        rearSetup: "Triple Camera with 6-Axis Hybrid Gimbal Stabilizer 3.0",
        mainSensor: "50 MP, f/1.9, 24mm, 1/1.56\", 1.0µm, PDAF, 6-axis gimbal OIS (Sony IMX890)",
        telephoto: "32 MP, f/2.4, 65mm (3x optical zoom), PDAF, OIS",
        ultrawide: "13 MP, f/2.2, 13mm, 120˚ (ultrawide)",
        videoRecording: "8K@24fps, 4K@60fps, 1080p@240fps with Gimbal EIS",
        frontCamera: "32 MP RGBW, f/2.5, 22mm, 1.4µm pixel binning",
        features: "Light Trail photography, Quick Shot, Super Night mode"
      },
      battery: {
        capacity: "5500 mAh dual-cell battery",
        wiredCharging: "65W HyperCharge (100% in 39 mins, Quick Charge 5.0)",
        wirelessCharging: "15W Qi Wireless Charging",
        reverseCharging: "10W Reverse Wired Charging",
        batteryLifeScore: "18h 40m Gaming/Web Endurance"
      },
      build: {
        dimensions: "163.8 x 76.8 x 8.9 mm (6.45 x 3.02 x 0.35 in)",
        weight: "225 g (7.94 oz)",
        frameMaterial: "Matte Black Aluminum Alloy Frame",
        backMaterial: "Matte AG Glass with AniMe Vision Matrix",
        ipRating: "IP68 water and dust resistance (first time on a gaming phone)",
        colors: ["Phantom Black"],
        gamingControls: "AirTrigger ultrasonic shoulder triggers with tap, dual partition, swipe & gyroscopic aiming"
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be), dual-band concurrent",
        bluetooth: "5.4, aptX Lossless, LDAC",
        nfc: "Yes",
        usb: "Side-mounted USB Type-C 3.1 (DP 1.4 output) + Bottom USB-C 2.0 (Dual ports!)",
        sim: "Dual Nano-SIM",
        audioJack: "Yes! 3.5mm Headphone Jack with 32-bit/384kHz ESS SABRE DAC"
      },
      software: {
        osVersion: "Android 14",
        customUI: "ROG UI (switchable to Clean ZenUI stock Android)",
        promisedUpdates: "2 Major OS Updates & 4 Years Security",
        aiFeatures: "AI Grabber (in-game walkthrough text recognition), X Sense 2.0 auto-action, Background Mode"
      }
    },
    variants: [
      { ram: "16GB", storage: "512GB", priceUSD: 1199 },
      { ram: "24GB", storage: "1TB", priceUSD: 1499 }
    ],
    pros: ["Sublime 165Hz gaming display and 24GB RAM monster", "Dual USB-C ports and 3.5mm headphone jack with ESS DAC", "IP68 water resistance with sleek mainstream design", "AirTrigger capacitive shoulder buttons"],
    cons: ["Only 2 years of major OS update commitment", "Camera is decent but not rivaling Galaxy S24 Ultra / Vivo X100 Pro"]
  },
  {
    id: "sony-xperia-1-vi",
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    tagline: "Continuous 85-170mm Optical Telephoto & Bravia Tuned LTPO",
    price: { USD: 1299, EUR: 1399, INR: 119999, GBP: 1299 },
    releaseDate: "May 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King", "Battery Beast"],
    specScore: 93,
    userRating: 4.7,
    reviewCount: 940,
    badge: "Audiophile & Creator",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.5\" FHD+ LTPO OLED 1-120Hz, Bravia AI engine, 19.5:9",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "12GB RAM | 256GB / 512GB + MicroSD Card Slot (Up to 1.5TB)",
      rearCamera: "48MP Exmor T (OIS) + 12MP (3.5x-7.1x Continuous Optical Zoom) + 12MP Ultra",
      frontCamera: "12MP Exmor RS, 4K60 HDR",
      batteryCharging: "5000 mAh | 30W Wired, 15W Wireless, 2-day battery life",
      os: "Android 14 (3 Major OS Upgrades, 4 Years Security)",
      weight: "192g | 3.5mm Jack & MicroSD Slot"
    },
    detailedSpecs: {
      display: {
        type: "LTPO OLED, 1B colors, 120Hz, HDR BT.2020",
        size: "6.5 inches (86.5% screen-to-body ratio)",
        resolution: "1080 x 2340 pixels, 19.5:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "396 ppi density",
        protection: "Corning Gorilla Glass Victus 2 (front), Victus (back)",
        peakBrightness: "1500 nits Peak (50% brighter than Mark V)",
        features: "Powered by BRAVIA display engine, Sunlight Vision technology"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core 3.3 GHz Cortex-X4",
        gpu: "Adreno 750",
        ram: "12GB LPDDR5X",
        storage: "256GB / 512GB",
        storageType: "UFS 4.0, Expandable via MicroSDXC (dedicated tool-free tray)",
        coolingSystem: "First Xperia equipped with an integrated vapor chamber"
      },
      camera: {
        rearSetup: "Triple Zeiss T* Camera with True Continuous Optical Zoom",
        mainSensor: "48 MP, f/1.9, 24mm, 1/1.35\" (Exmor T for mobile 2-layer transistor), Dual Pixel PDAF, OIS",
        periscope: "12 MP, f/2.3-f/3.5, 85mm-170mm continuous optical zoom (3.5x to 7.1x optical!), Dual Pixel PDAF, OIS, 4cm telephoto macro",
        ultrawide: "12 MP, f/2.2, 16mm, 1/2.5\", Dual Pixel PDAF",
        videoRecording: "4K@120fps on all three rear cameras, S-Cinetone for mobile, HDR video",
        frontCamera: "12 MP, f/2.0, 24mm, 4K@60fps",
        features: "Zeiss T* anti-reflective coating, Physical two-stage camera shutter button, Real-time Eye AF (Humans/Animals/Birds)"
      },
      battery: {
        capacity: "5000 mAh Li-Po",
        wiredCharging: "30W Wired USB-PD (50% in 30 mins)",
        wirelessCharging: "15W Qi Wireless",
        reverseCharging: "Reverse Wireless Battery Share",
        batteryLifeScore: "17h 25m Active Use (Outstanding 2-day battery)"
      },
      build: {
        dimensions: "162 x 74 x 8.2 mm (6.38 x 2.91 x 0.32 in)",
        weight: "192 g (6.77 oz)",
        frameMaterial: "Ribbed Aluminum Frame with tactile grip",
        backMaterial: "Micro-textured Gorilla Glass Victus with tactile dot pattern",
        ipRating: "IP65 and IP68 dust/water resistant (up to 1.5m for 30m)",
        colors: ["Black", "Platinum Silver", "Khaki Green", "Scarlet Red"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.4, aptX HD, aptX Adaptive, LDAC",
        nfc: "Yes",
        usb: "USB Type-C 3.2 Gen 2, DisplayPort output (supports Sony Alpha monitor feed)",
        sim: "Nano-SIM + eSIM or MicroSD card tray",
        audioJack: "Yes! High-Resolution 3.5mm Headphone Jack with dedicated Premium Audio Circuitry"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Unified Sony Camera App + Stock Android interface",
        promisedUpdates: "3 Major Android OS upgrades & 4 Years Security",
        aiFeatures: "AI Human Pose Estimation AF, AI Sunlight Vision, 360 Reality Audio Upmix"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 1299 },
      { ram: "12GB", storage: "512GB", priceUSD: 1399 }
    ],
    pros: ["True continuous 85-170mm optical zoom lens", "Tool-free MicroSD expansion & 3.5mm headphone jack", "Unbelievable 2-day battery longevity", "Tactile textured glass and physical shutter button"],
    cons: ["Dropped 4K screen resolution down to 1080p FHD+", "High price tag with only 30W charging"]
  },
  {
    id: "nothing-phone-2",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    tagline: "Glyph Interface, Nothing OS 2.5 & Translucent Craftsmanship",
    price: { USD: 599, EUR: 649, INR: 39999, GBP: 579 },
    releaseDate: "July 2023",
    status: "In Stock",
    category: ["Value for Money", "Flagship"],
    specScore: 89,
    userRating: 4.6,
    reviewCount: 2840,
    badge: "Iconic Design",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.7\" LTPO OLED, 120Hz, HDR10+, 1600 nits",
      processor: "Qualcomm Snapdragon 8+ Gen 1 (4nm)",
      ramStorage: "12GB RAM | 256GB / 512GB UFS 3.1",
      rearCamera: "Dual 50MP: Sony IMX890 (OIS) + Samsung JN1 Ultra/Macro",
      frontCamera: "32MP Sony IMX615, 1080p60",
      batteryCharging: "4700 mAh | 45W Wired, 15W Wireless, 5W Reverse",
      os: "Nothing OS 2.5 (Android 14)",
      weight: "201.2g | Glyph LED Interface"
    },
    detailedSpecs: {
      display: {
        type: "LTPO OLED, 1B colors, 120Hz, HDR10+",
        size: "6.7 inches (87.2% screen-to-body ratio)",
        resolution: "1080 x 2412 pixels, 20:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO Adaptive",
        ppi: "393 ppi density",
        protection: "Corning Gorilla Glass",
        peakBrightness: "1600 nits Peak, 1000 nits HBM",
        features: "Symmetrical bezels, 240Hz touch sampling, Always-on"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8+ Gen 1 (4 nm TSMC)",
        cpu: "Octa-core 3.0 GHz Cortex-X2",
        gpu: "Adreno 730",
        ram: "8GB / 12GB LPDDR5",
        storage: "128GB / 256GB / 512GB",
        storageType: "UFS 3.1",
        coolingSystem: "Advanced Graphite Heat dissipation sheet"
      },
      camera: {
        rearSetup: "Dual 50MP Camera System",
        mainSensor: "50 MP, f/1.88, 24mm, 1/1.56\", 1.0µm, PDAF, OIS (Sony IMX890)",
        ultrawide: "50 MP, f/2.2, 114˚, 1/2.76\", 0.64µm, AF, 4cm Macro (Samsung JN1)",
        videoRecording: "4K@60fps, 1080p@60fps, Live HDR, Action Mode",
        frontCamera: "32 MP, f/2.45, 1/2.74\", 1080p@60fps",
        features: "Glyph Fill Light, Advanced HDR, Motion Capture 2.0"
      },
      battery: {
        capacity: "4700 mAh Li-Ion",
        wiredCharging: "45W Wired (100% in 55 mins, PPS)",
        wirelessCharging: "15W Qi Wireless",
        reverseCharging: "5W Reverse Wireless (Glyph ring lights up during reverse charging)",
        batteryLifeScore: "14h 50m Active Use"
      },
      build: {
        dimensions: "162.1 x 76.4 x 8.6 mm (6.38 x 3.01 x 0.34 in)",
        weight: "201.2 g (7.10 oz)",
        frameMaterial: "100% Recycled Aluminum Frame",
        backMaterial: "Transparent Curved Glass Back with 33 addressable Glyph zones",
        ipRating: "IP54 splash and dust protection",
        colors: ["White", "Dark Grey"],
        glyph: "Glyph Composer, Essential Notifications, Timer countdown, Volume indicator"
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 6 (802.11ax), dual-band",
        bluetooth: "5.3, A2DP, LE",
        nfc: "Yes, Google Wallet ready",
        usb: "USB Type-C 2.0, OTG",
        sim: "Dual Nano-SIM",
        audioJack: "No (Dual stereo speakers)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Nothing OS 2.5 with bespoke monochrome widgets & dot-matrix font",
        promisedUpdates: "3 Major Android OS updates & 4 Years bi-monthly security",
        aiFeatures: "ChatGPT direct widget integration, Smart App Locker, Glyph Progress API"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 599 },
      { ram: "12GB", storage: "512GB", priceUSD: 699 }
    ],
    pros: ["Unique translucent design with programmable Glyph lighting", "Clean, bloat-free Nothing OS with monochromatic aesthetics", "Great battery life & fluid LTPO display", "Balanced $599 price point"],
    cons: ["Lacks a dedicated telephoto zoom lens", "IP54 rating only handles light splashes"]
  },
  {
    id: "vivo-x100-pro",
    name: "Vivo X100 Pro",
    brand: "Vivo",
    tagline: "Zeiss APO 100mm Floating Telephoto & Dimensity 9300 All-Big-Core",
    price: { USD: 999, EUR: 1199, INR: 89999, GBP: 999 },
    releaseDate: "December 2023",
    status: "In Stock",
    category: ["Flagship", "Camera King"],
    specScore: 96,
    userRating: 4.8,
    reviewCount: 1650,
    badge: "Master of Telephoto",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.78\" 8T LTPO AMOLED, 120Hz, 3000 nits, 2160Hz PWM",
      processor: "MediaTek Dimensity 9300 (4nm) + Vivo V3 Imaging Chip",
      ramStorage: "16GB LPDDR5T RAM | 512GB UFS 4.0",
      rearCamera: "Triple 50MP: 1\" Sony IMX989 (OIS) + 50MP Zeiss APO Tele (OIS) + 50MP Ultra",
      frontCamera: "32MP f/2.0, 4K60fps",
      batteryCharging: "5400 mAh | 100W Dual-Cell FlashCharge, 50W Wireless",
      os: "Funtouch OS 14 (Android 14)",
      weight: "225g | Sunset Orange / Asteroid Black"
    },
    detailedSpecs: {
      display: {
        type: "8T LTPO AMOLED, 1B colors, 120Hz, HDR10+",
        size: "6.78 inches (89.8% screen-to-body ratio)",
        resolution: "1260 x 2800 pixels, 20:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "453 ppi density",
        protection: "Armor Glass",
        peakBrightness: "3000 nits Peak",
        features: "2160Hz high frequency PWM dimming, SGS eye care certified"
      },
      performance: {
        chipset: "MediaTek Dimensity 9300 (4 nm TSMC) All Big-Core Architecture",
        cpu: "Octa-core (1x3.25 GHz Cortex-X4 & 3x2.85 GHz Cortex-X4 & 4x2.0 GHz Cortex-A720)",
        gpu: "Immortalis-G720 MC12 with Ray Tracing",
        ram: "16GB LPDDR5T (Fastest mobile RAM)",
        storage: "512GB / 1TB",
        storageType: "UFS 4.0",
        coolingSystem: "Super-large VC bionic heat dissipation system"
      },
      camera: {
        rearSetup: "Triple 50MP Zeiss Co-engineered Optics with T* Coating",
        mainSensor: "50 MP, f/1.75, 23mm, 1.0\"-type Sony IMX989, Dual Pixel PDAF, Laser AF, OIS",
        periscope: "50 MP, f/2.5, 100mm (4.3x optical zoom, Zeiss APO certified floating lens), 1/2\", PDAF, OIS, 100x digital zoom, macro mode",
        ultrawide: "50 MP, f/2.0, 15mm, 119˚ (ultrawide), 1/2.76\", AF",
        videoRecording: "8K@30fps, 4K@60fps Cinematic Portrait Video (powered by 6nm Vivo V3 chip)",
        frontCamera: "32 MP, f/2.0, wide, 4K@60fps",
        features: "Zeiss Multifocal Portrait (24/35/50/85/100mm), Zeiss Sunshot mode"
      },
      battery: {
        capacity: "5400 mAh BlueOcean Silicon-Carbon battery",
        wiredCharging: "100W FlashCharge (50% in 12 mins, 100% in 29 mins)",
        wirelessCharging: "50W Wireless FlashCharge",
        reverseCharging: "Reverse wired OTG charging",
        batteryLifeScore: "16h 50m Active Use"
      },
      build: {
        dimensions: "164.1 x 75.3 x 8.9 mm (6.46 x 2.96 x 0.35 in)",
        weight: "225 g (7.94 oz)",
        frameMaterial: "Aviation-grade Aluminum Frame",
        backMaterial: "Sunburst Stainless Steel Halo Ring + Fluorite AG Glass / Vegan Leather",
        ipRating: "IP68 water and dust resistance",
        colors: ["Asteroid Black", "Sunset Orange", "Starlight Blue"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.4, aptX HD, LHDC, LDAC",
        nfc: "Yes, full-coverage 360-degree NFC",
        usb: "USB Type-C 3.2 Gen 1, OTG",
        sim: "Dual Nano-SIM or eSIM",
        audioJack: "No (Hi-Res Audio stereo speakers)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Funtouch OS 14 (Global) / OriginOS 4",
        promisedUpdates: "3 Major Android OS updates & 4 Years Security",
        aiFeatures: "Vivo V3 AI ISP chip, BlueLM large AI model integration, AI photo expand"
      }
    },
    variants: [
      { ram: "16GB", storage: "512GB", priceUSD: 999 },
      { ram: "16GB", storage: "1TB", priceUSD: 1149 }
    ],
    pros: ["Zeiss APO telephoto lens with mesmerizing optical clarity & macro", "True 1-inch main camera with zero shutter lag", "5400mAh battery with rapid 100W charging", "Class-leading low light portraiture"],
    cons: ["Funtouch OS interface lacks the polish of One UI / iOS", "Front camera lacks autofocus"]
  },
  {
    id: "motorola-edge-50-ultra",
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    tagline: "Pantone Validated Colors, Real Wood Craft & 125W TurboPower",
    price: { USD: 899, EUR: 999, INR: 59999, GBP: 849 },
    releaseDate: "April 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King"],
    specScore: 92,
    userRating: 4.6,
    reviewCount: 980,
    badge: "Design Masterpiece",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.7\" Super HD (1220p) pOLED, 144Hz, Pantone Validated, 2500 nits",
      processor: "Qualcomm Snapdragon 8s Gen 3 (4nm)",
      ramStorage: "16GB LPDDR5X | 512GB / 1TB UFS 4.0",
      rearCamera: "50MP OmniVision (OIS) + 64MP 3x Periscope (OIS) + 50MP Ultra",
      frontCamera: "50MP Autofocus, 4K60fps",
      batteryCharging: "4500 mAh | 125W Wired, 50W Wireless, 10W Reverse",
      os: "Hello UI (Android 14)",
      weight: "197g | Real Wood / Vegan Leather Finish"
    },
    detailedSpecs: {
      display: {
        type: "pOLED, 1B colors, 144Hz, HDR10+, Pantone Validated Color & Skin Tone",
        size: "6.7 inches (92.1% screen-to-body ratio)",
        resolution: "1220 x 2712 pixels, 20:9 ratio",
        refreshRate: "144Hz Ultra-fluid",
        ppi: "446 ppi density",
        protection: "Corning Gorilla Glass Victus",
        peakBrightness: "2500 nits Peak",
        features: "Symmetrical endless edge design, DCI-P3 100%"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8s Gen 3 (4 nm)",
        cpu: "Octa-core 3.0 GHz Cortex-X4",
        gpu: "Adreno 735",
        ram: "16GB LPDDR5X",
        storage: "512GB / 1TB",
        storageType: "UFS 4.0",
        coolingSystem: "Multilayer Liquid Cooling Architecture"
      },
      camera: {
        rearSetup: "Triple 50MP + 64MP + 50MP Pantone Validated Cameras",
        mainSensor: "50 MP, f/1.6, 1/1.3\", 1.2µm, multi-directional PDAF, Laser AF, OIS",
        periscope: "64 MP, f/2.4, 72mm (3x optical zoom periscope), PDAF, OIS, 100x Super Zoom",
        ultrawide: "50 MP, f/2.0, 12mm, 122˚ (ultrawide), 0.64µm, PDAF, Macro Vision",
        videoRecording: "4K@60fps, 1080p@960fps slow-motion, 10-bit HDR10+",
        frontCamera: "50 MP, f/1.9, 21mm (wide), 0.64µm, PDAF, 4K@60fps",
        features: "Moto AI Photo Enhancement engine, Style Sync, Action Shot"
      },
      battery: {
        capacity: "4500 mAh Li-Ion",
        wiredCharging: "125W TurboPower (Full day power in 7 mins, 100% in 19 mins)",
        wirelessCharging: "50W Wireless TurboPower",
        reverseCharging: "10W Reverse Wireless",
        batteryLifeScore: "14h 10m Active Use"
      },
      build: {
        dimensions: "161.1 x 72.4 x 8.6 mm (6.34 x 2.85 x 0.34 in)",
        weight: "197 g (6.95 oz)",
        frameMaterial: "Sandblasted Aluminum Frame",
        backMaterial: "Genuine Nordic Wood or Vegan Leather back",
        ipRating: "IP68 dust and water resistance",
        colors: ["Nordic Wood", "Peach Fuzz (Pantone Color of the Year)", "Forest Grey"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.4, aptX Lossless",
        nfc: "Yes",
        usb: "USB Type-C 3.1 Gen 2, DisplayPort 1.4, Ready For PC support",
        sim: "Nano-SIM and eSIM",
        audioJack: "No (Tuned by Dolby Atmos with Snapdragon Sound)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Hello UI (Clean Motorola experience)",
        promisedUpdates: "3 Major Android OS updates & 4 Years Security",
        aiFeatures: "Moto AI Magic Canvas, Smart Connect PC multi-screen, Moto Unplugged"
      }
    },
    variants: [
      { ram: "16GB", storage: "512GB", priceUSD: 899 },
      { ram: "16GB", storage: "1TB", priceUSD: 999 }
    ],
    pros: ["Genuine Nordic wood back finish feels sensational", "Blazing 125W wired and 50W wireless charging", "Pantone-certified color & skin tone accuracy", "Ultra-smooth 144Hz OLED panel"],
    cons: ["Snapdragon 8s Gen 3 is slightly weaker than full 8 Gen 3", "4500mAh battery is smaller than 5000+ mAh rivals"]
  },
  {
    id: "google-pixel-8a",
    name: "Google Pixel 8a",
    brand: "Google",
    tagline: "The Best Midrange Camera & 7 Years of Updates for Under $500",
    price: { USD: 499, EUR: 549, INR: 52999, GBP: 499 },
    releaseDate: "May 2024",
    status: "In Stock",
    category: ["Budget Champion", "Camera King", "Compact"],
    specScore: 88,
    userRating: 4.7,
    reviewCount: 3100,
    badge: "Best Midranger",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.1\" Actua OLED, 120Hz, HDR, 2000 nits peak",
      processor: "Google Tensor G3 (4nm) + Titan M2 Security",
      ramStorage: "8GB LPDDR5x | 128GB / 256GB UFS 3.1",
      rearCamera: "64MP (OIS) + 13MP Ultrawide 120°",
      frontCamera: "13MP Ultrawide, 4K30fps",
      batteryCharging: "4492 mAh | 18W Wired, 7.5W Qi Wireless",
      os: "Android 14 (7 Years OS, Feature Drops & Security)",
      weight: "188g | IP67 Certified Compact"
    },
    detailedSpecs: {
      display: {
        type: "Actua OLED, 120Hz, HDR",
        size: "6.1 inches (81.6% screen-to-body ratio)",
        resolution: "1080 x 2400 pixels, 20:9 ratio",
        refreshRate: "60Hz - 120Hz Smooth Display",
        ppi: "430 ppi density",
        protection: "Corning Gorilla Glass 3",
        peakBrightness: "2000 nits Peak, 1400 nits HBM",
        features: "Always-on display, Now Playing song identification"
      },
      performance: {
        chipset: "Google Tensor G3 (4 nm)",
        cpu: "Nona-core (1x3.0 GHz Cortex-X3 & 4x2.45 GHz & 4x2.15 GHz)",
        gpu: "Immortalis-G715s MC10",
        ram: "8GB LPDDR5X",
        storage: "128GB / 256GB",
        storageType: "UFS 3.1",
        coolingSystem: "Internal aluminum thermal spreader"
      },
      camera: {
        rearSetup: "Dual Rear Camera Bar (64MP Wide + 13MP Ultra)",
        mainSensor: "64 MP, f/1.89, 26mm, 1/1.73\", 0.8µm, Dual Pixel PDAF, OIS",
        ultrawide: "13 MP, f/2.2, 120˚ (ultrawide), 1.12µm",
        videoRecording: "4K@60fps, 1080p@240fps, OIS + EIS hybrid stabilization",
        frontCamera: "13 MP, f/2.2, 20mm (ultrawide), 4K@30fps",
        features: "Magic Editor, Best Take, Audio Magic Eraser, Real Tone, Super Res Zoom 8x"
      },
      battery: {
        capacity: "4492 mAh Li-Ion",
        wiredCharging: "18W Wired USB-PD",
        wirelessCharging: "7.5W Qi Wireless",
        reverseCharging: "No",
        batteryLifeScore: "14h 20m Active Use"
      },
      build: {
        dimensions: "152.1 x 72.7 x 8.9 mm (5.99 x 2.86 x 0.35 in)",
        weight: "188 g (6.63 oz)",
        frameMaterial: "Matte Aluminum Frame",
        backMaterial: "Matte Composite Recycled Plastic",
        ipRating: "IP67 dust and water resistant",
        colors: ["Obsidian", "Porcelain", "Bay (Blue)", "Aloe (Green)"]
      },
      connectivity: {
        fiveG: "5G Sub-6GHz",
        wifi: "Wi-Fi 6E (802.11ax)",
        bluetooth: "5.3, LE",
        nfc: "Yes, Google Pay",
        usb: "USB Type-C 3.2",
        sim: "Nano-SIM and eSIM",
        audioJack: "No (Stereo speakers)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Stock Google Pixel Experience",
        promisedUpdates: "7 Full Years of OS and Security Drops (until 2031!)",
        aiFeatures: "Circle to Search, Call Screen, Gemini Nano, Live Translate"
      }
    },
    variants: [
      { ram: "8GB", storage: "128GB", priceUSD: 499 },
      { ram: "8GB", storage: "256GB", priceUSD: 559 }
    ],
    pros: ["Full 7 years of Google software updates for $499", "Benchmark flagship camera quality in its price category", "Smooth 120Hz display upgrade", "Comfortable compact form factor"],
    cons: ["Chunky display bezels", "Slow 18W wired charging speed"]
  },
  {
    id: "oppo-find-x7-ultra",
    name: "Oppo Find X7 Ultra",
    brand: "Oppo",
    tagline: "World's First Dual Periscope Smartphone with 1-Inch Sony LYT-900",
    price: { USD: 1099, EUR: 1199, INR: 91999, GBP: 1049 },
    releaseDate: "January 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King"],
    specScore: 97,
    userRating: 4.8,
    reviewCount: 1340,
    badge: "Dual Periscope Pioneer",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.82\" LTPO AMOLED, 120Hz, Dolby Vision, 4500 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "16GB RAM | 512GB UFS 4.0",
      rearCamera: "Quad 50MP: 1\" LYT-900 (OIS) + 3x Periscope (OIS) + 6x Periscope (OIS) + 50MP Ultra",
      frontCamera: "32MP Sony IMX709, AF, 4K60fps",
      batteryCharging: "5000 mAh | 100W SUPERVOOC, 50W AIRVOOC, 10W Reverse",
      os: "ColorOS 14 (Android 14)",
      weight: "221g | Dual Tone Vegan Leather & Glass"
    },
    detailedSpecs: {
      display: {
        type: "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+",
        size: "6.82 inches (90.3% screen-to-body ratio)",
        resolution: "1440 x 3168 pixels, 19.8:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "510 ppi density",
        protection: "Corning Gorilla Glass Victus 2",
        peakBrightness: "4500 nits Peak",
        features: "ProXDR display, 2160Hz PWM dimming, Wet touch tech"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core 3.3 GHz Cortex-X4",
        gpu: "Adreno 750",
        ram: "16GB LPDDR5X",
        storage: "512GB",
        storageType: "UFS 4.0",
        coolingSystem: "Tiangong Cooling System with aerospace-grade VC"
      },
      camera: {
        rearSetup: "World-First Dual Periscope Quad 50MP Hasselblad Camera",
        mainSensor: "50 MP, f/1.8, 23mm, 1.0\"-type Sony LYT-900, multi-directional PDAF, Laser AF, OIS",
        periscope: "50 MP 65mm (3x optical periscope, Sony IMX890, 1/1.56\", OIS) + 50 MP 135mm (6x optical periscope, Sony IMX858, 1/2.51\", OIS)",
        ultrawide: "50 MP, f/2.0, 14mm, 123˚, 1/1.95\", PDAF, 4cm Macro (Sony LYT-600)",
        videoRecording: "4K@60fps Dolby Vision HDR, 1080p@240fps",
        frontCamera: "32 MP, f/2.4, 21mm, PDAF, 4K@60fps",
        features: "Hasselblad HyperTone Camera System, Master Portrait, ProXDR Photo"
      },
      battery: {
        capacity: "5000 mAh Li-Po",
        wiredCharging: "100W SUPERVOOC (100% in 26 mins)",
        wirelessCharging: "50W AIRVOOC Wireless",
        reverseCharging: "10W Reverse Wireless",
        batteryLifeScore: "16h 30m Active Use"
      },
      build: {
        dimensions: "164.3 x 76.2 x 9.5 mm (6.47 x 3.00 x 0.37 in)",
        weight: "221 g (7.80 oz)",
        frameMaterial: "Aluminum alloy frame with circular camera vault",
        backMaterial: "Dual-tone luxury vegan leather and frosted glass",
        ipRating: "IP68 water and dust resistant",
        colors: ["Ocean Blue", "Sepia Brown", "Tailored Black"],
        alertSlider: "VIP Mode privacy alert slider"
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.4, aptX HD, LHDC 5.0",
        nfc: "Yes, dual antenna NFC",
        usb: "USB Type-C 3.2 Gen 1",
        sim: "Dual Nano-SIM",
        audioJack: "No (Dolby Atmos stereo sound)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "ColorOS 14 with AndesGPT AI engine",
        promisedUpdates: "4 Major Android OS Updates & 5 Years Security",
        aiFeatures: "AI Smart Image Matting, AI Article Summary, AndesGPT localized assistants"
      }
    },
    variants: [
      { ram: "16GB", storage: "256GB", priceUSD: 1049 },
      { ram: "16GB", storage: "512GB", priceUSD: 1199 }
    ],
    pros: ["Groundbreaking dual periscope cameras (3x and 6x optical)", "True 1-inch Sony LYT-900 sensor delivers DSLR-grade dynamic range", "Rapid 100W wired & 50W wireless charging", "Stunning two-tone leather & glass build"],
    cons: ["Limited official availability outside of mainland China & select Asian markets", "No 8K video recording"]
  },
  {
    id: "samsung-galaxy-a55",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    tagline: "Premium Metal & Glass Design with Knox Vault & 50MP OIS",
    price: { USD: 449, EUR: 479, INR: 39999, GBP: 439 },
    releaseDate: "March 2024",
    status: "In Stock",
    category: ["Budget Champion", "Value for Money", "Battery Beast"],
    specScore: 86,
    userRating: 4.5,
    reviewCount: 4500,
    badge: "Global Best Seller",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.6\" Super AMOLED, 120Hz, HDR10+, 1000 nits Vision Booster",
      processor: "Samsung Exynos 1480 (4nm) with AMD Xclipse 530 GPU",
      ramStorage: "8GB / 12GB RAM | 128GB / 256GB + MicroSD slot",
      rearCamera: "50MP (f/1.8 OIS) + 12MP Ultrawide + 5MP Macro",
      frontCamera: "32MP f/2.2, 4K30fps",
      batteryCharging: "5000 mAh | 25W Wired Fast Charging",
      os: "Android 14, One UI 6.1 (4 OS Upgrades, 5y Security)",
      weight: "213g | Aluminum Frame & Gorilla Glass Victus+"
    },
    detailedSpecs: {
      display: {
        type: "Super AMOLED, 120Hz, HDR10+",
        size: "6.6 inches (85.8% screen-to-body ratio)",
        resolution: "1080 x 2340 pixels, 19.5:9 ratio",
        refreshRate: "120Hz Smooth",
        ppi: "390 ppi density",
        protection: "Corning Gorilla Glass Victus+",
        peakBrightness: "1000 nits (HBM) with Vision Booster",
        features: "Always-on display, Eye Comfort Shield"
      },
      performance: {
        chipset: "Samsung Exynos 1480 (4 nm)",
        cpu: "Octa-core (4x2.75 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55)",
        gpu: "Xclipse 530 (AMD RDNA 2 architecture)",
        ram: "8GB / 12GB",
        storage: "128GB / 256GB",
        storageType: "UFS 3.1, MicroSDXC expandable up to 1TB",
        coolingSystem: "74% larger vapor chamber than A54"
      },
      camera: {
        rearSetup: "Triple Camera System (50MP Wide + 12MP Ultra + 5MP Macro)",
        mainSensor: "50 MP, f/1.8, (wide), 1/1.56\", 1.0µm, PDAF, OIS",
        ultrawide: "12 MP, f/2.2, 123˚ (ultrawide), 1/3.06\", 1.12µm",
        telephoto: "None (Macro: 5 MP, f/2.4)",
        videoRecording: "4K@30fps, 1080p@60fps, gyro-EIS",
        frontCamera: "32 MP, f/2.2, 26mm (wide), 4K@30fps",
        features: "Nightography with advanced AI ISP, Super HDR video"
      },
      battery: {
        capacity: "5000 mAh Li-Ion",
        wiredCharging: "25W Wired",
        wirelessCharging: "No",
        reverseCharging: "No",
        batteryLifeScore: "17h 40m Active Use"
      },
      build: {
        dimensions: "161.1 x 77.4 x 8.2 mm (6.34 x 3.05 x 0.32 in)",
        weight: "213 g (7.51 oz)",
        frameMaterial: "Brushed Aluminum Frame with Key Island design",
        backMaterial: "Corning Gorilla Glass Victus+ back",
        ipRating: "IP67 dust and water resistance (1m for 30m)",
        colors: ["Awesome Iceblue", "Awesome Navy", "Awesome Lilac", "Awesome Lemon"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 6 (802.11ax), dual-band",
        bluetooth: "5.3, A2DP, LE",
        nfc: "Yes, Samsung Wallet",
        usb: "USB Type-C 2.0, OTG",
        sim: "Nano-SIM + eSIM or hybrid MicroSD slot",
        audioJack: "No (Stereo speakers with Dolby Atmos)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "One UI 6.1 with Knox Vault hardware security",
        promisedUpdates: "4 Major Android OS Upgrades & 5 Years Security Updates",
        aiFeatures: "Image Clipper, Object Eraser, Remaster Picture"
      }
    },
    variants: [
      { ram: "8GB", storage: "128GB", priceUSD: 449 },
      { ram: "8GB", storage: "256GB", priceUSD: 499 }
    ],
    pros: ["Flagship metal frame and Gorilla Glass Victus+ construction", "Exceptional 5000mAh battery endurance", "Guaranteed 4 major OS upgrades & Knox Vault security", "MicroSD card expansion support"],
    cons: ["25W charging is slow compared to competitors", "No wireless charging"]
  },
  {
    id: "realme-gt-6",
    name: "Realme GT 6",
    brand: "Realme",
    tagline: "Flagship Killer with 6000 nits Ultra-Bright Display & 120W SUPERVOOC",
    price: { USD: 549, EUR: 599, INR: 40999, GBP: 549 },
    releaseDate: "June 2024",
    status: "In Stock",
    category: ["Value for Money", "Gaming", "Battery Beast"],
    specScore: 92,
    userRating: 4.7,
    reviewCount: 2210,
    badge: "Brightness King",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.78\" 8T LTPO AMOLED, 120Hz, World-record 6000 nits Peak",
      processor: "Qualcomm Snapdragon 8s Gen 3 (4nm)",
      ramStorage: "12GB / 16GB RAM | 256GB / 512GB UFS 4.0",
      rearCamera: "50MP Sony LYT-808 (OIS) + 50MP (2x Tele) + 8MP Ultra",
      frontCamera: "32MP Sony IMX615, 4K30fps",
      batteryCharging: "5500 mAh | 120W SUPERVOOC (50% in 10 min, 100% in 28 min)",
      os: "Realme UI 5.0 (Android 14)",
      weight: "199g | Mirror Nano-Coating"
    },
    detailedSpecs: {
      display: {
        type: "8T LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+",
        size: "6.78 inches (91.8% screen-to-body ratio)",
        resolution: "1264 x 2780 pixels, 19.8:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "450 ppi density",
        protection: "Corning Gorilla Glass Victus 2",
        peakBrightness: "6000 nits Peak (Brightest smartphone screen in the world)",
        features: "2160Hz PWM dimming, SGS 5-star Sunlight-Readable Display, AI Eye Protection"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8s Gen 3 (4 nm)",
        cpu: "Octa-core 3.0 GHz Cortex-X4",
        gpu: "Adreno 735",
        ram: "12GB / 16GB LPDDR5X",
        storage: "256GB / 512GB",
        storageType: "UFS 4.0",
        coolingSystem: "10,014 mm² Iceberg Dual-VC Cooling System"
      },
      camera: {
        rearSetup: "Triple Camera System (50MP Main + 50MP Telephoto + 8MP Ultrawide)",
        mainSensor: "50 MP, f/1.7, 26mm, 1/1.4\", 1.12µm, PDAF, OIS (Sony LYT-808)",
        telephoto: "50 MP, f/2.0, 47mm (2x optical telephoto / portrait), 1/2.8\", PDAF (Samsung JN5)",
        ultrawide: "8 MP, f/2.2, 16mm, 112˚ (ultrawide), 1/4.0\"",
        videoRecording: "4K@60fps Dolby Vision, 1080p@120fps",
        frontCamera: "32 MP, f/2.45, 21mm, 4K@30fps",
        features: "Super OIS, AI Night Vision Mode, Street Photography Mode 4.0"
      },
      battery: {
        capacity: "5500 mAh dual-cell Li-Po",
        wiredCharging: "120W SUPERVOOC (50% in 10 mins, 100% in 28 mins)",
        wirelessCharging: "No",
        reverseCharging: "Reverse wired charging",
        batteryLifeScore: "18h 15m Active Use"
      },
      build: {
        dimensions: "162 x 75.1 x 8.6 mm (6.38 x 2.96 x 0.34 in)",
        weight: "199 g (7.02 oz)",
        frameMaterial: "Composite metallic luster frame",
        backMaterial: "Mirror Anodized Nano-texture Glass back",
        ipRating: "IP65 dust and water resistance",
        colors: ["Fluid Silver", "Razor Green"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 6 (802.11ax), dual-band",
        bluetooth: "5.4, aptX HD, LHDC",
        nfc: "Yes, 360-degree NFC",
        usb: "USB Type-C 2.0",
        sim: "Dual Nano-SIM",
        audioJack: "No (Dual stereo speakers with O-Reality Audio)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "Realme UI 5.0",
        promisedUpdates: "3 Major Android OS Upgrades & 4 Years Security",
        aiFeatures: "AI Smart Loop (drag and drop context share), AI Smart Removal, AI Night Vision"
      }
    },
    variants: [
      { ram: "12GB", storage: "256GB", priceUSD: 549 },
      { ram: "16GB", storage: "512GB", priceUSD: 629 }
    ],
    pros: ["World-record 6000 nits display visibility under direct sun", "Blazing 120W wired charging with huge 5500mAh cell", "High-tier Sony LYT-808 primary sensor with OIS", "Snapdragon 8s Gen 3 power at $549"],
    cons: ["Ultrawide sensor is only 8MP", "No wireless charging or full IP68 water immersion"]
  },
  {
    id: "honor-magic-6-pro",
    name: "Honor Magic 6 Pro",
    brand: "Honor",
    tagline: "180MP Periscope Telephoto & 2nd Gen Silicon-Carbon 5600mAh Battery",
    price: { USD: 1099, EUR: 1299, INR: 89999, GBP: 1099 },
    releaseDate: "January 2024",
    status: "In Stock",
    category: ["Flagship", "Camera King", "Battery Beast"],
    specScore: 97,
    userRating: 4.8,
    reviewCount: 1720,
    badge: "DXOMARK Leader",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    keySpecs: {
      display: "6.8\" LTPO OLED, 120Hz, 4320Hz PWM Flicker-Free, 5000 nits",
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      ramStorage: "12GB / 16GB RAM | 512GB / 1TB UFS 4.0",
      rearCamera: "50MP Variable f/1.4-2.0 + 180MP Periscope (2.5x-100x OIS) + 50MP Ultra",
      frontCamera: "50MP 3D ToF Face Unlock, 4K60fps",
      batteryCharging: "5600 mAh | 80W Wired, 66W Wireless, Sub-zero resistance",
      os: "MagicOS 8.0 (Android 14)",
      weight: "225g | NanoCrystal Shield Glass"
    },
    detailedSpecs: {
      display: {
        type: "LTPO OLED, 1B colors, 120Hz, HDR, Dolby Vision",
        size: "6.8 inches (91.6% screen-to-body ratio)",
        resolution: "1280 x 2800 pixels, 19.5:9 ratio",
        refreshRate: "1Hz - 120Hz LTPO",
        ppi: "453 ppi density",
        protection: "Honor NanoCrystal Shield (10x anti-drop certified by SGS)",
        peakBrightness: "5000 nits Peak, 1600 nits HBM",
        features: "4320Hz ultra-high frequency PWM dimming (industry zero flicker), Dynamic Dimming"
      },
      performance: {
        chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        cpu: "Octa-core 3.3 GHz Cortex-X4",
        gpu: "Adreno 750",
        ram: "12GB / 16GB LPDDR5X",
        storage: "512GB / 1TB",
        storageType: "UFS 4.0",
        coolingSystem: "Ultra-wide Liquid Cooling VC with high thermal conductivity graphite"
      },
      camera: {
        rearSetup: "Falcon Camera System (50MP Variable + 180MP Periscope + 50MP Ultra)",
        mainSensor: "50 MP, f/1.4-f/2.0 variable aperture, 23mm, 1/1.3\", Omni-directional PDAF, Laser AF, OIS",
        periscope: "180 MP, f/2.6, (2.5x optical zoom, up to 100x digital zoom), 1/1.49\", PDAF, OIS (Highest telephoto resolution in the world)",
        ultrawide: "50 MP, f/2.0, 13mm, 122˚ (ultrawide), 1/2.88\", AF, 2.5cm Macro",
        videoRecording: "4K@60fps, 1080p@240fps, 10-bit Log video mode",
        frontCamera: "50 MP, f/2.0, 22mm, AF + 3D Depth Camera for Biometric Face Unlock",
        features: "AI Motion Sensing Capture 2.0 (auto-captures sports & jumping), Sport Portrait"
      },
      battery: {
        capacity: "5600 mAh 2nd Gen Silicon-Carbon with E1 power management chip",
        wiredCharging: "80W Wired (100% in 39 mins)",
        wirelessCharging: "66W Wireless SuperCharge",
        reverseCharging: "5W Reverse Wireless",
        batteryLifeScore: "19h 10m Active Endurance (Scores #1 on DXOMARK Battery)"
      },
      build: {
        dimensions: "162.5 x 75.8 x 8.9 mm (6.40 x 2.98 x 0.35 in)",
        weight: "225 g or 229 g",
        frameMaterial: "Satin Aluminum Frame",
        backMaterial: "Curved Glass or Ripple Vegan Leather back",
        ipRating: "IP68 water and dust resistant",
        colors: ["Epi Green", "Black", "Cloud Purple"]
      },
      connectivity: {
        fiveG: "5G SA/NSA Dual SIM",
        wifi: "Wi-Fi 7 (802.11be)",
        bluetooth: "5.3, aptX HD, LDAC",
        nfc: "Yes",
        usb: "USB Type-C 3.2 Gen 1, DisplayPort 1.2",
        sim: "Dual Nano-SIM or eSIM",
        audioJack: "No (Spatial Audio dual stereo speakers)"
      },
      software: {
        osVersion: "Android 14",
        customUI: "MagicOS 8.0 with Magic Portal intent-based AI",
        promisedUpdates: "4 Major OS Upgrades & 5 Years Security",
        aiFeatures: "Magic Portal (drag text/image to edge for instant navigation), Magic Capsule, Smart Privacy Call"
      }
    },
    variants: [
      { ram: "12GB", storage: "512GB", priceUSD: 1099 },
      { ram: "16GB", storage: "1TB", priceUSD: 1249 }
    ],
    pros: ["Massive 180MP periscope zoom lens with extraordinary detail", "5600mAh Silicon-Carbon battery works reliably even at -20°C", "Secure 3D ToF Face Unlock like Apple Face ID", "Industry-best 4320Hz PWM eye protection"],
    cons: ["Bulky circular camera module", "Pill-shaped cutout on top of display is noticeable"]
  }
];

// Brands information
const BRAND_LIST = [
  { name: "All Brands", count: 12, slug: "all", logo: "globe2" },
  { name: "Apple", count: 1, slug: "apple", country: "USA", logo: "apple" },
  { name: "Samsung", count: 3, slug: "samsung", country: "South Korea", logo: "circle-fill" },
  { name: "Google", count: 2, slug: "google", country: "USA", logo: "google" },
  { name: "Xiaomi", count: 1, slug: "xiaomi", country: "China", logo: "lightning-charge-fill" },
  { name: "OnePlus", count: 1, slug: "oneplus", country: "China", logo: "plus-square-fill" },
  { name: "Sony", count: 1, slug: "sony", country: "Japan", logo: "camera-reels-fill" },
  { name: "Asus", count: 1, slug: "asus", country: "Taiwan", logo: "controller" },
  { name: "Nothing", count: 1, slug: "nothing", country: "UK", logo: "lightbulb-fill" },
  { name: "Vivo", count: 1, slug: "vivo", country: "China", logo: "stars" },
  { name: "Motorola", count: 1, slug: "motorola", country: "USA / Global", logo: "soundwave" },
  { name: "Oppo", count: 1, slug: "oppo", country: "China", logo: "gem" },
  { name: "Realme", count: 1, slug: "realme", country: "China", logo: "speedometer" },
  { name: "Honor", count: 1, slug: "honor", country: "China", logo: "shield-fill-check" }
];

// Currency exchange rates for dynamic currency switcher
const CURRENCIES = {
  USD: { symbol: "$", rate: 1, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.92, name: "Euro" },
  GBP: { symbol: "£", rate: 0.79, name: "British Pound" },
  INR: { symbol: "₹", rate: 83.5, name: "Indian Rupee" }
};
