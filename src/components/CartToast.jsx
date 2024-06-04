import { IoClose } from "react-icons/io5";
import styles from "./CartToast.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function CartToast({ product, onClose }){
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.successMainContainer}>
          <div className={styles.successContainer}>
            <div className={styles.successContentOne}>
              <h3>Successfully added to basket</h3>
              <span onClick={handleClose}>
                <IoClose />
              </span>
            </div>
            <div className={styles.successContentTwo}>
              <div className={styles.imageContent}>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className={styles.successText}>
                <p className={styles.text}>{product.title}</p>
                <p className={styles.price}>€ {product.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


CartToast.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartToast;
