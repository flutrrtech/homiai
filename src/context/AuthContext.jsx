import React, { createContext, useState, useEffect, useContext } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  
  useEffect(() => {
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [])

  const login = (dummyData) => {
    setUserData(dummyData); 
    setIsLoggedIn(true); 
    localStorage.setItem('isLoggedIn', true);
  };



  // Logout function
  const logout = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
