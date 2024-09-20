import { useState } from "react";
import BenifitsPlans from "./Components/BenifitsPlans";
import Footer from "./Components/Footer";
import HealthAndBenifitsForms from "./Components/HealthAndBenifitsForms";
import Home from "./Components/Home";
import IRAPForms from "./Components/IRAPForms";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import ReinauerUnionMemberHealthInfo from "./Components/ReinauerUnionMemberHealthInfo";
import "./style.css";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="App" style={{ fontFamily: "rajdhani" }}>
      <NavBar handleTheme={handleTheme} theme={theme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benifitsplans" element={<BenifitsPlans />} />
        <Route path="/handbforms" element={<HealthAndBenifitsForms />} />
        <Route path="/irapforms" element={<IRAPForms />} />
        <Route
          path="/reinauerunionmemberhealthinfo"
          element={<ReinauerUnionMemberHealthInfo />}
        />
      </Routes>

      <div className=""></div>
      <Footer />
    </div>
  );
}
export default App;
