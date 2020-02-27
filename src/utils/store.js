import React,{createContext, useContext, useReducer } from 'react';
import reducer from './reducer.js';

const StateContext = createContext();

// Add intial state of store
const initialState = {
  isLogin: false,
}	

export const StateProvider = ({ children }) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);