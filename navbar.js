import React, { useState, useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Modal } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './auth';

const NavBar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/gallery?search=${encodeURIComponent(searchInput)}`);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    navigate('/'); // Redirect to home after logout
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Pet Heaven</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/gallery">Adoption Gallery</Nav.Link>
              <Nav.Link as={NavLink} to="/release">Release</Nav.Link>
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
                value={searchInput}
              />
              <Button variant="primary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLogoutModal} onHide={cancelLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelLogout}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
