import React from 'react';
import { useSelector } from 'react-redux';
import BackArrow from '../components/BackArrow';


export default function MyOrder() {
    const cart = useSelector(state => state.users.user)
    const orders = cart.active.order
    
  return (
    <div className='bg-body-tertiary '>
        <BackArrow/>
      <h1 className='d-flex justify-content-center fs-1 text-primary mt-3'>My Orders</h1>
      <hr />
      <div className='row justify-content-center '>
      {
        orders.map((order) => (
            <div className='col-md-8 m-3 '>
                <div className='d-flex w-100 justify-content-between bg-primary-subtle p-4 '>
                    <div className=''>
                    <h1 className='mb-4'>Items</h1>
                   
                    {
                        order.cart.map((item) => (
                            <div>
                                <p>{item.pizza.name},  {item.varient}, quantity: {item.quantity}</p>
                            </div>
                        ))
                    }
                    </div>
                    <div>
                        <h1 className='mb-4'>Address</h1>
                        
                        <p>{order.token.card.address_city},</p>
                        <p>{order.token.card.address_line1}- {order.token.card.address_zip}</p>
                        <p>{order.token.card.address_country}</p>
                    </div>

                    <div>
                        <h1 className='mb-4'>Order Info</h1>
                
                        <p>Order Amount: {order.Subtotal}</p>
                        <p>Transaction Id: {order.token.card.id} </p>
                        <p>Order Id: {order.token.id} </p>
                    </div>
                    
                </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}
