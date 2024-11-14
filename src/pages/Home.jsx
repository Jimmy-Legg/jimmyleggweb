import { useEffect } from 'react';
import Header from '../components/MainPage/Header/Header';
import Hero from '../components/MainPage/Hero/Hero';
import About from '../components/MainPage/About/About';
import Skills from '../components/MainPage/Skills/Skills';
import Projects from '../components/MainPage/Projects/Projects';
import Footer from '../components/MainPage/Footer/Footer';

const Home = () => {

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;