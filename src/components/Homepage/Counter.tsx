import { useEffect, useState } from 'react';
import LazyLoadComponent from './LazyLoadComponent';
import CountUp from 'react-countup';

// import { Parallax } from 'react-parallax';

import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query about { page(id: "about", idType: URI) { id slug counter { counterup { countnum counttext } countBackground { node { sourceUrl altText } } } } }`);

interface counterdata {
   "counterup"?: [
      {
         "countnum"?: any,
         "counttext"?: string | undefined,
      }
   ],
   "countBackground": {
      "node": {
         "sourceUrl"?: string | undefined,
         "altText"?: string | undefined
      }
   }
}


const Counter = () => {
   const [window, setWindow] = useState<number>(0);


   const [countdata, setCountdata] = useState<counterdata>();
   const [loading, setLoading] = useState<boolean>(false);
   const countdelay = [0.1, 0.3, 0.5, 0.7]

   async function pagedata() {
      const compdata = await resource;
      setCountdata(compdata.data.page?.counter);
      setLoading(true);
   }
   pagedata();
   //console.log(countdata)

   useEffect(() => {
      setWindow(1);
   }, []);
   return (
      <div className="container-fluid facts my-5 py-5 position-relative" >
         {/* data-parallax="scroll" data-image-src="../../src/assets/img/carousel-1.jpg" */}
         <div className="counterbg quote">
            <div className="bgimg position-absolute" style={{ backgroundImage: `url(${countdata?.countBackground?.node?.sourceUrl})` }}></div>
         </div>
         {/* {secload && <Parallax blur={10} bgImage="../../src/assets/img/carousel-1.jpg" bgImageAlt="the cat" strength={200}>
            Content goes here. Parallax height grows with content height.
         </Parallax>} */}
         {window && <div className="container py-5 counterbox">
            <div className="row g-5">
               {countdata?.counterup?.map((item, i) =>
                  <div className="col-sm-6 col-lg-3 text-center wow fadeIn" key={i}>
                     <LazyLoadComponent>
                        <CountUp end={item.countnum} className="display-4 text-white" />
                     </LazyLoadComponent>
                     <span className="fs-5 fw-semi-bold text-light">{item.counttext}</span>
                  </div>
               )}

            </div>
         </div>}
      </div >
   )
}

export default Counter