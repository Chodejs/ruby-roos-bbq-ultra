import styles from './Header.module.css';

// 1. Destructure props directly
export default function Header({ isSmoked, toggleSmoke }) {
  
  return (
    <header className={styles.siteHeader}>
      <h1 className={styles.headerH1}>Ruby Roo's BBQ 🍖</h1>
      
      {/* Added Navigation 👇 */}
      <nav className={styles.nav}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
        </ul>
      </nav>

      {/* 2. The Button uses the props */}
      <button onClick={toggleSmoke} className="smoke-toggle-btn">
        {isSmoked ? "Light 'er up! 🔥" : "Go Smoked! 💨"}
      </button>
    </header>
  );
}