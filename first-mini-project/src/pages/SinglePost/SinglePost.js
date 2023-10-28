import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState({});

  const getData = () => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((data) => setSinglePost(data.data));
  };

  // console.log(id);
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>{state.title}</h1>
      <h3>{state.body}</h3>
    </div>
  );
}

export default SinglePost;
