import React from 'react'
import resetImg from "../../assets/forgot.svg";
import {AiOutlineClose} from "react-icons/ai";
const Reset = ({onLog}) => {
  return (
    <div className='main-container firstdiv'>


    


    <div className='form-container reset'>
      <form className='--form-control'>
          <h2 className='--color-danger --text-center'>Reset</h2>
          <h2 className='--color-danger --text-center'>Password</h2>
          <input type='text' className='--width-100' placeholder='Email'></input>
          {/* <br></br> */}
          
          <button className='--btn --btn-primary --btn-block'>
              Reset Password
          </button>
          <span className='--text-sm --block --text-center'>We will send you a reset link!!!</span>
          <div className='close' onClick={onLog}>
            <AiOutlineClose color='red'/>
          </div>
      </form>
    </div>


    <div className='img-container'>
      <img src={resetImg}></img>
    </div>


  </div>
  )
}

export default Reset
