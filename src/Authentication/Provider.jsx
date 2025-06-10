import React from 'react';
import UserContext from './UserContext';

const Provider = ({children}) => {
        const info = {
            
        }
    return (
        <UserContext value={info}>
            {children}
        </UserContext>
    );
};

export default Provider;