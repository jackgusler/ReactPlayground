import React, { useEffect } from "react";
import store from "../store/store";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const user = store.getState().user;

  const navigate = useNavigate();

  useEffect(() => {
    if (user.name === "") {
      navigate("/");
    }
  }, [user.name, navigate]);
  return (
    <div className="d-grid container align-items-center justify-content-center">
      <h1>Hello {user.name}!</h1>
      <button className="btn btn-primary" onClick={() => navigate("/account")}>
        Go to Account
      </button>
    </div>
  );
};

export default Home;
