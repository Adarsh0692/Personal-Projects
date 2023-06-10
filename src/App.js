import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddCart from './pages/AddCart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NoCartItem from "./pages/NoCartItem";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<AddCart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/noCartItem" element={<NoCartItem/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
