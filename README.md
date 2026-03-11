# Luxury Hotel Management Website

A modern, futuristic luxury hotel management website built with Next.js, featuring 3D elements, smooth animations, and a complete booking system.

## Features

- 🏨 **4-5 Pages**: Home, About, Facilities, Gaming Facility
- 🎨 **3D Elements**: Interactive 3D scenes using Three.js
- 💎 **Luxury Design**: Premium UI with gold accents and glass effects
- 🔐 **Authentication**: Google OAuth and Email/Password login
- 📅 **Booking System**: Complete booking flow with:
  - Room categories (Normal, High Class, Luxury, Master)
  - Check-in/Check-out date selection
  - Guest count (Adults & Children)
  - Multiple payment methods (UPI, Card, Cash on Arrival)
- ✨ **Smooth Animations**: Framer Motion for beautiful transitions
- 📱 **Responsive Design**: Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
luxeryhotelproject/
├── app/
│   ├── about/          # About page
│   ├── facility/       # Facilities page
│   ├── gaming/         # Gaming facility page
│   ├── login/          # Login/Signup page
│   ├── booking/        # Booking page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   ├── AuthProvider.tsx # Authentication context
│   └── ThreeDScene.tsx # 3D scene component
└── package.json
```

## Pages

- **Home** (`/`): Hero section with 3D background, features, and room categories
- **About** (`/about`): Hotel story, stats, and values
- **Facilities** (`/facility`): All hotel amenities and services
- **Gaming** (`/gaming`): Gaming facility details and packages
- **Login** (`/login`): Authentication with Google or Email
- **Booking** (`/booking`): Complete booking flow with payment options

## Room Categories

1. **Normal Room** - $99/night
2. **High Class Room** - $199/night
3. **Luxury Suite** - $399/night
4. **Master Room** - $699/night

## Payment Methods

- UPI
- Credit/Debit Card
- Cash on Arrival

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **date-fns** - Date utilities

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Authentication is currently simulated (localStorage-based). For production, integrate with a proper authentication service.
- The 3D scene uses React Three Fiber for optimal performance.
- All images are loaded from Unsplash (placeholder images). Replace with your own images for production.

## License

This project is created for educational purposes.
