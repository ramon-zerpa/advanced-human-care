export {};
const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const menu = document.querySelector<HTMLElement>("#mobile-menu");
if (toggle && menu) {
  const openIcon = toggle.querySelector<HTMLElement>(".menu-open-icon");
  const closeIcon = toggle.querySelector<HTMLElement>(".menu-close-icon");
  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
    menu.hidden = !open;
    if (openIcon) openIcon.hidden = open;
    if (closeIcon) closeIcon.hidden = !open;
  };
  toggle.addEventListener("click", () => setOpen(Boolean(menu.hidden)));
  document.addEventListener("click", (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>(
      '.logo-link[href^="#"], .desktop-navigation a[href^="#"], .mobile-menu-links a[href^="#"], .skip-link[href^="#"], .bottom-bar a[href^="#"]',
    );
    if (!link) return;
    event.preventDefault();
    if (menu.contains(link)) setOpen(false);
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (
      !menu.hidden &&
      !menu.contains(event.target as Node) &&
      !toggle.contains(event.target as Node)
    )
      setOpen(false);
  });
  window
    .matchMedia("(min-width: 1120px)")
    .addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
}
