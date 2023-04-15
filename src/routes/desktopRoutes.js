import { Routes, Route } from "react-router-dom";
import { Calling, Chatting, Dashboard} from "../pages/index"
import Layout from '../components/navbar/layout';
const DesktopRouting = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/messeges" element={< Chatting />} />
                <Route path="/calling" element={< Calling />} />
                <Route path="/" element={< Dashboard />} />
            </Routes>
        </Layout>
    )
}
export default DesktopRouting;