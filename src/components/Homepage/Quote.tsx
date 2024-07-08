

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query quote { page(id: "quote", idType: URI) { id slug quote{ secTitle secBgImage{ node{ sourceUrl altText } } } } }`);
interface Quotes {
   "secTitle"?: string | undefined,
   "secBgImage": {
      "node": {
         "sourceUrl"?: string | undefined,
         "altText"?: string | undefined
      }
   }
}

const Quote = () => {

   const [quotedata, setQuotedata] = useState<Quotes>();
   const [loading, setLoading] = useState<boolean>(false);

   async function pagedata() {
      const compdata = await resource;
      setQuotedata(compdata.data.page.quote);
      setLoading(true);
   }
   pagedata();
   /* console.log(quotedata) */
   return (
      <div className="container-fluid quote my-5 py-5 position-relative">
         {/* data-parallax="scroll" data-image-src="../../src/assets/img/carousel-2.jpg" */}
         <div className="counterbg quote">
            <div className="bgimg position-absolute" style={{ backgroundImage: `url(${quotedata?.secBgImage?.node?.sourceUrl})` }}></div>
         </div>
         <div className="container py-5">
            <div className="row justify-content-center">
               <div className="col-lg-7">
                  <div className="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                     <h1 className="display-5 text-center mb-5">{quotedata?.secTitle ?? "Get A Free Quote"}</h1>
                     <div className="row g-3">
                        <div className="col-sm-6">
                           <div className="form-floating">
                              <input type="text" className="form-control bg-light border-0" id="gname" placeholder="Gurdian Name" />
                              <label htmlFor="gname">Your Name</label>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-floating">
                              <input type="email" className="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email" />
                              <label htmlFor="gmail">Your Email</label>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-floating">
                              <input type="text" className="form-control bg-light border-0" id="cname" placeholder="Child Name" />
                              <label htmlFor="cname">Your Mobile</label>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-floating">
                              <input type="text" className="form-control bg-light border-0" id="cage" placeholder="Child Age" />
                              <label htmlFor="cage">Service Type</label>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-floating">
                              <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message" style={{ height: 100 }}></textarea>
                              <label htmlFor="message">Message</label>
                           </div>
                        </div>
                        <div className="col-12 text-center">
                           <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Quote