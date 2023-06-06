import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        login(state, action) {
            state.user.push(action.payload)
        }
    }
})

export const {login} = dataSlice.actions;
export default dataSlice.reducer;