import { Col, Row } from "react-bootstrap"
import { images } from "../../constants/index"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./profileData.css"
import MessagingArea from "../messagingArea/index"
const ProfileData = () => {
    return (
        <div className="screenHeight box-shadow">
            <Row className="pt-3 px-5 ">

                <Col lg={6} className="pb-2">
                    <div className="d-flex">
                        <div className="rounded-circle">    <img src={images.Person1} alt="" className="profilePic" /></div>
                        <div className="ps-3">
                            <h5 className="mb-0">James</h5>
                            <p className="mb-0  paraText color-lightSilver">@james123.gmail.com</p>
                            <p className="mb-0 font-14 color-lightBlack">Last Seen at 12:00pm</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="ps-0  pe-0 ">
                    <div className="d-flex justify-content-end pt-2">
                        <div><SearchIcon className="color-lightSilver profileIcons mx-1" /></div>
                        <div><LocalPhoneOutlinedIcon className="color-lightSilver profileIcons mx-1" /></div>
                        <div><MoreVertIcon className="color-lightSilver profileIcons" /></div>
                    </div>

                </Col>


            </Row>
            <MessagingArea/>
        </div>
    )
}
export default ProfileData;