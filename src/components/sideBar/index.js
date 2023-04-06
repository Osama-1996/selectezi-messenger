
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import "./sideBar.css"
import { useEffect, useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const SideBar = () => {
    const location=useLocation();
 
    const navigate=useNavigate()
    const navigateHandler=(event)=>{
        navigate(event)
    }
    return (
        <div  className="back-silver screenHeight d-flex align-items-center flex-column">
            <div>
                <PersonIcon className={`iconsSize mb-4 mt-3 ${location.pathname==="/" ? "color-blue":""}`} onClick={()=>navigateHandler("/")}/>
            </div>
            <div>
                <SmsIcon className={`iconsSize mb-4  ${location.pathname==="/messeges" ? "color-blue":""}`}  onClick={()=>navigateHandler("/messeges")}/>
            </div>
            <div>
                <CallIcon className={`iconsSize  ${location.pathname==="/calling" ? "color-blue":""}`}  onClick={()=>navigateHandler("/calling")}/>
            </div>
        </div>
    )
}
export default SideBar;