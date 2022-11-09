import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Navbar className="bg-funta navbar-dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Funta-Kitchen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/add-service">
                  Add Services
                </Nav.Link>

                <Nav.Link as={Link} to="/my-reviews">
                  My Review
                </Nav.Link>
                <Nav.Link onClick={logOut}>LogOut</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/login">
              {user ? (
                <div className="d-flex align-items-center">
                  <img
                    height={"40px"}
                    width={"40px"}
                    className="rounded-circle me-2"
                    src={user.photoURL}
                    alt=""
                  />
                  <h5 className="align-self-center mt-2 text-light">
                    {user?.displayName}
                  </h5>
                </div>
              ) : (
                ""
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
