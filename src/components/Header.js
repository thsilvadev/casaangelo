import React from "react";

// import logo from "./imgs/logo.png";
import translogo from "./imgs/translogo.png";
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-sm ${styles.customNavbar}`}> 
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={translogo} className={styles.logo} alt="..." />
          </a>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.list}`}>
              <li class="nav-item">
                <a class="nav-link" href="/sobre">
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contato">
                  Contato
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquisar"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
