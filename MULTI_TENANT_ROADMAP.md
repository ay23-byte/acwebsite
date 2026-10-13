# ACWebsite multi-business platform foundation

This branch adds an initial product-facing layer for evolving ACWebsite from a single-business HVAC website into a reusable website platform.

## Added in this branch

- `src/config/tenants.ts`: typed tenant configuration and three explicitly fictional demo businesses.
- `src/app/platform/page.tsx`: ACWebsite platform landing page.
- `src/app/demo/[slug]/page.tsx`: configuration-driven public demo route.
- `src/app/platform.css`: styling for the platform and demo preview pages.
- `src/components/SiteChrome.tsx`: route-aware shared header/footer handling for standalone platform and demo experiences.

## Preview routes

- `/platform`
- `/demo/arctic-comfort`
- `/demo/bluepeak-hvac`
- `/demo/coolnest-services`

The existing root route and its current business configuration are intentionally preserved.

## Important limitations

This is a UI and configuration foundation, not a completed SaaS service. The demo tenants are fictional. The public demo pages clearly identify themselves as previews and do not claim that booking integrations are configured.

The following still need implementation and verification before commercial multi-tenant use:

1. Authentication and business membership.
2. Server-side tenant authorisation.
3. Persistent storage for tenant settings and services.
4. Secure image upload and asset ownership.
5. Business dashboard with editable forms and preview.
6. Enquiry persistence, notifications, spam controls, and status management.
7. Draft/publish workflow.
8. Custom-domain routing and tenant-aware metadata.
9. Automated tests for tenant isolation and configuration validation.
10. Local build, lint, browser, accessibility, and responsive verification.

## Local verification

Install dependencies and run:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000/platform` and the demo routes above.

Run `npm run build` before deployment. This branch has not been represented as production-certified until those checks have actually been run.
