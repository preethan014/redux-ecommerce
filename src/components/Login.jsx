import React from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Login = () => {
  const dispatch=useDispatch();
  function handleLoginSubmit(e){
    e.preventDefault();
    dispatch(authActions.login());

  } 
  return (
    <div className='login-outer'>
        <div className='login-main'>
            <form onSubmit={handleLoginSubmit} className='form-outer'>
                <label>Name<br/><input type="text" placeholder='Enter name'/></label>
                <label>Password<br/><input type="password" placeholder='Enter password'/></label>
                <button type='submit'>Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login
