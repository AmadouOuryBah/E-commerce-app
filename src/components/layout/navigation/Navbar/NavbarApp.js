import {Button, Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const NavbarApp =()=>{
    const navigate = useNavigate()
    const handleLoginClick =(e)=>{
        navigate("/login")
    }

    const handleRegisterClick = () =>{
        navigate("/register")
    }

    return(
        <Container>
            <Navbar collapseOnSelect expand='lg' >
                <NavbarBrand >
                    <Navbar.Text>
                        <h3>
                            NV-BUSINESS
                        </h3>
                    </Navbar.Text>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>

                            <NavDropdown  title="Services">
                                <NavDropdown.Header>Services</NavDropdown.Header>
                                <NavDropdown.Item><NavLink>Chat App</NavLink></NavDropdown.Item>
                                <NavDropdown.Item><NavLink>Stores</NavLink></NavDropdown.Item>
                            </NavDropdown>

                        <Nav.Link>Users</Nav.Link>
                    </Nav>
                    <Nav  >
                        <div className="d-flex">
                            <Button variant="outline-primary" onClick={handleLoginClick}>Login</Button>
                            <Button variant="outline-primary" className="mx-lg-3" onClick={handleRegisterClick}>Register</Button>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}