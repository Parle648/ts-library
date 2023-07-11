import React from 'react';
import styles from './header.module.scss';
import Logo from '../UI/Logo/Logo.tsx';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Logo />
            <Link className={styles.link} to='/mybooks'>My Books</Link>
            <Link className={styles.link} to='/catalog'>Catalog</Link>
            <input className={styles.searchInput} type="text" placeholder='search what you exaxtly need'/>
        </div>
    );
};

export default Header;