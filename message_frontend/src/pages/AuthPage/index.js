import React from 'react';
import { LoginStep } from './LoginStep';
import { RegisterStep } from './RegisterStep';

export const AuthPage = () => {
  const [tag, setTag] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoginStep, setIsLoginStep] = React.useState(true);
  const [error, setError] = React.useState('');

  const changeTag = (e) => {
    setTag(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeToRegisterStep = () => { 
    setIsLoginStep(false);
  };

  return (
    <div className='m-auto h-100 d-flex flex-column justify-content-center'>
      <div 
        className='w-50 m-auto p-5' 
        style={{
          backgroundColor: '#EFF5F5', 
          borderRadius: '20px',
          maxWidth: '600px'
        }}>
        {isLoginStep
          ? <LoginStep 
            changeToRegister={changeToRegisterStep}
            changeTag={changeTag}
            changePassword={changePassword}
            tag={tag}
            password={password}
            error={error}
            setError={setError}
          /> 
          : <RegisterStep 
            tag={tag}
            password={password}
            error={error}
            setError={setError}
          />
        }
      </div>
    </div>
  );
};
