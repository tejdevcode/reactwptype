import Pagebanner from "../components/Pagebanner"
import Aboutsec from "../components/Homepage/Aboutsec"
import Counter from "../components/Homepage/Counter"
import Team from "../components/Homepage/Team"

const Aboutpage = () => {
   return (
      <>
         <Pagebanner title="About Us" shorttitle={"About"} />
         <Aboutsec />
         {/* <Counter /> */}
         <Team />
      </>
   )
}

export default Aboutpage