# ROMAhair

E-commerce SPA de productos de cuidado capilar (Argentina, ARS). Catálogo curado de tres marcas: La Puissance, Fidelité, Opción.

Producción: https://romahair.vercel.app

## Stack

- React 18 + Vite 5 (SPA, sin SSR)
- Hosting: Vercel · Serverless function: `api/checkout.js`
- **Sin router library**: routing custom path-based (`src/lib/route.js` con `window.history.pushState` + listener de `popstate`)
- **Sin state library**: hooks + `localStorage` para persistencia
- **Sin CSS framework**: tokens y estilos a mano en `src/styles/global.css`
- Playwright E2E (`npm test`, default contra producción; `SITE_URL=http://localhost:5173 npm test` para local)

## Rutas

| Path | Componente | Notas |
|---|---|---|
| `/` | `App.jsx` (home) | Hero + search + filtros de marca/subcategoría + ofertas + catálogo |
| `/p/<id>` | `pages/Product.jsx` | Galería, specs, ingredientes, pros/cons, relacionados |
| `/checkout` | `pages/Checkout.jsx` | **Requiere sesión**, formulario completo, redirige a MP |
| `/checkout/exito` | `pages/CheckoutSuccess.jsx` | Limpia carrito + marca descuento como usado |
| `/checkout/error` | `pages/CheckoutError.jsx` | Pago rechazado/cancelado |
| `/checkout/pendiente` | `pages/CheckoutPending.jsx` | Pago pendiente (transferencia/Rapipago) |

`vercel.json` rewrittea todo a `/index.html` salvo `/api/*` (Vercel routea funciones por filesystem antes de aplicar rewrites).

## Datos

- `src/data/products.js` — única fuente de verdad. Cada producto: `{ id, name, brand, line, subcategory, price, rating, reviews, image, color, imageUrl, characteristics: { size, hairType[], benefits[], keyIngredients[] }, description, ingredients, pros[], cons[] }`.
- `src/lib/meta.js` → `productMeta(p)` calcula `discount`, `finalPrice`, `urgency`, `installmentMonths`, `installmentValue` de forma determinística (hash del id).

## Estado

Todo el state vive en `App.jsx` y se pasa por props (sin context).

| Hook | Archivo | localStorage key | Devuelve |
|---|---|---|---|
| `useCart()` | `lib/cart.js` | `romabeauty:cart:v1` | `{ cart, add, remove, setQty, clear, qtyOf }` |
| `useAuth()` | `lib/auth.js` | `romabeauty:user:v1` | `{ user, signInWithGoogleCredential, signInDemo, signOut }` |
| `useDiscount(user)` | `lib/discount.js` | `romabeauty:discount:v1` | `{ rate, isClaimed, isUsed, isActive, isEligible, claim, markUsed, monthLabel }` |
| `useRoute()` | `lib/route.js` | — | `{ path, navigate }` |

`buildCartView(cart, opts)` calcula `{ lines, itemCount, subtotal, discount, shipping, freeShipping, total, ... }`. `opts.discountActive` y `opts.discountRate` se pasan desde el hook de discount.

User shape: `{ provider: 'google'|'demo', email, name, firstName, avatar, sub }`.

## Auth + Promo del 10%

- Google Identity Services (GIS) cuando `VITE_GOOGLE_CLIENT_ID` está seteada. Sin esa env, fallback a "modo demo" pidiendo email — **mantener el fallback**, permite probar el flujo sin setup externo.
- **Login obligatorio para comprar**: `goToCheckout` y `buyNow` abren `SignInModal` si no hay user, y después navegan solo a `/checkout` (estado `pendingCheckout`).
- Después del sign-in se auto-abre `PromoModal` (salvo si ya usó el descuento este mes).
- 10% es **honor system**: 3 links (IG/TikTok/WhatsApp) + botón "Ya los sigo, dame mi 10%". Una vez reclamado se aplica al subtotal en carrito y checkout. Después de `/checkout/exito`, `markUsed()` lo marca usado para ese mes calendario. Mes siguiente vuelve a estar elegible.

## Checkout / pago

- `api/checkout.js` es un **STUB**. Valida POST + cart/customer, genera `STUB-XXXXXXXX`, redirige a `/checkout/exito?orderId=...&stub=true`.
- La integración real con Mercado Pago Checkout Pro está **comentada inline** en `api/checkout.js` (bloque `BLOQUE A REEMPLAZAR`). Para activar: `npm i mercadopago`, swappear el bloque, setear `MP_ACCESS_TOKEN` en Vercel.

## Convenciones

- Commits: imperativos, primera línea como oración ("Add X so users can Y"). Body opcional. Cierre con `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.
- Copy en español (argentino).
- Sin comentarios salvo que el WHY no sea obvio.
- Moneda ARS. Envío gratis +$80.000. 3 cuotas sin interés default.
- Tokens de diseño al tope de `global.css`: bg champagne ivory, accent bronce `#8b6b3a`, wine oxblood `#6b2f35`, sale coral `#ef6777`, success `#4ab25a`.

## Comandos

```sh
npm run dev               # Vite dev en :5173
npm run build             # Build prod
npm test                  # Playwright contra producción
SITE_URL=http://localhost:5173 npm test    # Playwright contra local
vercel ls                 # Listar deployments
vercel inspect <url>      # Estado de un deploy
```

## Pendientes conocidos

- **Activar Google sign-in**: crear OAuth Client ID en console.cloud.google.com (origins: `https://romahair.vercel.app`, `https://romahair-tokiopelu2020-7530s-projects.vercel.app`, `http://localhost:5173`), setear `VITE_GOOGLE_CLIENT_ID` en Vercel, rebuild.
- **Activar Mercado Pago**: crear app en mercadopago.com.ar/developers, setear `MP_ACCESS_TOKEN` en Vercel, instalar `mercadopago` y reemplazar el stub en `api/checkout.js`.
- Email de confirmación post-orden (no hay service de email cableado).
- Historial de órdenes por usuario (no hay persistencia backend hoy).

## Don'ts

- No agregar router library — el custom `useRoute()` alcanza para esta escala.
- No agregar state library — props passing de 2 niveles max es aceptable.
- No introducir CSS frameworks — el sistema hand-rolled es intencional.
- No escribir comentarios multilínea.
- No remover el fallback "demo mode" de auth — bloquearía el flujo si la env de Google no está seteada.

## Versiones

Tags semver. Ver GitHub Releases para notas detalladas de cada versión.

- **`v0.1.0`** — Primer flujo completo de compra (catálogo + auth + carrito + promo + checkout stub).
- **`v0.2.0`** — Rebrand ROMAbeauty → ROMAhair (visible + proyecto Vercel renombrado). Header con menú hamburger desplegable (6 categorías agrupadas: Shampoo, Acondicionador, Tratamientos, Tinturas, Styling, Herramientas). Limpieza visual: sin emojis decorativos en chrome, sin R circular en logo. Hero re-jerarquizado: "Cuidado capilar profesional" headline grande italic en bronce, "Somos estilistas, hacenos tu consulta aquí" como sub-line clickeable a WhatsApp.
- **`v0.3.0`** — Home convertida en landing: catálogo principal **oculto por defecto**, aparece solo cuando el usuario elige una categoría del menú o una marca desde el breadcrumb. Promociones pasa a ser un **carrusel horizontal con auto-scroll** (50s loop, pausa en hover, fade-out lateral, respeta `prefers-reduced-motion`). CTA del quiz rediseñado como **card cuadrada** 280×280 con tipografía 18px y flecha en esquina. Footer reducido: solo brand col (saqué Marcas, Categorías y la columna newsletter "Recibí ofertas"). Header con íconos SVG finos al lado de "Entrar" (silueta) y "Carrito" (bolsa). Saqué la fila de pills de marca debajo del hero. Renombré "Ofertas" → "Promociones".
