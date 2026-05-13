import { initRouter } from "./router.js";
import { initAnimations } from "./animations.js";

/**
 * Navbar/footer HTML: Vite serves `public/` at site root (`/components/...`).
 * Plain static servers and file:// resolve from `js/main.js` → `../public/components/...`.
 */
const partial = (file) => {
  const base = import.meta.env?.BASE_URL;
  if (base !== undefined) {
    const root = base.endsWith("/") ? base : `${base}/`;
    return `${root}components/${file}`;
  }
  return new URL(`../public/components/${file}`, import.meta.url).href;
};

const PARTIALS = [
  { id: "site-navbar", url: partial("navbar.html") },
  { id: "site-footer", url: partial("footer.html") }
];
async function loadPartial(id, url) {
  const mount = document.getElementById(id);
  if (!mount) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    mount.innerHTML = await res.text();
  } catch (e) {
    console.error(e);
    mount.innerHTML = `<p class="container" style="padding:1rem;color:#b91c1c">Could not load layout. Run <code>npm run dev</code> (Vite) or serve the site from a local server.</p>`;
  }
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-mobile-nav]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    panel.classList.toggle("is-open", !open);
  });

  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
    });
  });
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initFaqAccordion() {
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const btn = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!btn || !panel) return;

    btn.setAttribute("aria-expanded", item.classList.contains("is-open") ? "true" : "false");

    btn.addEventListener("click", () => {
      const open = item.classList.contains("is-open");
      item.closest(".accordion")?.querySelectorAll(".accordion-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", !open);
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
}

function initForms() {
  document.querySelectorAll("form[data-contact-form]").forEach((form) => {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const email = String(fd.get("email") || "").trim();
      const name = String(fd.get("name") || "").trim();
      const message = String(fd.get("message") || "").trim();

      if (!email || !name || !message) {
        if (status) {
          status.textContent = "Please fill in all required fields.";
          status.className = "form-status is-error";
        }
        return;
      }

      if (status) {
        status.textContent = "Thank you — we received your message. We’ll reply shortly.";
        status.className = "form-status is-success";
      }
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all(PARTIALS.map((p) => loadPartial(p.id, p.url)));
  initMobileNav();
  initRouter();
  initYear();
  initFaqAccordion();
  initForms();
  initAnimations();
});
