import Pagebanner from "../components/Pagebanner"
import Bannercards from "../components/Homepage/Bannercards"
import Counter from "../components/Homepage/Counter"
import Features from "../components/Homepage/Features"

const Featurepage = () => {
   return (
      <>
         <Pagebanner title="Features" shorttitle={"Features"} />
         <Bannercards />
         <Counter />
         <Features />
      </>
   )
}

export default Featurepage