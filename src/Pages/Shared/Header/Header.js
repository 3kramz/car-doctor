import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
   
   
    const logout = () => {
        signOut(auth);
      };
      
    
       console.log(user)



    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="30" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#expertes">Expertes</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link}  to="about">About</Nav.Link>
                            {user?.uid ? 
                                <Nav.Link onClick={logout} as={Link} to="login">Logout</Nav.Link>
                                :
                                <Nav.Link  as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </>
    );
};

export default Header;