import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/slice";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose =() => setShow(false)
  const handleShow =() => setShow(true)
  const disptach = useDispatch()

  function handleAddtoCart(pizza,quantity,varient){
          disptach(addToCart({pizza: pizza, quantity: quantity, varient: varient}))
  }
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded text-center m-5">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt={pizza.name} className="h-100" />
      </div>
      <div className="d-flex flex-row">
        <div className="w-100 m-1">
          <p>Varients:</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.variants.map((varient) => (
              <option value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity:</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(6).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="w-100 my-2">
          <h1>Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
        </div>
        <div className="w-100 my-2">
          <button onClick={() =>handleAddtoCart(pizza, quantity, varient)} type="button" class="btn btn-danger">
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={pizza.image} alt={pizza.name} style={{height: '300px'}} />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
