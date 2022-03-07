import React from "react"
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from "react-bootstrap"
import logoIcon from '../assets/usb.png'


const Header = () => {
    return (
        <Navbar style={styles.header} className="py-1" bg="purple" variant="dark" fixed="top" expand="xl" collapseOnSelect>
            <Navbar.Brand className="mx-4 brand">
                TECHDEALS
                <img
                    style={styles.headerIcon}
                    src={logoIcon} 
                    width='50'/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link className="mx-5" style={styles.navOptionStyle} href="Home">HOME</Nav.Link>
                    <NavDropdown id="nav-dropdown" className="mx-5" style={styles.navOptionStyle} title="GEAR">
                        <NavDropdown.Item href="gear/monitors" style={styles.dropdownItemStyle}>Monitors</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="gear/PC Parts" style={styles.dropdownItemStyle}>PC Parts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="gear/Accessories" style={styles.dropdownItemStyle}>Accessories</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="hardware/Audio" style={styles.dropdownItemStyle}>Audio</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="mx-5" style={styles.navOptionStyle} title="GAMES">
                        <NavDropdown.Item href="software/free" style={styles.dropdownItemStyle}>Free</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="software/discounted games" style={styles.dropdownItemStyle}>Discounted</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="mx-5" style={styles.navOptionStyle} href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const styles = {
    header: {
        borderBottom: '4px solid white'
    },
    headerIcon: {
        marginLeft: '10px',
        marginBottom: '5px',
    },
    navOptionStyle: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    
    dropdownItemStyle: {
        fontSize: '15px',
        fontWeight: 'bold',
    }
}


export default Header