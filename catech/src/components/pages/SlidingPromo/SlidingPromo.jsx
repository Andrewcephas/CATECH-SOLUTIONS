const SlidingPromo = () => {
  const promoText = `
      Professional Web Design Services • 
      Cutting-edge Graphics & Branding Solutions • 
      Expert IT Support for Businesses • 
      Secure & Scalable Solutions for Growth • 
      Boost Your Online Presence with Catech Solutions • 
      Custom Designs Tailored to Your Needs • 
      Reliable and Fast Service Delivery
    `;

  return (
    <div
      style={{
        backgroundColor: "#000000", // Green from your brand
        color: "#fff", // White text
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontFamily: "Segoe UI, sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
      }}
      className="py-2"
    >
      <div
        style={{
          display: "flex",
          animation: "scroll-left 16s linear infinite",
        }}
      >
        <span className="me-5">{promoText}</span>
        <span className="me-5">{promoText}</span>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SlidingPromo;
