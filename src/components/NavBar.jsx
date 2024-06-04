
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

import { IoPersonOutline } from "react-icons/io5";
import { MdSearch } from 'react-icons/md';
import { GrCart } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";



function NavBar({}){
    const [dropDownVisible, setDropDownVisible] = useState(false);

    const [searchVisible, setSearchVisible] = useState(false);



    return(
        <div className={styles.navigation}>
            <div>
                <div className={searchVisible ? styles.searchHidden : styles.navbar }>
                    <div className={styles.menu}>
                        <h2 className={styles.h2}>
                            Bandage
                        </h2>
                        <div className={styles.destopMenu}>
                            <Link to='/'>Home</Link>
                            <Link to='/shop' >Shop  <FaChevronDown size={10} /></Link>
                            <a>About</a>
                            <a>Blog</a>
                            <a>Contact</a>
                            <a>Pages</a>
                        </div>
                    </div>
                    <div className={styles.logins}>
                        <div className={styles.desktopLogins}>
                            <IoPersonOutline size={12}   /> <span>Login</span> <span>/</span> <span>Register</span>
                        </div>
                        <MdSearch size={24} className={styles.icon} onClick={() => setSearchVisible(!searchVisible)}/>
                        <Link to='./cart'>
                            <BsCart size={24} className={styles.desktopIcon}/>
                            <GrCart size={24} className={styles.mobileIcon}/>
                        </Link>
                        <a href="#">
                            <CiHeart size={24} className={styles.icon} />
                        </a>
                        <BiMenuAltRight size={24} className={styles.mobileIcon} onClick={() => setDropDownVisible(!dropDownVisible)}/>
                    </div>
                </div>
            </div>
            <div className={ searchVisible ? styles.searchTab : styles.searchHidden}>
                <div className={ styles.searchGroup}>
                    <input
                        id='search'
                        className={ styles.input }
                        type="search"
                    >
                    </input>
                    <div className={ styles.icon }>
                        <MdSearch size={24} />
                    </div>
                </div>
                <p className={styles.cancel} onClick={() => setSearchVisible(!searchVisible)}>
                    Cancel
                </p>
            </div>
    
            <div className={ dropDownVisible ? styles.dropDown : styles.dropUp }>
                <Link to='/'>
                    <h2>Home</h2>
                </Link>
                <Link to='/shop'>Product</Link>
                <h2>Pricing</h2>
                <h2>Contact</h2>
            </div>
        </div>
    );
}

export default NavBar


