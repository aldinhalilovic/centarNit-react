import React from "react";
import DrugaKomponenta from "./DrugaKomponenta";

function PrvaKomponenta({ name, setName }) {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {name}
      <br />
      prva komponenta
      <DrugaKomponenta name={name} setName={setName} />
    </div>
  );
}

export default PrvaKomponenta;
