import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/CartSlice';
import styles from './CartBackground.module.css';
import background from '../assets/background.jpeg';
import CartToast from './CartToast'; 

function CartBackground() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const sampleProduct = data.products[0];
        setProduct(sampleProduct);
      });
  }, []);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cartBackground}>
      <div className={styles.content}>
        <h6>Designing Better Experience</h6>
        <h2>Problems trying to resolve the conflict between </h2>
        <h3>$16.48</h3>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
        <button>ADD YOUR CALL TO ACTION</button>
      </div>
    </div>
  );
}

export default CartBackground;
