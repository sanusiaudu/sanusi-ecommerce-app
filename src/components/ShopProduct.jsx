import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/ProductSlice";
import styles from "./ShopProduct.module.css";
import CartProduct from "./CartProduct";

function ShopProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.product}>
      <div className={styles.productText}>
        <h3>BESTSELLER PRODUCTS</h3>
      </div>
      <div className={styles.productContent}>
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className={styles.productItems}>
            <CartProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProduct;
