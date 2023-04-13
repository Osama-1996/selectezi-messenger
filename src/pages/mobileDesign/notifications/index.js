import { Container } from "react-bootstrap"
import CloseIcon from '@mui/icons-material/Close';
import Form from 'react-bootstrap/Form';
import MobileHumberger from '../../../components/mobile-humburger';
import "./notification.css"
const MobileNotifications = () => {
    return (
        <Container fluid className="overflowhide">
            <MobileHumberger />
            <div className="box-shadow d-flex justify-content-between px-4 py-3">
                <div><h4>Notifications</h4></div>
                <div className="pt-1 color-blue"><CloseIcon /></div>
            </div>
            <div className="back-lightblue back-lightblueHeight-sm notificationBack">
                <div className="d-flex justify-content-between px-4 pt-4">
                    <div><h5>Jhon</h5></div>
                    <div> <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />

                    </Form></div>
                </div>
                <div className="back-silver mt-2">
                    <p className="messageText py-2 ps-4">Messege From Jhon</p>
                </div>
            </div>
        </Container>
    )
}
export default MobileNotifications;