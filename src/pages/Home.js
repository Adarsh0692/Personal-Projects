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
       <div className="row p-5">
        {
          pizzas.map((pizza) => (
            <div className="col-md-4">
               <Pizza pizza={pizza}/>
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Home
