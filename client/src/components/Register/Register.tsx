import React, { useState, ChangeEvent } from 'react';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { CustomInput } from '../../common/CustomInput/CustomInput';

export const Register: React.FC = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onRegisterClick = () => {
    console.log('Register Clicked');
  };

  return (
    <div className='register'>
      <h2 className='register__heading'>Register</h2>
      <CustomInput
        name='email'
        onChange={onChange}
        label={'Email'}
        placeholder='Email'
        value={data.email}
        customClass='mb-tiny'
      />
      <CustomInput
        name='username'
        onChange={onChange}
        label={'Username'}
        placeholder='Username'
        value={data.username}
        customClass='mb-tiny'
      />
      <CustomInput
        name='password'
        onChange={onChange}
        label={'Password'}
        placeholder='Password'
        value={data.password}
        type='password'
      />
      <CustomButton color='main' onClick={onRegisterClick} text='Register' customClassName='register__button' />
    </div>
  );
};
