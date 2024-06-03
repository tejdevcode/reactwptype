import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Aboutsec = () => {
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="row g-5 align-items-end">
               <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                  <img className="img-fluid rounded" data-wow-delay="0.1s" src="../../src/assets/img/about.jpg" />
               </div>
               <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                  <h1 className="display-1 text-primary mb-0">25</h1>
                  <p className="text-primary mb-4">Year of Experience</p>
                  <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <a className="btn btn-primary py-3 px-4" href="">Explore More</a>
               </div>
               <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="row g-5">
                     <div className="col-12 col-sm-6 col-lg-12">
                        <div className="border-start ps-4">
                           <FaAward className="text-primary mb-3" style={{ width: 36, height: 48 }} />
                           <h4 className="mb-3">Award Winning</h4>
                           <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-12">
                        <div className="border-start ps-4">
                           <FaUsers className="text-primary mb-3" style={{ width: 60, height: 48 }} />
                           <h4 className="mb-3">Dedicated Team</h4>
                           <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Aboutsec