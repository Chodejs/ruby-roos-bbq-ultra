import styles from './Hero.module.css';
import logo from '../assets/images/ruby-logo1.png';

export default function Hero() {

    return (
        <section className={styles.heroBanner}>
            <h2>Welcome to the best BBQ in Ohio</h2>
            <img src={logo} alt="Ruby Roo's BBQ Logo" width={500} />
            <p>From the Roober to the Toober | Made With Purr Love</p>
        </section>
    );
};