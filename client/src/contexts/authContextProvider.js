import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const {user, login, logout} = useAuth();
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}