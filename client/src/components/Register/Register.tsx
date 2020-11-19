import React, { useState, ChangeEvent, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { CustomButton } from '../../common/CustomButton/CustomButton'
import { CustomInput } from '../../common/CustomInput/CustomInput'
import { RootState } from '../../redux/reducers'
import { IUserDataRegister } from '../../types/Auth'
import { registerUser } from '../Login/redux/authActions'

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  errors: state.errorReducer.errors,
})

const connector = connect(mapStateToProps, { registerUser })

type PropsFromRedux = ConnectedProps<typeof connector>

interface RegisterProps extends PropsFromRedux, RouteComponentProps {}

const RegisterComponent: React.FC<RegisterProps> = ({ registerUser, history, isAuthenticated, errors }) => {
  const [data, setData] = useState<IUserDataRegister>({
    username: '',
    password: '',
    email: '',
  })

  useEffect(() => {
    if (isAuthenticated) {
      history.goBack()
    }
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const onRegisterClick = async () => {
    await registerUser(data)
    history.push('/')
  }

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
        errorMess={errors['email'] ? errors['email'] : ''}
      />
      <CustomInput
        name='username'
        onChange={onChange}
        label={'Username'}
        placeholder='Username'
        value={data.username}
        customClass='mb-tiny'
        errorMess={errors['username'] ? errors['username'] : ''}
      />
      <CustomInput
        name='password'
        onChange={onChange}
        label={'Password'}
        placeholder='Password'
        value={data.password}
        type='password'
        errorMess={errors['password'] ? errors['password'] : ''}
      />
      <CustomButton color='main' onClick={onRegisterClick} text='Register' customClassName='register__button' />
    </div>
  )
}

export const Register = connector(RegisterComponent)
