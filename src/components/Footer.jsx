import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerContentOne}>
          <h3>Bandage</h3>
          <div className={styles.icons}>
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>

        <div className={styles.footerContentTwo}>
          <div className={styles.footerLinkContainer}>
            <h5>Company Info</h5>
            <div className={styles.footerLinks}>
              <nav>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </nav>
            </div>
          </div>

          <div className={styles.footerLinkContainer}>
            <h5>Legal</h5>
            <div className={styles.footerLinks}>
              <nav>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </nav>
            </div>
          </div>

          <div className={styles.footerLinkContainer}>
            <h5>Features</h5>
            <div className={styles.footerLinks}>
              <nav>
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
              </nav>
            </div>
          </div>

          <div className={styles.footerLinkContainer}>
            <h5>Resources</h5>
            <div className={styles.footerLinks}>
              <nav>
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">Api</a>
              </nav>
            </div>
          </div>

          <div className={styles.footerLinkContainer}>
            <h5>Get in Touch</h5>
            <div className={styles.footerInput}>
              <div className={styles.inputEmail}>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
              <p className={styles.text}>E-Commerce Web App</p>
            </div>
          </div>
        </div>

        <div className={styles.footerContentThree}>
          <div className={styles.footerText}>
            <h6 className={styles.texts}>Made With Love By Finland All Right Reserved</h6>
          </div>
        </div>
    </div>
  );
}

export default Footer;
