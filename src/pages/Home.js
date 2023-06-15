import React from 'react'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pizzas from '../pizzasData'
import Pizza from '../components/Pizza'

function Home() {
  return (
    <div>
      <Header/>
      <ToastContainer position='top-center' autoClose={2000} />
       <div className="row ">
        {
          pizzas.map((pizza) => (
            <div className="col-md-4 py-4 px-2">
               <Pizza pizza={pizza}/>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Home
