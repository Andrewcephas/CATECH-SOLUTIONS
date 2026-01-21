import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

// ✅ Images are two levels up then into image/
import one from "../../image/WhoWeAre.jpeg";
import two from "../../image/OurMission.jpeg";
import three from "../../image/creativeDesign.jpg";

// ✅ OurValues is one folder up (to pages), then into OurValues/
import OurValues from "../OurValues/OurValues";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* About Catech */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <h2 style={{ color: "#017020" }} className="fw-bold">
              Who We Are
            </h2>
            <p>
              Catech Solutions & Graphics is a leading provider of creative and
              technical solutions in music, graphic design, and IT. We empower
              businesses and individuals by offering expert services that bridge
              the gap between creativity and technology. Our team is driven by a
              passion for delivering impactful design and seamless IT solutions
              that solve real-world problems. Whether it’s creating unique brand
              identities, providing top-tier graphic design, or ensuring secure
              and efficient IT systems, we are committed to excellence and
              customer satisfaction.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={one}
              alt="About Catech"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Specialty Banner */}
        <div
          className="text-white text-center py-5"
          style={{ background: "linear-gradient(to right, #017020, #FF9900)" }}
          data-aos="fade-up"
        >
          <Container>
            <h2 className="fw-bold">Our Speciality</h2>
            <p className="">
              At Catech, we specialize in combining creativity with technology
              to offer comprehensive solutions. From building impactful brands
              to ensuring secure and efficient IT infrastructures, our services
              are designed to meet the unique needs of each client.
            </p>
            <Row className="mt-4">
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={500} duration={4} separator="," />+
                </h3>
                <p>Clients Served</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={100} duration={4} separator="," />+
                </h3>
                <p>Projects Completed</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={9} duration={4} separator="," />+
                </h3>
                <p>Team Members</p>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <h3 className="fw-bold">
                  <CountUp start={0} end={10} duration={4} separator="," />
                </h3>
                <p>Countries Served</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Our Mission */}
        <Row className="align-items-center flex-md-row-reverse my-5">
          <Col md={6} data-aos="fade-left">
            <h2 style={{ color: "#017020" }} className="fw-bold">
              Our Mission
            </h2>
            <p>
              Our mission is to provide innovative solutions in music, design,
              and IT that enable our clients to thrive in a dynamic world.
              We focus on creating lasting impacts through tailored services
              that align with our clients' objectives. We believe in continuous
              improvement, ensuring our services are always at the forefront of
              creativity and technology.
            </p>
          </Col>
          <Col md={6} data-aos="fade-right">
            <img
              src={two}
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Our Impact */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <h2 style={{ color: "#017020" }} className="fw-bold">
              Our Impact
            </h2>
            <p>
              Catech has transformed the way businesses connect with their
              audience through creative graphic design and robust IT solutions.
              We’ve helped numerous businesses establish strong digital
              identities, optimize their systems, and secure their networks.
              Our expertise extends across various industries, contributing to
              a more connected, innovative, and secure world.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src={three}
              alt="Our Impact"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
        <OurValues />
      </Container>
    </section>
  );
};

export default About;
