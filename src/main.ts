import './style.css';
import { OWNERS, MENU_ITEMS, TESTIMONIALS, FAQS, SAUCE_OPTIONS } from './data';
import type { Category } from './types';
import { cart } from './cart';
import { soundManager } from './sound';

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const ownersGrid = document.getElementById('ownersGrid') as HTMLDivElement;
const productsGrid = document.getElementById('productsGrid') as HTMLDivElement;
const filterTabs = document.getElementById('filterTabs') as HTMLDivElement;
const testimonialsGrid = document.getElementById('testimonialsGrid') as HTMLDivElement;
const faqAccordion = document.getElementById('faqAccordion') as HTMLDivElement;

const btnSoundToggle = document.getElementById('btnSoundToggle') as HTMLButtonElement;
const soundIcon = document.getElementById('soundIcon') as HTMLSpanElement;

const btnOpenCart = document.getElementById('btnOpenCart') as HTMLButtonElement;
const btnCloseCart = document.getElementById('btnCloseCart') as HTMLButtonElement;
const cartBackdrop = document.getElementById('cartBackdrop') as HTMLDivElement;
const cartBody = document.getElementById('cartBody') as HTMLDivElement;
const cartFooter = document.getElementById('cartFooter') as HTMLDivElement;
const cartSubtotalText = document.getElementById('cartSubtotalText') as HTMLElement;
const cartCountBadge = document.getElementById('cartCountBadge') as HTMLElement;

const btnSendWhatsAppOrder = document.getElementById('btnSendWhatsAppOrder') as HTMLButtonElement;
const orderCustomerName = document.getElementById('orderCustomerName') as HTMLInputElement;
const orderAddress = document.getElementById('orderAddress') as HTMLInputElement;
const orderNotes = document.getElementById('orderNotes') as HTMLInputElement;
const addressGroup = document.getElementById('addressGroup') as HTMLDivElement;

const btnMobileMenu = document.getElementById('btnMobileMenu') as HTMLButtonElement;
const mainNav = document.getElementById('mainNav') as HTMLElement;

const btnHeroEasterEgg = document.getElementById('btnHeroEasterEgg') as HTMLButtonElement;
const btnOrderPartyBox = document.getElementById('btnOrderPartyBox') as HTMLButtonElement;
const btnBottomOrder = document.getElementById('btnBottomOrder') as HTMLButtonElement;

const toastContainer = document.getElementById('toastContainer') as HTMLDivElement;

let currentCategory: Category = 'todos';

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message: string, emoji: string = '🧀'): void {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* ==========================================================================
   RENDER PROPIETARIOS / OWNERS SECTION
   ========================================================================== */
function renderOwners(): void {
  if (!ownersGrid) return;
  ownersGrid.innerHTML = OWNERS.map(owner => `
    <article class="owner-card" id="owner-${owner.id}">
      <div class="owner-avatar-wrap">
        <img src="${owner.avatarSvg}" alt="${owner.name} - ${owner.role}" class="owner-avatar-img" loading="lazy" />
      </div>
      <span class="owner-persona-badge">🍌 ${owner.minionPersona}</span>
      <h3 class="owner-name">${owner.name}</h3>
      <div class="owner-role">${owner.role}</div>
      <div class="owner-title">${owner.title}</div>
      
      <blockquote class="owner-quote">${owner.quote}</blockquote>

      <div class="owner-specialties">
        <h5>Especialidades en Cocina</h5>
        <ul>
          ${owner.specialties.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
      </div>

      <div class="owner-fav-tag">
        ⭐ Favorito: <strong>${owner.favoriteTequeno}</strong>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   RENDER MENU & PRODUCTS
   ========================================================================== */
function renderCheeseMeter(score: number): string {
  const cheeseEmojis = '🧀'.repeat(score);
  return `
    <div class="cheese-pull-meter" title="Nivel de estiramiento de queso: ${score}/5">
      <span>Elasticidad:</span>
      <span class="meter-cheeses">${cheeseEmojis}</span>
    </div>
  `;
}

function renderProducts(category: Category): void {
  if (!productsGrid) return;

  const filtered = category === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === category);

  productsGrid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-image-wrap">
        ${item.isPopular ? '<span class="product-badge-pill">🔥 Más Pedido</span>' : ''}
        ${item.isSweet ? '<span class="product-badge-pill product-sweet-badge">🍌 Dulce Papoi</span>' : ''}
        <img src="${item.image}" alt="${item.name}" class="product-card-img" loading="lazy" />
      </div>

      <div class="product-details">
        <div class="product-tags">
          ${item.tags.map(t => `<span class="tag-item">${t}</span>`).join('')}
        </div>

        <h3 class="product-name">${item.name}</h3>
        <div class="product-pack-size">📦 ${item.packSize}</div>
        <p class="product-description">${item.description}</p>

        ${renderCheeseMeter(item.cheesePullScore)}

        <div class="product-sauce-select-wrap">
          <label for="sauce-${item.id}">Elige tu salsa incluida:</label>
          <select id="sauce-${item.id}" class="sauce-dropdown">
            ${SAUCE_OPTIONS.map(sauce => `<option value="${sauce}">${sauce}</option>`).join('')}
          </select>
        </div>

        <div class="product-bottom-row">
          <div class="product-price">
            $${item.price.toFixed(2)} <small>USD</small>
          </div>
          <button class="btn-add-cart" data-item-id="${item.id}">
            <span>+ Agregar</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach Add to Cart Listeners
  productsGrid.querySelectorAll<HTMLButtonElement>('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      if (!itemId) return;

      const item = MENU_ITEMS.find(m => m.id === itemId);
      if (!item) return;

      const selectEl = document.getElementById(`sauce-${item.id}`) as HTMLSelectElement | null;
      const selectedSauce = selectEl ? selectEl.value : SAUCE_OPTIONS[0];

      cart.addItem(item, selectedSauce);
      showToast(`¡${item.name} agregado al pedido!`, '🧀');
    });
  });
}

/* ==========================================================================
   RENDER TESTIMONIALS
   ========================================================================== */
function renderTestimonials(): void {
  if (!testimonialsGrid) return;
  testimonialsGrid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy" />
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <small>${t.role}</small>
        </div>
      </div>
      <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
      <blockquote class="testimonial-comment">"${t.comment}"</blockquote>
      <div class="testimonial-fav">💛 Favorito: ${t.favorite}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   RENDER FAQ ACCORDION
   ========================================================================== */
function renderFaqs(): void {
  if (!faqAccordion) return;
  faqAccordion.innerHTML = FAQS.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button class="faq-question" aria-expanded="${idx === 0}">
        <span>${faq.question}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  faqAccordion.querySelectorAll<HTMLButtonElement>('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement as HTMLDivElement;
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      faqAccordion.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        soundManager.playPapoiChirp();
      } else {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   CART UI & UPDATES
   ========================================================================== */
function updateCartUI(): void {
  const items = cart.getItems();
  const count = cart.getItemCount();
  const total = cart.getTotal();

  if (cartCountBadge) {
    cartCountBadge.textContent = count.toString();
    cartCountBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  if (cartSubtotalText) {
    cartSubtotalText.textContent = `$${total.toFixed(2)} USD`;
  }

  if (!cartBody) return;

  if (items.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <span class="cart-empty-emoji">🧀</span>
        <h4>Tu carrito está vacío</h4>
        <p>¡Elige tus tequeños doraditos favoritos para comenzar tu fiesta Papoi!</p>
        <button class="btn btn-primary" id="btnCartGoMenu">
          <span>Ver Menú</span>
        </button>
      </div>
    `;

    if (cartFooter) {
      cartFooter.style.display = 'none';
    }

    const btnGoMenu = document.getElementById('btnCartGoMenu');
    if (btnGoMenu) {
      btnGoMenu.addEventListener('click', () => {
        closeCartDrawer();
        const menuSec = document.getElementById('menu');
        if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
      });
    }
  } else {
    if (cartFooter) {
      cartFooter.style.display = 'block';
    }

    cartBody.innerHTML = `
      <div class="cart-items-list">
        ${items.map(ci => `
          <div class="cart-item-row">
            <img src="${ci.item.image}" alt="${ci.item.name}" class="cart-item-img" />
            <div class="cart-item-info">
              <div class="cart-item-name">${ci.item.name}</div>
              <span class="cart-item-sauce">🥣 ${ci.sauce}</span>
              <div class="cart-item-price">$${(ci.item.price * ci.quantity).toFixed(2)} USD</div>
            </div>

            <div class="cart-qty-controls">
              <button class="btn-qty btn-minus" data-id="${ci.item.id}" data-sauce="${ci.sauce}" aria-label="Disminuir">-</button>
              <span class="cart-qty-text">${ci.quantity}</span>
              <button class="btn-qty btn-plus" data-id="${ci.item.id}" data-sauce="${ci.sauce}" aria-label="Aumentar">+</button>
            </div>

            <button class="btn-remove-item" data-id="${ci.item.id}" data-sauce="${ci.sauce}" title="Eliminar" aria-label="Eliminar producto">
              🗑️
            </button>
          </div>
        `).join('')}
      </div>
    `;

    // Quantity buttons
    cartBody.querySelectorAll<HTMLButtonElement>('.btn-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')!;
        const sauce = btn.getAttribute('data-sauce')!;
        cart.updateQuantity(id, sauce, -1);
      });
    });

    cartBody.querySelectorAll<HTMLButtonElement>('.btn-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')!;
        const sauce = btn.getAttribute('data-sauce')!;
        cart.updateQuantity(id, sauce, 1);
      });
    });

    cartBody.querySelectorAll<HTMLButtonElement>('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')!;
        const sauce = btn.getAttribute('data-sauce')!;
        cart.removeItem(id, sauce);
      });
    });
  }
}

function openCartDrawer(): void {
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer(): void {
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   EVENT LISTENERS INITIALIZATION
   ========================================================================== */
function setupEvents(): void {
  // Subscribe Cart UI
  cart.subscribe(updateCartUI);

  // Cart Modal Toggle
  btnOpenCart?.addEventListener('click', openCartDrawer);
  btnCloseCart?.addEventListener('click', closeCartDrawer);
  cartBackdrop?.addEventListener('click', (e) => {
    if (e.target === cartBackdrop) closeCartDrawer();
  });

  // Sound Toggle
  btnSoundToggle?.addEventListener('click', () => {
    const isEnabled = soundManager.toggleSound();
    if (soundIcon) {
      soundIcon.textContent = isEnabled ? '🔊' : '🔇';
    }
    showToast(isEnabled ? '¡Sonidos activados! 🍌' : 'Sonidos desactivados 🔇', '🎵');
    if (isEnabled) soundManager.playPapoiChirp();
  });

  // Hero Easter Egg Papoi Chirp
  btnHeroEasterEgg?.addEventListener('click', () => {
    soundManager.playPapoiChirp();
    showToast('¡PAPOI! ¡BANANAAA! 🧀🍌', '🎉');
  });

  // Party Box CTA
  btnOrderPartyBox?.addEventListener('click', () => {
    const partyItem = MENU_ITEMS.find(m => m.id === 'combo-mega-50');
    if (partyItem) {
      cart.addItem(partyItem, SAUCE_OPTIONS[0]);
      openCartDrawer();
      showToast('¡Super Papoi Party Box 50 añadido!', '🎉');
    }
  });

  // Bottom CTA
  btnBottomOrder?.addEventListener('click', () => {
    const menuSec = document.getElementById('menu');
    if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
  });

  // Filter Tabs
  filterTabs?.querySelectorAll<HTMLButtonElement>('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = (btn.getAttribute('data-category') || 'todos') as Category;
      renderProducts(currentCategory);
      soundManager.playCrunch();
    });
  });

  // Delivery type radio toggle
  const deliveryRadios = document.querySelectorAll<HTMLInputElement>('input[name="deliveryType"]');
  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (addressGroup) {
        addressGroup.style.display = radio.value === 'delivery' ? 'block' : 'none';
      }
    });
  });

  // WhatsApp Order Submission
  btnSendWhatsAppOrder?.addEventListener('click', () => {
    const items = cart.getItems();
    if (items.length === 0) {
      showToast('Tu carrito está vacío. Agrega tequeños primero.', '⚠️');
      return;
    }

    const name = orderCustomerName?.value.trim() || '';
    const selectedRadio = document.querySelector<HTMLInputElement>('input[name="deliveryType"]:checked');
    const deliveryType = (selectedRadio?.value === 'pickup' ? 'pickup' : 'delivery') as 'delivery' | 'pickup';
    const address = orderAddress?.value.trim() || '';
    const notes = orderNotes?.value.trim() || '';

    if (deliveryType === 'delivery' && !address) {
      showToast('Por favor escribe tu dirección de entrega 📍', '⚠️');
      orderAddress?.focus();
      return;
    }

    soundManager.playCelebration();
    showToast('¡Generando pedido por WhatsApp! 🚀', '📱');

    const whatsappUrl = cart.buildWhatsAppLink(name, deliveryType, address, notes);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  });

  // Mobile Menu Toggle
  btnMobileMenu?.addEventListener('click', () => {
    mainNav?.classList.toggle('mobile-open');
  });

  // Close mobile menu on nav link click
  mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('mobile-open');
    });
  });

  // Active navigation link on scroll
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init(): void {
  renderOwners();
  renderProducts(currentCategory);
  renderTestimonials();
  renderFaqs();
  setupEvents();
  updateCartUI();
}

// Start application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
