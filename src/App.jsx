import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Description from './components/Description';

function App() {
    const [isBlurred, setIsBlurred] = useState(false);
    const appRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
      const heroRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
          if(scrolled > 200){
             setIsBlurred(true);
            } else {
             setIsBlurred(false);
            }
        };
        const handleMouseMove = (event) => {
            if(appRef.current){
                const rect = appRef.current.getBoundingClientRect();
                 setMousePos({
                 x: event.clientX - rect.left,
                 y: event.clientY - rect.top,
             });
            }
        };
        window.addEventListener('scroll', handleScroll);
         window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
             window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    return (
        <div className={`app-container ${isBlurred ? 'blurred' : ''}`}  ref={appRef} style={{
            '--mouse-x': `${mousePos.x}px`,
            '--mouse-y': `${mousePos.y}px`,
        }}>

            <Header  scrollToSection={scrollToSection} heroRef={heroRef} featuresRef={featuresRef}/>
            <HeroSection  ref={heroRef}/>
            <Description />
            <FeaturesSection  ref={featuresRef}/>
            <Footer />
        </div>
    );
}

export default App;