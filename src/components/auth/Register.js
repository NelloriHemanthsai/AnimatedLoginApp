import React from 'react'
import registerImg from "../../assets/register.svg";
import "./Login.css"

const Register = ({onLogin}) => {
  return (
    <div className='main-container firstdiv'>


     


      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Register</h2>
            <input type='text' className='--width-100' placeholder='Username'></input>
            {/* <br></br> */}
            <input type='Email' className='--width-100' placeholder='Email'></input>
            <input type='password' className='--width-100' placeholder='Password'></input>
            <button className='--btn --btn-primary --btn-block'>
                Register
            </button>

            <span className='--text-sm --block'>Have an account? <a href="#" className='--text-sm' onClick={onLogin}>Login</a></span>
        </form>
      </div>


      <div className='img-container'>
        <img src={registerImg}></img>
      </div>


    </div>
  )
}

export default Register
