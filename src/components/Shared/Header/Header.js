import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const {user,logOut} =useAuth();
    return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
      <i className='fas fa-2x pe-2 text-warning fa-plane'></i>
  <Navbar.Brand className='text-warning'  as={HashLink} to="#home">Neo Travels</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav.Link className='text-warning' as={HashLink} to="/home#home" >Home</Nav.Link>

      <Nav.Link className='text-warning'  as={HashLink} to="/home#galleries" >Gallery</Nav.Link>
      {
        user?.email && <Nav.Link className='text-warning' as={HashLink} to="/myOrder">My Order</Nav.Link>
      }
      {
        user?.email && <Nav.Link className='text-warning' as={HashLink} to="/dashboard">Dashboard</Nav.Link>
      }
        {
          user?.email ?
           <NavLink onClick={logOut} className='text-warning'>LogOut</NavLink>
          :
          <Nav.Link className='text-warning' as={HashLink} to="/login">Login</Nav.Link>
        }
    <Navbar.Text className='text-light' >
        {user?.displayName|| user?.email}
      </Navbar.Text>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
           
    );
};

export default Header;