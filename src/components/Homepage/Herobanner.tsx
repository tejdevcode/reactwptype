
import Carousel from 'react-bootstrap/Carousel';


const Herobanner = () => {
   return (
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
         <Carousel id="header-carousel" className="carousel slide" data-bs-ride="carousel">

            <Carousel.Item className="carousel-item">
               <img className="w-100" src="../../src/assets/img/carousel-1.jpg" alt="Image" />
               <Carousel.Caption className="carousel-caption">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <h1 className="display-1 text-white mb-5 animated slideInDown">Make Your Home Like Garden</h1>
                           <a href="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                        </div>
                     </div>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
               <img className="w-100" src="../../src/assets/img/carousel-2.jpg" alt="Image" />
               <Carousel.Caption className="carousel-caption">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-7">
                           <h1 className="display-1 text-white mb-5 animated slideInDown">Create Your Own Small Garden At Home</h1>
                           <a href="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                        </div>
                     </div>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>

         {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
               data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
               data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button> */}
      </div>
   )
}

export default Herobanner