import React, { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';

export default function Post({userData}) {

const [posts,setPosts]=useState(null);

  return(
    {
        userData==null || posts==null ?  <LinearProgress color="secondary"/>: 
        <div className='video-container'>
            {
                posts.map((postData,index)=>{
                    
                })
            }
        </div>
    }
  )
}
