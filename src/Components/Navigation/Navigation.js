import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';


const Navigation = () => (
<nav>
    <ul className={styles.wrapper}>
        <li className = {styles.navigationItem}><NavLink
        style = {({ isActive }) => ({fontWeight: isActive ? 700: ''})}
        className = {styles.navigationItemLink}
        to={"/"}>Twitters</NavLink></li>
        <li className = {styles.navigationItem}><NavLink
        style = {({ isActive }) => ({fontWeight: isActive ? 700: ''})}
        className = {styles.navigationItemLink}
        to={"/articles"}>Articles</NavLink></li>
        <li className = {styles.navigationItem}><NavLink
        style = {({ isActive }) => ({fontWeight: isActive ? 700: ''})}
        className = {styles.navigationItemLink}
         to={"/notes"}>ole</NavLink></li>
    </ul>
</nav>
);

export default Navigation;