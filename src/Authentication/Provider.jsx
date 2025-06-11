import React, { use, useEffect, useState } from 'react';
import UserContext from './UserContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from './firebase.config';
const Provider = ({children}) => {
    const [loading , setLoading] = useState(true)
    const [User , setUser] = useState('');
const provider = new GoogleAuthProvider();
    useEffect( ()=>{
        const subscribe = onAuthStateChanged(auth , (user)=>{
            if(user){
                setLoading(false)
                setUser(user)
            }
        })
        return ()=>{
            subscribe()
        };
    }, [] )
    const GoogleSignIn = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    const UserLogin = (email , pass) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth , email , pass)
    }
    const UserSignUp = (email , pass) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth , email , pass)
    }
        const info = {
            loading,
            User,
            GoogleSignIn,
            UserLogin,
            UserSignUp
        }
        
    return (
        <UserContext value={info}>
            {children}
        </UserContext>
    );
};

export default Provider;