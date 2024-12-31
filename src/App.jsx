import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const BoulierPage = React.lazy(() => import('./pages/BoulierPage'));
const DreamsDonutsPage = React.lazy(() => import('./pages/DreamsDonutsPage'));
const JavaProjectPage = React.lazy(() => import('./pages/JavaProjectPage'));
const PythonGamePage = React.lazy(() => import('./pages/PythonGamePage'));
const Error404 = React.lazy(() => import('./pages/Error404'));

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

  <url>
    <loc>https://jimmy-legg.live/python-game</loc>
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

const SkipToContent = () => (
  <a href="#main-content" className="skip-to-content">
    Skip to main content
  </a>
);

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });

    // Add keyboard navigation handler
    const handleKeyDown = (e) => {
      // Add Tab key indicator
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    };

    // Remove tab key indicator when mouse is used
    const handleMouseDown = () => {
      document.body.classList.remove('user-is-tabbing');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <ErrorBoundary>
      <SkipToContent />
      <div id="main-content" role="main" tabIndex="-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boulier" element={<BoulierPage />} />
            <Route path="/dreams-donuts" element={<DreamsDonutsPage />} />
            <Route path="/java-project" element={<JavaProjectPage />} />
            <Route path="/python-game" element={<PythonGamePage />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;