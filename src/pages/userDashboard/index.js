import SideBar from "../../components/sideBar/index"
import SearchPeople from "../../components/searchPeople/index"
import Notifications from "./components/notificationArea/notificationsArea";
import UserProfile from "./components/userProfile";
import ProfileBar from "../../components/profileBar/index"
import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react";
const MessengerNotifications = () => {
    const [changeData, setChangeData] = useState(1)
    console.log("data", changeData)
    return (
        
            <Row>
                <Col lg={1} className="px-0"><SideBar /></Col> 
                <Col lg={3} className="px-0"><SearchPeople /></Col>
                <Col lg={5} className="px-0">{changeData === 0 ? <UserProfile /> : changeData === 1 ? <Notifications /> : "" }</Col>
                <Col lg={3} className="px-0"><ProfileBar setChangeData={setChangeData} changeData={changeData}/></Col>
            </Row>
       
    )
}
export default MessengerNotifications;