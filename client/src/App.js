import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}>
      <Modal />
    </div>
  );
}

export default App;
