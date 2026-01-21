import React from "react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Video Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div
            className="ratio ratio-16x9 rounded-4 shadow"
            style={{ maxHeight: "500px", overflow: "hidden" }}
          >
            <iframe
              src="https://www.youtube.com/embed/5QO7usnm9q0?autoplay=1&loop=1&mute=1&playlist=5QO7usnm9q0"
              title="Catech Solutions & Graphics Introduction Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></iframe>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-6 d-flex flex-column align-items-start text-md-start pe-md-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h3
              style={{
                color: "#017020", // Catech's green color
              }}
              className="display-5 fw-bold mb-4"
            >
              Our Mission
            </h3>
            <p>
              Catech Solutions & Graphics provides creative and technical
              solutions that transform brands through Web Design, Graphic Design,
              and Brand Identity. Our aim is to empower businesses by helping
              them stand out with compelling digital and graphic designs.
            </p>
            <h3
              style={{
                color: "#017020", // Catech's green color
              }}
              className="display-5 fw-bold mb-4"
            >
              Our Vision
            </h3>
            <p>
              Our vision is to become the leading provider of innovative,
              top-quality design services that enable businesses to grow and
              thrive in a dynamic digital world.
            </p>
            <Link
              to="/about"
              className="btn"
              style={{
                backgroundColor: "#FF9900", // Catech's orange color
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textDecoration: "none",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#017020")} // Hover effect for CTA button
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FF9900")} // Reverts on mouse out
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
