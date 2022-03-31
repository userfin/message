import React from 'react';
import styles from './Field.module.scss'

export const Field = ({
  value, onChange, placeholder
}) => {
  return (
    <div className='w-100'>
      <input
        className= {`w-100 px-3 my-3 ${styles.login_input}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
