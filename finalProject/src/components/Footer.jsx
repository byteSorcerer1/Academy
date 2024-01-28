import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>İletişim Bilgileri</h3>
            <p>
              Adres: Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram /
              KONYA
            </p>
            <p>Telefon: 444 3 042</p>
            <p>bizimmeram@meram.bel.tr</p>
          </div>

          <div className="footer-section">
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/services">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/events">
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/projects">
                  Projeler
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/Meram.Belediyesi"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/MeramBelediyesi" target="_blank">
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/meram.belediyesi/"
                  target="_blank"
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
