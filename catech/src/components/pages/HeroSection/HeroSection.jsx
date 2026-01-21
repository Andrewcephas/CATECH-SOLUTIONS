import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import coverPremier from "../../image/BannerWithIzzoh.webp";
import broiler from "../../image/bannerWithPhone2.webp";
import layer from "../../image/webBanner6.webp";
import cover3 from "../../image/bannerWithPhone9.webp";
import cover4 from "../../image/bannerWith👍.webp";
import eggs from "../../image/webBannerG.webp";
import two from "../../image/banner👍4.webp";

const gradientAnimation = `
@keyframes animatedGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

const HeroSection = () => {
  const [height, setHeight] = useState(window.innerWidth < 768 ? 200 : 600);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const styleTag = document.createElement("style");
    styleTag.innerHTML = gradientAnimation;
    document.head.appendChild(styleTag);

    const handleResize = () => {
      setHeight(window.innerWidth < 768 ? 200 : 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(styleTag);
    };
  }, []);

  const slides = [coverPremier, two, eggs, cover3, cover4, broiler, layer];

  return (
    <Carousel interval={4000} controls={false} indicators={true} pause={false}>
      {slides.map((image, idx) => (
        <Carousel.Item key={idx}>
          <div
            style={{
              height: `${height}px`,
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(-45deg, #ff9900, #017020, #f3f3ff, #ff9900)",
              backgroundSize: "400% 400%",
              animation: "animatedGradient 15s ease infinite",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "center",
                zIndex: 2,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            ></div>

            <Container
              data-aos="fade-up"
              style={{
                position: "absolute",
                zIndex: 3,
                bottom: "40px",
                textAlign: "center",
                width: "100%",
                color: "#fff",
              }}
            >
              {/* Optional CTA */}
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
