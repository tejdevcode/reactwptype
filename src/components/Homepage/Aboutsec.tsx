import { Suspense } from "react";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Loader from "../Loader";

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query about { page(id: "about", idType: URI) { id slug aboutsec { aboutImage { node { sourceUrl altText } } experiance aboutTitle aboutText aboutSidebar { aboutSidetitle aboutSidetext } aboutLink { target title url } timeDelay{ timeDelaySecond } } } }`);

interface aboutdata {
   "aboutImage"?: {
      "node": {
         "sourceUrl"?: string | undefined,
         "altText"?: string | undefined
      }
   },
   "experiance"?: number | undefined,
   "aboutTitle"?: string | undefined,
   "aboutText"?: string | undefined,
   "aboutSidebar": [
      {
         "aboutSidetitle"?: string | undefined,
         "aboutSidetext"?: string | undefined
      }
   ],
   "aboutLink"?: {
      "target"?: string | undefined,
      "title"?: string | undefined,
      "url"?: string | undefined
   },
   "timeDelay": [
      { "timeDelaySecond"?: number | undefined },
      { "timeDelaySecond"?: number | undefined },
      { "timeDelaySecond"?: number | undefined }
   ]
}

const Aboutsec: React.FC = () => {
   const icon = [<FaAward className="text-primary mb-3" style={{ width: 36, height: 48 }} />, <FaUsers className="text-primary mb-3" style={{ width: 60, height: 48 }} />]
   const [aboutdata, setAboutdata] = useState<aboutdata>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setAboutdata(compdata.data.page?.aboutsec);
      setLoading(true);
   }
   pagedata();
   // console.log(aboutdata)
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="row g-5 align-items-end">
               <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay={`0.${aboutdata?.timeDelay[0].timeDelaySecond}s`}>
                  <img className="img-fluid rounded" data-wow-delay="0.1s" src={aboutdata?.aboutImage?.node?.sourceUrl} alt="" />
               </div>
               <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay={`0.${aboutdata?.timeDelay[1].timeDelaySecond}s`}>
                  <h1 className="display-1 text-primary mb-0">{aboutdata?.experiance}</h1>
                  <p className="text-primary mb-4">Year of Experience</p>
                  <h1 className="display-5 mb-4">{aboutdata?.aboutTitle ?? "We Make Your Home Like A Garden"}</h1>
                  <p className="mb-4">{aboutdata?.aboutText}</p>
                  <a className="btn btn-primary py-3 px-4" href={aboutdata?.aboutLink?.url}>{aboutdata?.aboutLink?.title ?? "Explore More"}</a>
               </div>
               <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay={`0.${aboutdata?.timeDelay[2].timeDelaySecond}s`}>
                  <div className="row g-5">
                     {aboutdata?.aboutSidebar?.map((item, i) =>
                        <div className="col-12 col-sm-6 col-lg-12" key={i}>
                           <div className="border-start ps-4">
                              {icon[i]}
                              <h4 className="mb-3">{item.aboutSidetitle}</h4>
                              <span>{item.aboutSidetext}</span>
                           </div>
                        </div>
                     )}

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Aboutsec