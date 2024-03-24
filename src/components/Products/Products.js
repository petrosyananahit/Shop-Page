 
  import React, { useState, useEffect, useRef } from 'react';
  import styles from "./Products.module.css";
  import SingleProductCard from "../SingleProductCard/SingleProductCard"
  import { NavLink } from 'react-router-dom';

  function Products() {
    const [data,setData] = useState(null)
    const [products, setProducts] = useState(null);
    const containerRef = useRef(null);
    const [limit, setLimit] = useState(0);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const newData = await response.json();
        setData(newData);
        setProducts(newData.slice(0,5));
        setLimit(limit)
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };
  
    const handleScroll = () => {
      const container = containerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight + 2 >= scrollHeight) {
        setLimit(p=>p+5)
        setProducts([...products, ...data.slice(limit+5,limit+10)])
      }
    };
  
    return (
      <div style={{textAlign:"center"}}> 
        <div
          className={styles.product__container}
          ref={containerRef}
          onScroll={handleScroll}
          style={{ height: '500px', overflowY: 'auto' }}>
          {products && products.map((product, index) => (
            <NavLink to={`products/${product.id}`} key={index}>
            <SingleProductCard
              image={product.image}
              name={product.title}
              rating={product.rating.rate}
              price={product.price}/>
            </NavLink>
          ))}
          {!data&& <p style={{ fontWeight: "700" }}>Loading...</p>}
        </div>
      </div>
    );
  }
  
  export default Products;
  
