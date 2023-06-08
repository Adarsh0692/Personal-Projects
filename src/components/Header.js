import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slice';

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.users.cart)
  const user = JSON.parse(localStorage.getItem('userData')) || []
  const isLogin = user.find((user) => user.active.isActive === true)

  const btnName = isLogin? 'Logout' : 'Login'

  function handleLogout(name){
     if(name === 'Logout'){
      isLogin.active.isActive=false
      localStorage.setItem('userData', JSON.stringify(user))
      dispatch(logout())
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
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon/> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FastfoodIcon onClick={()=> navigate("/")} sx={{color: 'goldenrod', fontSize: '2rem',cursor:'pointer'}}/>
          </Typography>
          <Button sx={{textTransform: 'capitalize',fontSize: '1.3rem', mr: '1rem'}} color="inherit" onClick={() =>handleLogout(btnName)}>{btnName}</Button>
          <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon onClick={() => navigate('/cart')} sx={{fontSize: '2rem', cursor: 'pointer'}} />
              </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
