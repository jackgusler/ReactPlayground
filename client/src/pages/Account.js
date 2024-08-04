import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import store from "../store/store";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";

export const Account = () => {
  const [editing, setEditing] = useState(false);
  const [editingName, setEditingName] = useState(store.getState().user.name);
  const [editingEmail, setEditingEmail] = useState(store.getState().user.email);
  const [editingPhone, setEditingPhone] = useState(store.getState().user.phone);
  const [editingAddress, setEditingAddress] = useState(
    store.getState().user.address
  );
  const user = store.getState().user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      navigate("/");
    }
  }, [user.name, navigate]);

  const saveChanges = () => {
    setEditing(false);
    dispatch(
      setUser({
        name: editingName,
        email: editingEmail,
        phone: editingPhone,
        address: editingAddress,
      })
    );
  };

  return (
    <div className="d-grid">
      <button className="btn btn-primary mb-2" onClick={() => navigate("/home")}>
        Go to Home
      </button>
      <div className="card p-3 justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <h1>User Information</h1>
            <p className="">
              <b>Name:</b>
              {editing ? (
                <input
                  type="text"
                  className="form-control px-1 py-0"
                  onChange={(e) => setEditingName(e.target.value)}
                  value={editingName}
                />
              ) : (
                <p
                  style={{
                    paddingLeft: "calc(.25rem + 1px)",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  {user.name}
                </p>
              )}
            </p>
            <p>
              <b>Email:</b>
              {editing ? (
                <input
                  type="text"
                  className="form-control px-1 py-0"
                  onChange={(e) => setEditingEmail(e.target.value)}
                  value={editingEmail}
                />
              ) : (
                <p
                  style={{
                    paddingLeft: "calc(.25rem + 1px)",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  {user.email}
                </p>
              )}
            </p>
            <p>
              <b>Phone:</b>
              {editing ? (
                <input
                  type="text"
                  className="form-control px-1 py-0"
                  onChange={(e) => setEditingPhone(e.target.value)}
                  value={editingPhone}
                />
              ) : (
                <p
                  style={{
                    paddingLeft: "calc(.25rem + 1px)",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  {user.phone}
                </p>
              )}
            </p>
            <p>
              <b>Address:</b>
              {editing ? (
                <input
                  type="text"
                  className="form-control px-1 py-0"
                  onChange={(e) => setEditingAddress(e.target.value)}
                  value={editingAddress}
                />
              ) : (
                <p
                  style={{
                    paddingLeft: "calc(.25rem + 1px)",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  {user.address}
                </p>
              )}
            </p>
          </div>
        </div>
        <div className="d-flex gap-2 w-100">
          {editing ? (
            <>
              <button className="btn btn-success w-100" onClick={saveChanges}>
                Save
              </button>
              <button
                className="btn btn-danger w-100"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary w-100"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
