import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import CryptoTable from './components/CryptoTable';
import Header from './components/Header';
import { mockWebSocketService } from './services/websocket';

function App() {
  const dispatch = useAppDispatch();

  // Connect to WebSocket on mount, disconnect on unmount
  useEffect(() => {
    mockWebSocketService.connect(dispatch);
    
    return () => {
      mockWebSocketService.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Market Overview</h2>
          <p className="text-gray-400">
            Real-time cryptocurrency prices with automatic updates every few seconds
          </p>
        </div>
        
        <CryptoTable />
      </main>
    </div>
  );
}

export default App;