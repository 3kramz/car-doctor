import React,{ useRef }  from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
     const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
       
      ] = useSignInWithEmailAndPassword(auth);

      const handleSubmit=e=>{
        e.preventDefault()
       
        const email=emailRef.current.value
        const password=passwordRef.current.value

        signInWithEmailAndPassword(email,password)
        
    }
    
    if(user){
        navigate('/home')
    }
    
    return (
        <div className='w-50 mx-auto '>

            <h1 className='text-primary text-center'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link className=' mt-3 text-decoration-none text-dark' to="/signup">New to Car genious? <span className='text-primary '>register</span></Link>
        </div>
    );
};

export default Login;