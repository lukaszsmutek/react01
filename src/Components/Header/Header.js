import React from 'react'
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.svg'

const Header = ({openModalFn}) => (
<header className={styles.wrapper}>
    <img src={Logo} alt ="Logo"/>
    <HeaderNavigation/>
    <Button onClick={openModalFn} secondary>new item</Button>
</header>
);

export default Header;