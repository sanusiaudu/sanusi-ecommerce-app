
import styles from './Socials.module.css'
import { BsTelephone, BsInstagram, BsYoutube, BsFacebook, BsTwitter } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function Socials(){
    return(
        <main className={styles.socials}>
            <div className={styles.mailIcon}>
                <BsTelephone /> (225) 555-0118
            </div>
            <div className={styles.mailIcon}>
                <MdOutlineEmail size={16} />sanusiaudu.rivera@example.com
            </div>
            <div>Follow Us  and get a chance to win 80% off</div>
            <div className={styles.mailIcon}>
                Follow Us  : <BsInstagram size={16} /> <BsYoutube size={16}/> <BsFacebook size={16}/> < BsTwitter size={16}/>
            </div>
        </main>
    )

}

export default Socials;