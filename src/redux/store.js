import { configureStore } from '@reduxjs/toolkit' ;

import allReducer from './reducers';

export default configureStore({reducer: allReducer})