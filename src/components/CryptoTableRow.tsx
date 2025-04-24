import React, { useEffect, useState } from 'react';
import { CryptoAsset } from '../types/crypto';
import { formatCurrency, formatPercentage, formatInteger } from '../utils/formatters';
import MiniChart from './MiniChart';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface CryptoTableRowProps {
  asset: CryptoAsset;
}

// Helper function to determine CSS classes for percentage cells
const getPercentageClass = (value: number): string => {
  return value > 0 
    ? 'text-success-500' 
    : value < 0 
      ? 'text-danger-500' 
      : 'text-gray-500';
};

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset }) => {
  const [priceChanged, setPriceChanged] = useState(false);
  const [priceDirection, setPriceDirection] = useState<'up' | 'down' | 'neutral'>('neutral');
  
  // Determine price change direction and animate when it changes
  useEffect(() => {
    if (asset.previousPrice !== asset.currentPrice) {
      setPriceDirection(asset.currentPrice > asset.previousPrice ? 'up' : 'down');
      setPriceChanged(true);
      
      const timer = setTimeout(() => {
        setPriceChanged(false);
      }, 2000); // Match duration with CSS animation
      
      return () => clearTimeout(timer);
    }
  }, [asset.currentPrice, asset.previousPrice]);

  const priceChangeClass = priceChanged 
    ? priceDirection === 'up' 
      ? 'animate-price-up' 
      : 'animate-price-down' 
    : '';

  return (
    <tr className="border-b border-gray-700 hover:bg-dark-700 transition-colors text-sm">
      <td className="py-4 px-3 text-center">{asset.rank}</td>
      <td className="py-4 px-3">
        <div className="flex items-center gap-3">
          <img src={asset.logo} alt={`${asset.name} logo`} className="w-6 h-6" />
          <span className="font-medium">{asset.name}</span>
          <span className="text-gray-400 text-xs">{asset.symbol}</span>
        </div>
      </td>
      <td className={`py-4 px-3 font-mono font-medium ${priceChangeClass}`}>
        <div className="flex items-center">
          {formatCurrency(asset.currentPrice)}
          {priceDirection === 'up' && <ArrowUp className="ml-1 w-4 h-4 text-success-500" />}
          {priceDirection === 'down' && <ArrowDown className="ml-1 w-4 h-4 text-danger-500" />}
        </div>
      </td>
      <td className={`py-4 px-3 ${getPercentageClass(asset.percentChange1h)}`}>
        {formatPercentage(asset.percentChange1h)}
      </td>
      <td className={`py-4 px-3 ${getPercentageClass(asset.percentChange24h)}`}>
        {formatPercentage(asset.percentChange24h)}
      </td>
      <td className={`py-4 px-3 ${getPercentageClass(asset.percentChange7d)}`}>
        {formatPercentage(asset.percentChange7d)}
      </td>
      <td className="py-4 px-3 font-mono">{formatCurrency(asset.marketCap)}</td>
      <td className="py-4 px-3 font-mono">{formatCurrency(asset.volume24h)}</td>
      <td className="py-4 px-3 font-mono">{formatInteger(asset.circulatingSupply)}</td>
      <td className="py-4 px-3 font-mono">
        {asset.maxSupply ? formatInteger(asset.maxSupply) : '∞'}
      </td>
      <td className="py-4 px-3">
        <MiniChart 
          data={asset.sparkline} 
          trend={asset.percentChange7d > 0 ? 'up' : asset.percentChange7d < 0 ? 'down' : 'neutral'} 
        />
      </td>
    </tr>
  );
};

export default CryptoTableRow;