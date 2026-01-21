import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { db } from "../../Database/Configuration";  // Correct import path here
import "./Contact.css";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add data to Firestore "messages" collection
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      // Clear form after successful submission
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2 style={{ color: "#017020" }}>Contact Us</h2>

        <p>
          <FaMapMarkerAlt style={{ color: "#ff9900", marginRight: "8px" }} />
          <strong>Location:</strong> Kisii University, Kisii
        </p>

        <p>
          <FaPhoneAlt style={{ color: "#ff9900", marginRight: "8px" }} />
          <strong>Phone:</strong> +254 793 614 592
        </p>

        <p>
          <FaEnvelope style={{ color: "#ff9900", marginRight: "8px" }} />
          <strong>Email:</strong> ngumbaucephas2@gmail.com
        </p>

        <p>
          <FaClock style={{ color: "#ff9900", marginRight: "8px" }} />
          <strong>Business Hours:</strong> Monday - Saturday: 7:00 AM - 6:00 PM
        </p>
      </div>

      <div className="contact-form">
        <h3 style={{ color: "#017020" }}>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" style={{ backgroundColor: "#017020", color: "#fff" }}>
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-map">
        <iframe
          title="Kisii University Location"
          src="https://www.google.com/maps?q=Kisii+University&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
