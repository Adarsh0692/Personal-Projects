import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartItem, deleteItem } from "../store/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "../components/Checkout";

export default function AddCart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.users.user);
  const cartData = carts.active.cart;
  let subtotal = cartData.reduce((x, item) => x + item.price, 0);

  const [code, setCode] = useState("");
  const [isDiscount, setIsDiscout] = useState(false);
  const discount = isDiscount ? (subtotal * 30) / 100 : 0.0;
  let NewSubtotal = subtotal - discount
  function handleCode(e) {
    setCode(e.target.value);
  }
  const codeName = carts.fName
  console.log(codeName);
  function handleDiscount(code) {
    if (code) {
      if (code === codeName) {
        setCode("");
        setIsDiscout(true);
        toast.success("Congratulation! You got 30% discount.");
      } else {
        toast.error("Sorry! Invalid code.");
      }
    }
  }

  function handleRemove(cart) {
    dispatch(deleteItem(cart));
    toast.success("Item removed successfully.");
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Cart Items
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {cartData.length} items
                          </h6>
                        </div>

                        <hr className="my-4" />

                        {cartData.map((cart) => (
                          <div className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={cart.pizza.image}
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h5 className="text-black mb-0">
                                {cart.pizza.name}
                              </h5>
                              <h6 className="text-black mb-0 my-1">
                                {cart.varient} | {cart.pizza.category}
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center">
                              <button className="btn btn-primary px-2 me-2">
                                {cart.quantity > 1 ? (
                                  <i
                                    className="fas fa-minus"
                                    onClick={() =>
                                      dispatch(
                                        cartItem({
                                          id: cart.id,
                                          pizza: cart.pizza,
                                          quantity: cart.quantity - 1,
                                          varient: cart.varient,
                                          price:
                                            cart.pizza.prices[0][cart.varient] *
                                              cart.quantity -
                                            cart.pizza.prices[0][cart.varient],
                                        })
                                      )
                                    }
                                  ></i>
                                ) : (
                                  <i
                                    class="fas fa-trash-alt"
                                    onClick={() => handleRemove(cart)}
                                  ></i>
                                )}
                              </button>

                              <h5 className="m-2">{cart.quantity}</h5>

                              <button
                                onClick={() =>
                                  dispatch(
                                    cartItem({
                                      id: cart.id,
                                      pizza: cart.pizza,
                                      quantity: cart.quantity + 1,
                                      varient: cart.varient,
                                      price:
                                        cart.pizza.prices[0][cart.varient] *
                                          cart.quantity +
                                        cart.pizza.prices[0][cart.varient],
                                    })
                                  )
                                }
                                className="btn btn-primary px-2 me-2 mx-2"
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">
                                Rs/-{" "}
                                {cart.pizza.prices[0][cart.varient] *
                                  cart.quantity}{" "}
                              </h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i
                                  onClick={() => handleRemove(cart)}
                                  class="fas fa-trash-alt"
                                ></i>
                              </a>
                            </div>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Order Now</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">Sub total </h5>
                          <h5>Rs: {subtotal}</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              onBlur={() => handleDiscount(code)}
                              className="form-control form-control-lg"
                              value={code}
                              onChange={handleCode}
                            />
                            <label className="form-label" for="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text">Discount</h5>
                          <h5> {discount} Rs</h5>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price </h5>
                          <h5> {subtotal - discount} Rs/-</h5>
                        </div>

                        <Checkout Subtotal ={NewSubtotal} cart={cartData} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
