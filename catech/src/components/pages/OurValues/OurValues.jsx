import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaLightbulb, FaBullseye } from "react-icons/fa";

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconStyle = { color: "#017020" };

  return (
    <section className="py-5" style={{ backgroundColor: "#f0fff5" }}>
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up" style={{ color: "#017020" }}>
          Our Core Values
        </h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 shadow rounded-4 p-4 border-0">
              <div className="text-center mb-3">
                <FaUsers size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">Client-Centered Innovation</h5>
              <p className="text-center">
                We prioritize our clients by crafting tailored tech and design solutions that meet real needs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 shadow rounded-4 p-4 border-0">
              <div className="text-center mb-3">
                <FaBullseye size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">Purpose-Driven Execution</h5>
              <p className="text-center">
                Everything we build, design, or develop is driven by a deeper purpose — empowering brands and people.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card h-100 shadow rounded-4 p-4 border-0">
              <div className="text-center mb-3">
                <FaLightbulb size={40} style={iconStyle} />
              </div>
              <h5 className="text-center fw-bold">Creative Excellence</h5>
              <p className="text-center">
                We believe the best ideas come from fearless creativity, collaborative spirit, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
