// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = (user) => {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        setLoggedIn(true);
    };

    const logout = () => {
        sessionStorage.removeItem('loggedInUser');
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
