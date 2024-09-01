
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from './Components/TopNav'
import Contact from './Pages/Contact/Contact'
import { Home } from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {

  return (
    <>
    <BrowserRouter>
    <TopNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
