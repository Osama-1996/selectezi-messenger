import { Routes, Route } from "react-router-dom";
import {  ChattingPeople,MobileChattingArea,SearchCallers,MobileUserProfile,ProfileSettings,MobileNotifications } from "../pages/index"
const MobileRouting = () => {
    return (
            <Routes>
                <Route path="/notifications" element={< MobileNotifications />} />
                <Route path="/profile" element={< ProfileSettings />} />
                <Route path="/user-profile" element={< MobileUserProfile />} />
                <Route path="/chatting" element={< MobileChattingArea />} />
                <Route path="/Callers" element={< SearchCallers />} />
                <Route path="/" element={< ChattingPeople />} />
            </Routes>
    )
}
export default MobileRouting;