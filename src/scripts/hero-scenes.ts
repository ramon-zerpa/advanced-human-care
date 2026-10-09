export {};

const hero = document.querySelector<HTMLElement>("[data-hero-scenes]");
if (hero) {
  const scenes = [...hero.querySelectorAll<HTMLImageElement>(".hero-scene")];
  const button = hero.querySelector<HTMLButtonElement>(".scene-toggle");
  const label = button?.querySelector<HTMLElement>("span");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  let current = 0;
  let incoming: number | null = null;
  let paused = false;
  let visible = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let generation = 0;
  const canPlay = () => !paused && visible && !document.hidden && !motion.matches;

  const finish = () => {
    if (incoming === null) return;
    scenes[current].classList.remove("is-current");
    current = incoming;
    incoming = null;
    scenes[current].classList.add("is-current");
    scenes[current].classList.remove("is-entering");
  };
  const stop = () => {
    clearTimeout(timer);
    timer = undefined;
    generation++;
    // A decoded incoming scene becomes static immediately, including mid-reveal.
    finish();
  };
  const schedule = () => {
    if (!canPlay() || timer !== undefined || incoming !== null) return;
    timer = setTimeout(async () => {
      timer = undefined;
      const token = generation;
      const next = (current + 1) % scenes.length;
      try {
        scenes[next].loading = "eager";
        await scenes[next].decode();
        if (token !== generation || !canPlay()) return;
        incoming = next;
        scenes[next].classList.add("is-entering");
      } catch {
        // Keep the current scene on network/decode failure and retry later.
        if (token === generation) schedule();
      }
    }, 7000);
  };
  const sync = () => {
    stop();
    if (motion.matches) {
      scenes[current].classList.remove("is-current");
      current = 0;
      scenes[0].classList.add("is-current");
    }
    if (button && label) {
      button.disabled = motion.matches;
      button.setAttribute("aria-pressed", String(paused));
      label.textContent = motion.matches ? "Motion off" : paused ? "Resume scenes" : "Pause scenes";
    }
    schedule();
  };
  scenes.forEach(scene => scene.addEventListener("animationend", () => {
    finish();
    schedule();
  }, { signal: events.signal }));
  button?.addEventListener("click", () => { paused = !paused; sync(); }, { signal: events.signal });
  document.addEventListener("visibilitychange", sync, { signal: events.signal });
  motion.addEventListener("change", sync, { signal: events.signal });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }, { threshold: 0.1 });
  observer.observe(hero);
  if (button) button.hidden = false;
  sync();
  const cleanup = () => { stop(); observer.disconnect(); events.abort(); };
  document.addEventListener("astro:before-swap", cleanup, { once: true, signal: events.signal });
  window.addEventListener("pagehide", event => { stop(); if (!event.persisted) cleanup(); }, { signal: events.signal });
  window.addEventListener("pageshow", sync, { signal: events.signal });
}
