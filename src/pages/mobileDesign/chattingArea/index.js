import UserData from "./components/userData";
import Messages from "./components/messages";
import "./chattingArea.css"
import { Container } from "react-bootstrap";
const MobileChattingArea = () => {
    return (
        <Container fluid className="p-0 overflowhide">
            <div className="back-lightblue chatting-sm">
                <UserData />
                <Messages />
            </div>
        </Container>

    )
}
export default MobileChattingArea;