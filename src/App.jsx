import { useState } from 'react';
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