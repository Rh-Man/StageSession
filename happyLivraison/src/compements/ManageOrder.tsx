import React from "react";
import { Link } from "react-router-dom";

const ManageOrder = () => {
  return (
    <div>
      this is ManageOrder page
      <Link className="underline" to="/">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ManageOrder;
