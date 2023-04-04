import { Navbar,Container } from 'react-bootstrap';
import React from 'react'

function NavbarLateral() {

    return (
        <div>
            <Navbar bg = "dark" variant = "dark" expand={true} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">
                        iLoveVideoGames
                    </Navbar.Brand>  
                    {/*
                    <Nav  className="me-auto">
                        <Nav.Link href="/">Juegos Indie</Nav.Link>
                        <Nav.Link href="/arteGenerativo">Arte generativo</Nav.Link>
                    </Nav>*/
                    }
                </Container>
            </Navbar>
        </div>
    )
    
}

export default NavbarLateral
