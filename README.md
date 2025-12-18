# ML Rollout Dashboard

A mobile-friendly dashboard for tracking ML deployment phases and accessing project resources.

## Features

- **Deployment Phases**: View all phases of ML rollout with expandable details
  - Phase 0: Simple arms testing (Current)
  - Phase 1: Advanced arms (January 1st)
  - Phase 2: Larger demographics & ML pipeline (February 1st)
- **Status Indicator**: See which phase you're currently in
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Resources Tab**: Easy access to project documentation and external links

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
mct-client-site/
├── app/
│   ├── page.tsx              # Main deployment phases page
│   ├── links/
│   │   └── page.tsx          # Resources and links page
│   ├── layout.tsx            # Root layout with navigation
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Top navigation with tabs
│   └── PhaseCard.tsx         # Expandable phase card component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Adding More Links
Edit `app/links/page.tsx` and add entries to the `links` array:

```typescript
const links: Link[] = [
  {
    title: "Your Link Title",
    description: "Description of the link",
    url: "https://example.com",
  },
  // Add more links here
];
```

### Modifying Phase Information
Edit `app/page.tsx` and update the `phases` array with new details, dates, or todos.

## Deployment to Vercel

This project is optimized for deployment on Vercel (the creators of Next.js).

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Environment Variables (if needed)
Add any environment variables in the Vercel dashboard under Project Settings → Environment Variables.

### Automatic Deployments
Every push to your main branch will automatically deploy to Vercel.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
