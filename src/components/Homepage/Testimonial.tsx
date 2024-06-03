import Slider from "react-slick";
import "../../assets/css/slick.min.css";
import "../../assets/css/slick-theme.css";
import LazyLoadComponent from './LazyLoadComponent';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useRef } from "react"


const Testimonial = () => {
   let sliderRef = useRef<Slider>(null);
   const next = () => {
      sliderRef.current ? sliderRef.current.slickNext() : null;
   };
   const previous = () => {
      sliderRef.current ? sliderRef.current.slickPrev() : null;
   };
   const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <BiChevronLeft />,
      // prevArrow: <BiChevronRight />
   };
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="row g-5">
               <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                  <p className="fs-5 fw-bold text-primary">Testimonial</p>
                  <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                  <a className="btn btn-primary py-3 px-4" href="">See More</a>
               </div>
               <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                  <LazyLoadComponent>
                     <div className="testimonial-carousel">
                        <Slider {...settings} ref={sliderRef}>
                           <div className="testimonial-item">
                              <img className="img-fluid rounded mb-3" src="../../src/assets/img/testimonial-1.jpg" alt="" />
                              <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                              <h4>Client Name</h4>
                              <span>Profession</span>
                           </div>
                           <div className="testimonial-item">
                              <img className="img-fluid rounded mb-3" src="../../src/assets/img/testimonial-2.jpg" alt="" />
                              <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                              <h4>Client Name</h4>
                              <span>Profession</span>
                           </div>
                        </Slider>
                        <div className="owl-nav">
                           <button className="owl-prev" onClick={previous}><BsChevronLeft style={{ width: 22, height: 22 }} /></button>
                           <button className="owl-next" onClick={next}><BsChevronRight style={{ width: 22, height: 22 }} /></button>
                        </div>
                     </div>
                  </LazyLoadComponent>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonial