import React from "react";

// SVG
import loading from "../assets/loading.svg";

const Loading = () => {
  return (
    <div>
      <img src={loading} alt="loading" />
      <h2 className="text-center text-xl">loading...</h2>
    </div>
  );
};

export default Loading;
