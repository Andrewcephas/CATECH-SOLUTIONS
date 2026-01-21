import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const messages = [
  "Innovating the Future",
  "CALL / WHATSAPP",
  "+254 793 614 592",
  "Smart. Affordable.",
];

const CustomNavbar = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // New state for hamburger

  // Rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowAnnouncement(scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: "#017020",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          flexWrap: "wrap",
          transition: "all 0.3s ease",
          position: "fixed",
          width: "100%",
          top: showAnnouncement ? "0" : "-60px",
          zIndex: 1040,
        }}
      >
        <div className="d-none d-md-flex" style={{ gap: "15px" }}>
          <a
            href="https://www.tiktok.com/@catechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.instagram.com/catechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/catechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/catechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <div
          className="message-text"
          style={{
            flex: 1,
            fontSize: "20px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginRight: "150px",
            textAlign: "center",
          }}
        >
          {messages[currentMessageIndex]}
        </div>

        <a
          href="/shop"
          className="book-now-button"
          style={{
            position: "absolute",
            right: 10,
            background: "linear-gradient(45deg, #ff9900, #017020)",
            clipPath: "polygon(100% 0%, 100% 100%, 20% 100%, 0% 50%, 20% 0%)",
            color: "#fff",
            padding: "5px 20px",
            fontWeight: "bold",
            fontSize: "23px",
            top: "50%",
            transform: "translateY(-50%)",
            textDecoration: "none",
          }}
        >
          BOOK NOW
        </a>
      </div>

      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#f3f3ff",
          height: scrolled ? "70px" : "90px",
          transition: "height 0.3s ease",
          position: "fixed",
          width: "100%",
          top: showAnnouncement ? "60px" : "0",
          zIndex: 1030,
        }}
        variant="dark"
        className="py-3 custom-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={process.env.PUBLIC_URL + "/CATECH LOGO.png"}
              alt="CATECH Logo"
              style={{
                width: scrolled ? "80px" : "100px",
                height: scrolled ? "50px" : "70px",
                objectFit: "cover",
                transition: "all 0.3s ease",
              }}
            />
          </Navbar.Brand>

          {/* Hamburger */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "none" }}
            className={`custom-toggler ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                { name: "Home", link: "/" },
                { name: "order", link: "/shop" },
                { name: "About Us", link: "/about" },
                { name: "Team", link: "/team" },
                { name: "Blog", link: "/blog" },
                { name: "Contact", link: "/contact" },
                { name: "Gallery", link: "/gallery" },
              ].map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.link}
                  className="mx-2 nav-hover"
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Poppins, sans-serif",
                    color: "#017020",
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push page content */}
      <div style={{ height: "150px" }}></div>

      {/* Inline mobile responsive tweaks */}
      <style>
        {`
          @media (max-width: 767px) {
            .message-text {
              text-align: left;
              margin-right: 0;
            }
            .book-now-button {
              position: relative;
              margin-left: auto;
            }
          }
          @media (min-width: 768px) {
            .message-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomNavbar;
