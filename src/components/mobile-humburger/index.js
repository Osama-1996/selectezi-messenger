import "./mobile-hamburger.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Row, Col, Container } from "react-bootstrap"
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const MobileHumberger = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const [activeRoute, setActiveRoute] = useState('/');

  function handleRouteClick(route) {
    setActiveRoute(route);
  }
    return (
        
        <Container fluid>
            <Row className="pt-2 box-shadow pb-1">
                <Col sm={2} xs={2} className="d-flex justify-content-center">
                    <MenuIcon className="menu " onClick={() => setIsOpen(true)} />
                </Col>
                <Col sm={10} xs={10} className="ps-0">
                    <p className="logo m-0 pt-2 pt-sm-1 pt-md-1 pt-lg-1">SELECTEZI MESSENGER</p>
                </Col>
            </Row>
            {isOpen === true &&

                <div className="back-silver navbar-absolute d-flex align-items-center flex-column pb-5">
                    <div className="d-flex justify-content-end w-100 pe-4 pt-2">
                        <CloseIcon className="iconsSize-sidebar" onClick={() => setIsOpen(false)} />
                    </div>
                    <div>
                        <PersonIcon className={`iconsSize-sidebar mb-4 mt-3 ${location.pathname === "/user-profile" ? "color-blue" : ""}`} onClick={()=> {handleRouteClick('/user-profile');navigate("/user-profile")}} />
                    </div>
                    <div>
                        <SmsIcon className={`iconsSize-sidebar mb-4  ${location.pathname === "/" ? "color-blue" : ""}`} onClick={()=> {handleRouteClick('/');navigate("/")}}/>
                    </div>
                    <div>
                        <CallIcon className={`iconsSize-sidebar  ${location.pathname === "/Callers" ? "color-blue" : ""}`} onClick={()=> {handleRouteClick('/Callers');navigate("/Callers")}}/>
                    </div>
                </div>
            }


        </Container>

    )
}
export default MobileHumberger;