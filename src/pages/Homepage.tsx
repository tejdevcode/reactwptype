
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

import { useState } from "react"

import Loader from '../components/Loader';
import fetchData from "../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query home { page(id: "home", idType: URI) { id slug slider { slideritem { itemtitle itemlink { url title } itemimage { node { sourceUrl altText uri } } } } testimonial{ tsubtitle title tdisc moreLink{ title url target } testimonialItem{ personimg{ node{ sourceUrl altText } } personText personName personProfessation } } } }`);


const HomePage = () => {

   const [homedata, setHomedata] = useState<any>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setHomedata(compdata.data.page);
      setLoading(true);
   }
   pagedata();

   //console.log(homedata?.bnrcards)

   return (
      <>
         <>
            {loading ? <Herobanner bannerdata={homedata?.slider} /> : <Loader />}
            <Bannercards />
            <Aboutsec />
            {/* <Counter /> */}
            <Features />
            <Services />
            <Quote />
            <Ourprojects />
            <Team />
            <Testimonial testidata={homedata?.testimonial} />
         </>
      </>
   )
}

export default HomePage

