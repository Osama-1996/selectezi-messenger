import { Col, Row } from "react-bootstrap"
import { images } from "../../../../../constants/index"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import "./userData.css"
const UserData = () => {
    const navigate=useNavigate()
    return (
        <div>
            <Row className="pt-3 px-4 ">

                <Col sm={6} xs={8} className="pb-2">
                    <div className="d-flex">
                        <div><ArrowBackIcon className="color-lightSilver profileIcons mt-2 mt-sm-3" onClick={()=>navigate("/")}/></div>
                        <div className="rounded-circle">    <img src={images.Person1} alt="" className="profilePic" /></div>
                        <div className="ps-1">
                            <h5 className="mb-0">James</h5>
                            <p className="mb-0  paraText color-lightSilver">@james123.gmail.com</p>
                            <p className="mb-0 font-14 color-lightBlack">Last Seen at 12:00pm</p>
                        </div>
                    </div>
                </Col>
                <Col sm={6} xs={4} className="ps-0  pe-0 ">
                    <div className="d-flex justify-content-end pt-2">
                        <div><SearchIcon className="color-lightSilver profileIcons mx-1" /></div>
                        <div><LocalPhoneOutlinedIcon className="color-lightSilver profileIcons mx-1" /></div>
                        <div><MoreVertIcon className="color-lightSilver profileIcons" /></div>
                    </div>

                </Col>


            </Row>
        </div>
    )
}
export default UserData;