import { AppDispatch } from '../app/store';
import { updateCryptoData } from '../features/crypto/cryptoSlice';
import { 
  generateRandomPriceChange, 
  generateRandomPercentChange, 
  generateRandomVolumeChange 
} from '../utils/mockData';

export class MockWebSocketService {
  private interval: NodeJS.Timeout | null = null;
  private dispatch: AppDispatch | null = null;

  // Initialize the mock WebSocket
  public connect(dispatch: AppDispatch): void {
    this.dispatch = dispatch;
    
    // Clear any existing interval
    if (this.interval) {
      clearInterval(this.interval);
    }
    
    // Set up the interval to simulate WebSocket updates
    this.interval = setInterval(() => {
      this.simulateUpdate();
    }, 1500); // Update every 1.5 seconds
    
    console.log('WebSocket connected');
  }

  // Simulate a WebSocket update
  private simulateUpdate(): void {
    if (!this.dispatch) return;
    
    this.dispatch(updateCryptoData());
  }

  // Disconnect the mock WebSocket
  public disconnect(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
    console.log('WebSocket disconnected');
  }
}

// Create a singleton instance
export const mockWebSocketService = new MockWebSocketService();