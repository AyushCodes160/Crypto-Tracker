import { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';
import { CryptoAsset } from '../../types/crypto';

// Basic selectors
export const selectAllCryptoAssets = (state: RootState) => state.crypto.assets;
export const selectCryptoStatus = (state: RootState) => state.crypto.status;
export const selectCryptoError = (state: RootState) => state.crypto.error;
export const selectLastUpdated = (state: RootState) => state.crypto.lastUpdated;

// Memoized selectors for optimized rendering
export const selectAssetById = createSelector(
  [selectAllCryptoAssets, (state, assetId: string) => assetId],
  (assets, assetId) => assets.find(asset => asset.id === assetId)
);

export const selectTopGainers = createSelector(
  [selectAllCryptoAssets],
  (assets) => [...assets].sort((a, b) => b.percentChange24h - a.percentChange24h).slice(0, 3)
);

export const selectTopLosers = createSelector(
  [selectAllCryptoAssets],
  (assets) => [...assets].sort((a, b) => a.percentChange24h - b.percentChange24h).slice(0, 3)
);

export const selectHighestVolume = createSelector(
  [selectAllCryptoAssets],
  (assets) => [...assets].sort((a, b) => b.volume24h - a.volume24h)[0]
);

export const selectPriceChangeDirection = createSelector(
  [selectAllCryptoAssets],
  (assets) => {
    return assets.map(asset => ({
      id: asset.id,
      direction: asset.currentPrice > asset.previousPrice 
        ? 'up' 
        : asset.currentPrice < asset.previousPrice 
          ? 'down' 
          : 'neutral'
    }));
  }
);