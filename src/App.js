import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import CoordinateOne from "./pages/CoordinateOne";
import CoordinateTwo from "./pages/CoordinateTwo";
import CoordinateThree from "./pages/CoordinateThree";
import CoordinateFour from "./pages/CoordinateFour";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />}/>
              <Route path="/img1" element={<CoordinateOne />} />
              <Route path="/img2" element={<CoordinateTwo />} />
              <Route path="/img3" element={<CoordinateThree />} />
              <Route path="/img4" element={<CoordinateFour />} />
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
