# QuickStop — Angular store pickup demo

Independent UI portfolio project by Sai Manohar Nelluri. Not affiliated with 7-Eleven.

## Run

Requires Node.js 20 or newer.

```
npm install
npm run build
npx serve dist
```

## Stack

Angular 20 standalone component, TypeScript, HTML templates, CSS, Angular Forms, RxJS, Zone.js, esbuild. Angular's JIT compiler is bundled for this compact static deployment; a larger production application should use Angular CLI and AOT compilation.

## Features

- Product search, category filtering, price sorting.
- Cart quantity controls, item removal, calculated totals and estimated tax.
- Sample store selection, validated pickup form, simulated confirmation.
- Responsive product grid, accessible input labels, keyboard focus indicators.
- Empty results, empty cart, disabled checkout, quantity limits.

## Limits

Sample data only. No backend, payment processing, inventory integration, or real order submission. Cart is session memory and resets on refresh. Form details are not transmitted or stored. The 8.25% tax is an illustrative estimate, not a tax calculation service.

## Photo

Fajar Imani Firdaus / Unsplash: https://unsplash.com/photos/fCUHx-iVGBE (Unsplash license).

## LinkedIn project description

Built an Angular storefront demo with searchable product listings, category filters, price sorting, reactive cart totals, and a validated pickup checkout. Used standalone Angular components, TypeScript, HTML, and CSS to create a responsive shopping experience with accessible controls and explicit empty/error states. Checkout and store data are simulated.

## Free GitHub Pages deployment

1. Push these files to https://github.com/smanoharn91-sys/newquickstop on the `main` branch.
2. In Settings → Pages, select **GitHub Actions** as the publishing source.
3. Run Actions → Deploy QuickStop to GitHub Pages if needed.
4. After deployment succeeds, the expected address is https://smanoharn91-sys.github.io/newquickstop/.

Relative asset URLs support the repository subpath. The address above is not yet a verified live deployment.
