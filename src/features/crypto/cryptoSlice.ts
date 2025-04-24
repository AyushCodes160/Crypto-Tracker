import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoState, CryptoAsset } from '../../types/crypto';
import { mockCryptoData, generateRandomPriceChange, generateRandomPercentChange, generateRandomVolumeChange } from '../../utils/mockData';

const initialState: CryptoState = {
  assets: mockCryptoData,
  status: 'idle',
  error: null,
  lastUpdated: Date.now()
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    fetchCryptoStart(state) {
      state.status = 'loading';
    },
    fetchCryptoSuccess(state, action: PayloadAction<CryptoAsset[]>) {
      state.status = 'succeeded';
      state.assets = action.payload;
      state.lastUpdated = Date.now();
    },
    fetchCryptoFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateCryptoData(state) {
      // Update each asset with random changes to simulate real-time data
      state.assets = state.assets.map(asset => {
        const newPrice = generateRandomPriceChange(asset.currentPrice);
        
        return {
          ...asset,
          previousPrice: asset.currentPrice,
          currentPrice: newPrice,
          percentChange1h: generateRandomPercentChange(asset.percentChange1h),
          percentChange24h: generateRandomPercentChange(asset.percentChange24h),
          percentChange7d: generateRandomPercentChange(asset.percentChange7d),
          volume24h: generateRandomVolumeChange(asset.volume24h),
        };
      });
      
      state.lastUpdated = Date.now();
    }
  },
});

export const {
  fetchCryptoStart,
  fetchCryptoSuccess,
  fetchCryptoFailure,
  updateCryptoData
} = cryptoSlice.actions;

export default cryptoSlice.reducer;