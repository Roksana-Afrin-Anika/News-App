import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const CustomNavbar = ({ setCategory }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="badge bg-white text-dark fs-4">News</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory("business");
                }}
                className="nav-link"
              >
                Business
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory("entertainment");
                }}
                className="nav-link"
              >
                Entertainment
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory("health");
                }}
                className="nav-link"
              >
                Health
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory("science");
                }}
                className="nav-link"
              >
                Science
              </div>
            </li>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCategory("sports");
                }}
                className="nav-link"
              >
                Sports
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  setCategory("technology");
                }}
                style={{ cursor: "pointer" }}
                className="nav-link"
              >
                Technology
              </div>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
