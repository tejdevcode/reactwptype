import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Topbar = () => {
   return (
      <div className="container-fluid bg-dark text-light px-0 py-2">
         <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
               <div className="h-100 d-inline-flex align-items-center me-4">
                  <FaPhoneAlt className="me-2" />
                  <span>+012 345 6789</span>
               </div>
               <div className="h-100 d-inline-flex align-items-center">
                  <FaRegEnvelope className="me-2" />
                  <span>info@example.com</span>
               </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
               <div className="h-100 d-inline-flex align-items-center mx-n2">
                  <span>Follow Us:</span>
                  <Link className="btn btn-link text-light" to="#"><FaFacebookF /></Link>
                  <Link className="btn btn-link text-light" to="#"><FaTwitter /></Link>
                  <Link className="btn btn-link text-light" to="#"><FaLinkedinIn /></Link>
                  <Link className="btn btn-link text-light" to="#"><FaInstagram /></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Topbar