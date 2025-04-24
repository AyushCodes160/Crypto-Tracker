# Crypto Tracker Pro

A real-time cryptocurrency price tracking application built with React, Redux Toolkit, and TypeScript.

## Features

- Real-time price updates for major cryptocurrencies
- Price change indicators with animations
- Responsive design
- Market statistics including volume, market cap, and supply information
- 7-day price trend visualization
- Top gainers and losers tracking

## Tech Stack

- React 18
- Redux Toolkit
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushCodes160/crypto-tracker-pro.git
   ```

2. Install dependencies:
   ```bash
   cd crypto-tracker-pro
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Architecture

The application uses a modern React architecture with Redux Toolkit for state management:

- **Redux Store**: Manages all cryptocurrency data and updates
- **WebSocket Service**: Simulates real-time price updates
- **Responsive UI**: Built with Tailwind CSS for a mobile-first design
- **TypeScript**: Ensures type safety throughout the application

## License

MIT