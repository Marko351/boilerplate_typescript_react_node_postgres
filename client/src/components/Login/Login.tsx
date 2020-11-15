import React, { useState, ChangeEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { RootState } from '../../redux/reducers'
import { loginUser } from './redux/authActions'

const mapStateToProps = (state: RootState) => ({})

const connector = connect(mapStateToProps, { loginUser })

type PropsFromRedux = ConnectedProps<typeof connector>

interface LoginProps extends PropsFromRedux {}

const LoginComponent: React.FC<LoginProps> = ({ loginUser }) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const onLoginClick = () => {
    loginUser()
  }

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
  )
}

export const Login = connector(LoginComponent)
