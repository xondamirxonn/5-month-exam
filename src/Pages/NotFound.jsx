import { Link } from "react-router-dom";
import NotFoundImg from "../assets/notFound.webp";

import React from "react";

function NotFound() {
  return (
    <div className="d-grid justify-content-center">
      <img src={NotFoundImg} alt="NotFound" />
      <Link to="/main" className="text-center my-4">Back to Home</Link>
    </div>
  );
}

export default NotFound;
