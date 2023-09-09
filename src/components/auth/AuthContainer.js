import React, { useState } from 'react'
import Login from './Login'
import "./Authcontainer.css";
import Register from './Register';
import Reset from './Reset';
const AuthContainer = () => {
    // const[login,setlogin] = useState(true);
    // const[register,setresgister] = useState(false);
    // const[reset,setreset] = useState(false);

    const [auth , setauth] = useState({
        login : true,
        register : false,
        reset : false,
    });
    //remove ki re
   
    const handleregister = () => {
        // setlogin(false);
        // setresgister(true);
        // setreset(false);
        setauth({login : false,
            register : true,
            reset : false,})
    }

    const handlelogin = () => {
        // setresgister(false);
        // setlogin(true);
        // setreset(false);
        setauth({
            login : true,
        register : false,
        reset : false,
        })
    }
    const handlereset = () => {
        // setlogin(false);
        // setreset(true);
        // setresgister(false);
        setauth({
            login :false,
        register : false,
        reset : true,
        })
    }
    

    
  return (
    <section className='--flex-center --100vh '>
    <div className='container box'>
        {/* <Login />
        <br></br>
        <Register /> */}
        {/* <Reset /> */}
        {auth.login && <Login onRegister={handleregister} onReset={handlereset}/>}
        {auth.register && <Register onLogin={handlelogin}/>}
        {auth.reset && <Reset onLog={handlelogin}/>}
    </div>
    </section>
  )
}

export default AuthContainer
