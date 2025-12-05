import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h3>Our Story</h3>
                    <p>
                        Welcome to <strong>Ruby Roo's BBQ</strong>, where the smoke is slow and the flavor is fast. 
                        Founded in 2025 by Chris and Emma, we set out to prove that plant-based BBQ can 
                        stand toe-to-toe with the real thing.
                    </p>
                    <p>
                        Our head pitmaster, <strong>Boobers</strong> (yes, the cat), oversees every batch 
                        of our signature "Purr-fectly Smoked" sauce. Whether you are here for the 
                        Pulled Jackfruit or the Spicy Corn Ribs, you are family now.
                    </p>
                </div>
                {/* Optional: Could add another image here */}
            </div>
        </section>
    );
};