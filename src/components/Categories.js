
import React, { useState } from 'react';
import styles from '../styles/Categories.module.css';
import cat from "../images/Cat.png"
import CategoryProducts from './CategoryProducts';

function Categories() {
  const colors = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"]
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.leftContainer}>
      <div className={styles.categoryItem}>
        <h4>Filters</h4>
      </div>
      <div className={styles.activityContainer}>
          <div className={styles.activity} onClick={() => handleCategorySelect("men's clothing")}>
            <p>Men's Clothing</p>
            <img src={cat} alt='frame'/>
          </div>
          <div className={styles.activity} onClick={() => handleCategorySelect("women's clothing")}>
            <p>Women's Clothing</p>
            <img src={cat} alt='frame'/>
          </div>
          <div className={styles.activity} onClick={() => handleCategorySelect('jewelery')}>
            <p>Jewelry</p>
            <img src={cat} alt='frame'/>
          </div>
          <div className={styles.activity} onClick={() => handleCategorySelect('electronics')}>
            <p>Electronics</p>
            <img src={cat} alt='frame'/>
          </div>
        </div>
        <div className={styles.categoryItem}>
          <h4>Price</h4>
          <input
            type="range"
            className={styles.priceFilter}
          />
          <input
            type="range"
            className={styles.priceFilter}
          />
        </div>
        <div className={styles.categoryItem}>
        <div className={styles.colorsCategoryHeading}>
        <h4>Colors</h4>
        </div>
        <div className={styles.colorsContainer}>
        {colors.slice(0, 5).map((color, index) => (
         <div key={index} className={styles.color} style={{ backgroundColor: color }}></div>
        ))}
        </div>
        <div className={styles.colorsContainer}>
      {colors.slice(5, 10).map((color, index) => (
        <div key={index} className={styles.color} style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
        <div className={styles.categoryItem}>
        <h4>Size</h4>
          <div className={styles.sizesContainer}>
            <button className={styles.sizeButton}>XX-Small</button>
            <button className={styles.sizeButton}>X-Small</button>
            <button className={styles.sizeButton}>Small</button>
            <button className={styles.sizeButton}>Medium</button>
            <button className={styles.sizeButton}>Large</button>
            <button className={styles.sizeButton}>X-Large</button>
            <button className={styles.sizeButton}>XX-Large</button>
            <button className={styles.sizeButton}>3X-Large</button>
            <button className={styles.sizeButton}>4X-Large</button>
          </div>
        </div>
        <div className={styles.categoryItem}>
        <h4>Dress Style</h4>
        <div className={styles.activityContainer}>
          <div className={styles.activity}>
            <p>Casual</p>
            <img src={cat} alt="Casual" className={styles.activityImage} />
          </div>
          <div className={styles.activity}>
            <p>Formal</p>
            <img src={cat} alt="Formal" className={styles.activityImage} />
          </div>
          <div className={styles.activity}>
            <p>Party</p>
            <img src={cat} alt="Party" className={styles.activityImage} />
          </div>
          <div className={styles.activity}>
            <p>Gym</p>
            <img src={cat} alt="Gym" className={styles.activityImage} />
          </div>
        </div>
        </div>
        <div className={styles.button}>
        <button className={styles.applyButton}>Apply Filter</button>
        </div>
        
      </div>
      <div className={styles.rightContainer}>
        {selectedCategory && <CategoryProducts category={selectedCategory} />}
      </div>
    </div>
  );
}

export default Categories;


