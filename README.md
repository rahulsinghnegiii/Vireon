# Vireon - Where Quality Meets Convenience

## Live URLs
- Frontend: https://vireon.vercel.app
- Backend API: https://vireon-backend.onrender.com/api

## Project Structure
```
vireon/
├── vireon-frontend/    # React + Vite frontend
└── vireon-backend/     # Node.js + Express backend
```

## Environment Setup

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_ENABLED=false
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api  # Development
VITE_NODE_ENV=development
```

## Development Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vireon
```

2. Install dependencies:
```bash
# Backend
cd vireon-backend
npm install

# Frontend
cd ../vireon-frontend
npm install
```

3. Start development servers:
```bash
# Backend
cd vireon-backend
npm run dev

# Frontend
cd vireon-frontend
npm run dev
```

## Deployment

### Backend (Render)
- Platform: Render
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables: Set in Render dashboard

### Frontend (Vercel)
- Platform: Vercel
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: Set in Vercel dashboard

## API Documentation

### Base URL
- Development: `http://localhost:5000/api`
- Production: `https://vireon-backend.onrender.com/api`

### Available Endpoints
- Auth: `/api/auth`
- Products: `/api/products`
- Cart: `/api/cart`
- Orders: `/api/orders`
- Reviews: `/api/reviews`
- Categories: `/api/categories`
- Dashboard: `/api/dashboard`
- Wishlist: `/api/wishlist`
- Health Check: `/api/health`

## Tech Stack
- Frontend: React, Vite, TailwindCSS
- Backend: Node.js, Express, MongoDB
- Deployment: Vercel (Frontend), Render (Backend)
