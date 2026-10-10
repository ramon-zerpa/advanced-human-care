# Project quality reporting

- Always include Agentic Browsing in every PageSpeed/quality test and final report, alongside Performance, Accessibility, Best Practices and SEO. The user explicitly requires this category; never omit it.
- Request Agentic Browsing separately when the provider requires it. Report the passed/applicable ratio, individual failures and checks marked not applicable. It is not a weighted score out of 100.
- If unsupported or blocked, report that fact explicitly instead of dropping the category or inventing a value.
- Preserve the approved design and the preview's noindex/nofollow until the user authorizes the final domain launch. Do not invent functioning appointment APIs or enable the pending form to satisfy audits.
- All changes stay local by default. Never push without the user's explicit instruction for that delivery; an earlier push authorization does not authorize later pushes. When explicitly authorized, deploy only via the existing GitHub-to-Cloudflare integration, never a manual deploy. Git identity is local to this repository.
- All heading IDs must derive from their actual localized title: lowercase words separated by hyphens, with accents and punctuation removed. Use src/utils/heading-id.ts in EN and ES; never reuse an English heading slug for translated Spanish text. Keep aria-labelledby synchronized with the generated ID, verify uniqueness and preserve existing section/navigation anchors separately.
