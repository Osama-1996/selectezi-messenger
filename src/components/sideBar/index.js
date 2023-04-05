import { Col } from "react-bootstrap"
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import "./sideBar.css"
const SideBar = () => {
    return (
        <div  className="back-silver screenHeight d-flex align-items-center flex-column">
            <div>
                <PersonIcon className="iconsSize mb-4 mt-3"/>
            </div>
            <div>
                <SmsIcon className="iconsSize mb-4"/>
            </div>
            <div>
                <CallIcon className="iconsSize"/>
            </div>
        </div>
    )
}
export default SideBar;