import { Col, Row } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import "./searchPeople.css"
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { SearchUsers } from "../../constants/jsonConstant"
const SearchPeople = () => {
    return (
        <div className="screenHeight px-4 box-shadow">
            <div class="search pt-3">
                <input type="text" className="form-control back-silver py-2" placeholder="Search" />
                <div className="position-relative">
                    <SearchIcon className="searchicon" />
                </div>

            </div>


            <Row className="pt-4 searchScroll">
                {SearchUsers?.map((search) => (
                    <>
                        <Col lg={3} className="pb-3"><img src={search.img} alt="" /> </Col>
                        <Col lg={7} className="ps-0 pt-1 pe-0">
                            <div>
                                <h6 className="mb-0">{search.name}</h6>
                                <p className="mb-0  paraText">{search.desc}</p>
                                <p className="mb-0 font-12 para-sm">{search.time}</p>
                            </div>
                        </Col>
                        <Col lg={2} className="pt-3"><DoneAllIcon /></Col>
                    </>


                ))}
            </Row>


        </div>
    )
}
export default SearchPeople;