import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

// Importing a team member image for the popup
import samuelImage from "../../image/ngumbau.webp"; // Example image from team module

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(true);
  const phoneNumber = "254793614592"; // Remove '+' as WhatsApp API doesn't require it
  const message = encodeURIComponent("Hello Catech, I need ...");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="whatsapp-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>
              X
            </button>
            {/* Embedding the image of the team member */}
            <img
              src={samuelImage} // Image of a team member from the team module
              alt="Samuel Matieka" // Name of the person
              className="popup-image"
            />
            <p className="popup-message">
              Hello I Am Catech Support Assistance, How can we assist you today?
            </p>
          </div>
        </div>
      )}

      {/* The WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp size={30} color="white" />
      </a>
    </>
  );
};

export default WhatsAppButton;
