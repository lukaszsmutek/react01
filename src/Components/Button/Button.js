import React from 'react';
import styles from './Button.module.scss';

const Button = ({children,href}) => (
    <>
        {
            href ? (
                <a  href={href}
                    className={styles.button}
                    rel = "noopener noreferrer"
                    target="_blank">
                    visit twitter page
                </a>):(<button 
        className={styles.button}
        >
        {children}
        </button>)} 
    </>

);


export default Button;