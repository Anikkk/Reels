import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';


export default function Uploadfile(props) {
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);


    //function to upload video in the server
    // const handleCLick=async (file)=>{
    //     if(file){
    //         setError('Please select the file first')
    //         setTimeout(()=>{
    //             setError('')
    //         },2000)
    //         return; 
    //     }
    // }


  return (
    <>
        {
            error!=='' ? <Alert severity="error">{error}</Alert> : 
                <>
                     <input type="file" accept='video/' id="upload-input" style={{ display: 'none' }}/>
                    <label htmlFor='upload-input'>
                        <Button variant="outlined" color="secondary" component="span" disabled={loading} >
                            Upload Movie
                        </Button>
                    </label>  
                    {
                    loading && <LinearProgress color="secondary" style={{marginTop:'0.25%',width:'10%'}} />
                    }
                </>
        }
    </>
   
  )
}
