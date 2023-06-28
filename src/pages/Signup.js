import React, { useState } from 'react'
import './styleSheets/Signup.css'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
import 'animate.css';
import BackArrow from '../components/BackArrow';


export default function Signup() {
  const [fName, setFname] = useState('')
  const [lName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [FN, setFN] = useState('')
  const [LN, setLN] = useState('')
  const [EM, setEM] = useState('')
  const [PS, setPS] = useState('')
  
 const navigate = useNavigate()

  function validFname(fName){
    const regex = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if(regex.test(fName)){
      return ''
    }else{
      return 'Invalid name'
    }
  }
  function handlefName(e){
    setFname(e.target.value)
    setFN(() => validFname(e.target.value))
  }

  function validLname(lName){
    const regex = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if(regex.test(lName)){
      return ''
    }else{
      return 'Invalid name'
    }
  }
 function handlelName(e){
  setLname(e.target.value)
  setLN(() => validLname(e.target.value))
 }

 function validEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  if(regex.test(email)){
    return ''
  }else{
    return 'Invalid email'
  }
}
function handleEmail(e){
  setEmail(e.target.value)
  setEM(() => validEmail(e.target.value))
}
function validPassword(password){
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  if(regex.test(password)){
    return ''
  }else{
    return "Password must be min one Capital letter,min two digits & min 5 letter"
  }
}
function handlePassword(e){
  setPassword(e.target.value)
  setPS(() => validPassword(e.target.value))
} 

const userDetails = JSON.parse(localStorage.getItem('userData')) || []
const data ={
  fName, lName, email, password,
  active: {
    isActive: false,
    cart: [],
    order: []
    
  }
}

const newData = [...userDetails, data]
function handleSubmit(e){
  e.preventDefault()
  
  const existUser = userDetails.find((user) => user.email === email)

  if(!PS && !FN && !LN && !EM){

  if(existUser){
    Swal.fire({
       icon: 'error',
       title: 'User alrady exist!',
       text: 'Please register with another email id!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }else{
    const done = Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Dear ${fName} ${lName} you have successfuly registered!`,
      showConfirmButton: false,
      timer: 2000
    })
    if(done){
    localStorage.setItem('userData', JSON.stringify(newData))
    navigate('/login')
    setFname('')
    setLname('')
    setEmail('')
    setPassword('')
  }
}
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Somthing went wrong!',
      text: 'Please filled valid inputs!',
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
    <div className='mainSignup_div'>
      <div className='backArrow'>
      <BackArrow/>
      </div>
      
      <div className='inputs'>
        <form onSubmit={handleSubmit}>
       <input type="text" value={fName} onChange={handlefName} placeholder='Enter first name '  required/> {FN && <p>{FN}</p>}
       <input type="text" value={lName} onChange={handlelName}  placeholder='Enter last name '  required/> {LN && <p>{LN}</p>}
       <input type="email" value={email} onChange={handleEmail} placeholder='Enter email ' required/> {EM && <p>{EM}</p>}
       <input type="password" value={password} onChange={handlePassword} placeholder='Enter password ' required/> {PS && <p>{PS}</p>}
       <button type='submit'>Sign Up</button>
       <span>Have already an account? <Link to='/login'>Login here</Link></span>
       </form>
      </div>
    </div>
  )
}
