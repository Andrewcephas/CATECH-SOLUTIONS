import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

import one from "../../image/WhoWeAre.jpeg";
import two from "../../image/OurMission.jpeg";
import three from "../../image/BirthDay.jpeg";
import four from "../../image/BannerWithIzzoh.jpeg";
import five from "../../image/ui-ux.jpeg";
import six from "../../image/webBanner1.jpeg";
import seven from "../../image/Choose-Catech.jpeg";
import eight from "../../image/bannerWith👍.jpeg";
import nine from "../../image/CreativeDesign1.jpeg";
import ten from "../../image/bannerWithPhone1.jpeg";
import eleven from "../../image/mothers.jpeg";

const images = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="gallery-section py-5">
      <Container>
        <h2 className="text-center mb-5 catech-heading">Our Gallery</h2>
        <Row>
          {images.map((src, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              className="mb-4 d-flex justify-content-center"
              data-aos="zoom-in"
            >
              <div className="gallery-img-wrapper">
                <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
