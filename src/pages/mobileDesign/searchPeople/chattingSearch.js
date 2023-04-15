import MobileHumberger from "../../../components/mobile-humburger";
import { Col, Row, Container } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { SearchUsers } from "../../../constants/jsonConstant"
import "./search.css"
import { useNavigate } from "react-router-dom";
const ChattingSearch = () => {
    const navigate = useNavigate()
    return (
        <div>
            <MobileHumberger />
            <Container fluid>
                <div class="search pt-3 mx-5">
                    <input type="text" className="form-control back-silver py-2" placeholder="Search" />
                    <div className="position-relative">
                        <SearchIcon className="searchicon" />
                    </div>

                </div>

                <div className="searchScroll pt-4">
                    {SearchUsers?.map((search) => (
                        <Row onClick={() => navigate("/chatting")}>
                            <Col sm={3} xs={3} className=" imgSize d-flex justify-content-center"><img src={search.img} alt="" /> </Col>
                            <Col sm={7} xs={7} className=" ps-0 pt-1 pe-0">
                                <div>
                                    <h6 className="mb-0 font-17 name-md">{search.name}</h6>
                                    <p className="mb-0  paraText-sm">{search.desc}</p>
                                    <p className="mb-0 font-12 para-sm">{search.time}</p>
                                </div>
                            </Col>
                            <Col sm={2} xs={2} className="pt-3 "><DoneAllIcon className="done-md" /></Col>
                            <hr className="my-2" />
                        </Row>


                    ))}
                </div>
            </Container>



        </div>
    )
}
export default ChattingSearch;