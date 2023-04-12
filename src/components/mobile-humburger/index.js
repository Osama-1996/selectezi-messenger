import "./mobile-hamburger.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Row, Col } from "react-bootstrap"
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const MobileHumberger = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const navigateHandler = (event) => {
        navigate(event)
    }
    return (
        <div>
            <Row className="pt-2 box-shadow pb-1">
                <Col sm={2} xs={2} className="d-flex justify-content-center">
                    <MenuIcon className="menu " onClick={() => setIsOpen(true)} />
                </Col>
                <Col sm={10} xs={10} className="ps-0">
                    <p className="logo m-0 pt-1">SELECTEZI MESSENGER</p>
                </Col>
            </Row>
            {isOpen === true &&
            
                <div className="back-silver navbar-absolute d-flex align-items-center flex-column pb-5">
                    <div className="d-flex justify-content-end w-100 pe-4 pt-2">
                        <CloseIcon className="iconsSize-sidebar" onClick={() => setIsOpen(false)}/>
                    </div>
                    <div>
                        <PersonIcon className={`iconsSize-sidebar mb-4 mt-3 ${location.pathname === "/" ? "color-blue" : ""}`} />
                    </div>
                    <div>
                        <SmsIcon className={`iconsSize-sidebar mb-4  ${location.pathname === "/messeges" ? "color-blue" : ""}`} />
                    </div>
                    <div>
                        <CallIcon className={`iconsSize-sidebar  ${location.pathname === "/calling" ? "color-blue" : ""}`} />
                    </div>
                </div>
            }


        </div>

    )
}
export default MobileHumberger;