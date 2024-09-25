import { Container, Navbar } from "react-bootstrap";
import "./AppNav.css";
import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
            <Link className="link" to="/">Animal Explorer</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNav;
