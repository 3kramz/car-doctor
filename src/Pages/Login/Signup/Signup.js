import React,{ useRef }  from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'


const Signup = () => {
    const nameRef=useRef('')
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user
        
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit=e=>{
        e.preventDefault()
       
        const email=emailRef.current.value
        const password=passwordRef.current.value

        createUserWithEmailAndPassword(email,password)
        
    }
    
    if(user){
        navigate('/home')
    }
    
    
    return (
        <div className='w-50 mx-auto '>

        <h1 className='text-primary text-center'>Please Register</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />                  
            </Form.Group>

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
        <Link className='mt-3 text-decoration-none text-dark' to="/login">Have an Account? <span className='text-primary '>Login</span></Link>
    </div>
    );
};

export default Signup;