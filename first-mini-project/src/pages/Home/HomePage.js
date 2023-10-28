import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcomeContainer">
      <h1>Welcome to my home page</h1>
      <div>
        <h3>If you want to see our service, go to </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "20px 30px",
              backgroundColor: "green",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Products
          </button>
          <p>or</p>
          <button
            onClick={() => navigate("/posts")}
            style={{
              padding: "20px 30px",
              backgroundColor: "green",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            POSTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
