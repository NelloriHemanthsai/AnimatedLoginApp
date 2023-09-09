import React from 'react'
import "./Login.css";
import loginImg from "../../assets/login.svg"
const Login = ({onReset,onRegister}) => {
  return (
    <div className='main-container firstdiv'>


      <div className='img-container'>
        <img src={loginImg}></img>
      </div>


      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Login</h2>
            <input type='text' className='--width-100' placeholder='Username'></input>
            {/* <br></br> */}
            <input type='password' className='--width-100' placeholder='Password'></input>
            <button className='--btn --btn-primary --btn-block'>
                Login
            </button>
            <a href='#' className='--text-sm' onClick={onReset}>Forgot password</a>
            <span className='--text-sm --block'>Dont have an account? <a href='#' className='--text-sm' onClick={onRegister}>Register</a></span>
        </form>
      </div>



    </div>
  )
}

export default Login
