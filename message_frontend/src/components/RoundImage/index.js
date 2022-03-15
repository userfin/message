import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoundImage.module.scss';

export const RoundImage = ({
  size, src, isOnline
}) => {
  const sizes = {
    sm: '50px',
    md: '70px',
    lg: '100px',
  };
  const onlineSizes = {
    sm: '7px', 
    md: '10px',
    lg: '14px',
  };

  return (
    <div 
      className='position-relative' 
      style={{
        width: sizes[size],
        height: sizes[size],
      }} 
    > 
      <img 
        width={sizes[size]} 
        height={sizes[size]} 
        src={src} 
        alt={'Profile Pic'}
        style={{borderRadius: sizes[size]}}
      />
      {isOnline &&
        <div 
          className={styles.isOnline} 
          style={{
            width: onlineSizes[size],
            height: onlineSizes[size],
            borderRadius: onlineSizes[size]
          }}/>
      }
    </div>
  );
};

RoundImage.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  src: PropTypes.string.isRequired
};

export default RoundImage;