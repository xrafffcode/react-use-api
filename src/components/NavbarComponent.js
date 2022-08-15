import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>CRUD Siswa</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent