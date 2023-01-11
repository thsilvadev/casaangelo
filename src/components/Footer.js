import React from "react";
import styles from "../css/Footer.module.css";

import sublogo from "../components/imgs/sublogo.png";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div className="col">
          <h6 class="text-uppercase fw-bold mb-4">Links</h6>
          <p>
            <a href="/" class="text-reset">
              Página Inicial
            </a>
          </p>
          <p>
            <a href="/sobre" class="text-reset">
              Sobre
            </a>
          </p>
          <p>
            <a href="/contato" class="text-reset">
              Contato
            </a>
          </p>
        </div>

        <div className="col">
            <img
            src={sublogo}
            className={` ${styles.sublogo}`}
            alt="a logo da empresa"
            />
        </div>
        

        <div className="col">
          <h6 class="text-uppercase fw-bold mb-4">Contato</h6>
          <p>
            <i class="fas fa-home me-3"></i> Rio de Janeiro - RJ
          </p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            casaangeloaromas@gmail.com
          </p>
          <p>
            <i class="fas fa-phone me-3"></i> (21) 1234-56789
          </p>
        </div>
        
      </div>

      <ul className={styles.social_list}>
                    <li>
                    {" "}
                    <FaFacebook />{" "}
                    </li>
                    <li>
                    {" "}
                    <FaInstagram />{" "}
                    </li>
                    <li>
                    {" "}
                    <FaYoutube />{" "}
                    </li>
                </ul>

                <p className={styles.copy_right}>
                    <span>Casa Angelo</span> &copy;2022
                </p>
      </div>
      

      
    </div>
  );
};

export default Footer;
