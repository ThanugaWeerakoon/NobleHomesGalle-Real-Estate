import Agents from "../Components/Agents"
import Dream from "../Components/Dream"
import Footer from "../Components/Footer"
import { Hero } from "../Components/Hero"
import OurProperties from "../Components/OurProperties"
import Testimonials from "../Components/Testimonials"



export const Home = () => {
  return (
    <div className="">
        <Hero/>
        <OurProperties/>
        <Dream/>
        <Agents/>
        
        <Footer/>
    </div>
  )
}
