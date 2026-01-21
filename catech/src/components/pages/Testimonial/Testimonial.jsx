import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container } from "react-bootstrap";
import one from "../../image/ngumbau.webp";
import two from "../../image/pendo.webp";
import three from "../../image/kimutai.webp";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Catech Solutions has been a key partner in helping us streamline our network systems and boost our productivity. Their team provides top-notch support, and their vision for technology has transformed our operations.",
      name: "Andrew Ngumbau",
      location: "CEO & Networking Specialist",
      image: one,
    },
    {
      quote:
        "The frontend development services provided by Catech Solutions are exceptional. They ensured our web platforms are intuitive, user-friendly, and visually appealing. I highly recommend them to anyone in need of professional website development.",
      name: "Ruth Pendo",
      location: "Frontend Developer",
      image: two,
    },
    {
      quote:
        "Catech's backend solutions have helped us improve system efficiency and security. Their team is highly skilled in developing robust and secure systems that ensure smooth operations and data protection.",
      name: "Kimutai Justus",
      location: "Backend Developer",
      image: three,
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#ff9900" }}>
        Testimonials
      </h2>

      <Carousel interval={5000} controls indicators pause={false} fade>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "2rem",
                textAlign: "center",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #FF9900",
                  marginBottom: "1rem",
                }}
              />
              <h5 style={{ color: "#ff9900", fontWeight: "bold" }}>
                {testimonial.name}
              </h5>
              <p className="text-muted">{testimonial.location}</p>
              <p style={{ fontStyle: "italic", color: "#333" }}>
                "{testimonial.quote}"
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
