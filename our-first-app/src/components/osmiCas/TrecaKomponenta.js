import React from "react";

function TrecaKomponenta({ name, setName }) {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: "green" }}>
      {/* Treca */}
      <strong>{name}</strong>
      <button onClick={() => setName("Mehmed")}>Promeni ime</button>
    </div>
  );
}

export default TrecaKomponenta;
