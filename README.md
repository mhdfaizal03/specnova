# SPECNOVA (99Mobiles Reference) - Global Mobile Specification & Comparison Platform

A dynamic, fully responsive, classic **Black & White** smartphone specification portal inspired by **91mobiles** and **GSMArena**. Built purely with **HTML5, CSS3, Bootstrap 5.3, and Vanilla JavaScript**.

---

## 📱 Features

1. **Classic Black & White Aesthetic (OLED Dark & Studio Light Themes)**
   - High-contrast, minimalist monochrome palette.
   - One-click theme toggle between deep pitch black (`#050505`) and crisp studio light (`#ffffff`).
   - Smooth glassmorphism navigation and custom scrollbars.

2. **Extensive Worldwide Smartphone Database (`js/data.js`)**
   - Detailed specifications for global flagships and popular smartphones across all major brands:
     - **Apple** (iPhone 16 Pro Max)
     - **Samsung** (Galaxy S24 Ultra, Galaxy Z Fold 6, Galaxy A55 5G)
     - **Google** (Pixel 9 Pro XL, Pixel 8a)
     - **Xiaomi** (Xiaomi 14 Ultra Leica)
     - **OnePlus** (OnePlus 12)
     - **Sony** (Xperia 1 VI)
     - **Asus** (ROG Phone 8 Pro)
     - **Nothing** (Nothing Phone (2))
     - **Vivo** (Vivo X100 Pro)
     - **Motorola** (Edge 50 Ultra)
     - **Oppo** (Find X7 Ultra Dual Periscope)
     - **Realme** (Realme GT 6)
     - **Honor** (Magic 6 Pro 180MP)

3. **Multi-Faceted Search & Dynamic Filtering**
   - **Live Search & Autocomplete**: Instant search by phone name, chipset, or camera with thumbnail preview.
   - **Category Filters**: Flagships, Camera Kings, Gaming Beasts, Foldables, Battery Champions, Value for Money, Compact.
   - **Brand Carousel**: Filter by worldwide brand chips with one click.
   - **Price Range Slider**: Dynamic slider with real-time conversion.
   - **Hardware Feature Checkboxes**: 5G, 120Hz/144Hz AMOLED, Wireless Charging, IP68 Ingress, Periscope Zoom, 3.5mm Headphone Jack, MicroSD slot.
   - **Sorting**: Most Popular, Highest Spec Score, Price (Low to High / High to Low), Highest User Rating.

4. **Multi-Currency Real-Time Conversion**
   - Instant currency switcher supporting **USD ($)**, **EUR (€)**, **GBP (£)**, and **INR (₹)**.

5. **Full Technical Specifications Modal (91mobiles Style)**
   - Full-fidelity breakdown across:
     - Display & Screen Matrix (Panel type, resolution, refresh rate, peak nits, protection)
     - Hardware & Performance (Chipset, CPU architecture, GPU, RAM, storage type, cooling)
     - Camera System (Rear quad/triple setups, sensors, apertures, zoom, front camera, video recording)
     - Battery & Charging (Capacity, wired wattage, wireless, reverse charging, battery scores)
     - Build & Materials (Dimensions, weight, frame material, back finish, IP rating, colors)
     - Connectivity & Audio (5G bands, Wi-Fi 7, Bluetooth 5.4, NFC, 3.5mm jack DAC)
     - Software & AI (OS version, update commitment roadmap, AI features)
     - Key Strengths (Pros) & Things to Consider (Cons)
     - Official configuration storage variants and prices

6. **Interactive Side-by-Side Comparison Matrix**
   - Floating persistent comparison dock at the bottom of the screen (up to 4 devices).
   - Fullscreen comparison table aligning all specs in row-by-row matrix.
   - **Highlight Differences Toggle**: Highlights differing specifications across compared devices.
   - Add or remove devices directly from the comparison view.

7. **Smartphone Match Wizard (Phone Finder Quiz)**
   - 3-step interactive recommendation quiz that matches phones based on priorities (Photography, Gaming, Battery, Foldable, Budget).

8. **Favorites & Bookmarks**
   - Bookmark your preferred devices with persistence in `localStorage`.

9. **Fully Responsive Layout**
   - Optimized for mobile, tablet, and desktop screens with mobile bottom navigation bar and offcanvas filter drawer.

---

## 🚀 How to Run

Simply open [index.html](file:///Users/abhijith/Movies/example/index.html) directly in any modern web browser:

```bash
open index.html
```

Or run any local web server:
```bash
python3 -m http.server 3000
# Then visit http://localhost:3000
```

---

## 🛠️ File Structure

```
├── index.html          # Main application interface & modals
├── css/
│   └── style.css       # Black & White design system, theme variables & animations
├── js/
│   ├── data.js         # Comprehensive smartphone technical database
│   └── app.js          # Dynamic engine (state, filters, compare, modals, search)
└── README.md           # Documentation
```
