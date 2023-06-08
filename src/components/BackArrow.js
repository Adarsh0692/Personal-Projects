import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function BackArrow() {
    const navigate = useNavigate()
  return (
    <div>
      <ArrowBackIcon onClick={() => navigate('/')} sx={{fontSize:'2rem'}}/>
      </div>
  )
}
