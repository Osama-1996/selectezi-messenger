import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={< Navbar/>} />
        </Routes>
    )
}
export default Routing;