export {};
type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  getResponse: (id: string) => string;
};
declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

const form = document.querySelector<HTMLFormElement>("#appointment-form");
const verification = form?.querySelector<HTMLElement>("[data-verification]");
const status = form?.querySelector<HTMLElement>(".form-status");
const submit = form?.querySelector<HTMLButtonElement>("[data-submit]");
const label = form?.querySelector<HTMLElement>("[data-submit-label]");
const spanish = form?.dataset.locale === "es";
let widgetId: string | undefined;
let sending = false;
const setStatus = (message: string, error = false, focus = false) => {
  if (!status) return;
  status.textContent = message;
  status.dataset.state = error ? "error" : "success";
  if (focus) status.focus();
};
const loadVerification = () => {
  if (!form?.dataset.sitekey || !verification || !submit) return;
  submit.disabled = true;
  const script = document.createElement("script");
  script.src =
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.addEventListener(
    "load",
    () => {
      if (!window.turnstile) return;
      verification.replaceChildren();
      widgetId = window.turnstile.render(verification, {
        sitekey: form.dataset.sitekey,
        theme: "light",
        size: verification.clientWidth < 300 ? "compact" : "normal",
        language: spanish ? "es" : "en",
        callback: () => {
          if (!sending) {
            submit.disabled = false;
          }
        },
        "expired-callback": () => {
          submit.disabled = true;
          setStatus(
            spanish ? "La verificación de seguridad venció. Inténtelo de nuevo." : "Security verification expired. Please verify again.",
            true,
          );
        },
        "error-callback": () => {
          submit.disabled = true;
          setStatus(
            spanish ? "No se pudo cargar la verificación de seguridad. Inténtelo de nuevo o llame al (813) 542-3613." : "Security verification could not load. Please try again or call (813) 542-3613.",
            true,
          );
        },
      });
    },
    { once: true },
  );
  script.addEventListener(
    "error",
    () =>
      setStatus(
        spanish ? "No se pudo cargar la verificación de seguridad. Recargue la página o llame al (813) 542-3613." : "Security verification could not load. Please reload or call (813) 542-3613.",
        true,
      ),
    { once: true },
  );
  document.head.append(script);
};
if (form && submit) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    if (!widgetId || !window.turnstile?.getResponse(widgetId)) {
      setStatus(
        spanish ? "Complete la verificación de seguridad antes de enviar su solicitud." : "Please complete security verification before sending your request.",
        true,
        true,
      );
      return;
    }
    sending = true;
    submit.disabled = true;
    if (label) label.textContent = spanish ? "Enviando solicitud…" : "Sending request…";
    form.setAttribute("aria-busy", "true");
    setStatus(spanish ? "Enviando su solicitud de cita…" : "Sending your appointment request…");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        signal: AbortSignal.timeout(20000),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as {
        success?: boolean;
        code?: string;
      };
      if (response.ok && result.success === true) {
        form.reset();
        setStatus(
          spanish ? "Recibimos su solicitud. Nuestro equipo se comunicará con usted para coordinar su cita." : "Your request has been received. Our team will contact you to arrange your appointment.",
          false,
          true,
        );
      } else {
        const messages: Record<string, string> = {
          verification_required: spanish ? "Complete la verificación de seguridad e inténtelo de nuevo." : "Please complete security verification and try again.",
          verification_failed: spanish ? "No se pudo confirmar la verificación de seguridad. Vuelva a verificar e inténtelo de nuevo." : "Security verification could not be confirmed. Please verify again and retry.",
          missing_fields: spanish ? "Ingrese su nombre completo, correo electrónico y teléfono." : "Please enter your full name, email, and phone number.",
          invalid_fields: spanish ? "Revise su nombre, correo electrónico y teléfono e inténtelo de nuevo." : "Please check your name, email, and phone number and try again.",
          rate_limited: spanish ? "Espere un momento antes de volver a intentarlo o llame al (813) 542-3613." : "Please wait a moment before trying again, or call (813) 542-3613.",
        };
        setStatus(
          messages[result.code || ""] ||
            spanish ? "No se pudo enviar su solicitud. Inténtelo de nuevo o llame al (813) 542-3613." : "Your request could not be sent. Please try again or call (813) 542-3613.",
          true,
          true,
        );
      }
    } catch {
      setStatus(
        spanish ? "No pudimos confirmar su solicitud. Inténtelo de nuevo o llame al (813) 542-3613." : "We could not confirm your request. Please try again or call (813) 542-3613.",
        true,
        true,
      );
    } finally {
      sending = false;
      form.removeAttribute("aria-busy");
      if (label) label.textContent = spanish ? "Enviar solicitud de cita" : "Send appointment request";
      if (widgetId && window.turnstile) {
        submit.disabled = true;
        window.turnstile.reset(widgetId);
      }
    }
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          loadVerification();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(form);
  } else loadVerification();
}

const mapShell = document.querySelector<HTMLElement>("[data-map-shell]");
const loadMap = () => {
  if (!mapShell) return;
  const frame = document.createElement("iframe");
  frame.src =
    "https://www.google.com/maps?q=3558%20N%2029th%20St%2C%20Tampa%2C%20FL%2033605&output=embed";
  frame.title = spanish
    ? "Mapa de Advanced Human Care en 3558 N 29th St, Tampa, FL 33605"
    : "Map showing Advanced Human Care at 3558 N 29th St, Tampa, FL 33605";
  frame.loading = "lazy";
  frame.referrerPolicy = "no-referrer-when-downgrade";
  frame.allowFullscreen = true;
  mapShell.replaceChildren(frame);
};
if (mapShell) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          loadMap();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(mapShell);
  } else loadMap();
}
