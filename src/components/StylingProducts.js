import React from 'react';
import styles from '../styles/StylingProducts.module.css';
import gym from '../images/Gym.png';
import party from '../images/Party.png';
import casual from '../images/Casual.png';
import formal from '../images/Formal.png';

function StylingProducts() {
  return (
    <div className={styles.__container}>
    <p>BROWSE BY DRESS STYLE</p>
    <div className={styles.second_container}>
      <div className={styles.containerForSmallImages}>
        <img src={casual} alt="Picture 1" />
      </div>
      <div className={styles.containerForImages}>
        <img src={formal} alt="Picture 2" />
      </div>
      <div className={styles.containerForImages}>
        <img src={party} alt="Picture 4" />
      </div>
      <div className={styles.containerForSmallImages}>
        <img src={gym} alt="Picture 3" />
      </div>
    </div>
    </div>
  );
}

export default StylingProducts;
