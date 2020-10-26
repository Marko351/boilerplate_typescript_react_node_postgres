import React, { useState, ChangeEvent } from 'react';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { CustomInput } from '../../common/CustomInput/CustomInput';

export const Login: React.FC = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onLoginClick = () => {
    console.log('Login Clicked');
  };

  return (
    // <div className='center-screen'>
    <div className='login'>
      <h2 className='login__heading'>Login</h2>
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
      <CustomButton color='main' onClick={onLoginClick} text='Login' customClassName='login__button' />
    </div>
    // </div>
  );
};
