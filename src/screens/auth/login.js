import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'

export default function Login() {
  return (
    <div className='login-page'>
        {/* <img src='https://logowik.com/content/uploads/images/674_spotify1.jpg' alt="logo"/> */}
        <a href={loginEndpoint}>
            <div className='login-btn'>LOG IN</div>
        </a>
      
    </div>
  )
}
