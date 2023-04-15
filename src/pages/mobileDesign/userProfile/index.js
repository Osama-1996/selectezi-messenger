import MobileHumberger from '../../../components/mobile-humburger';
import { Col, Row, Container } from "react-bootstrap";
import { images } from "../../../constants/index"
import { UserProfile } from "../../../constants/jsonConstant"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./userProfile.css"
import { useNavigate } from 'react-router-dom';
const MobileUserProfile = () => {
    const navigate = useNavigate()
    return (
        <>
            <MobileHumberger />
            <Container fluid >
                <div className="d-flex justify-content-between pt-3 px-4">
                    <div><h4 className='ps-2 ps-lg-0'>Jhon</h4></div>
                    <div><MoreVertIcon /></div>
                </div>
                <Row className="pt-2 pt-lg-4 px-4 ">

                    <Col sm={2} xs={3} className="pb-3 pe-0  "><div className="imgSize-sm"><img src={images.Person1} alt="" /> </div></Col>
                    <Col sm={10} xs={9} className=" ps-0 pe-0">
                        <div>
                            <h6 className="mb-0">Designer</h6>
                            <p className="mb-0  paraText color-lightSilver">+921-12344-53543</p>
                            <p className="mb-0 font-14 color-lightBlack">@designer</p>
                        </div>
                    </Col>


                </Row>
                <div className="back-silver py-2 mb-3 "></div>
                {UserProfile?.map((data, index) => (
                    <div className="d-flex pt-1 px-4 ms-1 ms-lg-0 lightblue" onClick={() => navigate(data?.id === 1 ? "/profile" : data?.id === 2 ? "/notifications" : "")} >
                        <div><img src={data.img} alt="" className="sidebar-md" /></div>
                        <div><p className="textStyle pt-1 ps-3">{data.name}</p></div>
                    </div>
                ))}
                <div className="back-silver py-2 mt-1 "></div>
            </Container>
        </>

    )
}
export default MobileUserProfile;