import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import BoulierPage from './pages/BoulierPage';
import DreamsDonutsPage from './pages/DreamsDonutsPage';
import JavaProjectPage from './pages/JavaProjectPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const Sitemap = () => {
  useEffect(() => {
    // Set the content type to XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>https://jimmy-legg.live/</loc>
    <priority>1.0</priority>
  </url>

  <!-- Projects -->
  <url>
    <loc>https://jimmy-legg.live/dreams-donuts</loc>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://jimmy-legg.live/boulier</loc>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://jimmy-legg.live/java-project</loc>
    <priority>0.8</priority>
  </url>

  <!-- External Project Links (for reference) -->
  <url>
    <loc>https://github.com/Leteno18/Snake</loc>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://github.com/Leteno18/SAE-S1.02</loc>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://github.com/Jimmy-Legg/Orchard</loc>
    <priority>0.6</priority>
  </url>

  <!-- Resources -->
  <url>
    <loc>https://jimmy-legg.live/pdf/Jimmy%20Legg.pdf</loc>
    <priority>0.5</priority>
  </url>
</urlset>`;

    // Create a Blob with the XML content
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);

    // Trigger download or display
    window.location.href = url;

    // Cleanup
    return () => URL.revokeObjectURL(url);
  }, []);

  return null;
};

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
      <Route path="/java-project" element={<JavaProjectPage />} />
      <Route path="/sitemap.xml" element={<Sitemap />} />
    </Routes>
  );
}

export default App;