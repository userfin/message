import React from 'react';
import { Alert } from 'react-bootstrap';
import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';
import AuthService from '../../../queries/services/AuthService';
import { useNavigate } from 'react-router-dom';

export const LoginStep = ({
  changeToRegister, changeTag, changePassword, tag, password, error, setError
}) => {

  let navigate = useNavigate();

  const handleLogin = async () => {
    if (tag.length < 1 || password.length < 1) {
      setError('Тэг/пароль должен иметь более 1 символа');
      return;
    }
    try {
      const {data} = await AuthService.login(tag, password); 
      localStorage.setItem('token', data);
      navigate('/messenger'); 
    }
    catch (e) {
      console.log(e.response.data.message);
      if (e.response.data.message === 'Пользователь с введенным логином не найден.') {
        changeToRegister(true);
      }
    }
  };

  return (
    <div>
      <h1 className='text-center'><b>Login / Register</b></h1>
      <Field 
        placeholder='Tag'
        onChange={changeTag}
        value={tag}
      />
      <Field 
        placeholder='Password'
        onChange={changePassword}
        value={password}
      />

      {error.length > 0 && 
      <Alert variant={'danger'}>
        {error}
      </Alert>
      }

      <div className='mt-5 m-auto' 
        style={{
          maxWidth: '100px'
        }}>
        <Button
          onClick={handleLogin}
        >  
          <h6 className='m-0 p-3'>Let's go</h6>
        </Button>
      </div>
    </div>
  );
};
