# Project Title
PIZZA BITE

## Description
This is a simple frontend web application, where user can select any pizza with choice of variants and number of quantities, and they can able to add to cart muliples pizza.
And inside the cart user can able to chnage number of quantyties of pizza and they can also delete the pizza item. One more functionality also given that is user can get 30% discount on total price, if user will enter his first name on code input than they will get 30% discount. 
In payment section payment mode is a test mode so you can give fake credit card no. e.g (4242 4242 4242 4242 or 5555 5555 5555 4444). After the successfully payment you will get success message, And user can also see his order list itmes in my order page.
# Getting Started
## Dependencies
* react-router-dom
* reduxjs toolkit
* react-redux
* redux-persist
* bootstrap
* react-bootstrap
* react-toastify
* react-strips-checkout
* sweetalerts
## Authors
* Adarsh kushwaha

## Deployment Link


## Data Structure 
```json

"users": {
 "user": {
  "firstName": " ",
  "lastName": " ",
  "email": " ",
  "password": " ",
  "active": {
    "isActive": false,
    "cart": [],
    "order": []
  }
},
"pizzaData": [],
"loading": false,
"error": null
}
