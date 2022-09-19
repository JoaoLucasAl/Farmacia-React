import { useState } from "react";
import "./App.css";
import HeaderHome from "./components/Homepage/Header/Header";
import Footer from "./components/Homepage/Footer/Footer.jsx"
function App() {
  return (
    <div className="App">
      {/* Homepage */}
      <HeaderHome />
      <Footer />
    </div>
  );
}

export default App;
