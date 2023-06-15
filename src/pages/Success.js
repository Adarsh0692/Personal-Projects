import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
    <div class="alert alert-success alert-dismissible fade show">
      <strong>Success!</strong> Your order placed successfully.
    </div>
    <div>
         <Link to='/' className="ml-5 mt-lg-5">Back to home page</Link>
    </div>
    </>
  );
}
