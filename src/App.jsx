import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [isSmoked, setIsSmoked] = useState(false);

  const toggleSmoke = () => {
    setIsSmoked((prev) => !prev);
  };
    // Sync body background color with the current theme
  useEffect(() => {
    if (isSmoked === true) { 
      document.body.style.backgroundColor = 'var(--charcoal)';
    } else { 
      document.body.style.backgroundColor = 'var(--fire-grilled)'; 
    }
    
    // Cleanup function to reset if needed
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isSmoked]); 
  

  return (
    <div className={`app-container ${isSmoked ? 'smoked' : 'light'}`}>
      
      <Header isSmoked={isSmoked} toggleSmoke={toggleSmoke} />
      
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;