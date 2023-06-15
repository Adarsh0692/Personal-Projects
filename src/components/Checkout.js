import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { orderedItem } from "../store/slice";


export default function Checkout({ Subtotal, cart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function tokanHandler(token) {
    navigate("/success");
    dispatch(orderedItem({token, cart, Subtotal}))
    
  }
  return (
    <div>
      <StripeCheckout
        amount={Subtotal * 100}
        shippingAddress
        stripeKey="pk_test_51NJDpqSJlAtllCwZY4RrUdBmEOdQU8wMXmqcpWLhTJPhAp01oIChbUOVBGEi7ywtK1YtXdtAIJ963dOn15pebczU00hnqmk801"
        currency="INR"
        token={tokanHandler}
      >
        <button className="btn btn-dark btn-block btn-lg">Pay now</button>
      </StripeCheckout>
    </div>
  );
}
