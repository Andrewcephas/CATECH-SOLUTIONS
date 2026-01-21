import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import kush from "../../image/kush.webp";
import itech from "../../image/iTech.webp";
import zeddie from "../../image/ZEDEKIAH ELECTRONIC.webp";

import "./OurPartners.css";

const partners = [
  { src: itech, alt: "Itech Company Logo" },
  { src: kush, alt: "Kush Data Logo" },
  { src: zeddie, alt: "Zedekiah Electronic Logo" },
];

const OurPartners = () => {
  return (
    <Container fluid className="partners-container my-5">
      <h2 className="partners-heading">Our Partners</h2>
      <Carousel
        indicators={false}
        controls={false}
        interval={2500}
        pause={false}
        wrap={true}
      >
        {partners.map((partner, idx) => (
          <Carousel.Item key={idx}>
            <div className="partner-item">
              <img
                src={partner.src}
                alt={partner.alt}
                className="partner-img"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OurPartners;
