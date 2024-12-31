import { useEffect } from 'react';
import Header from '../components/MainPage/Header/Header';
import Hero from '../components/MainPage/Hero/Hero';
import About from '../components/MainPage/About/About';
import Skills from '../components/MainPage/Skills/Skills';
import Projects from '../components/MainPage/Projects/Projects';
import ContactSection from '../components/MainPage/ContactSection/ContactSection';

const Home = () => {

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
    </main>
  );
};

export default Home;