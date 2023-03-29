import {images} from "../../constants/index"
import "./style.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeIcon from "@mui/icons-material/Home";

const Navbarr = () => {

  return (
    <>
     
      <Container fluid className="nav-absolute container-border-b ">
        <Navbar
          collapseOnSelect
          className=" bg-white w-100 pb-0 mb-0"
          style={{ zIndex: "1" }}
        >
          <Container fluid className="ms-0 me-0">
            <Navbar.Brand >
              {/* <img src={images.Selecteziimg} /> */}
              <p className="logo m-0 p-0">SELECTEZI</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav defaultActiveKey="#home" className="me-auto ms-auto">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item menu_active">
                    <NavLink
                      activeclassname="active nav-link"
                      aria-current="page"
                      to="/dashboard"
                      className="navbar_f smallFont pe-2 pe-md-0 pe-lg-0 pe-xl-0"
                      style={{ color: "#7b7b93" }}
                    >
                      <HomeIcon className="mb-1 smallFonthome" />
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item menu_active ms-lg-3 ms-sm-3 ms-xs-4 ">
                    <NavLink
                      activeclassname="active nav-link"
                      aria-current="page"
                      className="navbar_f smallFont"
                      style={{
                        color: "#3d3bee",
                        borderBottom: "3px solid #3d3bee",
                        paddingBottom: "10px",
                      }}
                    >
                      Messenger
                    </NavLink>
                  </li>
                </ul>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navbarr;
