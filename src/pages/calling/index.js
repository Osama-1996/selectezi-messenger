import SideBar from "../../components/sideBar/index"
import SearchPeople from "../calling/components/searchCallers/index"
import ProfileData from "../../components/profileData/index"
import {  Row, Col } from "react-bootstrap"
const Calling=()=>{
    return(
        <Row>
        <Col lg={1} className="px-0"><SideBar /></Col> 
        <Col lg={3} className="px-0"><SearchPeople /></Col>
        <Col lg={8} className="px-0"><ProfileData/></Col>
        </Row>
    )
}
export default Calling;