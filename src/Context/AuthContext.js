import React from 'react'
import { useState,useEffect,useContext } from 'react'
import {auth} from '../firebase'

export const AuthContext=React.useContext();

export function AuthProvider(){
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(false);

    function signup(email,password){
        return ;

    }
    function login(email,password){
        return ;
    }
    function logout(email,password){
        return;
    }
    
}
