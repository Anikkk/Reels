import React, { Children } from 'react';
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext=React.createContext();

export function AuthProvider({children}){
    const [user,setUser]=useState();    
    const [loading,setLoading]=useState(false);

    async function signup(name,email,password){
        await axios.post(('http://localhost:4000/user/signup'), {
            name: name,
            email: email,
            password: password

        }).then( (response) => {
            console.log(response,"Hi Promise")
        }
        ).catch(function (err){
            console.log(err)
        })
    }
    async function login(email,password){
        await axios.post(('http://localhost:4000/user/login'), {
            email: email,
            password: password

        }).then( (response) => {
            console.log(response,"Hi Promise")
        }
        ).catch(function (err){
            console.log(err)
        })
    }
    async function logout(email,password){
        return;
    }
    const value = {
        login,
        signup,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
    
}

