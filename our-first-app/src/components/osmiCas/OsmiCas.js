import React, { useEffect, useState } from "react";
import PrvaKomponenta from "./PrvaKomponenta";
import axios from "axios";

function OsmiCas() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const BASE_URL = "https://dummyjson.com/posts";

  const getData = () => {
    axios.get(`${BASE_URL}?skip=${skip}`).then((res) => {
      console.log(res.data);
      setData(res.data.posts);
    });
  };

  useEffect(() => {
    getData();
  }, [skip]);

  console.log(skip, "skip");

  return (
    <div style={{ display: "flex", gap: "74px", flexWrap: "wrap" }}>
      {data?.map((el) => (
        <h1 key={el.id}>{el.id}</h1>
      ))}

      <button
        style={{ height: "100px", width: "200px" }}
        onClick={() => setSkip((prev) => prev - 30)}
        disabled={skip === 0}
      >
        Previouse
      </button>
      <button
        style={{ height: "100px", width: "200px" }}
        onClick={() => setSkip((prev) => prev + 30)}
        disabled={skip === 120}
      >
        Next
      </button>
    </div>
  );
}

export default OsmiCas;
