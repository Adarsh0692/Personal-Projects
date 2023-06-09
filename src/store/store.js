import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slice'
import  storage  from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

 const persistConfig = {
    key: 'root',
    storage
 };

 const reducer = combineReducers({
    users: dataSlice
 })

 const persistedReducer = persistReducer(persistConfig, reducer)

 export const store = configureStore({
    reducer: persistedReducer
        
    
})

export const persistor = persistStore(store)