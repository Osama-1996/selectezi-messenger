import { Row, Col } from "react-bootstrap"
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import "./messages.css"
const Messages = () => {
    return (
        <div>
            <h6 className="text-center pt-2 pb-1">13-March-2023</h6>
            <div className="chattingArea-sm pb-2">

            </div>

            <Row className="textPlace bg-white pt-1">
                <Col sm={1} xs={1} className="d-flex justify-content-center mt-2"><AttachFileIcon className="color-lightSilver profileIcons" /></Col>
                <Col sm={9} xs={9} className="ps-0"><textarea type="text" placeholder="Type your messege here." className="w-100 textareasize pt-2 mt-1" /></Col>
                <Col sm={2} xs={2} className="px-0">
                    <div className="d-flex mt-2">
                        <div className="ps-2 ps-lg-4">
                            <SentimentSatisfiedAltIcon className="color-lightSilver profileIcons" />
                        </div>
                        <div className="ps-2 ps-md-1 ps-lg-3">
                            <SendIcon className="color-blue profileIcons" />
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}
export default Messages;