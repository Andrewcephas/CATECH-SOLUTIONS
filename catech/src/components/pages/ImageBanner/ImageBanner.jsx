import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../image/banner👍1.jpg";

const ImageBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onClick={() => navigate("/about")}
    >
      {/* Background Image */}
      <img
        src={banner}
        alt="About Catech"
        style={{
          width: "100%",
          height: "300px",
          display: "block",
          objectFit: "cover", // ensures image fits well
        }}
      />
  
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          // background: "linear-gradient(to top, rgba(255, 153, 0, 0.8) 0%, rgba(255, 153, 0, 0.1) 50%)",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            color: "#ff9900",
            fontSize: "3rem",
            fontWeight: "bolder",
            textShadow: "5px 0px 4px rgba(255, 255, 255, 0.9)",
            margin: 0,
          }}
        >
          About the Company
        </h4>
      </div>
    </div>
  );
  
};

export default ImageBanner;
