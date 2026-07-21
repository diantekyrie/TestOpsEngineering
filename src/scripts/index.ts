import "../styles/index.css";

declare global {
  interface Window {
    toggleMenu: () => void;
    closeMenu: () => void;
  }
}

const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.querySelector<HTMLButtonElement>(".nav-hamburger");

window.toggleMenu = () => {
  mobileMenu?.classList.toggle("open");
};

window.closeMenu = () => {
  mobileMenu?.classList.remove("open");
};

document.addEventListener("click", (event) => {
  if (!mobileMenu) return;
  if (!hamburger) return;
  const target = event.target as Node;
  if (!mobileMenu.classList.contains("open")) return;
  if (mobileMenu.contains(target)) return;
  if (hamburger.contains(target)) return;
  mobileMenu.classList.remove("open");
});

const sections = document.querySelectorAll<HTMLElement>("section[id], div[id]");
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"))
  .filter((link) => link.getAttribute("href")?.startsWith("#"));

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const id = section.getAttribute("id");
    if (!id) return;
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top) {
      if (scrollY < bottom) {
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute("href") === `#${id}` ? "var(--accent)" : "";
        });
      }
    }
  });
});
