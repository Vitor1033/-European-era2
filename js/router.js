/**
 * Highlights current page in the navbar.
 */
export function initRouter() {
  const path = window.location.pathname;
  const file = path.split("/").pop() || "home.html";
  const key = file.replace(".html", "");

  document.querySelectorAll(".nav a[data-nav]").forEach((link) => {
    const navKey = link.getAttribute("data-nav");
    if (navKey && navKey === key) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}
