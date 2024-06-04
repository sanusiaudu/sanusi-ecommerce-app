
import styles from './BestService.module.css'
import { FaBookReader } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { FaArrowTrendUp } from "react-icons/fa6";

function BestService() {
  return (
    <>
      <div className={styles.feature}>
        <div className={styles.featuredText}>
          <h4>Featured Products</h4>
          <h3>THE BEST SERVICE</h3>
          <p>Problems trying to resolve the conflict between</p>
        </div>

        <div className={styles.iconServices}>
          <div>
            <div className={styles.icon}>
                <FaBookReader size={60}/>
            </div>
            <div className={styles.iconText}>
              <h3>Easy Wins</h3>
              <p>Get your best looking smile now</p>
            </div>
          </div>

          <div>
            <div className={styles.icon}>
                <VscBook size={60} />
            </div>
            <div className={styles.iconText}>
              <h3>Concrete</h3>
              <p>
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>

          <div>
            <div className={styles.icon}>
                <FaArrowTrendUp size={60}/>
            </div>
            <div className={styles.iconText}>
              <h3>Hack Growth</h3>
              <p>Overcame any hurdle or any other problem.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestService;
