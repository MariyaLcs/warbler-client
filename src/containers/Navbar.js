import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Home" />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <i className="fas fa-user-plus mr-2 text-white"></i>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <i className="fa fa-sign-in mr-2 text-white"></i>
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, null)(Navbar);
