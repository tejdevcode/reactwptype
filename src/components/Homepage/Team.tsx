import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
               <p className="fs-5 fw-bold text-primary">Our Team</p>
               <h1 className="display-5 mb-5">Dedicated & Experienced Team Members</h1>
            </div>
            <div className="row g-4">
               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="team-item rounded">
                     <img className="img-fluid" src="../../src/assets/img/team-1.jpg" alt="" />
                     <div className="team-text">
                        <h4 className="mb-0">Doris Jordan</h4>
                        <p className="text-primary">Landscape Designer</p>
                        <div className="team-social d-flex">
                           <a className="btn btn-square rounded-circle me-2" href=""><FaFacebookF /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaTwitter /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaInstagram /></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="team-item rounded">
                     <img className="img-fluid" src="../../src/assets/img/team-2.jpg" alt="" />
                     <div className="team-text">
                        <h4 className="mb-0">Johnny Ramirez</h4>
                        <p className="text-primary">Garden Designer</p>
                        <div className="team-social d-flex">
                           <a className="btn btn-square rounded-circle me-2" href=""><FaFacebookF /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaTwitter /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaInstagram /></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="team-item rounded">
                     <img className="img-fluid" src="../../src/assets/img/team-3.jpg" alt="" />
                     <div className="team-text">
                        <h4 className="mb-0">Diana Wagner</h4>
                        <p className="text-primary">Senior Gardener</p>
                        <div className="team-social d-flex">
                           <a className="btn btn-square rounded-circle me-2" href=""><FaFacebookF /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaTwitter /></a>
                           <a className="btn btn-square rounded-circle me-2" href=""><FaInstagram /></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Team