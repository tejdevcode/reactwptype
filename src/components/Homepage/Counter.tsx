import { useEffect, useState } from 'react';
import LazyLoadComponent from './LazyLoadComponent';
import CountUp from 'react-countup';

// import { Parallax } from 'react-parallax';


const Counter = () => {
   const [window, setWindow] = useState<number>(0);
   useEffect(() => {
      setWindow(1);
   }, []);
   return (
      <div className="container-fluid facts my-5 py-5 position-relative" >
         {/* data-parallax="scroll" data-image-src="../../src/assets/img/carousel-1.jpg" */}
         <div className="counterbg quote">
            <div className="bgimg position-absolute" style={{ backgroundImage: `url(../../src/assets/img/carousel-1.jpg)` }}></div>
         </div>
         {/* {secload && <Parallax blur={10} bgImage="../../src/assets/img/carousel-1.jpg" bgImageAlt="the cat" strength={200}>
            Content goes here. Parallax height grows with content height.
         </Parallax>} */}
         {window && <div className="container py-5 counterbox">
            <div className="row g-5">
               <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                  <LazyLoadComponent>
                     <CountUp end={1234} className="display-4 text-white" />
                  </LazyLoadComponent>
                  <span className="fs-5 fw-semi-bold text-light">Happy Clients</span>
               </div>
               <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                  <LazyLoadComponent>
                     <CountUp end={1234} className="display-4 text-white" />
                  </LazyLoadComponent>
                  <span className="fs-5 fw-semi-bold text-light">Garden Complated</span>
               </div>
               <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                  <LazyLoadComponent>
                     <CountUp end={1234} className="display-4 text-white" />
                  </LazyLoadComponent>
                  <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
               </div>
               <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                  <LazyLoadComponent>
                     <CountUp end={1234} className="display-4 text-white" />
                  </LazyLoadComponent>
                  <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
               </div>
            </div>
         </div>}
      </div >
   )
}

export default Counter