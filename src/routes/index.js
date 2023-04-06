import { Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/userDashboard/index";
import Messaging from "../pages/messaging";
import Calling from "../pages/calling";
import Layout from '../components/navbar/layout';
const Routing = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/messeges" element={< Messaging />} />
                <Route path="/calling" element={< Calling />} />
                <Route path="/" element={< UserDashboard />} />
            </Routes>
        </Layout>
    )
}
export default Routing;