import React from 'react';
import styles from './Button.module.scss';

const Button = ({children,href, secondary,...props}) => {
    
    const buttonClass = secondary ? styles.secondary : styles.button;
    
return (
    <>
        {
            href ? (
                <a  href={href}
                    className={buttonClass}
                    rel = "noopener noreferrer"
                    target="_blank">
                    visit twitter page
                </a>):(<button 
        className={buttonClass} {...props}
        >
        {children}
        </button>)} 
    </>

)};


export default Button;