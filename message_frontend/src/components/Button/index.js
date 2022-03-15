import React from 'react';
import styles from './Button.module.scss';

export const Button = ({
  children, onClick, className, style
}) => {
  return (
    <div 
      className={`
        d-flex align-items-center justify-content-center ${className} ${styles.button}
      `} 
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
