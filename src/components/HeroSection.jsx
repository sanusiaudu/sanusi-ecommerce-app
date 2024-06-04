import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../lib/ProductSlice";
import { nextSlide, prevSlide } from "../lib/ApiSlice";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styles from "./HeroSection.module.css";

function HeroSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const batchIndex = useSelector((state) => state.slider.value);
  const error = useSelector((state) => state.products.error);
  
  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);


  const itemsPerBatch = 4;
  const start = batchIndex * itemsPerBatch;
  const end = start + itemsPerBatch;
  const displayedProducts = products.slice(start, end);

  const showNextBatch = () => {
    if((batchIndex + 1) * itemsPerBatch < products.length){
      dispatch(nextSlide())
    }
  };

  const showPrev = () => {
    if(batchIndex > 0){
      dispatch(prevSlide())
    }
  }; 

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (productStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      {batchIndex > 0 && (
        <button onClick={showPrev} className={styles.showPrev}>
          <FaAngleLeft />
        </button>
      )} 
      <div className={styles.productContainer}>
        {displayedProducts.map((product, index) => (
          <div key={index} className={styles.productContent}>
            <div>
              <img
                src={product.thumbnail}
                className={styles.image}
                alt={`Product ${index + 1}`}
              />
            </div>
            <div className={styles.productItem}>
              <p>{product.stock} Item</p>
              <h2>{product.category.toUpperCase()}</h2>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
      {(batchIndex + 1) * itemsPerBatch < products.length && (
        <button onClick={showNextBatch} className={styles.showNext}>
          <FaAngleRight />
        </button>
      )}
    </div>
  );
}

export default HeroSection;
