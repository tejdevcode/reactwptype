import { FaPlus } from "react-icons/fa";

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query services { page(id: "services", idType: URI) { id slug pageDiscription { pageHeading { ... on PageDiscriptionPageHeadingPageHeadingLayout { pageSubTitle pageTitle } } } serviceSection{ servicesCards{ srcardicon{ node{ sourceUrl altText } } srcardTitle srcardDisc srcardLink{ title url target } srcardBackground{ node{ sourceUrl altText } } } } } }`);

interface Services {
   "pageDiscription"?: {
      "pageHeading"?: [
         {
            "pageSubTitle"?: string | undefined,
            "pageTitle"?: string | undefined,
         }
      ]
   },
   "serviceSection"?: {
      "servicesCards"?: [{
         "srcardicon"?: {
            "node": {
               "sourceUrl"?: string,
               "altText": string
            }
         }
         "srcardTitle"?: string,
         "srcardDisc"?: string,
         "srcardLink"?: {
            "title"?: string,
            "url"?: string,
            "target"?: string
         },
         "srcardBackground": {
            "node": {
               "sourceUrl"?: string,
               "altText"?: string,
            }
         }
      }]
   }
}

const Services = () => {
   const duration = ['0.1s', '0.3s', '0.5s', '0.1s', '0.3s', '0.5s']
   const [servicedata, setServicedata] = useState<Services>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setServicedata(compdata.data.page);
      setLoading(true);
   }
   pagedata();
   //console.log(servicedata)
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
               <p className="fs-5 fw-bold text-primary">{servicedata?.pageDiscription?.pageHeading?.[0]?.pageSubTitle ?? "Our Services"}</p>
               <h1 className="display-5 mb-5">{servicedata?.pageDiscription?.pageHeading?.[0]?.pageTitle ?? "Services That We Offer For You"}</h1>
            </div>
            <div className="row g-4">
               {servicedata?.serviceSection?.servicesCards?.map((item, i) =>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={duration[i]} key={i}>
                     <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                           <img className="img-fluid" src={item?.srcardBackground
                              ?.node?.sourceUrl} alt={item?.srcardBackground
                                 ?.node?.altText} />
                        </div>
                        <div className="service-text rounded p-5">
                           <div className="btn-square rounded-circle mx-auto mb-3">
                              <img className="img-fluid" src={item?.srcardicon?.node?.sourceUrl} alt={item?.srcardicon?.node?.altText ?? "service icon"} />
                           </div>
                           <h4 className="mb-3">{item?.srcardTitle}</h4>
                           <p className="mb-4">{item?.srcardDisc}</p>
                           <a className="btn btn-sm" href={item?.srcardLink?.url} target={item?.srcardLink?.target}>
                              <span className="me-2" style={{ width: 12, height: 23 }} ><FaPlus className="text-primary" /></span>
                              {item?.srcardLink?.title}</a>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default Services