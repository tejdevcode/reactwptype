// import { gql, useQuery } from '@apollo/client';
import Carousel from 'react-bootstrap/Carousel';
// import axios from 'axios';
import { Suspense } from 'react';
import Loader from '../Loader';
import { ErrorBoundary } from "react-error-boundary";


/* const SLIDERINFO = gql`
   query home {
      page(id: "home", idType: URI) {
         id
         slug
         slider {
            slideritem {
            itemtitle
            itemlink {
               url
               title
            }
            itemimage {
               node {
                  sourceUrl
                  altText
                  uri
               }
            }
            }
         }
      }
   }
`;*/

interface SliderInfoData {
   bannerdata: {
      slideritem: [
         {
            itemtitle?: string | undefined,
            itemlink: {
               title?: string | undefined,
               url?: string | undefined
            } | undefined,
            itemimage: {
               node: {
                  sourceUrl?: string,
                  altText?: string,
                  uri?: string
               }
            }
         }
      ]
   };
}


/* const responsea = async () => {
   try {
      const response = await fetch(`${process.env.QL_query}=query home { page(id: "home", idType: URI) { id slug slider { slideritem { itemtitle itemlink { url title } itemimage { node { sourceUrl altText uri } } } } } }`);
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      return await response.json();
   } catch (error) {
      console.error('Fetch error:', error);
      return null; // or handle error accordingly
   }
};

const slrdata = responsea(); */




const Herobanner: React.FC<SliderInfoData> = ({ bannerdata }) => {
   //const { loading, error, data } = useQuery<{ sliderInfo: SliderInfoData }>(SLIDERINFO);
   /* const bnrinfo: any = resource.read();
   const bannerdata: SliderInfoData = bnrinfo.data.page; */



   //const bannerdatafetch = async () => {
   /* await axios({
      url: process.env.WP_GRAPHQL_URL,
      method: "post",
      data: {
         query: `query home { page(id: "home", idType: URI) { id slug slider { slideritem { itemtitle itemlink { url title } itemimage { node { sourceUrl altText uri } } } } } }`
      }
   }).then((res) => {
      setBannerdata(res.data.data.page);
      setBnrdataload(true);
   })
      .catch((err) => console.log(err)); */

   /* try {
      const response = await fetch(`${process.env.QL_query}=query home { page(id: "home", idType: URI) { id slug slider { slideritem { itemtitle itemlink { url title } itemimage { node { sourceUrl altText uri } } } } } }`);

      if (!response.ok) {
         throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setBannerdata(jsonData.data.page);
      setBnrdataload(true);
   } catch (error: any) {
      setError(error.message);
   } */
   //}
   //useEffect(() => {
   //bannerdatafetch();
   //    // if (loading) { return 'loading...'; }
   //    // if (error) { return 'error'; }
   //    // console.log(data);
   //}, []);

   // responsea().then((data) => {
   //    if (data === undefined) {
   //       console.log("Data is undefined");
   //    } else {
   //       console.log(data.data.page); // Log the page data
   //       setBannerdata(data.data.page); // Set banner data state
   //       setBnrdataload(true); // Set banner data load state
   //    }
   // }).catch((error) => {
   //    console.error('Error:', error);
   // });
   // responsea().then((data) => {
   //    console.log(data.data.page);
   // }).catch((error) => {
   //    console.error('Error:', error);
   // });
   return (
      <div className="container-fluid p-0 wow fadeIn aaaa" data-wow-delay="0.1s">
         <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense fallback={<Loader />}>
               <Carousel id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                  {bannerdata?.slideritem.map((item, i) =>
                     <Carousel.Item className="carousel-item" key={i}>
                        {item.itemimage && (
                           <>
                              <img className="w-100" src={item.itemimage.node.sourceUrl} alt={item.itemimage.node.altText} />
                              <Carousel.Caption className="carousel-caption" >
                                 <div className="container">
                                    <div className="row justify-content-center">
                                       <div className="col-lg-8">
                                          <h1 className="display-1 text-white mb-5 animated zoomIn">{item.itemtitle}</h1>
                                          {item.itemlink &&
                                             <a href={item.itemlink.url} className="btn btn-primary py-sm-3 px-sm-4">{item.itemlink.title}</a>}
                                       </div>
                                    </div>
                                 </div>
                              </Carousel.Caption>
                           </>)}
                     </Carousel.Item>
                  )}
                  {/* <Carousel.Item className="carousel-item">
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
            </Carousel.Item> */}
               </Carousel>

            </Suspense>
         </ErrorBoundary>

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