/* import Slider from "react-slick"; */
import Slider from "@ant-design/react-slick";
import "../../assets/css/slick.min.css";
import "../../assets/css/slick-theme.css";
import LazyLoadComponent from './LazyLoadComponent';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useRef } from "react"

interface Testidataprop {
   testidata?: {
      "tsubtitle"?: string | undefined,
      "title"?: string | undefined,
      "tdisc"?: string | undefined,
      "moreLink"?: {
         "title"?: string | undefined,
         "url"?: string | undefined,
         "target"?: string | undefined,
      }
      "testimonialItem"?: [
         {
            "personimg"?: {
               "node"?: {
                  "sourceUrl"?: string | undefined,
                  "altText"?: string | undefined,
               }
            },
            "personText"?: string | undefined,
            "personName"?: string | undefined,
            "personProfessation"?: string | undefined,
         }
      ]
   }
}


const Testimonial: React.FC<Testidataprop> = ({ testidata }) => {
   /* console.log(testidata) */
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
                  <p className="fs-5 fw-bold text-primary">{testidata?.tsubtitle ?? "Testimonial"}</p>
                  <h1 className="display-5 mb-5">{testidata?.title ?? "What Our Clients Say About Us!"}</h1>
                  <p className="mb-4">{testidata?.tdisc}</p>
                  <a className="btn btn-primary py-3 px-4" href={testidata?.moreLink?.url}>{testidata?.moreLink?.title ?? "See More"}</a>
               </div>
               <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                  <LazyLoadComponent>
                     <div className="testimonial-carousel">
                        <Slider {...settings} ref={sliderRef}>
                           {testidata?.testimonialItem?.map((item, i) =>
                              <div className="testimonial-item" key={i}>
                                 <img className="img-fluid rounded mb-3" src={item?.personimg?.node?.sourceUrl} alt={item?.personimg?.node?.altText} />
                                 <p className="fs-5">{item?.personText}</p>
                                 <h4>{item?.personName}</h4>
                                 <span>{item?.personProfessation}</span>
                              </div>
                           )}

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