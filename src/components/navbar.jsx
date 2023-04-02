import { Navbar,Container,Nav } from 'react-bootstrap';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function NavbarLateral() {

    return (
        <div>
            <Navbar bg = "dark" variant = "dark" expand={true} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">
                        iLoveVideoGames
                    </Navbar.Brand>  

                    <Nav  className="me-auto">
                        <Nav.Link href="/">Juegos Indie</Nav.Link>
                        <Nav.Link href="/arteGenerativo">Arte generativo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
    
}

export default NavbarLateral
