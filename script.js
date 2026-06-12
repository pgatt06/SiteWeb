const CONFIG = {
  donation: "https://app.lacagnottedesproches.fr/cagnotte/histoire-des-armeniens-de-stanoze/",
  pdf: "https://memoire-stanoze.org/wp-content/uploads/2026/06/Garabed-Terzian-Stanoze-version-complete-avec-photos-beta.pdf"
};

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function hydrateLinks() {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    if (CONFIG[key]) {
      link.href = CONFIG[key];
    }
  });
}

function setupMenu() {
  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

hydrateLinks();
setupMenu();
