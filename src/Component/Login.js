import * as React from 'react';
import {useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import {Button, CardActions} from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Signup.css'
import insta from '../Assets/insta.png';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const {login} =useContext(AuthContext);

    const handleCLick= async()=>{
        console.log(email);
        let obj=login(email,password);
        
    }

    const useStyles=makeStyles({
        text1:{
            color:'grey',
            textAlign:'center',
            fontWeight:'bold'
        },
        card2:{
            height:'5vh',
            marginTop:'2%'
        },
        text2:{
            flexGrow:1,
            textAlign:'center'
        }
    })
    const classes=useStyles();


  return (
      <div className='login-wrapper'>
          <div className='imgcar' style={{backgroundSize:'cover'}}>

          </div>
          <div className='login-card'>
              <Card variant='outlined' >  
                  <div className='insta-logo'>
                      <img src={insta} alt='' />
                  </div>
                  <CardContent>
                      {error!=='' &&<Alert severity="error">{error}</Alert>}
                      <TextField id="outlined-basic1" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                      <TextField id="outlined-basic2" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                      <Typography className={classes.text2} variant="substitle1">
                          Forget Password
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button color="primary" fullWidth={true} variant='contained' onClick={handleCLick} disabled={loading}>
                          LOGIN
                      </Button>
                  </CardActions>
              </Card>
              <Card variant='outlined' className={classes.card2}>
                  <CardContent>
                      <Typography className={classes.text1} variant="substitle1">
                           Dont have an account? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                      </Typography>
                  </CardContent>
              </Card>
          </div>
      </div>
    
  ); 
}
