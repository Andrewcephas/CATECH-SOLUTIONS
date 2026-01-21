import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { db } from "../../Database/Configuration";
import { collection, addDoc } from "firebase/firestore";

const counties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa",
  "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
  "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos",
  "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a",
  "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
  "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia",
  "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot",
];

const AgentFarmerBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    county: "Kisii",
    town: "",
    interest: "Client",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "getintouch"), formData);
      setStatusMessage("Your request has been received. We'll get back to you shortly.");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setShowStatusModal(true);
      handleClose();
    }
  };
  

  return (
    <>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: "#ff9900", color: "#fff", padding: "10px 0", textAlign: "center" }}>
        📢 Special Offer: Partner with Catech & Get 20% Off Your First Project!
      </div>

      <div
        className="text-white py-5"
        style={{ background: "linear-gradient(135deg, #017020, #000)" }}
      >
        <Container className="text-center">
          <h2 data-aos="fade-up">Partner with</h2>
          <h1 data-aos="fade-up" data-aos-delay="200">Catech Solutions & Graphics</h1>

          <Row className="mt-4">
            <Col md={6} data-aos="fade-right" className="p-4 bg-dark bg-opacity-50 rounded">
              <h3>TECH PARTNERS</h3>
              <p>
                Individuals or organizations who work with us on system development,
                AI solutions, or design projects. We provide collaboration, code support,
                and shared tools for maximum impact.
              </p>
            </Col>

            <Col md={6} data-aos="fade-left" className="p-4 bg-dark bg-opacity-50 rounded">
              <h3>OUR CLIENTS</h3>
              <p>
                Clients who hire Catech for web development, branding, security systems,
                research, or automation. We deliver tailored tech and creative solutions.
              </p>
            </Col>
          </Row>

          <Button
            variant="light"
            className="mt-4 fw-bold border-0"
            data-aos="zoom-in"
            onClick={handleShow}
            style={{ backgroundColor: "#ff9900", color: "#fff" }}
          >
            Get in Touch
          </Button>
        </Container>

        {/* Form Modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Let’s Connect</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>County</Form.Label>
                <Form.Select name="county" value={formData.county} onChange={handleChange} required>
                  {counties.map((county, index) => (
                    <option key={index} value={county}>{county}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Town</Form.Label>
                <Form.Control type="text" name="town" value={formData.town} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>You're Interested As</Form.Label>
                <Form.Select name="interest" value={formData.interest} onChange={handleChange} required>
                  <option value="Client">Client</option>
                  <option value="Tech Partner">Tech Partner</option>
                </Form.Select>
              </Form.Group>

              <Button variant="dark" style={{ backgroundColor: "#017020", border: "none" }} className="w-100" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Status Modal */}
        <Modal show={showStatusModal} onHide={() => setShowStatusModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>{statusMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShowStatusModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AgentFarmerBanner;
