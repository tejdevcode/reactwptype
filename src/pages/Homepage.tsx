
import Herobanner from "../components/Homepage/Herobanner"
import Bannercards from "../components/Homepage/Bannercards"
import Aboutsec from "../components/Homepage/Aboutsec"
import Counter from "../components/Homepage/Counter"
import Features from "../components/Homepage/Features"
import Services from "../components/Homepage/Services"
import Quote from "../components/Homepage/Quote"
import Ourprojects from "../components/Homepage/Ourprojects"
import Team from "../components/Homepage/Team"
import Testimonial from "../components/Homepage/Testimonial"

const HomePage = () => {
   return (
      <>
         <Herobanner />
         <Bannercards />
         <Aboutsec />
         <Counter />
         <Features />
         <Services />
         <Quote />
         <Ourprojects />
         <Team />
         <Testimonial />
      </>
   )
}

export default HomePage