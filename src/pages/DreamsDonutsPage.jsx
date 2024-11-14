import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DonutBackground from '../components/DreamsDonutsProject/DonutBackground/DonutBackground';
import ProjectSection from '../components/DreamsDonutsProject/ProjectSection/ProjectSection';
import AboutSection from '../components/DreamsDonutsProject/AboutSection/AboutSection';
import ContactSection from '../components/DreamsDonutsProject/ContactSection/ContactSection';
import DonutModel from '../components/DreamsDonutsProject/3DDonut/DonutModel';
import './DreamsDonutsPage.css';

const DreamsDonutsPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <DonutBackground />
            <div id="content">
                <nav className="project-nav">
                    <button onClick={handleBack} className="back-button">
                        ← Back to Portfolio
                    </button>
                </nav>
                <section id="intro" className="section">
                    <div className="content">
                        <h1>Dreams Donuts Command</h1>
                        <p>Streamlining Donut Production and Management</p>
                    </div>
                    <div className="model-wrapper">
                        <DonutModel />
                    </div>
                </section>

                <AboutSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </>
    );
};

export default DreamsDonutsPage;
