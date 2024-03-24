import React from 'react';
import styles from './FilterForComments.module.css';
import filter from "../../images/Filter.png";
function FilterForComments() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles["section-divider"]}>Product Details</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.section}>
          <div className={styles["section-divider"]}>Rating & Reviews</div>
          <div className={styles.line} style={{borderTop:"4px solid black"}}></div>
        </div>
        <div className={styles.section}>
          <div className={styles["section-divider"]}>FAQs</div>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.header}>
        <h1 className={styles["header-title"]}>All Reviews <span className={styles.subtext}>(6)</span></h1>
        <div className={styles.imageButtonsContainer}>
          <div className={styles.filterContainer}>
            <img src={filter} alt="image" style={{ width: '30px', height: '30px' }} />
          </div>
          <div>
            <button className={styles.firstButton}>Latest</button>
            <button className={styles.secondButton}>Write a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterForComments;
