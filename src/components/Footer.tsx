import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
   useEffect(() => {

      const $ = window.jQuery;
      const currentYear: number = new Date().getFullYear();
      const footerYearElement: HTMLElement | null = document.querySelector('#footeryear');
      if (footerYearElement) {
         footerYearElement.innerHTML = currentYear.toString();
      }

      $(window).scroll(function (this: any) {
         if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
         } else {
            $('.back-to-top').fadeOut('slow');
         }
      });
   }, []);

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };
   return (
      <>
         <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
               <div className="row g-5">
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-white mb-4">Our Office</h4>
                     <p className="mb-2"><FaLocationDot className="me-3" />123 Street, New York, USA</p>
                     <p className="mb-2"><FaPhoneAlt className="me-3" />+012 345 67890</p>
                     <p className="mb-2"><FaEnvelope className="me-3" />info@example.com</p>
                     <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><FaTwitter /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><FaFacebookF /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><FaYoutube /></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><FaLinkedinIn /></a>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-white mb-4">Services</h4>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Landscaping</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Pruning plants</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Urban Gardening</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Garden Maintenance</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Green Technology</a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-white mb-4">Quick Links</h4>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> About Us</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Contact Us</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Our Services</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Terms & Condition</a>
                     <a className="btn btn-link" href=""> <FaChevronRight className="me-1 mb-1" /> Support</a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <h4 className="text-white mb-4">Newsletter</h4>
                     <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                     <div className="position-relative w-100">
                        <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid copyright py-4">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                     &copy;2015 - <span id="footeryear"> {' '}</span> <a className="border-bottom" href="#">React Typescrept WordpressHeadless</a>, All Right Reserved.
                  </div>
               </div>
            </div>
         </div>
         <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" onClick={handleClick}>
            <BsArrowUp />
         </a>
      </>
   )
}

export default Footer