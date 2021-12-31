import React from 'react'
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';

const Header = () => (
<div>
    <HeaderNavigation className={styles}/>
</div>
);

export default Header;