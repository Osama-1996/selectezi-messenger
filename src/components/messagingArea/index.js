import "./messagingArea.css"
import { Row, Col } from "react-bootstrap"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
const MessagesArea = () => {
    return (
        <div className="pt-0">
            <div className=" back-lightblue messaging pt-3">
                <h6 className="text-center">13-March-2023</h6>
                <div className="chattingArea">
                
                </div>
            </div>
            <Row className="textPlace pt-1">
                <Col lg={1} md={1} className="d-flex justify-content-center mt-2"><AttachFileIcon className="color-lightSilver profileIcons"/></Col>
                <Col lg={9} md={9} className="ps-0"><textarea type="text" placeholder="Type your messege here." className="w-100 textareasize pt-2 mt-1" /></Col>
                <Col lg={2} md={2} className="px-0">
                    <div className="d-flex mt-2">
                        <div className="ps-2 ps-lg-4">
                            <SentimentSatisfiedAltIcon className="color-lightSilver profileIcons"/>
                        </div>
                        <div className="ps-1 ps-lg-3">
                            <SendIcon className="color-blue profileIcons" />
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}
export default MessagesArea;