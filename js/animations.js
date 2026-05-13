/**
 * Subtle fade-in on scroll (no external animation library).
 */
export function initAnimations() {
  const nodes = document.querySelectorAll("[data-animate]");
  if (!nodes.length) return;

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  nodes.forEach((n) => {
    const r = n.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0) {
      n.classList.add("is-visible");
    }
  });

  document.documentElement.dataset.motion = "on";

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  nodes.forEach((n) => {
    if (!n.classList.contains("is-visible")) io.observe(n);
  });
}
