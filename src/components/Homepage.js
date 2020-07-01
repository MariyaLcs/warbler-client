import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="home-hero">
    <h1>What's Happening?</h1>
    <h4>New to Messanger?</h4>
    <Link to="/signup" className="btn btn-dark mt-2">
      Sign up here
    </Link>
  </div>
);

export default Homepage;
