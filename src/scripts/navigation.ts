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
  menu.addEventListener("click", (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>(
      'a[href^="#"]',
    );
    if (!link) return;
    setOpen(false);
    const target = document.querySelector<HTMLElement>(link.hash);
    if (target) {
      target.setAttribute("tabindex", "-1");
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
