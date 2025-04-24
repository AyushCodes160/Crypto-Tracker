import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectAllCryptoAssets, selectLastUpdated } from '../features/crypto/cryptoSelectors';
import CryptoTableRow from './CryptoTableRow';

const CryptoTable: React.FC = () => {
  const assets = useAppSelector(selectAllCryptoAssets);
  const lastUpdated = useAppSelector(selectLastUpdated);
  
  const formattedLastUpdate = lastUpdated 
    ? new Date(lastUpdated).toLocaleTimeString() 
    : 'N/A';

  return (
    <div className="overflow-x-auto w-full rounded-lg shadow-md">
      <div className="px-4 py-3 bg-dark-600 text-right text-xs text-gray-400">
        Last updated: {formattedLastUpdate}
      </div>
      <table className="min-w-full bg-dark-800 text-white">
        <thead>
          <tr className="bg-dark-700 text-gray-400 text-xs uppercase tracking-wider">
            <th className="py-3 px-3 text-center">#</th>
            <th className="py-3 px-3 text-left">Name</th>
            <th className="py-3 px-3 text-left">Price</th>
            <th className="py-3 px-3 text-left">1h %</th>
            <th className="py-3 px-3 text-left">24h %</th>
            <th className="py-3 px-3 text-left">7d %</th>
            <th className="py-3 px-3 text-left">Market Cap</th>
            <th className="py-3 px-3 text-left">Volume (24h)</th>
            <th className="py-3 px-3 text-left">Circulating Supply</th>
            <th className="py-3 px-3 text-left">Max Supply</th>
            <th className="py-3 px-3 text-left">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <CryptoTableRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;