# The Wild Oasis

The Wild Oasis is a luxury cabin booking web app built with Next.js. Guests can browse available cabins, filter by capacity, view booking details, sign in with Google, and manage their reservations.

This project uses a modern Next.js app router setup with Supabase for data storage and NextAuth for authentication.

## Live app:

- https://the-rustic-haven-web.vercel.app/

## Features

- Browse premium cabins in the Italian Dolomites
- Filter cabins by guest capacity
- View detailed cabin information and pricing
- Reserve dates with a calendar-based booking flow
- Sign in with Google authentication
- Manage personal reservations from the account area
- Edit or delete existing bookings
- Server-side data fetching and cache revalidation

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Supabase
- NextAuth
- date-fns
- react-day-picker

## Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Supabase project
- Google OAuth credentials

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root and add the required environment variables:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   AUTH_GOOGLE_ID=your_google_client_id
   AUTH_GOOGLE_SECRET=your_google_client_secret
   AUTH_SECRET=your_nextauth_secret
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  _components/
  _lib/
  about/
  account/
  api/
  cabins/
  login/
public/
```

Key app logic lives under `app/_lib/` for Supabase queries, auth setup, and booking actions.

## Environment Notes

- `SUPABASE_URL` and `SUPABASE_KEY` connect the app to the Supabase database used for cabins, guests, bookings, and settings.
- `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` enable Google sign-in.
- `AUTH_SECRET` is required for secure NextAuth session handling.

## Deployment

This app is configured for deployment on Vercel and can also be deployed to other Node.js hosting providers that support Next.js.

## Notes

This repository is a custom cabin reservation app inspired by a luxury mountain retreat brand. If you are working locally, make sure your Supabase tables and Google OAuth configuration match the app’s expected schema before testing booking flows.
