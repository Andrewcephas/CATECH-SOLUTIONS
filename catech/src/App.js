import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import CustomNavbar from "./components/pages/CustomNavbar/CustomNavbar";
import Footer from "./components/pages/Footer/Footer";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Gallery from "./components/pages/Gallery/Gallery";
import Products from "./components/pages/Products/Products";
import Team from "./components/pages/Team/Team";
import Blogs from "./components/pages/Blogs/Blogs";

// ✅ Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <CustomNavbar />
      {children}
      <Footer />
      {/* ✅ Add ToastContainer so it shows on all pages */}
      <ToastContainer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
