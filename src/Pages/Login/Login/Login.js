import React,{ useRef }  from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')

    const handleSubmit=e=>{
        e.preventDefault()
       
        console.log(emailRef)
    }
    
    return (
        <div className='w-50 mx-auto '>

            <h1 className='text-primary text-center'>Please Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link className='text-decoration-none text-dark' to="/signup">New to Car genious? <span className='text-primary '>register</span></Link>
        </div>
    );
};

export default Login;