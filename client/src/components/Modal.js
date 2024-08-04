import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import store from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  const handleSubmit = () => {
    dispatch(setUser({ name, email, phone, address }));
    // This is just to show the store state in the console
    console.log(store.getState());
    navigate("/home");
  };

  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
        onClick={handleOpen}
      >
        Open Modal
      </button>

      <div
        className="modal fade"
        id="formModal"
        tabIndex="-1"
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="formModalLabel">
                User Information
              </h1>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-1">
                <label className="form-label custom-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label className="form-label custom-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label className="form-label custom-label">Phone</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label className="form-label custom-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!name || !email || !phone || !address}
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
