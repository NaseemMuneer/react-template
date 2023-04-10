import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd-with-locales.min.js"; // antd
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css
import "bootstrap/dist/js/bootstrap.js"; // bootstrap js
import "./App.scss";

import Home from "./Pages/Home/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
