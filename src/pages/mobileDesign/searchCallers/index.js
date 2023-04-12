import SearchIcon from '@mui/icons-material/Search';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { SearchCallers } from "../../../constants/jsonConstant"
import MobileHumberger from '../../../components/mobile-humburger';
import { Col, Row,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SearchingCallers = () => {
    const navigate=useNavigate()
    return (
        <Container fluid className='overflowhide'>
            <MobileHumberger />
            <div class="search pt-3 mx-5">
                <input type="text" className="form-control back-silver py-2" placeholder="Search" />
                <div className="position-relative">
                    <SearchIcon className="searchicon" />
                </div>
            </div>
            <Row className="pt-4 searchScroll">
                {SearchCallers?.map((search) => (
                    <Row className='p-0' onClick={()=>navigate("/chatting")}>
                        <Col sm={3} xs={3} className=" imgSize d-flex justify-content-center"><img src={search.img} alt="" /> </Col>
                        <Col sm={7} xs={7} className="ps-0 pt-1 pe-0">
                            <div>
                                <h4 className="mb-0 font-17 name-md">{search.name}</h4>
                                <p className="mb-0  color-lightSilver fontdesc">{search.desc}</p>
                                <p className="mb-0 fontdesc timegreen">{search.time}</p>
                            </div>
                        </Col>
                        <Col sm={2} xs={2} className="pt-3"><PhoneCallbackIcon className="text-success size-md" /></Col>
                         <hr className='my-2'/>
                    </Row>


                ))}
            </Row>
        </Container>
    )
}
export default SearchingCallers;