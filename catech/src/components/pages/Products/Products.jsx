import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { db } from "../../Database/Configuration";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CartHeader from "../CartHeader/CartHeader";
import oneday from "../../image/webBanner.jpeg";  // Correct image import
import onemonth from "../../image/bannerWithPhone.webp";  // Correct image import
import twomonth from "../../image/chooseCatech.webp";  // Correct image import
import layers from "../../image/banner👍.webp";  // Correct image import
import starterfeed from "../../image/creativeDesign.jpg";  // Correct image import

// Catech Solutions and Graphics Products (Updated with your images)
const products = [
  {
    name: "Static Website Development",
    description: "Custom websites designed for businesses and personal branding.",
    price: "KSh 15,000 - 25,000/=",
    image: oneday,  // Image associated with the service
  }, {
    name: "Dynamic Website Development",
    description: "Custom websites designed for businesses and personal branding.",
    price: "KSh 30,000 - 100,000/=",
    image: oneday,  // Image associated with the service
  },
  {
    name: "Graphic Design",
    description: "Creative logo and branding designs that reflect your identity.",
    price: "KSh 1,000 - 8,000/=",
    image: onemonth,  // Image associated with the service
  },
  {
    name: "Poster Design",
    description: "Custom posters for events, promotions, and marketing campaigns.",
    price: "KSh 500 - 4,500/=",
    image: twomonth,  // Image associated with the service
  },
  {
    name: "Flyer Design",
    description: "Professional flyer designs for promotions, events, and more.",
    price: "KSh 750 - 3,000/=",
    image: layers,  // Image associated with the service
  },
  {
    name: "Business Card Design",
    description: "Make an impact with a unique, professionally designed business card.",
    price: "KSh 500 - 2,500/=",
    image: starterfeed,  // Image associated with the service
  },
];

const Products = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState(new Set());
  const [loadingItems, setLoadingItems] = useState(new Set());

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  const handleAddToCart = async (product) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    if (cartItems.has(product.name) || loadingItems.has(product.name)) return;

    setLoadingItems((prev) => new Set([...prev, product.name]));

    const priceValue = parseInt(product.price.replace(/[^0-9]/g, ""), 10);

    try {
      await setDoc(doc(db, "cart", `${user.email}-${product.name}`), {
        userEmail: user.email,
        productName: product.name,
        description: product.description || "",
        price: priceValue,
      });

      setCartItems((prev) => new Set([...prev, product.name]));
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.name);
        return newSet;
      });
    }
  };

  return (
    <section className="py-5">
      <Container>
        <CartHeader />
        <h2 className="text-center mb-4" style={{ color: "#017020" }}>
          Catech Solutions & Graphics Products
        </h2>

        <h4 className="text-center mb-4" style={{ color: "#000" }}>
          Our Services
        </h4>

        {/* Product Section */}
        <Row className="g-3">
          {products.map((product, index) => (
            <Col lg={4} md={6} sm={6} xs={6} key={index}>
              <Card className="h-100 border-0 shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="mt-auto mb-3">
                    <strong>{product.price}</strong>
                  </Card.Text>
                  <Button
                    variant={cartItems.has(product.name) ? "outline-danger" : "danger"}
                    style={{
                      color: cartItems.has(product.name) ? "#017020" : "#fff",
                      borderColor: cartItems.has(product.name) ? "#017020" : "#017020",
                      backgroundColor: cartItems.has(product.name) ? "#fff" : "#017020",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                    }}
                    onClick={() => handleAddToCart(product)}
                    disabled={cartItems.has(product.name) || loadingItems.has(product.name)}
                  >
                    {loadingItems.has(product.name)
                      ? "Adding..."
                      : cartItems.has(product.name)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Body className="text-center">
          <h5>Please Sign In</h5>
          <p>You need to sign in before adding products to your cart.</p>
          <Button variant="danger" onClick={() => setShowLoginModal(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Products;
