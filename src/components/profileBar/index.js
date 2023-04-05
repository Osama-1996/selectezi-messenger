import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { images } from "../../constants/index"
import { UserProfile } from "../../constants/jsonConstant"
import "./profile.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProfileBar = ({setChangeData,}) => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div  className="screenHeight  box-shadow">
            <div className="d-flex justify-content-between pt-3 px-4">
                <div><h4>Jhon</h4></div>
                <div><MoreVertIcon /></div>
            </div>
            <Row className="pt-4 px-4">

                <Col lg={3} className="pb-3"><img src={images.Person1} alt="" /> </Col>
                <Col lg={9} className="ps-0  pe-0">
                    <div>
                        <h6 className="mb-0">Designer</h6>
                        <p className="mb-0  paraText color-lightSilver">+921-12344-53543</p>
                        <p className="mb-0 font-14 color-lightBlack">@designer</p>
                    </div>
                </Col>


            </Row>
            <div className="back-silver py-2 mb-3 "></div>
            {UserProfile?.map((data,index)=>(
                <div   className={`d-flex pt-1 px-4 ${activeIndex === index ? 'lightblue-back' : ''}`}  onClick={()=>{setChangeData(index);setActiveIndex(index)}}>
                <div><img src={data.img} alt="" /></div>
                <div><p className="textStyle pt-1 ps-3">{data.name}</p></div>
            </div>
            ))}
            <div className="back-silver py-2 mt-1 "></div>

        </div>
    )
}
export default ProfileBar;