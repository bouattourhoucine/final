import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/Auth/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Grid } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/Contact/ContactUs";
import CardCase from "./Components/CardCase/CardCase.js";
import Login from "./Components/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Navbar />
          <div>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Login />} />
              <Route path="/admin-dashbaord" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/a" element={<CardCase />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
