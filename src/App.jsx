import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovoCadastros from "./pages/NovoCadastros";
import AlterarCadastros from "./pages/AlterarCadastros";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NovoCadastros" element={<NovoCadastros />} />
          <Route path="/AlterarCadastros" element={<AlterarCadastros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
