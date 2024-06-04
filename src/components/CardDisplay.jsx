import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight, FaEye, FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { fetchProducts } from "../lib/ProductSlice";
import star from "../assets/stars.svg";
import styles from "./CardDisplay.module.css";

const BATCH_SIZE = 1; 

function CardDisplay({ product }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);


 

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

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

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleNextBatch = () => {
    setCurrentBatchIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex * BATCH_SIZE < products.length ? newIndex : prevIndex;
    });
  };

  const handlePrevBatch = () => {
    setCurrentBatchIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };


  const currentBatch = products.slice(
    currentBatchIndex * BATCH_SIZE,
    (currentBatchIndex + 1) * BATCH_SIZE
  );

  return (
      <div className={styles.heroMainContainer}>
        <div className={styles.shopLinks}>
          <nav>
            <a href="#" className={styles.home}>
              Home
            </a>
            <FaAngleRight />
            <a href="#" className={styles.shop}>
              Shop
            </a>
          </nav>
        </div>
        <div className={styles.heroContainer}>
          {currentBatch.map((product) => (
            <div key={product.id} className={styles.heroContent}>
              <div className={styles.imageContents}>
                <div className={styles.imageContent}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <div
                    className={styles.leftIcon}
                    onClick={handlePrevBatch}
                  >
                    <FaAngleLeft size={50}/>
                  </div>
                  <div
                    className={styles.rightIcon}
                    onClick={handleNextBatch}
                  >
                    <FaAngleRight size={50} />
                  </div>
                </div>
                <div className={styles.imageOne}>
                  {product.images.map((img, index) => (
                    <img key={index} src={img} alt={product.title} />
                  ))}
                </div>
              </div>
              <div className={styles.heroContentTwo}>
                <h4>{product.title}</h4>
                <div className={styles.icons}>
                  <img src={star} alt="Star rating" />
                  <span>{product.rating} Reviews</span>
                </div>
                <h3>${product.price}</h3>
                <h6>
                  Availability:{" "}
                  <span>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
                </h6>
                <div className={styles.line}></div>
                <div className={styles.colorIcons}>
                  {["#23a6f0", "#2dc071", "#e77c40", "#252b42"].map((color) => (
                    <span
                      key={color}
                      style={{
                        backgroundColor: color,
                        border:
                          selectedColor === color ? "2px solid white" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => handleColorClick(color)}
                    ></span>
                  ))}
                </div>
                <div className={styles.buttonOptions}>
                  <button onClick={handleAddToCart} >
                    Select Options
                  </button>
                  <div className={styles.selectIcons}>
                    <FaRegHeart size={18} />
                    <BsCart size={18} />
                    <FaEye size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
}

export default CardDisplay;
