import React, { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
    const user = JSON.parse( localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user,
    }
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);
    const login = (name = '') => {
        const user = {
            id: 1234,
            name: name
        }
        const action = {
            type: types.login,
            user:user,
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        // localStorage.removeItem('path');
        const action = {
            type: types.logout,
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
