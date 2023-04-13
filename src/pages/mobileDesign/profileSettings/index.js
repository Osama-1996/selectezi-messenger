import MobileHumberger from '../../../components/mobile-humburger';
import { Row, Col, Container } from "react-bootstrap"
import { images } from "../../../constants/index"
import { ProfileSettings } from "../../../constants/jsonConstant"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const ProfileSetting = () => {
    const navigate=useNavigate()
    return (
        <Container fluid className='overflowhide '>
            <MobileHumberger />
            <div className="d-flex align-items-center flex-column pt-2 pb-2 back-lightblue">
                <div className='d-flex justify-content-start w-100 ps-4 ms-3'>
                    <ArrowBackIcon className="color-lightSilver profileIcons " onClick={()=>navigate("/user-profile")}/>
                </div>
                <img src={images.ProfilePicture} alt="" className="profileImg" />
                <h4 className="pt-3">Dushane Daniel</h4>
                <h5 className="mb-1">Designer</h5>
                <h5 className="para-sm ">+92-222-3333-4444</h5>
            </div>

            <div className="bg-white textDesc py-1 ps-5 pe-4">
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna in erat pulvinar.Phasellus ornare </p>
            </div>
            <Row className="my-3 back-lightblue py-3">

                {ProfileSettings?.map((data) => (
                    <>
                        <Col sm={6} xs={6}>    <div className="d-flex pt-1 ps-5 ">
                            <div><img src={data.img} alt="" className="iconsSize" /></div>
                            <div><p className="textStyle pt-1 ps-3">{data.name}</p></div>
                        </div></Col>
                        <Col sm={6} xs={6}><h6 className="color-blue pt-3 text-end pe-5">Designer</h6></Col>
                    </>

                ))}
            </Row>
            <div className="bg-white  py-2 ">

            </div>
        </Container>
    )
}
export default ProfileSetting;