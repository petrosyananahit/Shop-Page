import React, { useState, useEffect, useRef } from 'react';
import ProductsCards from './ProductsCards';
import styles from "../styles/Products.module.css";
import { NavLink } from 'react-router-dom';

function CategoryProducts({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProducts(data.slice(0, limit));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      fetchData();
      setLimit(prevLimit => prevLimit + 5);
    }
  };


  return (
    <div style={{textAlign:"center"}}> 
      <h1>{category.toUpperCase()}</h1>
      <div
        className={styles.product__container}
        ref={containerRef}
        onScroll={handleScroll}
        style={{ height: '500px', overflowY: 'auto' }} 
      >
        {products.map((product) => (
          <NavLink to={`products/${product.id}`} key={product.id}>
            <ProductsCards
              image={product.image}
              name={product.title}
              rating={product.rating.rate}
              price={product.price}
            />
          </NavLink>
        ))}
        {isLoading && <p style={{ fontWeight: "700" }}>Loading...</p>}
      </div>
    </div>
  );
}

export default CategoryProducts;
