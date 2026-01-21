import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "./Services.css";
import broiler from "../../image/bannerWithPhone7.webp";  // Retaining the image
import layer from "../../image/bannerWithPhone.webp";  // Retaining the image
import improved from "../../image/UI-UX.webp";  // Retaining the image

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2
          className="text-center mb-4"
          style={{ color: "#017020" }}
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <Row>
          {/* Service 1 - Web Design */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "100%",
                    maxHeight: "180px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={improved}
                    alt="Web Design"
                    className="img-fluid"
                    style={{
                      maxHeight: "180px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title style={{ color: "#017020" }}>App Develop..</Card.Title>
                <Card.Text>
                  We offer professional web design services to create beautiful and functional websites that elevate your brand online.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    style={{
                      backgroundColor: "#FF9900",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "45px",
                      lineHeight: "1",
                      fontSize: "1rem",
                    }}
                    className="hero-btn"
                   href="/shop"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 - Graphics Design */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <img
                  src={broiler}
                  alt="Graphics Design"
                  className="img-fluid"
                  style={{
                    maxHeight: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ color: "#017020" }}>Graphics Design</Card.Title>
                <Card.Text>
                  We specialize in creating impactful brand identities, logos, and marketing materials that help businesses stand out.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    style={{
                      backgroundColor: "#FF9900",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "45px",
                      lineHeight: "1",
                      fontSize: "1rem",
                    }}
                    className="hero-btn"
                    href="/shop"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 - Tech Support */}
          <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <Card className="h-100 border-0 shadow text-center p-4">
              <div className="mx-auto">
                <img
                  src={layer}
                  alt="Tech Support"
                  className="img-fluid"
                  style={{
                    maxHeight: "180px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title style={{ color: "#017020" }}>Tech Support</Card.Title>
                <Card.Text>
                  Our expert IT support team offers troubleshooting, system management, and network solutions to keep your business running smoothly.
                </Card.Text>
                <div className="text-center mt-3">
                  <Button
                    style={{
                      backgroundColor: "#FF9900",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "45px",
                      lineHeight: "1",
                      fontSize: "1rem",
                    }}
                    className="hero-btn"
                   href="/shop"
                  >
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
