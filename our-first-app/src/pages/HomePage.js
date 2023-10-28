import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is HOME PAGE</h1>
      {/* <Link to={"/about"}>IDI NA ABOUT PAGE</Link> */}
      <button onClick={() => navigate("/about")}>ABOUT</button>
    </div>
  );
}

export default HomePage;
