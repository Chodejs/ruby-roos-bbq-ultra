import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [isSmoked, setIsSmoked] = useState(false);

  // 2. The toggle function
  const toggleSmoke = () => {
    setIsSmoked((prev) => !prev);
  };

  return (
    // 3. The wrapper with dynamic class
    <div className={`app-container ${isSmoked ? 'smoked' : 'light'}`}>
      
      {/* 4. Pass state and function to Header */}
      <Header 
        isSmoked={isSmoked} 
        toggleSmoke={toggleSmoke} 
      />
      
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;