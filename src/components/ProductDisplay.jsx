import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/ProductSlice";
import styles from "./ProductDisplay.module.css";

function ProductDisplay(){
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const product = products[0];

  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span>(0)</span>
          </p>
        </div>

        {product && (
          <div className={styles.contentContainer}>
            <div
              key={product.id}
              className={styles.articleContentContainer}
            >
              <div className={styles.content}>
                <div className={styles.articleContent}>
                  <h3>{product.title}</h3>
                  <h6>{product.description}</h6>
                </div>
                <div className={styles.imageArticle}>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDisplay;
