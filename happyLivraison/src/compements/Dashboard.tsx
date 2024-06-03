import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>this Dashboard</p>
      <Link className="underline" to="/new">
        Go to New page
      </Link>
      <br></br>
      <Link className="underline" to="/manageOrder">
        Go to manageOrder Page
      </Link>
    </div>
  );
};

export default Dashboard;
