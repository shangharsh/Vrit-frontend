import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='text-decoration-none me-2 fs-5 text-secondary' to="users">Users</Link>
            <Link className='text-decoration-none ms-2 fs-5 text-secondary' to="products">Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;