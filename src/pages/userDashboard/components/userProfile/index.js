
import { Row, Col } from "react-bootstrap"
import { images } from "../../../../constants/index"
import { ProfileSettings } from "../../../../constants/jsonConstant"
const UserProfile = () => {
    return (
        <div className="screenHeight back-lightblue">
            <div className="d-flex align-items-center flex-column pt-5 pb-2">
                <img src={images.ProfilePicture} alt="" className="profileImg" />
                <h4 className="pt-3">Dushane Daniel</h4>
                <h5 className="mb-1">Designer</h5>
                <h5 className="para-sm ">+92-222-3333-4444</h5>
            </div>

            <div className="bg-white textDesc py-1 ps-5 pe-4">
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare urna in erat pulvinar.Phasellus ornare urna in erat pulvinar</p>
            </div>
            <Row className="my-3">

                {ProfileSettings?.map((data) => (
                    <>
                        <Col lg={6} md={6}>    <div className="d-flex pt-1 ps-5 ">
                            <div><img src={data.img} alt="" className="iconsSize" /></div>
                            <div><p className="textStyle pt-1 ps-3">{data.name}</p></div>
                        </div></Col>
                        <Col lg={6} md={6}><h6 className="color-blue pt-3 text-end pe-5">Designer</h6></Col>
                    </>

                ))}
            </Row>
            <div className="bg-white  py-2 ">

            </div>
        </div>
    )
}
export default UserProfile;