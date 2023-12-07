import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        data-mdb-navbar-init
        className="navbar navbar-light bg-body-tertiary"
      >
        <div className="container">
          <a href="/" className="navbar-brand fw-bold">
            Where in the world
          </a>

          <div className="d-flex input-group w-auto">Dark and Light mode</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
