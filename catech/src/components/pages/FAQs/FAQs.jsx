import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const faqData = [
    {
      question: "What is Engoko?",
      answer:
        "Engoko is a leading distributor of high-quality poultry in Kenya.",
    },
    {
      question: "Where are you located?",
      answer: "We are based in Mashauri, Kisii Town, Kenya.",
    },
    {
      question: "What types of poultry do you offer?",
      answer: "We offer high-quality, disease-resistant dual-purpose chickens.",
    },
    {
      question: "How can I become an agent?",
      answer:
        "You can apply to become an agent by filling out our application form on the Contact page.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes, we offer extensive training and support to our farmers and agents.",
    },
    {
      question: "How long does it take for the chickens to mature?",
      answer:
        "Males reach market weight in 3 months, while females start laying eggs within 5 months.",
    },
    {
      question: "What do the chickens eat?",
      answer:
        "Our chickens are fed a balanced diet to ensure maximum growth and productivity.",
    },
    {
      question: "Can I visit your farm?",
      answer:
        "Yes! You can schedule a visit by contacting us through our Contact page.",
    },
    {
      question: "Do you deliver chickens?",
      answer: "Yes, we provide delivery services for bulk orders.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us via phone, email, or visit our office in Kisii Town.",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" data-aos="fade-up">
        Frequently Asked Questions
      </h2>
      <Row>
        {faqData.map((faq, index) => (
          <Col md={6} key={index} className="mb-3" data-aos="fade-up">
            <Accordion>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FAQs;
