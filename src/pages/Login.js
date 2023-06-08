import React, { useState } from 'react'
import  './styleSheets/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css';
import BackArrow from '../components/BackArrow';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('userData')) || []
  function handleLogin(e){
    e.preventDefault()
    const existUser = user.find((user) => user.email === email && user.password === password) 
    if(existUser){
      const confirmation = Swal.fire(
        'Success!',
        'You are successfully logged in.'
      )
      if(confirmation){
        existUser.active.isActive=true
        localStorage.setItem('userData', JSON.stringify(user))
        dispatch(login(existUser))
        navigate('/')
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Invalid email or password',
       showClass: {
         popup: 'animate__animated animate__fadeInDown'
       },
       hideClass: {
         popup: 'animate__animated animate__fadeOutUp'
       }
     })
    }
  }
  return (
    <div className='wrapper'>
      <div className='backArrow'>
      <BackArrow/>
      </div>
      
      <div className='login'>
        <form onSubmit={handleLogin}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enetr email' required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enetr password' required/>
          <button type='submit'>Log in</button>
          <p>Don't have an account? <span > <Link to='/signup'>Sign up</Link> </span></p>
        </form>

      </div>
    </div>
  )
}
