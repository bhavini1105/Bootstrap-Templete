import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt /><span>
                Tropiko
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/fruit" className="nav-link">Fruit</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/service" className="nav-link">Service</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                </form>
              </div>
              <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                <a href>
                  Get A quote
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header
