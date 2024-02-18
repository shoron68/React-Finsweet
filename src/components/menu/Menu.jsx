import "./menu.css"
import logo from "../../assets/Logo.png"
import {Navbar,Container,Nav} from "react-bootstrap"
import { MdMenuOpen } from "react-icons/md";


const Menu = () => {
  return (
    <>
    <div className="nav_main">
     <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Features</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
        <div className="cont_btn">
            <a href="#">Contact us</a>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </div>
    </>
  )
}

export default Menu