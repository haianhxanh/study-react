import React from "react";
import Navbar from "./Navbar.jsx"
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

function ParentChild() {
  return (
  <div> 
    <Navbar />
    <Header />
    <MainContent />
    <Footer />
  </div>

  )
}

export default ParentChild;
