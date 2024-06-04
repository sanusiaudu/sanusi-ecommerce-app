
import Hooli from '../assets/Hooli sponsor.svg'
import Lyfn from '../assets/lyfn sponsor.svg'
import Robinhood from '../assets/robinhood hat sponsor.svg'
import Stripe from '../assets/stripe sponsor.svg'
import Aws from '../assets/aws sponsor.svg'
import Reddit from '../assets/reddit sponsor.svg'

import styles from './Sponsors.module.css';

function Sponsors() {
    return (
      <>
        <div className={styles.sponsors}>
            <img src={Hooli} alt="#" />
            <img src={Lyfn} alt="#" />
            <img src={Robinhood} alt="#" />
            <img src={Stripe} alt="#" />
            <img src={Aws} alt="#" />
            <img src={Reddit} alt="#" />
        </div>
      </>
    )
  }
  
  export default Sponsors;
