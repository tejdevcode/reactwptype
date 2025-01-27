import Pagebanner from "../components/Pagebanner"
import { useState, FormEvent, useEffect } from "react"
import { QuoteFormData, QuoteErrors } from "../utils/formtypes";
import toast from 'react-hot-toast';


const Quotepage = () => {

   const [formData, setFormData] = useState<QuoteFormData>({
      gname: "",
      gemail: "",
      gmobile: "",
      gservice: "",
      gmessage: "",
   });

   const [errors, setErrors] = useState<QuoteErrors>({});

   const validateForm = (): boolean => {
      const newErrors: QuoteErrors = {};

      if (!formData.gname.trim()) {
         newErrors.gname = "Name is required";
      }

      if (!formData.gemail.trim()) {
         newErrors.gemail = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.gemail)) {
         newErrors.gemail = "Email is invalid";
      }

      if (!formData.gmobile.trim()) {
         newErrors.gmobile = "Mobile number is required";
      }

      if (!formData.gservice.trim()) {
         newErrors.gservice = "Service Type is required";
      }

      if (!formData.gmessage.trim()) {
         newErrors.gmessage = "Message is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateForm()) {
         console.log("Form submitted with data:", formData);
         toast.success("Your message has been sent");
         // Reset form after successful submission
         setFormData({
            gname: "",
            gemail: "",
            gmobile: "",
            gservice: "",
            gmessage: "",
         });
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      // Clear error when user types
      if (errors[id as keyof QuoteFormData]) {
         setErrors(prev => ({ ...prev, [id]: undefined }));
      }
   };
   return (
      <>
         <Pagebanner title="Free Quote" shorttitle={"Free Quote"} />
         <div className="container-fluid py-5">
            <div className="container">
               <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxHeight: 500 }}>
                  <p className="fs-5 fw-bold text-primary">Free Quote</p>
                  <h1 className="display-5 mb-5">Get A Free Quote</h1>
               </div>
               <div className="row justify-content-center">
                  <div className="col-lg-7">
                     <form className="bg-light rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s" onSubmit={handleSubmit}>
                        <div className="row g-3">
                           <div className="col-sm-6">
                              <div className="form-floating">
                                 <input type="text"
                                    className={`form-control border-0 ${errors.gname ? 'is-invalid' : ''}`} id="gname"
                                    placeholder="Your Name"
                                    value={formData.gname}
                                    onChange={handleChange} />
                                 <label htmlFor="gname">Your Name</label>
                                 {errors.gname && <div className="invalid-feedback">{errors.gname}</div>}
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-floating">
                                 <input type="email" id="gemail"
                                    className={`form-control border-0 ${errors.gemail ? 'is-invalid' : ''}`}
                                    placeholder="Your Email"
                                    value={formData.gemail}
                                    onChange={handleChange} />
                                 <label htmlFor="gemail">Your Email</label>
                                 {errors.gemail && <div className="invalid-feedback">{errors.gemail}</div>}
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-floating">
                                 <input type="text" id="gmobile"
                                    className={`form-control border-0 ${errors.gmobile ? 'is-invalid' : ''}`}
                                    placeholder="Your Mobile Number"
                                    value={formData.gmobile}
                                    onChange={handleChange} />
                                 <label htmlFor="gmobile">Your Mobile</label>
                                 {errors.gmobile && <div className="invalid-feedback">{errors.gmobile}</div>}
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-floating">
                                 <input type="text" id="gservice"
                                    className={`form-control border-0 ${errors.gservice ? 'is-invalid' : ''}`}
                                    placeholder="Your Service Type"
                                    value={formData.gservice}
                                    onChange={handleChange} />
                                 <label htmlFor="gservice">Service Type</label>
                                 {errors.gservice && <div className="invalid-feedback">{errors.gservice}</div>}
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="form-floating">
                                 <textarea placeholder="Leave a message here" id="gmessage" style={{ height: 100 }}
                                    className={`form-control border-0 ${errors.gmessage ? 'is-invalid' : ''}`}
                                    value={formData.gmessage}
                                    onChange={handleChange}
                                 ></textarea>
                                 <label htmlFor="gmessage">Message</label>
                                 {errors.gmessage && <div className="invalid-feedback">{errors.gmessage}</div>}
                              </div>
                           </div>
                           <div className="col-12 text-center">
                              <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Quotepage