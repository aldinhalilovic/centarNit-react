import Forma from "./components/prviDomaci/Forma";
import "./App.css";
import SestiCas from "./components/sestiCas/SestiCas";
import SedmiCas from "./components/sedmiCas/SedmiCas";
import DrugiDomaci from "./components/drugiDomaci/DrugiDomaci";
import OsmiCas from "./components/osmiCas/OsmiCas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>

      {/* <OsmiCas /> */}
    </div>
  );
}

export default App;
