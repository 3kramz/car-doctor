import React,{ useRef }  from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')

    const handleSubmit=e=>{
        e.preventDefault()
       
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
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