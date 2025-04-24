import React from 'react';
import { Activity } from 'lucide-react';
import { useAppSelector } from '../app/hooks';
import { selectTopGainers, selectTopLosers } from '../features/crypto/cryptoSelectors';
import { formatPercentage } from '../utils/formatters';

const Header: React.FC = () => {
  const topGainers = useAppSelector(selectTopGainers);
  const topLosers = useAppSelector(selectTopLosers);

  return (
    <header className="bg-dark-800 text-white py-6 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Activity className="h-8 w-8 text-primary-500 mr-3" />
            <h1 className="text-2xl font-bold">Crypto Tracker Pro</h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {/* Top Gainers */}
            <div className="bg-dark-700 rounded-md px-3 py-2">
              <div className="text-xs text-gray-400 mb-1">Top Gainers (24h)</div>
              <div className="flex flex-col gap-1">
                {topGainers.slice(0, 1).map(asset => (
                  <div key={asset.id} className="flex items-center">
                    <span className="text-sm mr-2">{asset.symbol}</span>
                    <span className="text-success-500 text-sm">{formatPercentage(asset.percentChange24h)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Losers */}
            <div className="bg-dark-700 rounded-md px-3 py-2">
              <div className="text-xs text-gray-400 mb-1">Top Losers (24h)</div>
              <div className="flex flex-col gap-1">
                {topLosers.slice(0, 1).map(asset => (
                  <div key={asset.id} className="flex items-center">
                    <span className="text-sm mr-2">{asset.symbol}</span>
                    <span className="text-danger-500 text-sm">{formatPercentage(asset.percentChange24h)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;