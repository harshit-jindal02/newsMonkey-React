import React from "react";
// import loading from "./loading.gif";

function Spinner() {
  return (
    <div className="text-center">
      <div class="spinner-border my-3" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;

// <img className="my-3" src={loading} alt="loading" />
