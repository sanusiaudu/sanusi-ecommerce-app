import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../lib/ProductSlice";
import styles from "./FeaturedPost.module.css";
import { TiStopwatch } from "react-icons/ti";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function FeaturedPost() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const [currentDate, setCurrentDate] = useState(getDate());
 

  return (
    <>
      <div className={styles.post}>
        <div className={styles.header}>
            <p>Practice Advice</p>
            <h3>Featured Products</h3>
        </div>
        <div className={styles.featuredItem}>
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className={styles.featuredPostContent}>
              <img
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
              />

              <div className={styles.featuredTextContainer}>
                <div className={styles.about}>
                  <a href="#">{product.category}</a>
                  <a href="#">Trending</a>
                  <a href="#">New</a>
                </div>

                <div className={styles.featuredText}>
                  <h4>{product.title}</h4>

                  <p>{product.description}</p>

                  <div className={styles.dateComment}>
                    <div className={styles.dateContent}>                      
                      <TiStopwatch size={18}  className={styles.clock}/>
                      <div className={styles.time}>
                        {currentDate}
                      </div>
                    </div>

                    <div className={styles.ratingContent}>                      
                        <AiOutlineAreaChart size={18} className={styles.rating}/>
                      <p>{product.rating} rating</p>
                    </div>
                  </div>

                  <div className={styles.learnMore}>
                    <a href="#">
                      Learn More
                      <FaAngleRight  size={16} className={styles.rightIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedPost;
