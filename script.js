/* ============================================================
   Cozy Wraps — script.js
   Shared JavaScript for all pages
   ============================================================ */

const products = [
  {
    id: 1,
    name: "Alpaca Cloud Throw",
    price: "$148",
    image: "https://mytrident.com/cdn/shop/files/3_f027b693-357e-486e-ae74-a3c43e09aca8_638x.progressive.webp.jpg?v=1764753739",
    material: "100% Alpaca",
    badge: "Best Seller",
    badgeClass: "best",
    size: "50\" × 65\"",
    care: "Hand wash cold",
    color: "#E8D5B7",
    accent: "#C4956A",
    description: "Spun from the finest Peruvian alpaca fibers...",
    category: "throws",
    new: false
  },
  {
    id: 2,
    name: "Merino Honeycomb",
    price: "$124",
    image: "https://mytrident.com/cdn/shop/files/8904427488835_2_266d1566-221e-4f78-b89b-52e7d503b666_646x.progressive.webp.jpg?v=1768462959",
    material: "Pure Merino Wool",
    badge: "New",
    badgeClass: "new",
    size: "60\" × 80\"",
    care: "Dry clean only",
    color: "#D4B896",
    accent: "#8B5E3C",
    description: "Our signature honeycomb weave...",
    category: "wool",
    new: true
  },
  {
    id: 3,
    name: "Velvet Dream Quilt",
    price: "$186",
    image: "https://mytrident.com/cdn/shop/files/4_2c209fd3-d21b-415a-94d3-21ab0343ace8_717x.progressive.webp.jpg?v=1775730814",
    material: "Belgian Velvet",
    badge: null,
    badgeClass: "",
    size: "90\" × 108\"",
    care: "Dry clean only",
    color: "#B5956A",
    accent: "#5C3D23",
    description: "Luxuriously soft Belgian velvet...",
    category: "quilts",
    new: false
  },
  {
    id: 4,
    name: "Coastal Linen Weave",
    price: "$98",
    image: "https://mytrident.com/cdn/shop/files/8904427488910_2_82cb11bb-102e-4ee4-9d5e-54139d4448fc_638x.progressive.webp.jpg?v=1768460957",
    material: "Belgian Linen",
    badge: "New",
    badgeClass: "new",
    size: "50\" × 65\"",
    care: "Machine wash cold",
    color: "#EDE0C8",
    accent: "#A07850",
    description: "Lightweight and breathable...",
    category: "throws",
    new: true
  },
  {
    id: 5,
    name: "Sherpa Comfort Wrap",
    price: "$112",
    image: "https://mytrident.com/cdn/shop/files/8904427488903_2_98b57268-fe2f-4559-ad99-b3b6c7bdd7fb_646x.progressive.webp.jpg?v=1768460957",
    material: "Sherpa & Cotton",
    badge: "Sale",
    badgeClass: "sale",
    size: "60\" × 70\"",
    care: "Machine wash warm",
    color: "#F0E0C0",
    accent: "#C4956A",
    description: "Double-faced with ultra-plush sherpa...",
    category: "sherpa",
    new: false
  },
  {
    id: 6,
    name: "Cable Knit Heritage",
    price: "$138",
    image: "https://tiimg.tistatic.com/fp/1/010/075/mink-winter-blanket-042.jpg",
    material: "Chunky Cotton",
    badge: "Best Seller",
    badgeClass: "best",
    size: "50\" × 70\"",
    care: "Hand wash cold",
    color: "#DCC9A8",
    accent: "#7A5030",
    description: "A timeless chunky cable-knit pattern...",
    category: "knit",
    new: false
  },
  {
    id: 7,
    name: "Cashmere Whisper",
    price: "$248",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop",
    material: "Grade-A Cashmere",
    badge: "New",
    badgeClass: "new",
    size: "50\" × 65\"",
    care: "Dry clean only",
    color: "#C8AE90",
    accent: "#6B4020",
    description: "The pinnacle of luxury...",
    category: "wool",
    new: true
  },
  {
    id: 8,
    name: "Waffle Weave Retreat",
    price: "$88",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/6/521286098/JR/PY/TY/93413259/blanket-grace-double-bed-s-ply-1-8-kg-1000x1000.png",
    material: "Organic Cotton",
    badge: null,
    badgeClass: "",
    size: "50\" × 65\"",
    care: "Machine wash cold",
    color: "#E8D4B0",
    accent: "#9E7050",
    description: "The subtle waffle texture...",
    category: "throws",
    new: false
  },
  {
    id: 9,
    name: "Bouclé Texture Throw",
    price: "$162",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=800&auto=format&fit=crop",
    material: "Wool Bouclé",
    badge: "New",
    badgeClass: "new",
    size: "55\" × 72\"",
    care: "Dry clean only",
    color: "#D8C4A0",
    accent: "#8C6040",
    description: "Inspired by Parisian interiors...",
    category: "wool",
    new: true
  },
  {
    id: 10,
    name: "Fringe Boho Blanket",
    price: "$76",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop",
    material: "Cotton & Jute",
    badge: "Sale",
    badgeClass: "sale",
    size: "60\" × 80\"",
    care: "Machine wash cold",
    color: "#E0C898",
    accent: "#A08050",
    description: "Earthy and free-spirited...",
    category: "throws",
    new: false
  },
  {
    id: 11,
    name: "Heirloom Patchwork Quilt",
    price: "$218",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop",
    material: "Heirloom Cotton",
    badge: "Best Seller",
    badgeClass: "best",
    size: "90\" × 108\"",
    care: "Machine wash gentle",
    color: "#C8B090",
    accent: "#5C3D23",
    description: "Handcrafted by artisans...",
    category: "quilts",
    new: false
  },
  {
    id: 12,
    name: "Fleece Lodge Wrap",
    price: "$68",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
    material: "Micro Fleece",
    badge: null,
    badgeClass: "",
    size: "60\" × 72\"",
    care: "Machine wash warm",
    color: "#E4CCA8",
    accent: "#B07840",
    description: "Plush, lightweight...",
    category: "sherpa",
    new: false
  }
];

/* ── PRODUCT SVG GENERATOR ───────────────────────────────── */
function generateBlanketSVG(product, size = "full") {
  const w = size === "thumb" ? 400 : 600;
  const h = size === "thumb" ? 300 : 500;
  const c = product.color;
  const a = product.accent;

  const patterns = [
    // Cable knit
    `<pattern id="p${product.id}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="${c}"/>
      <rect x="8" y="0" width="6" height="40" fill="${a}" opacity="0.18"/>
      <rect x="26" y="0" width="6" height="40" fill="${a}" opacity="0.18"/>
      <path d="M0 10 Q10 5 20 10 Q30 15 40 10" stroke="${a}" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M0 20 Q10 15 20 20 Q30 25 40 20" stroke="${a}" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M0 30 Q10 25 20 30 Q30 35 40 30" stroke="${a}" stroke-width="1.5" fill="none" opacity="0.4"/>
    </pattern>`,
    // Waffle grid
    `<pattern id="p${product.id}" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="${c}"/>
      <rect x="0" y="0" width="12" height="12" fill="${a}" opacity="0.12"/>
      <rect x="12" y="12" width="12" height="12" fill="${a}" opacity="0.12"/>
      <line x1="0" y1="0" x2="0" y2="24" stroke="${a}" stroke-width="0.8" opacity="0.3"/>
      <line x1="12" y1="0" x2="12" y2="24" stroke="${a}" stroke-width="0.8" opacity="0.3"/>
      <line x1="0" y1="0" x2="24" y2="0" stroke="${a}" stroke-width="0.8" opacity="0.3"/>
      <line x1="0" y1="12" x2="24" y2="12" stroke="${a}" stroke-width="0.8" opacity="0.3"/>
    </pattern>`,
    // Herringbone
    `<pattern id="p${product.id}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <rect width="20" height="20" fill="${c}"/>
      <path d="M0 10 L5 0 L10 10 L15 0 L20 10" stroke="${a}" stroke-width="1.8" fill="none" opacity="0.35"/>
      <path d="M0 20 L5 10 L10 20 L15 10 L20 20" stroke="${a}" stroke-width="1.8" fill="none" opacity="0.35"/>
    </pattern>`,
    // Diamond quilt
    `<pattern id="p${product.id}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="30" height="30" fill="${c}"/>
      <path d="M15 0 L30 15 L15 30 L0 15 Z" stroke="${a}" stroke-width="1.2" fill="${a}" fill-opacity="0.08" opacity="0.7"/>
    </pattern>`,
  ];

  const patternIdx = product.id % patterns.length;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <defs>
      ${patterns[patternIdx]}
    </defs>
    <rect width="${w}" height="${h}" fill="${c}"/>
    <rect width="${w}" height="${h}" fill="url(#p${product.id})"/>
    <!-- Blanket body -->
    <rect x="${w*0.08}" y="${h*0.08}" width="${w*0.84}" height="${h*0.84}" rx="12"
      fill="url(#p${product.id})" stroke="${a}" stroke-width="2" opacity="0.95"
      filter="url(#shadow${product.id})"/>
    <!-- Fringe top/bottom -->
    ${Array.from({length: 18}, (_, i) => {
      const x = w*0.12 + i*(w*0.76/17);
      return `<line x1="${x}" y1="${h*0.08}" x2="${x}" y2="${h*0.04}" stroke="${a}" stroke-width="1.5" opacity="0.6"/>
              <line x1="${x}" y1="${h*0.92}" x2="${x}" y2="${h*0.96}" stroke="${a}" stroke-width="1.5" opacity="0.6"/>`;
    }).join('')}
    <!-- Shadow filter -->
    <defs>
      <filter id="shadow${product.id}" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="4" dy="6" stdDeviation="8" flood-color="${a}" flood-opacity="0.2"/>
      </filter>
    </defs>
    <!-- Label tag -->
    <rect x="${w*0.72}" y="${h*0.12}" width="60" height="28" rx="4" fill="${a}" opacity="0.9"/>
    <text x="${w*0.72+30}" y="${h*0.12+18}" font-family="serif" font-size="9" fill="white" text-anchor="middle" opacity="0.95">Cozy Wraps</text>
  </svg>`;
}

function renderProductCards(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productList.map(p => `
    <article class="product-card" onclick="openProductModal(${p.id})" role="button" tabindex="0"
      onkeydown="if(event.key==='Enter')openProductModal(${p.id})" aria-label="View ${p.name}">
      
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" />
        ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      </div>

      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-material">${p.material}</p>
        <div class="product-meta">
          <span class="product-price">${p.price}</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── PRODUCT MODAL ───────────────────────────────────────── */
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-image').innerHTML    = generateBlanketSVG(p, "full");
  document.getElementById('modal-name').textContent   = p.name;
  document.getElementById('modal-price').textContent  = p.price;
  document.getElementById('modal-desc').textContent   = p.description;
  document.getElementById('modal-material').textContent = p.material;
  document.getElementById('modal-size').textContent   = p.size;
  document.getElementById('modal-care').textContent   = p.care;

  const overlay = document.getElementById('product-modal');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── ORDER MODAL ─────────────────────────────────────────── */
function openOrderModal() {
  closeProductModal();
  setTimeout(() => {
    document.getElementById('order-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }, 120);
}

function closeOrderModal() {
  document.getElementById('order-modal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ── CLOSE ON OVERLAY CLICK ──────────────────────────────── */
function initModalOverlayClose() {
  ['product-modal', 'order-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', e => {
      if (e.target === el) {
        el.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* ── ESC KEY ─────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeOrderModal();
  }
});

/* ── STICKY HEADER ───────────────────────────────────────── */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ── MOBILE NAV ──────────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on link click
  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ── ACTIVE NAV LINK ─────────────────────────────────────── */
function setActiveNavLink() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── FILTER PRODUCTS ─────────────────────────────────────── */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;
      let filtered = cat === 'all' ? products : products.filter(p => p.category === cat);

      // For new-arrivals page, only show new products
      const isNewArrivals = document.body.dataset.page === 'new-arrivals';
      if (isNewArrivals) {
        filtered = filtered.filter(p => p.new);
      }

      renderProductCards('products-container', filtered);
    });
  });
}

/* ── CONTACT FORM ────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  setActiveNavLink();
  initModalOverlayClose();
  initFilters();
  initContactForm();
});
