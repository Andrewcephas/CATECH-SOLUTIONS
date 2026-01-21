import React from "react";
import heroImage from "../../image/banner👍8.webp";  // Retained image import
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTools } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div
          className="col-md-6 d-flex flex-column align-items-start text-md-start pe-md-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h1 className="display-5 fw-bold mb-4" style={{ color: "#017020" }}>
              Why Choose Us?
            </h1>
            <h4 className="d-flex align-items-center gap-2">
              <FaCheckCircle style={{ color: "#FF9900" }} /> Best Quality Web & Graphic Design
            </h4>
            <p>
              We provide exceptional design services tailored to your needs. Whether it’s web design, branding, or graphics, our solutions are crafted to help your business stand out.
            </p>
            <h4 className="d-flex align-items-center gap-2 mt-4">
              <FaTools style={{ color: "#FF9900" }} /> Technical Support & Assistance
            </h4>
            <p>
              Our expert team offers professional technical support to ensure that your web and graphic design projects are flawless and fully functional.
            </p>

            {/* Shop Now Button */}
            <Link
              to="/shop"
              className="btn"
              style={{
                backgroundColor: "#FF9900",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="col-md-6 mb-4 mb-md-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={heroImage} // Retained image
            alt="Catech Services"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
