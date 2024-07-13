import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import store from "../store/store";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleOpen = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setDisplayMessage(false);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !address) {
      setDisplayMessage(true);
      return;
    }
    dispatch(setUser({ name, email, phone, address }));
    // This is just to show the store state in the console
    console.log(store.getState());
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setIsOpen(false)}
          >
            <div
              style={{
                background: "white",
                padding: 20,
                borderRadius: 5,
                maxWidth: 500,
                width: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>User Information</h2>
              Name:
              <input
                style={{
                  width: "100%",
                }}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              Email:
              <input
                style={{
                  width: "100%",
                }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              Phone:
              <input
                style={{
                  width: "100%",
                }}
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              Address:
              <input
                style={{
                  width: "100%",
                }}
                type="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <button onClick={handleSubmit}>Submit</button>
                <div style={{ color: "red" }}>
                  {displayMessage && "Please fill all fields"}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
