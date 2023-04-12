import React from 'react';
import Routing from './routes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/global.css"
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="*" element={< Routing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
