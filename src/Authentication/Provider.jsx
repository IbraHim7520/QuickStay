import React, { useEffect } from 'react';
import UserContext from './UserContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from './firebase.config';

const Provider = ({children}) => {
const provider = new GoogleAuthProvider();

    useEffect( ()=>{
        const subscribe = onAuthStateChanged(auth , (user)=>{
                    
        })
        return subscribe();
    }, [] )
    const GoogleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const UserLogin = (email , pass) =>{
        return signInWithEmailAndPassword(auth , email , pass)
    }
    const UserSignUp = (email , pass) =>{
        return createUserWithEmailAndPassword(auth , email , pass)
    }
        const info = {
            
        }
    return (
        <UserContext value={info}>
            {children}
        </UserContext>
    );
};

export default Provider;