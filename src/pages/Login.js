import React from 'react'
import  './styleSheets/Login.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()
  return (
    <div className='wrapper'>
      
      <div className='login'>
        <form >
          <input type="text" placeholder='Enetr email' />
          <input type="password" placeholder='Enetr password' />
          <button type='submit'>Log in</button>
          <p>Don't have an account? <span> <Link to='/signup'>Sign up</Link> </span></p>
        </form>

      </div>
    </div>
  )
}
