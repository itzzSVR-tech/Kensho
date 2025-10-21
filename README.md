# Kensho: An AI-Powered Journal App — Built with Expo, Sanity CMS, Clerk & Gemini AI

A beautiful, intelligent journaling app for iOS and Android. Features AI-powered therapeutic chat, automatic mood categorization, daily writing prompts, and rich media support. Built with Expo (React Native), Sanity CMS, Clerk authentication with billing, and Google Gemini AI.

> **Note:** This is a native mobile app. The web portion of Expo is only used for pricing/billing pages and subscription management through Clerk.

## 👇🏼 DO THIS Before you get started

### 1) Set up Clerk using our link! (It supports us in doing this for FREE!)

Create a Clerk account at [Clerk](https://go.clerk.com/oVvoZlJ) for authentication and billing

### 2) Set up Sanity

Create a Sanity account at [Sanity](https://www.sanity.io/sonny?utm_source=youtube&utm_medium=video&utm_content=ai-journal) for content management

### 3) Set up Google AI (Gemini)

Get a Google AI API key from [Google AI Studio](https://makersuite.google.com/app/apikey) for AI chat and auto-categorization

## Features

### For Users

- **AI Therapist Chat** 🤖: Intelligent therapeutic assistant that analyzes your journal history and provides personalized insights
- **Daily Writing Prompts** ✨: Inspiring journal starters displayed as beautiful swipeable cards
- **Rich Journal Entries**: Write entries with mood tracking, categories, and image attachments
- **Auto-Categorization**: AI automatically suggests categories for your entries
- **Mood & Emotion Tracking**: Track your emotional journey with emoji-based mood selection
- **Streak Tracking**: Monitor your journaling consistency and build healthy habits
- **Beautiful UI**: Modern, responsive design with dark mode support
- **Native Mobile App**: Optimized for iOS and Android with smooth native performance
- **Web Billing Portal**: Seamless subscription management through web-based pricing pages

### AI Features

- **Context-Aware Support**: AI proactively analyzes journal entries to understand patterns and provide personalized insights
- **Emotion Recognition**: Automatically fetches relevant entries when you express emotions (sad, anxious, happy, etc.)
- **Pattern Analysis**: Identifies recurring themes, triggers, and emotional patterns across your journaling history
- **Time-Based Queries**: Ask about specific periods ("How was I feeling last month?", "What happened in September?")
- **Multi-Step Tool Calling**: AI uses sophisticated tools to gather and analyze journal data before responding
- **Real-time Streaming**: Responses stream in with visual indicators showing when AI is "thinking"
- **Smart Categorization**: AI suggests relevant categories as you write journal entries

### Technical Features

- **Expo SDK 54** with React 19 and file-based routing
- **Clerk** for authentication and user management with **Clerk Billing** for subscription management (Stripe-powered)
- **Sanity CMS** for content management, schema definitions, and rich media handling
- **Google Gemini AI** for AI-powered chat and auto-categorization
- **Tamagui** for cross-platform UI components
- **TypeScript** end-to-end with Zod validation
- **Dual App Architecture**: Expo app for users + Sanity Studio app for admins (same repo)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- **iOS Simulator** (Mac only with Xcode) or **Android Emulator** (Android Studio)
- Accounts: Clerk, Sanity, Google AI (Gemini)

> **Important:** This is a native mobile app. You'll need either an iOS simulator or Android emulator to run the app. Web is only used for the pricing/billing portal.

### 1) Clone & Install

Install dependencies for **both** apps:

```bash
# Install Expo app dependencies
npm install

# Install Sanity Studio dependencies
cd sanity
npm install
cd ..
```

### 2) Environment Variables

This project requires **two separate environment files**:

#### A) Expo App Environment (`.env` in project root)

Create a `.env` file in the **project root** for the Expo app:

```env
# Clerk Authentication & Billing
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZXhhbXBsZS1jbGVyay1wdWJsaXNoYWJsZS1rZXktMTIzNDU2
CLERK_SECRET_KEY=sk_test_ZXhhbXBsZS1jbGVyay1zZWNyZXQta2V5LTEyMzQ1Ng

# Sanity CMS
EXPO_PUBLIC_SANITY_PROJECT_ID=abc123de
EXPO_PUBLIC_SANITY_DATASET=production
EXPO_PUBLIC_SANITY_TOKEN=skABcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijklmnopqrstuvwxyz

# Google AI (Gemini) for AI Features
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567890
```

#### B) Sanity Studio Environment (`.env.local` in `sanity/` directory)

Create a `.env.local` file in the **sanity/** directory for Sanity Studio:

```env
# Sanity Project Configuration
SANITY_STUDIO_SANITY_PROJECT_ID=abc123de
SANITY_STUDIO_SANITY_DATASET=production
SANITY_STUDIO_SANITY_TOKEN=replace_with_your_values
```

**Important Notes:**

- **EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY**: Found in Clerk Dashboard → API Keys (starts with `pk_test_` for test mode or `pk_live_` for production)
- **CLERK_SECRET_KEY**: Found in Clerk Dashboard → API Keys (starts with `sk_test_` or `sk_live_`) - **Never expose this publicly!**
- **EXPO_PUBLIC_SANITY_PROJECT_ID** / **SANITY_STUDIO_SANITY_PROJECT_ID**: Found in Sanity project settings (8-character alphanumeric ID) - **use the same value in both files**
- **EXPO_PUBLIC_SANITY_DATASET** / **SANITY_STUDIO_SANITY_DATASET**: Usually `production` or `development` - matches your Sanity dataset name - **use the same value in both files**
- **EXPO_PUBLIC_SANITY_TOKEN**: Create in Sanity → API → Tokens with **Editor** permissions (required for write operations) - **only needed in Expo app**
- **GOOGLE_GENERATIVE_AI_API_KEY**: Get from [Google AI Studio](https://makersuite.google.com/app/apikey) (starts with `AIza`) - **only needed in Expo app**

> **Security:** The `EXPO_PUBLIC_` prefix makes these variables available in client-side code. Only use this prefix for non-sensitive data like project IDs and publishable keys. Never prefix secret keys with `EXPO_PUBLIC_`!

> **Note:** The Sanity Studio uses the `SANITY_STUDIO_` prefix convention. Make sure your Project ID and Dataset values match between both `.env` files!

### 3) Configure Clerk

1. Create a new application at [Clerk](https://go.clerk.com/oVvoZlJ)
2. Enable **Email** and **Google** as authentication providers
3. Copy the **Publishable Key** and **Secret Key** into `.env`
4. Set up **Clerk Billing** with Stripe integration:
   - Navigate to Billing in Clerk Dashboard
   - Configure **Starter** (Free) and **Pro** ($9.99/month) plans
   - Set feature gates for AI chat (Pro only)
5. Configure **OAuth redirect URLs** for Expo:
   - Add custom scheme: `sanityclerkbillingjournalappexpo://` (for mobile deep linking)
   - Add web URL: `http://localhost:8081` (for pricing/billing pages only)
   - In production, add your deployed web URL for pricing pages
6. Set up **webhooks** for billing events (point to your deployed API routes)

### 4) Configure Sanity

1. Create a Sanity account at [Sanity](https://www.sanity.io)
2. Initialize your Sanity project:

```bash
cd sanity
npm run dev
# Follow prompts to create project
```

3. Copy your **Project ID** and add to `.env` as `EXPO_PUBLIC_SANITY_PROJECT_ID`
4. Create an **API token** with **Editor** permissions:
   - Go to [manage.sanity.io](https://manage.sanity.io)
   - Select your project → API → Tokens
   - Create token with Editor permissions
   - Add to `.env` as `EXPO_PUBLIC_SANITY_TOKEN`
5. Deploy GraphQL API (optional):

```bash
npm run deploy-graphql
```

6. Import sample data:

```bash
# Import Sample daily prompts
npx sanity dataset import ../sample_data/sample-daily-prompts.ndjson production

# Import categories
npx sanity dataset import ../sample_data/sample-categories.ndjson production

# Import test journal entries (optional, for AI testing)
npx sanity dataset import ../sample_data/test-journal-entries.ndjson production
```

### 5) Configure Google AI (Gemini)

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Copy the generated API key (starts with `AIza`)
5. Add to `.env` as `GOOGLE_GENERATIVE_AI_API_KEY`
6. The app uses **Gemini 1.5 Pro** model for best results

### 6) Run the Apps

**Development mode runs both apps separately:**

**Terminal 1 - Expo App:**

```bash
npm start
# Then press:
# - 'i' for iOS simulator
# - 'a' for Android emulator
# - 'w' for web browser (only for pricing/billing pages)
```

**Terminal 2 - Sanity Studio:**

```bash
cd sanity
npm run dev
# Sanity Studio opens at http://localhost:3333
```

**Production:**

```bash
# Build Expo app
npx expo export

# Deploy Sanity Studio
cd sanity
npm run deploy
```