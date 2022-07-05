import * as React from 'react';
import Card from '@mui/material/Card';
import { useState,useContext } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, SliderMarkLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Login.css';
import insta from '../Assets/insta.png';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';


export default function Signup() {
    const useStyles=makeStyles({
        text1:{
            color:'grey',
            textAlign:'center',
            fontWeight:'bold'
        },
        card2:{
            height:'5vh',
            marginTop:'2%'
        }
    })
    const classes=useStyles();

    const {signup}= useContext(AuthContext);

    //states changes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName]=useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [file,setFiles]=useState(null);

    const history= useNavigate();


    const handleCLick=async ()=>{
        console.log(name);
        // if(file==null){
        //     setError("Please upload profile pic");
        //     setTimeout(() => {
        //         setError('')
        //     }, 2000)
        //     return; 
        // }
        try{
            let obj = signup(name, email, password);
            console.log(obj);
        }
        catch (err) {
            setError("No user");
            setTimeout(() => {
                setError('')
            }, 2000)
            return;
        }
    }

  return (
      <div className='signup-wrapper'>
          <div className='signup-card'>
              <Card variant='outlined' >  
                  <div className='insta-logo'>
                      <img src={insta} alt='' />
                  </div>
                  <CardContent>
                      <Typography className={classes.text1} variant="substitle1">
                          Sign up to see photos and videos from your friends
                      </Typography>
                      {error!=='' &&<Alert severity="error">{error}</Alert>}
                      <TextField id="outlined-basic1" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                      <TextField id="outlined-basic2" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <TextField id="outlined-basic3" label="Full Name " variant="outlined" fullWidth={true} margin='dense' size='small' value={name} onChange={(e)=>setName(e.target.value)} />
                      <Button color="primary" fullWidth={true} variant='outlined' margin='dense' component="label">
                          Upload profile pic 
                        <input type="file" accept="image/*" hidden onChange={(e)=>setFiles(e.target.file[0])} /> 
                      </Button>
                  </CardContent>
                  <CardActions>
                      <Button color="primary" fullWidth={true} variant='contained' disabled={loading} onClick={handleCLick} >
                        SIGNUP
                      </Button>
                  </CardActions>
                  <CardContent>
                      <Typography className={classes.text1} variant="substitle1">
                          By Signing in agree to our Terms, Condition and Cookie policy 
                      </Typography>
                  </CardContent>
              </Card>
              <Card variant='outlined' className={classes.card2}>
                  <CardContent >
                      <Typography className={classes.text1} variant="substitle1">
                           Having an account? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                      </Typography>
                  </CardContent>
              </Card>
          </div>
      </div>
    
  );
}
