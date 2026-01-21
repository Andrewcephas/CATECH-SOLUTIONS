import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Row, Col } from "react-bootstrap";

const ImageWithText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Row
        className="g-0 align-items-stretch"
        style={{ minHeight: "400px" }}
      >
        {/* Image Section */}
        <Col
          md={6}
          className="d-flex align-items-center"
          data-aos="fade-right"
          style={{ overflow: "hidden" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/CATECH LOGO.PNG`}
            alt="Catech Solutions and Graphics"
            className="img-fluid w-100 h-100"
            style={{
              objectFit: "cover",
              minHeight: "100%",
            }}
          />
        </Col>

        {/* Text Section */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center text-white p-4 p-md-5"
          data-aos="fade-left"
          style={{
            backgroundColor: "#017020",
          }}
        >
          <h2 className="mb-3">About Catech Solutions & Graphics</h2>
          <p className="mb-3">
            At Catech Solutions and Graphics, we bring creativity and technology
            together to provide top-notch services in design, system development,
            IT consultancy, and media production.
          </p>
          <p className="mb-4">
            From branding and digital art to custom systems and multimedia
            solutions, we are passionate about helping individuals and businesses
            thrive through innovation.
          </p>
          <button
            className="btn text-white"
            style={{ backgroundColor: "#ff9900", borderColor: "#ff9900" }}
          >
            Learn More
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ImageWithText;
