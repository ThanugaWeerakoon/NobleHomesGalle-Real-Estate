import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import { Home } from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Land from "./Pages/Land/Land";
import PropertyDetails from "./Pages/PropertyDetails";

import HouseItem from "./Pages/Itempage/HouseItem";
import HideNavAndFooter from "./Components/HideNavAndFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <HideNavAndFooter>
          <TopNav />
        </HideNavAndFooter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/land" element={<Land />} />
          <Route path="/houseItem" element={<HouseItem />} />
          <Route path="/property/:propertyId" element={<PropertyDetails />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
