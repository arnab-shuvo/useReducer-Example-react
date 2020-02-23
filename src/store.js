import React, { useReducer, createContext } from 'react';

const initialState = {
    count: 0
  }

  export const StoreContext = createContext(initialState);


const reducer = (state, action) => {
    switch (action.type) {
      case 'Add':
            return {
                ...state,
                count : action.query
            };  
        default:
            throw new Error();
  }
}

export const StoreContainer = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={{state, dispatch}}>
        {children}
      </StoreContext.Provider>
    )
  }