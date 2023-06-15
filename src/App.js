import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddCart from './pages/AddCart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NoCartItem from "./pages/NoCartItem";
import Success from "./pages/Success";
import MyOrder from "./pages/MyOrder";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<AddCart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/noCartItem" element={<NoCartItem/>}/>
    <Route path="/myOrder" element={<MyOrder/>}/>
    <Route path="/success" element={<Success/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
