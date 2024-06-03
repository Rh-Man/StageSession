import React from "react";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div>
      <p>this Dashboard</p>
      <Link className="underline" to="/">
        Go to Dashborad page
      </Link>
    </div>
  );
};

export default New;
