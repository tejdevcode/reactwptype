
import { FaUsers } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query home { page(id: "home", idType: URI) { id slug bnrcards { carditem { cardTitle cardText cardDelay } } } }`);

interface cardataprop {
   "carditem": [
      {
         "cardTitle": string,
         "cardText"?: string | undefined,
         "cardDelay": number | undefined
      }
   ] | undefined
}

const Bannercards: React.FC = () => {
   const icons: any = [<FaPhone className="text-primary" />, <FaUsers className="text-primary" />, <FaDollarSign className="text-primary" />]
   const [cardata, setCardata] = useState<cardataprop>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setCardata(compdata.data.page?.bnrcards);
      setLoading(true);
   }
   pagedata();
   //console.log(cardata)

   return (
      <section className="bnrcard container-fluid top-feature py-5 pt-lg-0">
         <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
               {cardata?.carditem?.map((item, i) =>
                  <div className="col-lg-4 wow fadeIn" data-wow-delay={`0.${item.cardDelay}s`} key={i}>
                     <div className="bg-white shadow d-flex align-items-center h-100 px-sm-5 px-3" style={{ minHeight: 160 }}>
                        <div className="d-flex">
                           <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                              {icons[i]}
                           </div>
                           <div className="ps-3">
                              <h4>{item.cardTitle}</h4>
                              <span>{item.cardText}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section >
   )
}

export default Bannercards