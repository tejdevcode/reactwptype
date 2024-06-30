import { FaCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query features { page(id: "features", idType: URI) { id slug featuresec{ featuresecSubtitle featuresecTitle featuresecText featuresecLink{ title url target } featuresecIconstxt{ icontext } } } }`);

interface Feature {
   "featuresecSubtitle"?: string | undefined,
   "featuresecTitle"?: string | undefined,
   "featuresecText"?: string | undefined,
   "featuresecLink"?: {
      "title"?: string | undefined,
      "url"?: string | undefined,
      "target"?: string | undefined,
   },
   "featuresecIconstxt"?: [
      { "icontext"?: string | undefined },
      { "icontext"?: string | undefined },
      { "icontext"?: string | undefined }
   ]
}

const Features = () => {
   const [featuredata, setFeaturedata] = useState<Feature>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setFeaturedata(compdata.data.page?.featuresec);
      setLoading(true);
   }
   pagedata();
   //console.log(featuredata)
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="row g-5 align-items-center">
               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <p className="fs-5 fw-bold text-primary">{featuredata?.featuresecSubtitle ?? "Why Choosing Us!"}</p>
                  <h1 className="display-5 mb-4">{featuredata?.featuresecTitle ?? "Few Reasons Why People Choosing Us!"}</h1>
                  <p className="mb-4">{featuredata?.featuresecText}</p>
                  <a className="btn btn-primary py-3 px-4" href={featuredata?.featuresecLink?.url}>{featuredata?.featuresecLink?.title ?? 'Explore More'}</a>
               </div>
               <div className="col-lg-6">
                  <div className="row g-4 align-items-center">
                     <div className="col-md-6">
                        <div className="row g-4">
                           <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                              <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                                 <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}><FaCheck className="text-primary" style={{ width: 48, height: 48 }} /></div>
                                 <h4 className="mb-0">{featuredata?.featuresecIconstxt?.[0]?.icontext ?? '100% Satisfaction'}</h4>
                              </div>
                           </div>
                           <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                              <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                                 <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}><FaUsers className="text-primary" style={{ width: 48, height: 48 }} /></div>
                                 <h4 className="mb-0">{featuredata?.featuresecIconstxt?.[1]?.icontext ?? 'Dedicated Team'}</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                        <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                           <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 90, height: 90 }}>
                              <FaTools className="text-primary" style={{ width: 48, height: 48 }} /></div>
                           <h4 className="mb-0">{featuredata?.featuresecIconstxt?.[2]?.icontext ?? 'Modern Equipment'}</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Features