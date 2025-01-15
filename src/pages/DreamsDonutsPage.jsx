import React, { lazy, Suspense, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DreamsDonutsPage.css';

// Lazy load heavy components
const DonutBackground = lazy(() => import('../components/DreamsDonutsProject/DonutBackground/DonutBackground'));
const ProjectSection = lazy(() => import('../components/DreamsDonutsProject/ProjectSection/ProjectSection'));
const AboutSection = lazy(() => import('../components/DreamsDonutsProject/AboutSection/AboutSection'));
const ContactSection = lazy(() => import('../components/MainPage/ContactSection/ContactSection'));
const DonutModel = lazy(() => import('../components/DreamsDonutsProject/3DDonut/DonutModel'));

// Loading fallback
const LoadingFallback = () => <div className="loading-fallback">Loading...</div>;

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
            <Suspense fallback={<div className="background-placeholder" />}>
                <DonutBackground />
            </Suspense>
            <div id="content">
                <nav className="project-nav">
                    <button onClick={handleBack} className="back-button">
                        ← Back to Portfolio
                    </button>
                </nav>
                <div className="project-content">
                    <section id="intro" className="section">
                        <div className="content">
                            <h1>Dreams Donuts Command</h1>
                            <p>Streamlining Donut Production and Management</p>
                        </div>
                        <div className="model-wrapper">
                            <Suspense fallback={<LoadingFallback />}>
                                <DonutModel />
                            </Suspense>
                        </div>
                    </section>

                    <Suspense fallback={<LoadingFallback />}>
                        <AboutSection />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                        <ProjectSection />
                    </Suspense>
                </div>
                <Suspense fallback={<LoadingFallback />}>
                    <ContactSection />
                </Suspense>
            </div>
        </>
    );
};

export default DreamsDonutsPage;
