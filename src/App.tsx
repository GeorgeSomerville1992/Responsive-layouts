import './App.css';
import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
