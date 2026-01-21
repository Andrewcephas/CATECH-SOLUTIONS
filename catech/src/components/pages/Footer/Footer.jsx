import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
  
    // ✅ Basic validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }
  
    const templateParams = {
      email: email,  //
    };

    
  
    emailjs
      .send(
        "CATECHSOLUTIONS", //
        "template_tjfa8i2", //
        templateParams,
        "KNwzuau6d0WE0vkyg" // 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Welcome email sent successfully!");
          setEmail("");
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send email. Try again.");
        }
      );
  };
  

  return (
    <footer
      style={{ backgroundColor: "#017020", fontFamily: "Segoe UI, sans-serif" }}
      className="text-white pt-5 pb-4"
    >
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-md-4">
            <h3 className="fw-bold text-white mb-2">Catech Solutions & Graphics</h3>
            <p className="text-white-50 small mb-0">
              Creative and Technical Solutions in Music, Graphics, and IT
            </p>
          </div>

          <div className="col-md-5">
            <h6
              className="fw-semibold text-uppercase mb-3"
              style={{ color: "#FF9900" }}
            >
              Subscribe to our Newsletter
            </h6>
            <p className="text-white-50 small mb-3">
              Stay updated with our latest services and offerings.
            </p>
            <form className="d-flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-sm fw-bold"
                style={{ backgroundColor: "#FF9900", color: "#000" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="text-center small mt-5 pt-3 border-top"
          style={{ borderTopColor: "#FF9900", color: "#FF9900" }}
        >
          &copy; {new Date().getFullYear()} Catech Solutions & Graphics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
