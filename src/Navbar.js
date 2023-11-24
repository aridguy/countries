import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav data-mdb-navbar-init className="navbar navbar-light bg-body-tertiary">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold">
            Where in the world
          </a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
