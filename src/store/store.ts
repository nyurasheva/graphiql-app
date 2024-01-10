import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slice/userSlice';
import requestReducer from './slice/requestSlice';

const reducer = combineReducers({
  user: userReducer,
  request: requestReducer,
});

const store = configureStore({
  reducer,
});

setupListeners(store.dispatch);

export default store;
