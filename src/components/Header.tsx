
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from "react";

interface NavLinkProps {
   isActive: boolean;
   isPending: boolean;
}
const Header = () => {
   const [show, setShow] = useState(false);
   const navhandler = () => {
      setShow(!show);
   }
   return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
         <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 className="m-0">Gardener</h1>
         </Link>
         <button type="button" className={`navbar-toggler me-4`} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={navhandler}>
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               <NavLink to="/"
                  className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link"} onClick={navhandler}
               >Home</NavLink>
               <NavLink to="/about" className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link "} onClick={navhandler}>About</NavLink>
               <NavLink to="/services" className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link "} onClick={navhandler}>Services</NavLink>
               <NavLink to="/projects" className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link "} onClick={navhandler}>Projects</NavLink>
               {/* <div className="nav-item dropdown">
                  <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages
                     <FaAngleDown className="ms-2" />
                  </NavLink>
                  <div className="dropdown-menu bg-light m-0">
                     <NavLink to="/page/features" className={({ isActive }: NavLinkProps) => isActive ? "dropdown-item active" : "dropdown-item "}>Features</NavLink>
                     <NavLink to="/page/team" className="dropdown-item">Our Team</NavLink>
                  </div>
               </div> */}
               <NavLink to="/features" className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link "} onClick={navhandler}>Features</NavLink>
               <NavLink to="/contact" className={({ isActive }: NavLinkProps) => isActive ? "nav-item nav-link active" : "nav-item nav-link "} onClick={navhandler}>Contact</NavLink>
            </div>
            <Link to="/quote" className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote
               <FaArrowRight className="ms-3" /></Link>
         </div>
      </nav >
   )
}

export default Header