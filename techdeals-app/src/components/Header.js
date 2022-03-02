import React from "react"
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from "react-bootstrap"


const Header = () => {
    return (
        <Navbar className="py-3" bg="purple" variant="dark" fixed="top" expand="sm" collapseOnSelect>
            <Navbar.Brand className="mx-5 brand">
                TechDeals
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link className="mx-5" style={styles.navOptionStyle} href="Home">Home</Nav.Link>
                    <NavDropdown id="nav-dropdown" className="mx-5" style={styles.navOptionStyle} title="Hardware">
                        <NavDropdown.Item href="hardware/monitors" style={styles.dropdownItemStyle}>Monitors</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="hardware/PC Parts" style={styles.dropdownItemStyle}>PC Parts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="hardware/Accessories" style={styles.dropdownItemStyle}>Accessories</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="hardware/Audio" style={styles.dropdownItemStyle}>Audio</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-5" style={styles.navOptionStyle} title="Software">
                        <NavDropdown.Item href="software/free games" style={styles.dropdownItemStyle}>Free Games</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="software/discounted games" style={styles.dropdownItemStyle}>Discounted Games</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-5" style={styles.navOptionStyle} href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const styles = {
    navOptionStyle: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    dropdownItemStyle: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#57068C',
    }
}


export default Header