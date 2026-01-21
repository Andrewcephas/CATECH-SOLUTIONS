import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaClipboardList,
  FaTrash,
} from "react-icons/fa";
import { auth, db, provider } from "../../Database/Configuration";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import {
  doc,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import {
  Button,
  Offcanvas,
  Card,
  Badge,
  Modal,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartHeader.css";

const CartHeader = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCheckedOutOrders, setShowCheckedOutOrders] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [checkedOutOrderCount, setCheckedOutOrderCount] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleGoogleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          { merge: true }
        );
        setCheckoutDetails((prev) => ({
          ...prev,
          email: user.email || "",
        }));
      } else {
        setUser(null);
        sessionStorage.removeItem("user");
        setCartItems([]);
        setCartCount(0);
        setCheckoutDetails({
          fullName: "",
          email: "",
          phone: "",
          address: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "cart"), where("userEmail", "==", user.email));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data(), quantity: 1 });
      });
      setCartItems(items);
      setCartCount(items.length);
    });

    return () => unsubscribe();
  }, [user]);

  const handleChange = (e) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!cartItems.length) return alert("Your cart is empty!");
    setLoading(true);

    try {
      const orderData = {
        userId: user?.uid || null,
        userEmail: user?.email?.trim() || "",
        customerDetails: checkoutDetails,
        items: cartItems,
        totalAmount: grandTotal,
        status: "Pending",
        createdAt: new Date(),
      };

      await addDoc(collection(db, "orders"), orderData);
      alert("Order placed successfully!");
      setShowCheckout(false);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order.");
    }

    setLoading(false);
  };

  const fetchCheckedOutOrders = async () => {
    if (!user) return;
    try {
      const q = query(collection(db, "orders"), where("userEmail", "==", user.email));
      const querySnapshot = await getDocs(q);
      const fetchedOrders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrderList(fetchedOrders);
      setCheckedOutOrderCount(fetchedOrders.length);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleShowCheckedOutOrders = () => {
    fetchCheckedOutOrders();
    setShowCheckedOutOrders(true);
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = async (id) => {
    await deleteDoc(doc(db, "cart", id));
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-header d-flex justify-content-end align-items-center gap-3 p-2">
      <div className="text-center">
        {user ? (
          <>
            <img
              src={user.photoURL || "default-profile.png"}
              alt="Profile"
              className="user-profile-img"
              title={user.displayName}
            />
            <div className="small-text">{user.displayName}</div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <FaUser
              className="icon small-icon"
              title="Login"
              onClick={handleGoogleSignIn}
            />
            <div
              className="small-text link-text"
              onClick={handleGoogleSignIn}
              style={{ cursor: "pointer", color: "#ff9900" }}
            >
              Login
            </div>
          </>
        )}
      </div>

      <div className="text-center position-relative">
        <FaShoppingCart
          className="icon small-icon"
          title="Cart"
          onClick={() => setShowCart(true)}
        />
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {cartCount}
        </Badge>
        <div
          className="small-text link-text"
          onClick={() => setShowCart(true)}
          style={{ cursor: "pointer", color: "#ff9900" }}
        >
          Cart
        </div>
      </div>

      <div className="text-center position-relative">
        <FaClipboardList
          className="icon small-icon"
          title="My Orders"
          onClick={handleShowCheckedOutOrders}
        />
        <Badge
          bg="danger"
          className="position-absolute top-0 start-100 translate-middle"
        >
          {checkedOutOrderCount}
        </Badge>
        <div
          className="small-text link-text"
          onClick={handleShowCheckedOutOrders}
          style={{ cursor: "pointer", color: "#ff9900" }}
        >
          Orders
        </div>
      </div>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.productName}</Card.Title>
                  {item.description && <Card.Text>{item.description}</Card.Text>}
                  <Card.Text>
                    <strong>Price:</strong> KSh {item.price.toLocaleString()}
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Button
                        style={{ backgroundColor: "#017020", border: "none" }}
                        size="sm"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        style={{ backgroundColor: "#017020", border: "none" }}
                        size="sm"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                      <FaTrash />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
          {cartItems.length > 0 && (
            <div className="text-center mt-4">
              <h5>Grand Total: KSh {grandTotal.toLocaleString()}</h5>
              <Button
                className="w-100 mt-2"
                style={{ backgroundColor: "#017020", borderColor: "#017020" }}
                onClick={() => setShowCheckout(true)}
              >
                Checkout
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showCheckout} onHide={() => setShowCheckout(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCheckout}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={checkoutDetails.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={checkoutDetails.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={checkoutDetails.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              className="mt-3 w-100"
              style={{ backgroundColor: "#017020", borderColor: "#017020" }}
              disabled={loading}
            >
              {loading ? "Processing..." : "Place Order"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
  show={showCheckedOutOrders}
  onHide={() => setShowCheckedOutOrders(false)}
  size="lg"
>
  <Modal.Header closeButton>
    <Modal.Title>My Orders</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {orderList.length === 0 ? (
      <p className="text-center">No orders found.</p>
    ) : (
      orderList.map((order) => (
        <Card key={order.id} className="mb-3">
          <Card.Body>
            <Card.Title>Order ID: {order.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Status: {order.status}
            </Card.Subtitle>
            <Card.Text>
              <strong>Name:</strong> {order.customerDetails?.fullName}<br />
              <strong>Phone:</strong> {order.customerDetails?.phone}<br />
              <strong>Address:</strong> {order.customerDetails?.address}<br />
              <strong>Email:</strong> {order.customerDetails?.email}<br />
              <strong>Ordered Items:</strong>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.productName} - KSh {item.price.toLocaleString()} × {item.quantity}
                  </li>
                ))}
              </ul>
              <strong>Total:</strong> KSh {order.totalAmount.toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
    )}
  </Modal.Body>
</Modal>

      
    </div>
  );
};

export default CartHeader;
