import Pagebanner from "../components/Pagebanner"
import { useState, FormEvent } from "react";
import { FormData, FormErrors } from "../utils/formtypes";

const Contactpage = () => {
   const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const [errors, setErrors] = useState<FormErrors>({});

   const validateForm = (): boolean => {
      const newErrors: FormErrors = {};

      if (!formData.name.trim()) {
         newErrors.name = "Name is required";
      }

      if (!formData.email.trim()) {
         newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Email is invalid";
      }

      if (!formData.subject.trim()) {
         newErrors.subject = "Subject is required";
      }

      if (!formData.message.trim()) {
         newErrors.message = "Message is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateForm()) {
         console.log("Form submitted with data:", formData);
         // Reset form after successful submission
         setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
         });
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
      // Clear error when user starts typing
      if (errors[id as keyof FormErrors]) {
         setErrors(prev => ({ ...prev, [id]: undefined }));
      }
   };
   return (
      <>
         <Pagebanner title="Contact Us" shorttitle={"Contact"} />
         <div className="container-xxl py-5">
            <div className="container">
               <div className="row g-5">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                     <p className="fs-5 fw-bold text-primary">Contact Us</p>
                     <h1 className="display-5 mb-5">If You Have Any Query, Please Contact Us</h1>
                     <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                     <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                           <div className="col-md-6">
                              <div className="form-floating">
                                 <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                 />
                                 <label htmlFor="name">Your Name</label>
                                 {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-floating">
                                 <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                 />
                                 <label htmlFor="email">Your Email</label>
                                 {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="form-floating">
                                 <input
                                    type="text"
                                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                    id="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                 />
                                 <label htmlFor="subject">Subject</label>
                                 {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="form-floating">
                                 <textarea
                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                    placeholder="Leave a message here"
                                    id="message"
                                    style={{ height: 100 }}
                                    value={formData.message}
                                    onChange={handleChange}
                                 />
                                 <label htmlFor="message">Message</label>
                                 {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                              </div>
                           </div>
                           <div className="col-12">
                              <button className="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: 450 }}>
                     <div className="position-relative rounded overflow-hidden h-100">
                        <iframe className="position-relative w-100 h-100"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                           frameBorder="0" style={{ minHeight: 450, border: 0 }} aria-hidden="false"
                           tabIndex={0}>
                        </iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      </>
   )
}

export default Contactpage