import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query about { page(id: "about", idType: URI) { id slug team{ teamSubTitle teamTitle teamCards{ teamCardImg{ node{ sourceUrl altText } } memberName memberPost socialLink{ socialUrl{ url title target } } } } } }`);

interface TeamData {
   teamSubTitle?: string;
   teamTitle?: string;
   teamCards?: TeamCard[];
}

interface TeamCard {
   teamCardImg?: {
      node?: {
         sourceUrl?: string;
         altText?: string;
      };
   };
   memberName?: string;
   memberPost?: string;
   socialLink?: SocialLink[];
}

interface SocialLink {
   socialUrl: {
      url?: string;
      title?: string;
      target?: string;
   };
}

const Team = () => {
   const icons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />]
   const duration = ['0.1s', '0.3s', '0.5s']
   const [teamdata, setTeamdata] = useState<TeamData>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setTeamdata(compdata.data.page?.team);
      setLoading(true);
   }
   pagedata();


   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
               <p className="fs-5 fw-bold text-primary">{teamdata?.teamSubTitle}</p>
               <h1 className="display-5 mb-5">{teamdata?.teamTitle}</h1>
            </div>
            <div className="row g-4">
               {teamdata?.teamCards?.map((item, index) =>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={duration[index]} key={index}>
                     <div className="team-item rounded">
                        <img className="img-fluid" src={item?.teamCardImg?.node?.sourceUrl} alt={item?.teamCardImg?.node?.altText} />
                        <div className="team-text">
                           <h4 className="mb-0">{item?.memberName}</h4>
                           <p className="text-primary">{item?.memberPost}</p>
                           <div className="team-social d-flex">
                              {item?.socialLink?.map((link, i) =>
                                 <a className="btn btn-square rounded-circle me-2" href={link?.socialUrl?.url} key={i}>{icons[i]}</a>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default Team