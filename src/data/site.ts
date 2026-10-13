const clinicAddress = {
  streetAddress: "3558 N 29th St",
  addressLocality: "Tampa",
  addressRegion: "FL",
  postalCode: "33605",
  addressCountry: "US",
};
export const clinic = {
  name: "Advanced Human Care",
  phone: "(813) 542-3613",
  phoneHref: "tel:+18135423613",
  email: "info@advancedhuman.care",
  address: clinicAddress,
  addressLabel: `${clinicAddress.streetAddress}, ${clinicAddress.addressLocality}, ${clinicAddress.addressRegion} ${clinicAddress.postalCode}`,
  hours: "Mon–Fri · 9 a.m.–5 p.m.",
  fax: "(813) 200-3496",
  maps: "https://www.google.com/maps/search/?api=1&query=3558+N+29th+St+Tampa+FL+33605",
};
export const navigation = [
  { label: "Our Treatments", href: "#treatments" },
  { label: "About Us", href: "#about-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact-us" },
];
export const injuries = [
  {
    title: "Whiplash",
    icon: "neck" as const,
    copy: "We offer treatment options to relieve pain and support recovery from whiplash injuries.",
  },
  {
    title: "Back Pain",
    icon: "back" as const,
    copy: "We treat lower, middle, and upper back injuries caused by car accidents.",
  },
  {
    title: "Knee Pain",
    icon: "knee" as const,
    copy: "Our therapy plans combine exercises to build strength and flexibility.",
  },
  {
    title: "Shoulder Pain",
    icon: "shoulder" as const,
    copy: "Physical rehabilitation can help reduce pain and the risk of long-term effects from shoulder injuries.",
  },
];
export const treatments = [
  {
    title: "Manual Therapy",
    copy: "Manual therapy, also called hands-on physical therapy, uses no devices or machines. In general, it includes soft-tissue work and joint mobilization.",
  },
  {
    title: "Therapeutic Exercises",
    copy: "Therapeutic exercises are planned, systematic movements designed to improve physical function, flexibility, strength, and endurance.",
  },
  {
    title: "Massage Therapy",
    copy: "Massage can help loosen your muscles before a chiropractic adjustment or another therapy. It can also be beneficial on its own after a car accident.",
  },
  {
    title: "Chiropractic Care",
    copy: "Chiropractic care includes adjustments, which aim to relieve pain and improve mobility, and modalities, which use therapeutic procedures to support joint adjustments.",
  },
  {
    title: "Heat and Cold Therapy",
    copy: "Thermotherapy (heat) and cryotherapy (cold) are used in rehabilitation treatments. Heat increases blood flow and decreases joint stiffness. Cold reduces inflammation and nerve activity.",
  },
  {
    title: "Ultrasound Therapy",
    copy: "Ultrasound therapy can help relieve muscle pain and reduce inflammation. It can also help reduce swelling in the muscles, joints, and ligaments.",
  },
  {
    title: "Mechanical Traction",
    copy: "Mechanical traction is a form of decompression therapy that relieves pressure on the spine. Spinal traction is a non-surgical way to relieve pain and correct problems with your back.",
  },
  {
    title: "Vibration Therapy",
    copy: "Low-frequency vibration helps relax compressed tissues and restore their function. The vibrations cause your muscles to contract and relax.",
  },
];
export const team = [
  { name: "Ronald L. Panella, M.D.", role: "Medical Director" },
  { name: "Lorena Lago Alonso", role: "President" },
  { name: "Alex A. Benitez", role: "Vice President" },
  { name: "Cynthia Bohannon", role: "Chiropractor" },
  { name: "Niuvis Alonso Paez", role: "Chiropractic Assistant" },
];
export const testimonials = [
  {
    name: "Scott Myers",
    initial: "S",
    quote:
      "Being injured is unpleasant, but I am fortunate to be moving forward in my recovery with Advanced Human Care.",
  },
  {
    name: "Emily Vasquez",
    initial: "E",
    quote:
      "Since the accident, I have suffered from terrible neck pain. Thanks to my therapist, I have found relief.",
  },
];
export const faqs = [
  {
    question: "What Can I Expect at My First Appointment?",
    answer:
      "Your therapist will evaluate your strength and range of motion and perform special tests to get a complete picture of your injuries and develop a treatment plan.",
  },
  {
    question: "Which Injuries Do You Treat?",
    answer:
      "We provide rehabilitation for whiplash, back pain, knee pain, and shoulder pain after a car accident. Our treatments include hands-on care, therapeutic exercises, and the other therapies described above.",
  },
  {
    question: "How Do I Request an Appointment?",
    answer:
      "Use the appointment form below to enter your name, email address, and phone number. You can also include a preferred date and a message. You can also call (813) 542-3613.",
  },
];

/** Spanish copy mirrors the reviewed English content without adding clinical claims. */
export const spanish = {
  clinic: { ...clinic, hours: "Lun–Vie · 9 a. m.–5 p. m." },
  navigation: [
    { label: "Tratamientos", href: "#treatments" },
    { label: "Nosotros", href: "#about-us" },
    { label: "Testimonios", href: "#testimonials" },
    { label: "Contacto", href: "#contact-us" },
  ],
  hero: {
    title: "Rehabilitación por accidentes de auto en Tampa.",
    paragraphs: [
      "En Advanced Human Care, nuestros terapeutas tienen amplia experiencia en el tratamiento de lesiones que pudo haber sufrido en un accidente de auto.",
      "Recupere su estilo de vida con rehabilitación física enfocada en su recuperación.",
    ],
    imageAlt: "Atención para lesiones comunes por accidentes de auto.",
    message: "Recupere su estilo de vida.",
    address: `${clinicAddress.streetAddress}, ${clinicAddress.addressLocality}, Florida ${clinicAddress.postalCode}`,
  },
  injuries: {
    title: "Atención para lesiones comunes por accidentes de auto.",
    intro: "Nuestro equipo de rehabilitación le ayuda a recuperarse de lesiones sufridas en un accidente de auto.",
    items: [
      { title: "Latigazo cervical", copy: "Ofrecemos opciones de tratamiento para aliviar el dolor y apoyar la recuperación de lesiones por latigazo cervical." },
      { title: "Dolor de espalda", copy: "Tratamos lesiones en la parte baja, media y alta de la espalda causadas por accidentes de auto." },
      { title: "Dolor de rodilla", copy: "Nuestros planes de terapia combinan ejercicios para desarrollar fuerza y flexibilidad." },
      { title: "Dolor de hombro", copy: "La rehabilitación física puede ayudar a reducir el dolor y el riesgo de efectos a largo plazo de las lesiones de hombro." },
    ],
  },
  treatments: {
    title: "Nuestros tratamientos.",
    intro: "Durante su cita, el terapeuta evaluará su fuerza y rango de movimiento para desarrollar un plan de tratamiento.",
    imageAlt: "Escena ilustrativa de una terapeuta evaluando la espalda de un paciente.",
    focus: "Terapia manual enfocada en su recuperación.",
    items: [
      { title: "Terapia manual", copy: "La terapia manual se realiza con las manos, sin dispositivos ni máquinas. Por lo general, incluye trabajo de tejidos blandos y movilización articular." },
      { title: "Ejercicios terapéuticos", copy: "Los ejercicios terapéuticos son movimientos planificados y sistemáticos para mejorar la función física, la flexibilidad, la fuerza y la resistencia." },
      { title: "Terapia de masaje", copy: "El masaje puede ayudar a relajar los músculos antes de un ajuste quiropráctico u otra terapia. También puede ser beneficioso por sí solo después de un accidente de auto." },
      { title: "Atención quiropráctica", copy: "La atención quiropráctica incluye ajustes que buscan aliviar el dolor y mejorar la movilidad, así como modalidades terapéuticas que apoyan los ajustes articulares." },
      { title: "Terapia de calor y frío", copy: "La termoterapia (calor) y la crioterapia (frío) se usan en rehabilitación. El calor aumenta el flujo sanguíneo y reduce la rigidez articular. El frío reduce la inflamación y la actividad nerviosa." },
      { title: "Terapia con ultrasonido", copy: "La terapia con ultrasonido puede ayudar a aliviar el dolor muscular y reducir la inflamación. También puede ayudar a disminuir la hinchazón en músculos, articulaciones y ligamentos." },
      { title: "Tracción mecánica", copy: "La tracción mecánica es una forma de terapia de descompresión que alivia la presión sobre la columna. La tracción espinal es una opción no quirúrgica para aliviar el dolor y corregir problemas de espalda." },
      { title: "Terapia de vibración", copy: "La vibración de baja frecuencia ayuda a relajar los tejidos comprimidos y recuperar su función. Las vibraciones hacen que los músculos se contraigan y relajen." },
    ],
  },
  careSupport: {
    title: "Apoyo más allá de su tratamiento.",
    intro: "Mientras se enfoca en su recuperación, nuestro equipo le ayuda con la documentación médica y los acuerdos de tratamiento.",
    cta: "Hable con nuestro equipo",
    items: [
      { title: "Documentación legal.", copy: "Mantenemos registros médicos detallados de su condición y tratamientos, y proporcionamos esta documentación a su abogado." },
      { title: "Aceptamos su seguro de auto.", copy: "Trabajamos con un gravamen médico. Esto significa que las compañías de seguros nos pagan una vez que se resuelve su caso." },
    ],
  },
  team: {
    title: "Nuestro equipo.",
    paragraphs: [
      "En Advanced Human Care, nos especializamos en la rehabilitación de lesiones por accidentes de auto. Nuestros terapeutas tratan las lesiones que pudo haber sufrido.",
      "El objetivo de la rehabilitación física es ayudarle a reparar y fortalecer los músculos y tejidos afectados.",
    ],
    roles: ["Director médico", "Presidenta", "Vicepresidente", "Quiropráctica", "Asistente quiropráctica"],
  },
  recovery: {
    title: "Recupere su estilo de vida.",
    paragraphs: [
      "Si sufrió un accidente de auto, quizá se pregunte por qué necesita rehabilitación física. Después de un accidente, la rehabilitación física puede ayudar a reducir el dolor, acelerar la recuperación y mejorar el rango de movimiento.",
      "El tratamiento temprano de las lesiones por accidentes de auto puede ayudarle a recuperarse más rápido y evitar lesiones adicionales.",
    ],
    imageAlt: "Escena ilustrativa de una mujer disfrutando de una caminata al aire libre.",
    testimonialsTitle: "Lo que dicen nuestros pacientes.",
    testimonials: [
      "Sufrir una lesión es difícil, pero me siento afortunado de avanzar en mi recuperación con Advanced Human Care.",
      "Desde el accidente he tenido un fuerte dolor de cuello. Gracias a mi terapeuta, he encontrado alivio.",
    ],
  },
  firstVisit: {
    title: "Antes de su primera visita.",
    intro: "Conozca qué ocurre durante su evaluación y cómo solicitar una cita.",
    imageAlt: "Escena ilustrativa de un terapeuta evaluando el movimiento de un paciente.",
    faqs: [
      { question: "¿Qué puedo esperar en mi primera cita?", answer: "Su terapeuta evaluará su fuerza y rango de movimiento, y realizará pruebas específicas para conocer sus lesiones y desarrollar un plan de tratamiento." },
      { question: "¿Qué lesiones tratan?", answer: "Ofrecemos rehabilitación para latigazo cervical y dolor de espalda, de rodilla y de hombro después de un accidente de auto. Nuestros tratamientos incluyen terapia manual, ejercicios terapéuticos y las otras terapias descritas arriba." },
      { question: "¿Cómo solicito una cita?", answer: `Use el formulario para ingresar su nombre, correo electrónico y teléfono. También puede indicar una fecha preferida y agregar un mensaje. Si lo prefiere, llame al ${clinic.phone}.` },
    ],
  },
  contact: {
    title: "Comience su recuperación.",
    intro: "Solicite rehabilitación física en Advanced Human Care.",
    clinicTitle: "Visite nuestra clínica en Tampa.",
    findTitle: "Encuentre nuestra clínica en Tampa.",
    mapLink: "Abrir en Google Maps",
    formTitle: "Solicite rehabilitación física.",
    required: "Los campos marcados con * son obligatorios.",
    labels: { name: "Nombre completo *", email: "Correo electrónico *", phone: "Teléfono *", date: "Fecha deseada (opcional)", message: "Mensaje (opcional)" },
    placeholders: { name: "Su nombre completo", email: "Su correo electrónico", phone: "Su número de teléfono", message: "Cuéntenos cómo podemos ayudarle." },
    security: "Verificación de seguridad",
    send: "Enviar solicitud de cita",
    unavailable: "Las solicitudes en línea estarán disponibles pronto. Para solicitar una cita,",
    noscript: "Active JavaScript para la verificación de seguridad o, para solicitar una cita,",
  },
  footer: "Volver al inicio",
};
