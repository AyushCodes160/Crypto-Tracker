import { CryptoAsset } from '../types/crypto';

// Helper function to generate sparkline data with some randomness
const generateSparkline = (baseValue: number, volatility: number): number[] => {
  const sparkline = [];
  let lastValue = baseValue;
  
  for (let i = 0; i < 7; i++) {
    const change = (Math.random() - 0.5) * 2 * volatility;
    lastValue = Math.max(lastValue * (1 + change), 0.01);
    sparkline.push(lastValue);
  }
  
  return sparkline;
};

export const mockCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    currentPrice: 66432.12,
    previousPrice: 66432.12,
    percentChange1h: 0.25,
    percentChange24h: 2.53,
    percentChange7d: -1.25,
    marketCap: 1308794232611,
    volume24h: 25987654321,
    circulatingSupply: 19700000,
    maxSupply: 21000000,
    sparkline: generateSparkline(66000, 0.03)
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    currentPrice: 3437.64,
    previousPrice: 3437.64,
    percentChange1h: -0.35,
    percentChange24h: 1.75,
    percentChange7d: 5.32,
    marketCap: 412389765432,
    volume24h: 19876543210,
    circulatingSupply: 120050000,
    maxSupply: null,
    sparkline: generateSparkline(3400, 0.05)
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    currentPrice: 1.00,
    previousPrice: 1.00,
    percentChange1h: 0.01,
    percentChange24h: -0.02,
    percentChange7d: 0.00,
    marketCap: 105432987654,
    volume24h: 65487965412,
    circulatingSupply: 105432987654,
    maxSupply: null,
    sparkline: generateSparkline(1, 0.001)
  },
  {
    id: 'binance-coin',
    rank: 4,
    name: 'Binance Coin',
    symbol: 'BNB',
    logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    currentPrice: 585.42,
    previousPrice: 585.42,
    percentChange1h: 0.58,
    percentChange24h: -0.75,
    percentChange7d: 3.21,
    marketCap: 87654321098,
    volume24h: 1765432109,
    circulatingSupply: 149678954,
    maxSupply: 200000000,
    sparkline: generateSparkline(580, 0.04)
  },
  {
    id: 'solana',
    rank: 5,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    currentPrice: 139.78,
    previousPrice: 139.78,
    percentChange1h: 1.24,
    percentChange24h: 4.56,
    percentChange7d: -2.34,
    marketCap: 60987654321,
    volume24h: 3987654321,
    circulatingSupply: 436234567,
    maxSupply: null,
    sparkline: generateSparkline(140, 0.06)
  },
  {
    id: 'cardano',
    rank: 6,
    name: 'Cardano',
    symbol: 'ADA',
    logo: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    currentPrice: 0.72,
    previousPrice: 0.72,
    percentChange1h: -0.15,
    percentChange24h: 1.23,
    percentChange7d: -3.45,
    marketCap: 25432198765,
    volume24h: 987654321,
    circulatingSupply: 35380874231,
    maxSupply: 45000000000,
    sparkline: generateSparkline(0.72, 0.05)
  }
];

// Random change generators for simulating WebSocket updates
export const generateRandomPriceChange = (currentPrice: number): number => {
  const changePercent = (Math.random() - 0.5) * 0.02; // -1% to +1%
  const newPrice = currentPrice * (1 + changePercent);
  return parseFloat(newPrice.toFixed(2));
};

export const generateRandomPercentChange = (currentPercent: number): number => {
  const change = (Math.random() - 0.5) * 0.5; // -0.25% to +0.25%
  const newPercent = currentPercent + change;
  return parseFloat(newPercent.toFixed(2));
};

export const generateRandomVolumeChange = (currentVolume: number): number => {
  const changePercent = (Math.random() - 0.5) * 0.04; // -2% to +2%
  const newVolume = currentVolume * (1 + changePercent);
  return Math.round(newVolume);
};