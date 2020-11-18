import React, { useState, ChangeEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { RootState } from '../../redux/reducers'
import { IUserDataLogin } from '../../types/Auth'
import { loginUser } from './redux/authActions'

const mapStateToProps = (state: RootState) => ({})

const connector = connect(mapStateToProps, { loginUser })

type PropsFromRedux = ConnectedProps<typeof connector>

interface LoginProps extends PropsFromRedux, RouteComponentProps {}

const LoginComponent: React.FC<LoginProps> = ({ loginUser, history }) => {
  const [data, setData] = useState<IUserDataLogin>({
    usernameOrEmail: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const onLoginClick = async () => {
    await loginUser(data)
    history.push('/')
  }

  return (
    // <div className='center-screen'>
    <div className='login'>
      <h2 className='login__heading'>Login</h2>
      <CustomInput
        name='usernameOrEmail'
        onChange={onChange}
        label={'Username'}
        placeholder='Username'
        value={data.usernameOrEmail}
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
