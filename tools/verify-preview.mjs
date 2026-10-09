import { writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const target = process.argv[2];
if (!target)
  throw new Error(
    "Usage: node tools/verify-preview.mjs <preview-url> [report.json]",
  );
const response = await fetch(target);
const html = await response.text();
const assets = [
  ...new Set(
    [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((path) => path.startsWith("/_astro/") || path === "/logo.png"),
  ),
];
const results = await Promise.all(
  assets.map(async (path) => ({
    path,
    status: (await fetch(new URL(path, target), { method: "HEAD" })).status,
  })),
);
const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] || "";
const logoResponse = await fetch(new URL("/logo.png", target));
const logoHash = createHash("sha256")
  .update(Buffer.from(await logoResponse.arrayBuffer()))
  .digest("hex");
const report = {
  url: target,
  status: response.status,
  robots: response.headers.get("x-robots-tag"),
  title: html.match(/<title>(.*?)<\/title>/)?.[1],
  h1Count: (html.match(/<h1\b/g) || []).length,
  preservedAnchors: [
    "treatments",
    "about-us",
    "testimonials",
    "contact-us",
    "top",
  ].every((id) => html.includes(`id="${id}"`)),
  hasEightTreatments: [
    "Manual Therapy",
    "Therapeutic Exercises",
    "Massage Therapy",
    "Chiropractic Care",
    "Heat And Cold Therapy",
    "Ultrasound Therapy",
    "Mechanical Traction",
    "Vibration Therapy",
  ].every((title) => html.includes(title)),
  footerLanguageSwitcher: footer.includes("language-switcher"),
  logoHash,
  originalLogoPreserved:
    logoHash ===
    "38c16d49699619d52c227e8816e0fa261346e18773af21ef171568807d22a60d",
  assets: results,
};
const json = JSON.stringify(report, null, 2);
console.log(json);
if (process.argv[3]) await writeFile(process.argv[3], json + "\n");
if (
  report.status !== 200 ||
  report.h1Count !== 1 ||
  !report.preservedAnchors ||
  !report.hasEightTreatments ||
  !report.originalLogoPreserved ||
  report.footerLanguageSwitcher ||
  !report.robots?.includes("noindex") ||
  results.some((asset) => asset.status !== 200)
)
  process.exitCode = 1;
