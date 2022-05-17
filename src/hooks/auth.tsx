import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps{
    children: ReactNode;
}
interface User{
    id: string;
    name: string;
    email: string;
}
interface IAuthContextData{
    user: User;
}
const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps) {
    const user = {id:'1', name:'Osmair', email:'osmair@eu.com'}
    return (
        <AuthContext.Provider value={{user}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider, useAuth }
