import React,{ useRef }  from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Signup = () => {
    const emailRef=useRef('')

    const handleSubmit=e=>{
        e.preventDefault()
       
        console.log(emailRef)
    }
    return (
        <div className='w-50 mx-auto '>

        <h1 className='text-primary text-center'>Please Register</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={emailRef} type="text" placeholder="Enter Name" />                  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" />                  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <Link className='text-decoration-none text-dark' to="/login">Have an Account? <span className='text-primary '>Login</span></Link>
    </div>
    );
};

export default Signup;