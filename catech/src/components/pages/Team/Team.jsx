import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import one from "../../image/ngumbau.webp";  // Going up two levels to access the image
import two from "../../image/pendo.webp";  // Going up two levels to access the image
import three from "../../image/kimutai.webp";  // Going up two levels to access the image
import four from "../../image/mwangi.webp";  // Going up two levels to access the image
import five from "../../image/lucy.webp";  // Going up two levels to access the image
import six from "../../image/isaac.webp";  // Going up two levels to access the image
import seven from "../../image/zeddie.webp";  // Going up two levels to access the image
import eight from "../../image/waema.webp";  // Going up two levels to access the image
import nine from "../../image/yvonne.webp";  // Going up two levels to access the image
import Ten from "../../image/apollo.jpg";  // Going up two levels to access the image

const teamMembers = [
  {
    name: "Andrew Ngumbau",
    title: "CEO & Networking Specialist",
    image: one,
    description: "Andrew leads the team, setting the vision for Catech. He also ensures that all networks and systems run smoothly, keeping the business connected and secure.",
  },
  {
    name: "Kimutai Justus",
    title: "Backend Developer",
    image: three,
    description: "Kimutai develops the core systems that power Catech’s websites and applications, ensuring efficiency and security.",
  },
  {
    name: "Ruth Pendo",
    title: "Frontend Developer",
    image: two,
    description: "Ruth ensures Catech’s websites and apps look great and work smoothly, focusing on user experience and performance.",
  },
  {
    name: "Lucia Katheu",
    title: "UI/UX Designer",
    image: five,
    description: "Lucia crafts intuitive and engaging digital experiences, ensuring that users enjoy seamless interactions with Catech’s products.",
  },
  {
    name: "Isaac Mukungi",
    title: "Cybersecurity Expert",
    image: six,
    description: "Isaac protects Catech’s systems from cyber threats, ensuring data security and risk management.",
  },
  {
    name: "Mwangi Antony",
    title: "Data Analyst",
    image: four,
    description: "Mwangi turns raw data into valuable insights, helping the team make data-driven decisions and optimize performance.",
  },
  {
    name: "Vincent Zedekiah",
    title: "Hardware Expert",
    image: seven,
    description: "Zedekiah manages computer hardware repairs, troubleshooting, and maintenance for efficient operations.",
  },
  {
    name: "Francis Waema",
    title: "Data Statistician",
    image: eight,
    description: "Francis specializes in statistical modeling and data interpretation to help businesses understand trends and forecasts.",
  },
  {
    name: "Yvonne Ndanu",
    title: "Brand Influencer",
    image: nine,
    description: "Yvonne builds Catech’s online presence, engaging with audiences through social media and digital campaigns.",
  },{
    name: "Apollo Muraguri",
    title: "Software Developer",
    image: Ten,
    description: "Apollo  develops and maintains Catech’s digital platforms, crafting efficient, user-friendly software solutions that enhance the company’s online presence and user engagement.",
  }
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="team" className="team py-5" style={{ backgroundColor: "#F3F3F3" }}>
      <Container>
        <div className="main-text text-center mb-5">
          <h1>Meet Our Team</h1>
          <span style={{ color: "#890010" }}>Professional Experts at CATECH Solutions</span>
        </div>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={4} sm={6} key={index} className="mb-4" data-aos="fade-up">
              <div className="team-card border-0 shadow text-center">
                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mx-auto mt-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <div className="team-info mt-3">
                  <h3>{member.name}</h3>
                  <p className="role" style={{ color: "#890010" }}>{member.title}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;

// git init
// git add .
// git commit -m "Push version 2 - React upgrade"
// git push -u origin main --force


