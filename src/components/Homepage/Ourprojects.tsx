import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { useEffect, useRef, createRef, useCallback } from "react";
//import Isotope from "isotope-layout"

import { useState } from "react"
import fetchData from "../../api/fetchData";

const resource: any = fetchData(`${process.env.QL_query}=query projects { page(id: "projects", idType: URI) { id slug pageDiscription { pageHeading { ... on PageDiscriptionPageHeadingPageHeadingLayout { pageSubTitle pageTitle } } } projects{ projectsTabTitles{ projectCat } projectCard{ prcardImage{ node{ sourceUrl altText } } prcardTitle prcardLink{ title url target } projectStatus } } } }`);

interface Projects {
   "pageDiscription"?: {
      "pageHeading"?: [
         {
            "pageSubTitle"?: string | undefined,
            "pageTitle"?: string | undefined,
         }
      ]
   },
   "projects"?: {
      "projectsTabTitles"?: [{
         "projectCat"?: string | undefined,
      }],
      projectCard?: ProjectCard[] | undefined;
   }
}

interface ProjectCard {
   prcardImage?: {
      node: {
         sourceUrl?: string;
         altText: string;
      };
   };
   prcardTitle?: string;
   projectStatus?: string[] | undefined;
   prcardLink?: {
      title?: string;
      url?: string;
      target?: string;
   };
}




const Ourprojects = () => {
   const projectfilter = ['*', 'first', 'second']
   const duration = ['0.1s', '0.3s', '0.5s', '0.1s', '0.3s', '0.5s']
   const [projectsdata, setProjectsdata] = useState<Projects>();
   const [loading, setLoading] = useState<boolean>(false);
   const [selectedCategory, setSelectedCategory] = useState<number>(0);
   const [tabdata, setTabdata] = useState('*');
   let tabingdata: ProjectCard[] | undefined = tabdata === '*' ? projectsdata?.projects?.projectCard : projectsdata?.projects?.projectCard?.filter((item) => item.projectStatus && item.projectStatus[0] === tabdata);
   //console.log(selectedCategory)

   const cathandelr = (i: number): void => {
      //if (i !== selectedCategory) { setSelectedCategory(i) };
      setTabdata(projectfilter[i]);
   };
   //console.log(tabdata)
   /* const filteredTabs = () => {
      const filteredProjects = projectsdata?.projects?.projectCard?.filter(tab => {
         tab.projectStatus && tab.projectStatus.length > 0 &&
         (selectedCategory === '*' || tab.projectStatus[0] === selectedCategory);
      });
      setTabdata(filteredProjects || []);
   }; */
   async function pagedata() {
      const compdata = await resource;
      setProjectsdata(compdata.data.page);
      setLoading(true);
   }
   //console.log(projectsdata)
   /* useEffect(() => {filteredTabs()}, [selectedCategory]); */

   useEffect(() => {
      pagedata();
      const $ = window.jQuery;

      setTimeout(() => {
         if (loading) {
            /* var portfolioIsotope = $('.portfolio-container').isotope({
               itemSelector: '.portfolio-item',
               layoutMode: 'fitRows'
            });*/
            $('#portfolio-flters li').on('click', function (this: any) {
               $("#portfolio-flters li").removeClass('active');
               $(this).addClass('active');

               /* portfolioIsotope.isotope({ filter: $(this).data('filter') }); */
            });

            /* if (window !== undefined) {
               var iso = new Isotope('.portfolio-container', {
                  itemSelector: '.portfolio-item',
                  layoutMode: 'fitRows'
               });
    
               var filtersElem: any = document.querySelector('#portfolio-flters');
               filtersElem.addEventListener('click', function (event: any) {
    
                  var filterValue = event.target.getAttribute('data-filter');
    
                  iso.arrange({ filter: filterValue });
               });
            } */
         }
      }, 2000)
   }, [loading]);
   return (
      <div className="container-xxl py-5">
         <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
               <p className="fs-5 fw-bold text-primary">{projectsdata?.pageDiscription?.pageHeading?.[0]?.pageSubTitle ?? "Our Projects"}</p>
               <h1 className="display-5 mb-5">{projectsdata?.pageDiscription?.pageHeading?.[0]?.pageTitle ?? "Some Of Our Wonderful Projects"}</h1>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-12 text-center">
                  <ul className="list-inline rounded mb-5" id="portfolio-flters">
                     {projectsdata?.projects?.projectsTabTitles?.map((item, i) =>
                        <li className={'mx-2 ' + (i === 0 ? 'active' : '')} data-filter={projectfilter[i]} key={i}
                           onClick={() => cathandelr(i)}>
                           {item?.projectCat ?? 'All'}</li>
                     )}
                  </ul>
               </div>
            </div>
            <div className="row g-4 portfolio-container">
               {tabingdata?.map((item, i) =>
                  <div className={"col-lg-4 col-md-6 portfolio-item wow fadeInUp " + item?.projectStatus?.[0]} data-wow-delay={duration[i]} key={i}>
                     <div className="portfolio-inner rounded">
                        <img className="img-fluid" src={item?.prcardImage?.node?.sourceUrl} alt={item?.prcardImage?.node?.altText} />
                        <div className="portfolio-text">
                           <h4 className="text-white mb-4">{item?.prcardTitle}</h4>
                           <div className="d-flex">
                              <a className="btn btn-lg-square rounded-circle mx-2" href={item?.prcardImage?.node?.sourceUrl} data-lightbox="portfolio"><FaEye style={{ width: 18, height: 16 }} /></a>
                              <a className="btn btn-lg-square rounded-circle mx-2" href={item?.prcardLink?.url}><FaLink style={{ width: 16, height: 16 }} /></a>
                           </div>
                        </div>
                     </div>
                  </div>
               ) ?? <div className={"col-lg-4 col-md-6 portfolio-item wow fadeInUp"}>
                     <div className="portfolio-inner rounded">
                        <div className="portfolio-text">
                           <h4 className="text-white mb-4"></h4>
                           <div className="d-flex">
                              <a className="btn btn-lg-square rounded-circle mx-2" href="#" data-lightbox="portfolio"><FaEye style={{ width: 18, height: 16 }} /></a>
                              <a className="btn btn-lg-square rounded-circle mx-2" href={'#'}><FaLink style={{ width: 16, height: 16 }} /></a>
                           </div>
                        </div>
                     </div>
                  </div>}
            </div>
         </div>
      </div>
   )
}

export default Ourprojects