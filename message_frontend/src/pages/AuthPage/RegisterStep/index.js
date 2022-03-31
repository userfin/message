import React from 'react';
import { Alert } from 'react-bootstrap';
import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';
import AuthService from '../../../queries/services/AuthService';
import { RoundImage } from '../../../components/RoundImage';
import { useNavigate } from 'react-router-dom';

export const RegisterStep = ({
  error, setError, tag, password
}) => {

  let navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [image, setImageURL] = React.useState('');
  const [imageFile, setImageFile] = React.useState();
  const fileRef = React.useRef(null);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeBio = (e) => {
    setBio(e.target.value);
  };
  const handleRegister = async () => {
    if (name.length < 1 || phone.length < 1) {
      setError('Имя/телефон должен иметь более 1 символа');
      return;
    }
    try {
      const {data} = await AuthService.registration(
        tag, name, phone, bio, password, imageFile
      );  
      localStorage.setItem('token', data);
      navigate('/messenger');
    }
    catch (e) {
      console.log(e);
    }
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageURL(URL.createObjectURL(event.target.files[0]));
      setImageFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <h1 className='text-center'><b>Register</b></h1>
      <Field
        placeholder='Name'
        onChange={changeName}
        value={name}
      />
      <Field 
        placeholder='Phone'
        onChange={changePhone}
        value={phone}
      />
      <Field 
        placeholder='Bio'
        onChange={changeBio}
        value={bio}
      />
      <Button>
        <RoundImage
          src={image 
            ? image
            : './assets/eating.png'}
          size='md'
        />
        <input type="file" ref={fileRef} onChange={onImageChange} className='ms-3'/>
      </Button>

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
          onClick={handleRegister}
        >  
          <h6 className='m-0 p-3'>Let's go</h6>
        </Button>
      </div>
    </div>
  );
};
