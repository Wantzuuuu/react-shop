import {combineReducers } from '@reduxjs/toolkit' ;


import addTodos  from './todos';
import product from './product'

const allReducer = combineReducers({
    addTodos , 
    product
})


export default allReducer