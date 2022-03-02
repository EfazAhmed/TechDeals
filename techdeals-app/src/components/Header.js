import React from "react"
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from "react-bootstrap"


const Header = () => {
    return (
        <Navbar bg="purple" variant="dark" fixed="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                TechDeals
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="Home">Home</Nav.Link>
                    
                    <NavDropdown title="Hardware">
                        <NavDropdown.Item href="hardware/monitors">Monitors</NavDropdown.Item>
                        <NavDropdown.Item href="hardware/PC Parts">PC Parts</NavDropdown.Item>
                        <NavDropdown.Item href="hardware/Accessories">Accessories</NavDropdown.Item>
                        <NavDropdown.Item href="hardware/Audio">Audio</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Software">
                        <NavDropdown.Item href="software/free games">Free Games</NavDropdown.Item>
                        <NavDropdown.Item href="software/discounted games">Discounted Games</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header