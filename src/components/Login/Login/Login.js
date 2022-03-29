import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from|| 'home';
    const  handleGoogleLogin = () =>{
        signInUsingGoogle()
         .then(result=>{
              history.push(redirect_url);
         })
    }
    return (
        <div className='my-5'>
            <h1 className='mb-3'>Login</h1>
            <Button onClick={handleGoogleLogin} variant='warning'> <i className='fab fa-google me-2 '></i>Login with google</Button>
    
        </div>
    );
};

export default Login;