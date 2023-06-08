import React from 'react'
import Header from '../components/Header'

import pizzas from '../pizzasData'
import Pizza from '../components/Pizza'

function Home() {
  return (
    <div>
      <Header/>
      {/* <h1>Home page</h1> */}
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
