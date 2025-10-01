
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
       const formRef = useRef();
       const [sending, setSending] = useState(false);
       const [sent, setSent] = useState(false);
       const [error, setError] = useState(null);

       // Replace these with your actual EmailJS values
       const SERVICE_ID = "service_vietzy6";
       const TEMPLATE_ID = "template_tksxwyb";
       const USER_ID = "RteJujcP2BZSf7pgq";

       const handleSubmit = (e) => {
	       e.preventDefault();
	       setSending(true);
	       setError(null);
	       emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
		       .then(
			       (result) => {
				       setSent(true);
				       setSending(false);
			       },
			       (error) => {
				       setError("Failed to send message. Please try again.");
				       setSending(false);
			       }
		       );
       };

       return (
		<div className="container my-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="border rounded p-4 bg-white shadow-sm">
					       <h2 className="text-center mb-4" style={{ fontWeight: 600 }}>
						       Discuss Opportunities
					       </h2>
					       {sent ? (
						       <div className="alert alert-success text-center">Message sent successfully!</div>
					       ) : (
						       <form ref={formRef} onSubmit={handleSubmit}>
							       <div className="mb-3">
								       <input
									       type="text"
									       name="user_name"
									       className="form-control form-control-lg"
									       placeholder="Your name"
									       required
								       />
							       </div>
							       <div className="mb-3">
								       <input
									       type="email"
									       name="user_email"
									       className="form-control form-control-lg"
									       placeholder="Your email"
									       required
								       />
							       </div>
							       <div className="mb-3">
								       <input
									       type="text"
									       name="subject"
									       className="form-control form-control-lg"
									       placeholder="Job opportunity / Project collaboration"
									       required
								       />
							       </div>
							       <div className="mb-4">
								       <textarea
									       name="message"
									       className="form-control form-control-lg"
									       rows="4"
									       placeholder="Tell me about the opportunity or your message"
									       required
								       ></textarea>
							       </div>
							       {error && <div className="alert alert-danger text-center">{error}</div>}
							       <div className="d-grid">
								       <button
									       type="submit"
									       className="btn btn-lg"
									       style={{ background: "#a259fa", color: "#fff", fontWeight: 600 }}
									       disabled={sending}
								       >
									       {sending ? "Sending..." : <>Send Message <span className="ms-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 0-.527-.116l-15 6a.5.5 0 0 0 .019.938l6.433 2.06 2.06 6.433a.5.5 0 0 0 .938.019l6-15a.5.5 0 0 0-.116-.527zM6.832 8.832l-5.053-1.617 13.12-5.248-5.248 13.12-1.617-5.053a.5.5 0 0 0-.302-.302z"/></svg></span></>}
								       </button>
							       </div>
						       </form>
					       )}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
