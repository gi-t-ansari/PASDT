import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Home, CoordinateOne, CoordinateTwo, CoordinateThree, CoordinateFour } from "./pages";
import { BACKEND_URL, KEY } from "./config";
import { APP_URL } from "./config/url";
import axios from "axios";



function App() {

  const [data, setData] = useState([]);
  // const newDate = data[0].date.split(" ");
  // const currentDate = newDate[0].split("-").join("/");

  const getData = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}api/natural?api_key=${KEY}`);
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <main>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route>
              <Route path={`${APP_URL.HOMEPAGE}`} element={<Home />}/>
              <Route path={`${APP_URL.COORDINATE_ONE}`} element={<CoordinateOne data={data}  />} />
              <Route path={`${APP_URL.COORDINATE_TWO}`} element={<CoordinateTwo data={data}  />} />
              <Route path={`${APP_URL.COORDINATE_THREE}`} element={<CoordinateThree data={data}  />} />
              <Route path={`${APP_URL.COORDINATE_FOUR}`} element={<CoordinateFour data={data} />}  />
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
