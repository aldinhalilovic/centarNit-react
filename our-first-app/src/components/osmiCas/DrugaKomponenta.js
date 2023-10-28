import React from "react";
import TrecaKomponenta from "./TrecaKomponenta";

function DrugaKomponenta({ name, setName }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {name}
      <br />
      druga komponenta
      <TrecaKomponenta name={name} setName={setName} />
    </div>
  );
}

export default DrugaKomponenta;
