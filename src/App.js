import React from 'react';
import MobileRouting from './routes/mobileRoutes';
import DesktopRouting from './routes/desktopRoutes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/global.css"
function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <div >
      <BrowserRouter>
        <Routes>
          {isMobile ? (
            <Route path="*" element={< MobileRouting />} />

          ) : (
            <Route path="*" element={< DesktopRouting />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
