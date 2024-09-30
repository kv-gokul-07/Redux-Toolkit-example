import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import rootReducer from "./redux/reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
}); 