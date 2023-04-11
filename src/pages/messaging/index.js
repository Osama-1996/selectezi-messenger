import SideBar from "../../components/sideBar/index"
import SearchPeople from "../../components/searchPeople/index"
import ProfileData from "../../components/profileData/index"
import { Row, Col, Container } from "react-bootstrap"
const Messaging = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={1} md={1} className="px-0"><SideBar /></Col>
                <Col lg={3} md={3} className="px-0"><SearchPeople /></Col>
                <Col lg={8} md={8} className="px-0"><ProfileData /></Col>
            </Row>
        </Container>

    )
}
export default Messaging;