import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login =()=>{
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const [error,setError] =useState();
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        const logindata = {email,password};

        e.preventDefult();
            const response = await fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logindata),
            });

            const data = await response.json();

            if(response.ok){
            localStorage.setItem('UserData',JSON.stringify(data));
            navigate('/home');
            } else {
                setError(data.error || 'Login Failed');
            }
    };

    if (localStorage.getItem('UserData')){
        return<Navigate to='/home'/>
    }

    return(
        <div>
            <h>Enter your Email and Password to Login</h>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email - </label>
                    <input
                    type='email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Password - </label>
                    <input
                    type='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}


export default Login