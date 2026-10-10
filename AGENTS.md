# Project quality reporting

- Always include Agentic Browsing in every PageSpeed/quality test and final report, alongside Performance, Accessibility, Best Practices and SEO. The user explicitly requires this category; never omit it.
- Request Agentic Browsing separately when the provider requires it. Report the passed/applicable ratio, individual failures and checks marked not applicable. It is not a weighted score out of 100.
- If unsupported or blocked, report that fact explicitly instead of dropping the category or inventing a value.
- Preserve the approved design and the preview's noindex/nofollow until the user authorizes the final domain launch. Do not invent functioning appointment APIs or enable the pending form to satisfy audits.
- Deploy via the existing GitHub-to-Cloudflare integration with commit/push; no manual deploy commands. Git identity is local to this repository.
- H1 IDs must derive from their actual localized title: lowercase words separated by hyphens, with accents and punctuation removed. Use src/utils/heading-id.ts in both EN and the future ES version; keep aria-labelledby synchronized with the generated ID.
