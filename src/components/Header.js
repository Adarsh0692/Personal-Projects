import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice";
import Modal from "react-bootstrap/Modal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";


export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.users.user);
  const cartItemData = cart.active.cart;
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlesClose = () => {
    setAnchorEl(null);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // DialogBox

  const [opens, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const user = JSON.parse(localStorage.getItem("userData")) || [];
  const isLogin = user.find((user) => user.active.isActive === true);

  function handleLogout() {
    isLogin.active.isActive = false;
    isLogin.active.cart = cartItemData;
    localStorage.setItem("userData", JSON.stringify(user));
    dispatch(logout());
    navigate("/login");
  }

  function handleLogin() {
    if (user) {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  }

  function handleCart() {
    if (isLogin) {
      if(cartItemData.length>0){
        navigate("/cart");
      }else{
        navigate('/noCartItem')
      }
      
    } else {
      navigate("/login");
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <FastfoodIcon
              onClick={() => navigate("/")}
              sx={{ color: "goldenrod", fontSize: "2rem", cursor: "pointer" }}
            />
          </Typography>
          <div className="mx-3">
            <Badge badgeContent="New" color="error">
              <h5 style={{ cursor: "pointer" }} onClick={handleShow}>
                Offer
              </h5>
            </Badge>
          </div>

          {isLogin ? (
            <div>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1.3rem",
                  mr: "1rem",
                }}
                color="inherit"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {cart.fName}
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handlesClose}>
                <MenuItem onClick={handlesClose}>My account</MenuItem>
                <MenuItem onClick={handleClickOpen}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "1.3rem",
                mr: "1rem",
              }}
              color="inherit"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}

          <Badge badgeContent={cart.active?.cart.length} color="error">
            <ShoppingCartIcon
              onClick={handleCart}
              sx={{ fontSize: "2rem", cursor: "pointer" }}
            />
          </Badge>

          <Modal show={show} onHide={handleClose} className="text-center">
            <Modal.Header closeButton>
              <Modal.Title>Offer of the Day!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Apply this code to get 30% discount.</p>
              <p>Code- PizzaBite30</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div>
            <Dialog open={opens} onClose={handleClickClose}>
              <DialogTitle id="responsive-dialog-title">
                {"Are you sure you want to Logout?"}
              </DialogTitle>

              <DialogActions>
                <Button
                  autoFocus
                  color="warning"
                  variant="contained"
                  onClick={handleClickClose}
                >
                  No
                </Button>
                <Button variant="contained" onClick={handleLogout} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
