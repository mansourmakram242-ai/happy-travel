// ===== DATA STORE =====
const DEFAULT_TOURS = [
  {
    id: 1,
    title: "Giza Highlights Tour: Pyramids, Sphinx, Grand Egyptian Museum & Khan El Khalili",
    location: "Cairo", duration: "8 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-07-at-03.36.39-450x300.jpeg",
    description: "Experience the timeless wonders of Cairo with Happy Travel on this unforgettable tour to the Pyramids of Giza, the Great Sphinx, the Grand Egyptian Museum (GEM), and Khan El Khalili. Discover ancient history, iconic landmarks, and world-class artifacts in one seamless journey.",
    highlights: ["Great Pyramid of Khufu", "The Great Sphinx", "Grand Egyptian Museum (GEM)", "Khan El Khalili Bazaar", "Expert Egyptologist guide"],
    includes: "Transportation, Expert Guide, Entrance fees"
  },
  {
    id: 2,
    title: "Luxor East & West Bank Day Trip",
    location: "Luxor", duration: "8 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Unfinished-Obelisk-Egypt-Tours-Portal-450x300.jpg",
    description: "Explore the wonders of ancient Egypt on a full-day tour of Luxor's East and West Banks. This unforgettable journey takes you through the heart of the ancient city of Thebes, where pharaohs, temples, and tombs reveal the glory of Egypt's past.",
    highlights: ["Valley of the Kings", "Hatshepsut Temple", "Karnak Temple", "Luxor Temple", "Colossi of Memnon"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 3,
    title: "Aswan Highlights Day Tour: Philae Temple, High Dam & Unfinished Obelisk",
    location: "Aswan", duration: "7 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Philae-Temple-ancient-temple-in-egypt-450x300.webp",
    description: "Discover the timeless beauty of Aswan on this full-day tour visiting the city's most iconic landmarks. Begin with the magnificent Philae Temple, dedicated to the goddess Isis and beautifully located on an island in the Nile.",
    highlights: ["Philae Temple", "Aswan High Dam", "Unfinished Obelisk", "Nile Island views"],
    includes: "Transportation, Guide, Entrance fees, Boat to Philae"
  },
  {
    id: 4,
    title: "Memphis, Saqqara & Dahshur Day Tour",
    location: "Cairo", duration: "5 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Gemini_Generated_Image_ic8ef3ic8ef3ic8e-450x300.png",
    description: "Discover the wonders of Ancient Egypt on a memorable day tour to Memphis, Saqqara, and Dahshur. Travel back in time to explore Memphis, the first capital of ancient Egypt, and visit the world's oldest stone pyramid at Saqqara.",
    highlights: ["Step Pyramid of Djoser", "Memphis ancient city", "Bent Pyramid Dahshur", "Red Pyramid"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 5,
    title: "Half-Day Tour of the Giza Pyramids",
    location: "Cairo", duration: "4 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/01/peakpx-450x300.jpg",
    description: "Discover one of the world's greatest ancient wonders on this Giza Pyramids Half Day Tour. Explore the legendary Giza Plateau, home to the Great Pyramid of Khufu, the pyramids of Khafre and Menkaure, and the iconic Great Sphinx.",
    highlights: ["Pyramid of Khufu", "Pyramid of Khafre", "Pyramid of Menkaure", "Great Sphinx"],
    includes: "Transportation, Expert Guide"
  },
  {
    id: 6,
    title: "Private Grand Egyptian Museum Cultural Experience",
    location: "Cairo", duration: "Day Tour", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/131623_GrandEgyptianMuseum-ezgif.com-jpg-to-webp-converter-450x300.webp",
    description: "Step into 5,000 years of history with Happy Travel's Grand Egyptian Museum tour. Enjoy a guided journey through Egypt's greatest masterpieces, legendary pharaohs' treasures, and state-of-the-art exhibits.",
    highlights: ["Tutankhamun's Golden Collection", "Royal Mummies Hall", "Ancient artifacts", "Private Expert Guide"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 7,
    title: "Ride the Sands — Quad Biking by the Pyramids",
    location: "Cairo", duration: "2 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-11-2026-04_02_45-AM-450x300.png",
    description: "Experience the thrill of quad biking across the golden sands surrounding the iconic Pyramids of Giza. Explore Egypt's breathtaking desert landscape while enjoying stunning panoramic views of one of the world's most famous historical sites.",
    highlights: ["Desert quad biking", "Panoramic Pyramids views", "Sunset option available", "Safety equipment included"],
    includes: "Quad bike, Safety gear, Guide"
  },
  {
    id: 8,
    title: "Islamic and Coptic Cairo Tour",
    location: "Cairo", duration: "8 Hours", group: "100 people",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/65-450x300.jpg",
    description: "Explore the rich religious and cultural heritage of Islamic and Coptic Cairo. Begin in Old Cairo with visits to the famous Hanging Church, the historic Church of Abu Serga, Saint Barbara Church, and the Ben Ezra Synagogue.",
    highlights: ["Hanging Church", "Mohamed Ali Mosque", "Al-Azhar Mosque", "Ben Ezra Synagogue", "Khan El Khalili"],
    includes: "Transportation, Guide"
  },
  {
    id: 9,
    title: "5-Star Deluxe Nile Pharaoh Cruise — Cairo Dinner & Entertainment",
    location: "Cairo", duration: "Day Tour", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/IMG_6367-900x600.jpeg",
    description: "Sail along the majestic Nile River aboard a luxurious 5-star Pharaoh cruise ship. Enjoy a sumptuous dinner, live entertainment including belly dancing and Tanoura shows, while taking in stunning Cairo night views.",
    highlights: ["Nile dinner cruise", "Live belly dancing show", "Tanoura whirling dervish", "5-star buffet dinner"],
    includes: "Boat ride, Dinner buffet, Entertainment, Guide"
  },
  {
    id: 10,
    title: "Alexandria Day Trip",
    location: "Alexandria", duration: "8 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Qaitbay-Citadel-1-900x600.jpg",
    description: "Visit the jewel of the Mediterranean — Alexandria's historic Qaitbay Citadel, Pompey's Pillar, the magnificent new Library of Alexandria, and the stunning corniche waterfront.",
    highlights: ["Qaitbay Citadel", "Pompey's Pillar", "Alexandria Library", "Catacombs of Kom el Shoqafa"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 11,
    title: "West Bank Wonders: Valley of the Kings, Hatshepsut Temple & Colossi of Memnon",
    location: "Luxor", duration: "6 hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/IMG_6360-900x600.jpeg",
    description: "Immerse yourself in the mystical West Bank of Luxor. Visit the Valley of the Kings where pharaohs were buried in elaborate tombs, the stunning mortuary temple of Hatshepsut, and the towering Colossi of Memnon.",
    highlights: ["Valley of the Kings", "Hatshepsut Temple", "Colossi of Memnon", "Royal tombs"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 12,
    title: "Luxor East Bank Half-Day Tour — Karnak & Luxor Temples",
    location: "Luxor", duration: "Day Tour", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/IMG_6349-1-900x600.jpeg",
    description: "Explore the magnificent temples of Luxor's East Bank on this half-day tour. Visit the awe-inspiring Karnak Temple complex — one of the largest religious structures ever built — and the elegant Luxor Temple.",
    highlights: ["Karnak Temple Complex", "Great Hypostyle Hall", "Luxor Temple", "Avenue of Sphinxes"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 13,
    title: "Explore Abu Simbel Temples from Aswan",
    location: "Aswan", duration: "Day Tour", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Gemini_Generated_Image_amql1amql1amql1a-900x600.png",
    description: "Journey to one of Egypt's most spectacular ancient sites — the Abu Simbel Temples, built by Ramesses II over 3,000 years ago. Marvel at the four colossal statues guarding the Great Temple and the stunning interior carvings.",
    highlights: ["Great Temple of Ramesses II", "Temple of Nefertari", "UNESCO World Heritage Site", "Nasser Lake views"],
    includes: "Transportation, Guide, Entrance fees"
  },
  {
    id: 14,
    title: "Dendera and Abydos Temples — Full Day Historical Tour",
    location: "Luxor", duration: "10 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/IMG_6551-900x600.png",
    description: "Embark on a captivating full-day journey to two of Egypt's most magnificent and best-preserved ancient temples — the Temple of Hathor at Dendera and the Temple of Seti I at Abydos.",
    highlights: ["Temple of Hathor at Dendera", "Zodiac ceiling carvings", "Temple of Seti I at Abydos", "Osiris shrine"],
    includes: "Transportation, Guide, Entrance fees, Lunch"
  },
  {
    id: 15,
    title: "Orange Bay Island Trip — A Tropical Escape in Hurghada",
    location: "Hurghada", duration: "Full Day", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/caption-900x600.jpg",
    description: "Escape to the pristine Orange Bay Island, one of the most beautiful and secluded spots in the Red Sea. Enjoy crystal-clear turquoise waters, white sandy beaches, snorkeling, and pure relaxation in paradise.",
    highlights: ["Orange Bay Island", "Red Sea snorkeling", "White sandy beach", "Boat trip included"],
    includes: "Boat trip, Snorkeling gear, Beach access"
  },
  {
    id: 16,
    title: "Hurghada City Tour",
    location: "Hurghada", duration: "Half Day", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/8eee400515bfb328fbb932046e3e5d6c-webp-900x600.webp",
    description: "Discover the vibrant city of Hurghada on this comprehensive city tour. Visit the old fishing village of El Dahar, explore the lively marina, browse local markets, and learn about the city's transformation into a world-class resort destination.",
    highlights: ["El Dahar old town", "Hurghada Marina", "Local markets & bazaars", "Red Sea Museum"],
    includes: "Transportation, Guide"
  },
  {
    id: 17,
    title: "Horse on the Beach in Hurghada",
    location: "Hurghada", duration: "2 Hours", group: "Unlimited",
    image: "https://cleovatours.com/wp-content/uploads/2026/02/Horse-riding-tour-2-hours-Private-Tour-c_300c8_lg-900x600.webp",
    description: "Experience the magic of riding a horse along Hurghada's stunning beach with the Red Sea as your backdrop. Whether you're a beginner or experienced rider, this unforgettable beachside experience is perfect for all ages.",
    highlights: ["Beachside horse riding", "Red Sea views", "Suitable for all levels", "Sunset rides available"],
    includes: "Horse, Safety gear, Trainer"
  }
];

const DEFAULT_HERO = {
  image: "https://cleovatours.com/wp-content/uploads/2025/12/1.Luxor-Temple-1.jpg",
  title: "Unforgettable Journeys Across Egypt"
};

// ===== DATA FUNCTIONS =====
function getTours() {
  try {
    const stored = localStorage.getItem('ht_tours');
    return stored ? JSON.parse(stored) : DEFAULT_TOURS;
  } catch { return DEFAULT_TOURS; }
}

function saveTours(tours) {
  localStorage.setItem('ht_tours', JSON.stringify(tours));
}

function getHeroSettings() {
  try {
    const stored = localStorage.getItem('ht_hero');
    return stored ? JSON.parse(stored) : DEFAULT_HERO;
  } catch { return DEFAULT_HERO; }
}

function saveHeroSettings(settings) {
  localStorage.setItem('ht_hero', JSON.stringify(settings));
}

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Hero BG
document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const hero = getHeroSettings();
    if (hero.image) heroBg.style.backgroundImage = `url('${hero.image}')`;
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }
});

// ===== TOUR CARD BUILDER =====
function buildTourCard(tour, showPrice = false) {
  return `
    <div class="tour-card" data-location="${tour.location}">
      <div class="tour-img">
        <img src="${tour.image}" alt="${tour.title}" onerror="this.src='https://images.unsplash.com/photo-1539650116574-75c0c6d73f6f?w=600&h=400&fit=crop'" loading="lazy"/>
        <span class="tour-location">${tour.location}</span>
      </div>
      <div class="tour-body">
        <h3>${tour.title}</h3>
        <p>${tour.description}</p>
        <div class="tour-meta">
          <span><i class="fas fa-clock"></i> ${tour.duration}</span>
          <span><i class="fas fa-users"></i> ${tour.group}</span>
        </div>
        <div class="tour-footer">
          <a href="https://wa.me/201010233852?text=Hello! I'm interested in the tour: ${encodeURIComponent(tour.title)}" 
             class="tour-book" target="_blank">
            <i class="fab fa-whatsapp"></i> ${t('book_now')}
          </a>
        </div>
      </div>
    </div>
  `;
}

// ===== HOME - FEATURED TOURS =====
function loadFeaturedTours() {
  const grid = document.getElementById('toursGrid');
  if (!grid) return;
  const tours = getTours().slice(0, 6);
  grid.innerHTML = tours.map(tour => buildTourCard(tour)).join('');
}

// ===== TOURS PAGE =====
function loadAllTours(filterLoc = 'all') {
  const grid = document.getElementById('toursAllGrid');
  if (!grid) return;
  let tours = getTours();
  if (filterLoc !== 'all') {
    tours = tours.filter(t => t.location.toLowerCase() === filterLoc.toLowerCase());
  }
  grid.innerHTML = tours.length
    ? tours.map(tour => buildTourCard(tour)).join('')
    : `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:60px">No tours found.</p>`;
}

function filterTours(loc) {
  window.location.href = `tours.html?loc=${encodeURIComponent(loc)}`;
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.querySelector('[name="name"]').value;
    const phone = e.target.querySelector('[name="phone"]').value;
    const msg = e.target.querySelector('[name="message"]').value;
    const waMsg = `Hello Happy Travel!\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
    window.open(`https://wa.me/201010233852?text=${encodeURIComponent(waMsg)}`, '_blank');
  });
}
