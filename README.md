# NextJs Store
A fast, modern storefront demo built with **Next.js + TypeScript + Tailwind**.  
Currently in progress — deployed early to showcase features as they are built.  

Supports public browsing, authenticated checkout, and an **admin area** for product management.  
Uses **PostgreSQL (Prisma + Supabase)** for data, **Clerk** for auth, **Stripe** for payments, and **shadcn/ui** for a clean, accessible UI.


## ✨ Features
- Catalog: Home, Products grid, Product detail with variants.
- Cart & Checkout: Client cart → Stripe Checkout.
- Auth (Clerk): Public users, authenticated users, admin role.
- Admin: Create/update products, manage inventory & images.
- Responsive UI: shadcn/ui components, accessible patterns.
- Data: PostgreSQL (Supabase) + Prisma schema & migrations.
- API Routes: Next.js Route Handlers for products, checkout, admin ops.

## 🧱 Tech Stack
- Framework: Next.js (App Router) • TypeScript
- UI: React • shadcn/ui • Tailwind CSS
- Auth: Clerk
- DB/ORM: PostgreSQL (Supabase) • Prisma
- Payments: Stripe
- Hosting: Vercel
- Tooling: ESLint • Prettier

## 🔗 Live
- App: https://nextjs-store-tau-seven.vercel.app/
