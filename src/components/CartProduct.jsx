import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/CartSlice";
import { addToWishList } from "../lib/WishListSlice";
import styles from "./CartProduct.module.css";
import star from "../assets/Group 5.svg";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";

function CartProduct  ({ product })  {
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product data is missing</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleaddToWishList = () => {
    dispatch(addToWishList(product));
  };

  return (
    <div className={styles.productCartContainer}>
      <div className={styles.productCartContentOne}>
        <img src={product.thumbnail} alt={product.title} />

        <h4>{product.category}</h4>

        <div className={styles.likeShareContainer}>
          <p>{product.discountPercentage}%</p>

          <div className={styles.likeShareIcon}>
            <div className={styles.share}>
              <LuGitCompare />
            </div>
            <div className={styles.share} onClick={handleaddToWishList}>
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productCartContentTwo}>
        <h4>{product.brand}</h4>
        <p className={styles.text}>{product.title}</p>
        <p className={styles.priceTag}>€ {product.price}</p>

        <div className={styles.icons}>
          <img src={star} alt="Star rating" />

          <div className={styles.rateNumber}>
            <span>{product.rating}</span>
            <span>({product.stock})</span>
          </div>
        </div>
      </div>

      <div className={styles.productCartContentThree}>
        <button onClick={handleAddToCart}>ADD TO BASKET</button>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartProduct;
