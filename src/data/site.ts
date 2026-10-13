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
