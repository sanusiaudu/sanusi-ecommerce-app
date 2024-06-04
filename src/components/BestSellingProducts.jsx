
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/ProductSlice";
import CartProduct from './CartProduct';
import styles from "./BestSellingProducts.module.css";

function BestSellingProducts() {
  const INITIAL_DISPLAY_COUNT = 8;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const showMore = () => {
    setDisplayCount(displayCount + 4);
  };

  const showLess = () => {
    setDisplayCount(Math.max(displayCount - 4, INITIAL_DISPLAY_COUNT));
  };

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.headerOne}>Featured Products</h4>
        <h3 className={styles.headerTwo}>BESTSELLER PRODUCTS</h3>
        <p className={styles.headerBody}>Problems trying to resolve the conflict between</p>
      </div>
      <div className={styles.products}>
        {products.slice(0, displayCount).map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}

      </div>
        <div>
          {displayCount > INITIAL_DISPLAY_COUNT && (
            <button onClick={showLess} className={styles.button}>SHOW LESS PRODUCT</button>
          )}
          {displayCount < products.length && (
            <button onClick={showMore} className={styles.button} >LOAD MORE PRODUCT</button>
          )}
        </div>
    </div>
  );
}

export default BestSellingProducts;
