# b28-site Pages landing tests (Playwright)

Browser policy gate for **this repo's** GitHub Pages leaf only (`https://peterponyu.github.io/b28-site/`). It does **not** crawl sibling paper sites.

Pages deploys `docs/` directly (no Next build). Assertions match that leaf.

## Contract

| Check | Rule |
|---|---|
| Home | HTTP 200 code-description leaf |
| Leak tokens | No AUROC / 0.946 / 1191 / unpublished-results / SOTA copy; no `<img>` |
| Alias routes | `/results/` `/methods/` `/evidence/` `/claims/` stay HTTP 200 unpublished stubs (`This route is not published`), not a restored gallery |
| Chrome | Sticky header with Homepage + SCPortal |
| Layout | No horizontal overflow on Home @ 1280 and 390 |
| Packaging | No venue-intended / under review / BibTeX kit |
| Links | Public `PeterPonyu/b28-site`; no HetCLOP href; no invented article DOI |

Daily cron is not used: the leaf is static `docs/` and only changes on push/Pages deploy.

## Run locally

```bash
cd pages-gateway-tests
npm ci
npx playwright install chromium
npm test
```
