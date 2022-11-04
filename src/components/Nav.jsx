import React from "react";

function Nav(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a href="#Text" className="navbar-brand">
          Text Utilities
        </a>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            🌙
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
