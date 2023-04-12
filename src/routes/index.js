import { Routes, Route } from "react-router-dom";
import { Calling, Chatting, Dashboard, ChattingPeople,MobileChattingArea,SearchCallers } from "../pages/index"
import Layout from '../components/navbar/layout';
const Routing = () => {
    return (
        <Layout>
            <Routes>
                {/* mobiledesign */}
                <Route path="/chatting" element={< MobileChattingArea />} />
                <Route path="/chats" element={< ChattingPeople />} />
                <Route path="/Callers" element={< SearchCallers />} />
                {/* ///////// */}
                <Route path="/messeges" element={< Chatting />} />
                <Route path="/calling" element={< Calling />} />
                <Route path="/" element={< Dashboard />} />
            </Routes>
        </Layout>
    )
}
export default Routing;