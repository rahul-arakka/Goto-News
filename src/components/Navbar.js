import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" rel="noreferrer" to="/">
              Goto News
            </Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" rel="noreferrer" to="/health">
                    Health
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
