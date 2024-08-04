import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Routes>
          <Route path="/" element={<Modal />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
