import "./menu.css"
import logo from "../../assets/Logo.png"
import {Navbar,Container,Nav} from "react-bootstrap"
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <>
    <div className="nav_main">
     <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><Link to="/"><img src={logo} alt="" /></Link></Navbar.Brand>
      <Navbar.Toggle className="menu_toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/">Home</Link>
          <Link to="/aboutus"> About us</Link>
          <Link to="/clients">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/studies">FAQ</Link>
          <Link to="/blogpage">Blog</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/privecypolicy">Privecypolicy</Link>
          <Link to="/api">API</Link>
          <div className="cont_btn">
            <Link to="/contact">Contact</Link>
        </div>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </div>
    </>
  )
}

export default Menu