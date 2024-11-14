import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import BoulierPage from './pages/BoulierPage';
import DreamsDonutsPage from './pages/DreamsDonutsPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boulier" element={<BoulierPage />} />
      <Route path="/dreams-donuts" element={<DreamsDonutsPage />} />
    </Routes>
  );
}

export default App;