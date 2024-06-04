import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseCart, getTotals} from "../lib/CartSlice";
import { fetchProducts } from "../lib/ProductSlice";
import styles from "./AddCart.module.css";
import star from "../assets/stars.svg";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaLine } from "react-icons/ri";
import paystack from "../assets/Paystack - png.svg"

function AddCart(){
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const products = useSelector((state) => state.products.products);
    const { cartTotalQuantity, cartTotalAmount } = useSelector(
      (state) => state.cart
    );
  
    useEffect(() => {
      dispatch(fetchProducts());
      dispatch(getTotals());
    }, [cartItems, dispatch]);
  
    const handleRemoveFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
  
    const handleDecreaseQuantity = (item) => {
      dispatch(decreaseCart(item));
    };
  
    const handleIncreaseQuantity = (item) => {
      const product = products.find((product) => product.id === item.id);
      if (product) {
        dispatch(addToCart(product));
      }
    };
  
    return (
      <div className={styles.cartMainContainer}>
        <div className={styles.shopLinks}>
          <nav>
            <a href="#" className={styles.home}>
              Home
            </a>
            <FaAngleRight />
            <a href="#" className={styles.home}>
              Shop
            </a>
            <FaAngleRight
              style={{
                color: "#BDBDBD",
              }}
            />
            <a href="#" className={styles.shop}>
              Shopping Cart
            </a>
          </nav>
        </div>
        <div className={styles.cartContainer}>
          <div className={styles.cartContentOne}>
          <h3>Shopping Cart</h3>
            <div className={styles.itemContainerOne}>
              <div className={styles.itemHeader}>
                <p>Item Details</p>       
                <p>Quantity</p>
                <p>Price</p>       
              </div>
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.itemContainerTwo}>
                <div className={styles.heroCartSection}>
                  <div className={styles.heroItem}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className={styles.cartText}>
                      <h4>{item.title}</h4>
                      <p>{item.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                      <div className={styles.iconText}>
                        <img src={star} alt="Star" />
                        <span className={styles.txt}>
                          {item.reviews?.rating || 0} Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.addQuantity}>
                    <div className={styles.reduce}>
                      <FaMinus onClick={() => handleDecreaseQuantity(item)} />
                    </div>
                    <input type="number" value={item.cartQuantity} readOnly />
                    <div className={styles.add}>
                      <FaPlus onClick={() => handleIncreaseQuantity(item)} />
                    </div>
                  </div>
  
                  <div className={styles.priceQuantity}>
                    <h4>${item.price}</h4>
                    <p>
                      ${item.price} <LiaTimesSolid /> {item.cartQuantity} Item
                    </p>
                  </div>
                </div>
  
                <div className={styles.deleteContainer}>
                  <div
                    className={styles.delete}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <MdDeleteOutline />
                    <h4>REMOVE</h4>
                  </div>
                  <div className={styles.mobileAddQuantity}>
                    <div className={styles.reduce}>
                      <FaMinus onClick={() => handleDecreaseQuantity(item)} />
                    </div>
                    <input type="number" value={item.cartQuantity} readOnly />
                    <div className={styles.add}>
                      <FaPlus onClick={() => handleIncreaseQuantity(item)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className={styles.cartContentTwo}>
            <div className={styles.summaryContentOne}>
              <h3>Order Summary</h3>
              <p>{cartTotalQuantity} Items</p>
            </div>
            <div className={styles.summaryContent}>
              <h4>Delivery Charges</h4>
              <small>
                Add your delivery address to checkout to see delivery charges.
              </small>
            </div>
            <div className={styles.line}></div>
            <div className={styles.summaryContent}>
              <h4
                style={{
                  opacity: 0.5,
                }}
              >
                Subtotal
              </h4>
              <p
                style={{
                  color: "#3A3C3E",
                  opacity: 0.5,
                }}
              >
                ${cartTotalAmount}
              </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.summaryContent}>
              <h4>Total Amount</h4>
              <p>${cartTotalAmount}</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.summaryContent}>
              <h4></h4>
              <small>Excluding Delivery Charges</small>
            </div>
            <div className={styles.btn}>
              <button>Proceed to Checkout</button>
            </div>
            <div className={styles.payImage}>
              <img src={paystack} alt="" />
              <FaCcMastercard  />
              <RiVisaLine />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddCart;
  