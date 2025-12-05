import { useState } from "react";
import styles from './Menu.module.css';

  const menuItems = [
        { id: 1, name: 'Vegan Brisket', price: 25, category: 'smoked' },
        { id: 2, name: 'Pulled Jackfruit', price: 20, category: 'fire-grilled' },
        { id: 3, name: 'Spicy Corn Ribs', price: 22, category: 'smoked' },
        { id: 4, name: 'Tofu Beer Can Chickn', price: 18, category: 'smoked' },
        { id: 5, name: 'Seitan Sausage', price: 15, category: 'fire-grilled' },
        { id: 6, name: 'BBQ Cauliflower Wings', price: 12, category: 'fire-grilled' },
        { id: 7, name: 'Smoked Mac & Cheeze', price: 14, category: 'smoked' },
        { id: 8, name: 'Grilled Portobello Burger', price: 19, category: 'fire-grilled' },
        { id: 9, name: 'Smoked Tofu Nachos', price: 16, category: 'smoked' },
        { id: 10, name: 'BBQ Tempeh Sliders', price: 17, category: 'fire-grilled' }
    ];

export default function Menu() {
    const [currentCategory, setCurrentCategory] = useState('all');

    const filteredItems  = currentCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === currentCategory);

    return (
        <section className={styles.menuSection}>
            <h3 className={styles.menuH3}>Our Menu</h3>
            <div className={styles.filters}>
                <button 
                className={currentCategory === 'all' ? 'active-filter' : ''}
                onClick={() => setCurrentCategory('all')}
                >
                    All
                </button>

                <button 
                className={currentCategory === 'fire-grilled' ? 'active-filter' : ''}
                onClick={() => setCurrentCategory('fire-grilled')}
                    >
                    Fire-Grilled

                </button>

                <button
                    className={currentCategory === 'smoked' ? 'active-filter' : ''}
                    onClick={() => setCurrentCategory('smoked')}
                    >
                    Smoked
                </button>
            </div>
            <div className={styles.menuGrid}>
                {filteredItems.map((item) => (
                    <div className={styles.menuCard} key={item.id}>
                        <h5>{item.name}</h5>
                        <span>{item.category}</span>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div> 
            {/* Fallback if empty */}
            {filteredItems.length === 0 && <p>No items found!</p>}   
        </section>
    );
};



