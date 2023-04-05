import { Routes, Route } from "react-router-dom";
// pages
import UserDashboard from "../pages/userDashboard/index";
import Messaging from "../pages/messaging";
////////

const Routing = () => {
    return (
        <Routes>
      /// pages
      <Route path="/user-dashboard" element={< UserDashboard />} />
      <Route path="/messeges" element={< Messaging />} />
      //////
            ////////
            // components
            
            
    /////////

        </Routes>
    )
}
export default Routing;