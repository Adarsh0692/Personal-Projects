import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('userData')) || []
  const isLogin = user.find((user) => user.active.isActive === true)

  const btnName = isLogin? 'Logout' : 'Login'

  function handleLogout(name){
     if(name === 'Logout'){
      isLogin.active.isActive=false
      localStorage.setItem('userData', JSON.stringify(user))
      navigate('/login')
     }else{
        navigate('/login')
     }
     if(user.length===0){
      navigate('/signup')
     }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={() =>handleLogout(btnName)}>{btnName}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
