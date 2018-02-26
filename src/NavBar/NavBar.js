import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-content-container" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">elkServer</a>
          </div>
          <div className="navbar-collapse collapse" id="navbar-content-container">
            <ul className="nav navbar-nav navbar-right">
              <li title="Upload Movie"><a className="upload" ><i className="fa fa-upload fa-lg"></i></a></li>
              <form className="navbar-form navbar-left" id="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span><i className="fa fa-search"></i></span>
                    </button>
                  </span>
                </div>
              </form>
              <li title="Log Out"><a className="logout"><i className="fa fa-sign-out fa-lg"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
