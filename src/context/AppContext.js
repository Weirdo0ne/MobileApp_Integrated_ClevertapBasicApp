import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Stores signed-up users
  const [cart, setCart] = useState([]);    // Stores items for the profile page
  const [orders, setOrders] = useState([]); // Stores purchased items
  const [currentUser, setCurrentUser] = useState(null); // Currently logged in user

  return (
    <AppContext.Provider value={{ 
      users, setUsers, 
      cart, setCart, 
      orders, setOrders, 
      currentUser, setCurrentUser 
    }}>
      {children}
    </AppContext.Provider>
  );
};