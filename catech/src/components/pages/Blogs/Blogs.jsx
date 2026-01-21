import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

import one from "../../image/WhoWeAre.jpeg";
import two from "../../image/OurMission.jpeg";
import three from "../../image/BirthDay.jpeg";

const blogs = [
  {
    title: "Empowering Innovation Through Digital Solutions",
    excerpt:
      "At Catech, we leverage technology to transform ideas into impactful systems, platforms, and tools...",
    fullContent:
      "Catech Solutions focuses on building innovative digital products that solve real-world problems. Whether it's developing responsive web applications, integrating AI-driven systems, or offering top-tier IT consulting, our mission is to bring efficiency, creativity, and progress to individuals and businesses across Africa and beyond.\n\n" +
      "Our projects range from educational platforms to eCommerce systems, built using cutting-edge tools like React, Node.js, and MongoDB. We also invest in community training, helping upcoming tech enthusiasts learn modern development stacks and digital skills.\n\n" +
      "To learn more, visit our official website at https://catech.co.ke and explore how we can partner on your next big idea.",
    image: one,
  },
  {
    title: "Creative Design That Builds Identity",
    excerpt:
      "From sleek logos to modern brand systems, design is at the heart of Catech’s identity-driven approach...",
    fullContent:
      "We believe that impactful design tells a story. At Catech Graphics, our design philosophy is rooted in clarity, originality, and strategic purpose. Our work spans logos, social media kits, brand style guides, and full brand revamps for businesses that want to stand out and connect deeply with their audience.\n\n" +
      "We use tools like Adobe Illustrator, Photoshop, and Figma to create unique experiences for each client. Whether you're a startup or an established brand, we tailor visual solutions that speak your message.\n\n" +
      "See our portfolio and get started at https://catech.co.ke.",
    image: two,
  },
  {
    title: "Coding the Future: From Students to CEOs",
    excerpt:
      "Our tech mentorship programs aim to transform curious minds into industry leaders through real-world skills...",
    fullContent:
      "Catech actively mentors university students, young developers, and aspiring entrepreneurs through personalized coaching, hackathons, and open-source collaboration. Our focus areas include web development, AI, data science, and system security.\n\n" +
      "We believe in learning by building. That’s why our initiatives involve hands-on projects—from building recommendation systems to eCommerce platforms. Alumni of our mentorship program have gone on to launch startups, win innovation awards, and contribute to real-world impact.\n\n" +
      "Want to learn more or join us? Visit https://catech.co.ke.",
    image: three,
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setModalShow(true);
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#017020" }}>
          Catech Blog Highlights
        </h2>
        <Row>
          {blogs.map((blog, index) => (
            <Col md={4} key={index} className="mb-4" data-aos="fade-up">
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.excerpt}</Card.Text>
                  <Button variant="success" onClick={() => handleShow(blog)}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Read More */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBlog?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedBlog?.fullContent}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            href="https://catech.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Catech
          </Button>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Blogs;
