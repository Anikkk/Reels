import React, { useContext ,useEffect,useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import Uploadfile from '../Component/Uploadfile';
import Post from '../Component/Post';


export default function Feed() {
    const {user,logout}=useContext(AuthContext); 
    const [userData,setUserData]=useState('');


    useEffect(()=>{
      // get all the datas from the database and store in the userData
    },[])
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div className='comp' style={{width:'50%'}}>
            <h1>WELCOME TO THE FEED</h1>
            <button onClick={logout}>Logout</button>
        </div>  
        <Uploadfile user={userData}/> 
        <Post userData={userData}/>
    </div>
  )
}
