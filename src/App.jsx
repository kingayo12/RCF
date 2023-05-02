import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Gallary from './gallery/Gallary';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Gallery" element={<Gallary/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </BrowserRouter>

  )
}

export default App