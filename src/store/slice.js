import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        cart: [],
        quantity: 0,
        varient: ''

    },
    reducers: {
        login(state, action) {
            state.user=action.payload
        },
        logout(state) {
            state.user =[]
        },
       addToCart(state, action) {
        
        const {pizza, quantity, varient} = action.payload
            state.cart.push(pizza)
            state.quantity= quantity
            state.varient= varient
            console.log('added');
        
       }
    }
})

export const {login,logout, addToCart} = dataSlice.actions;
export default dataSlice.reducer;