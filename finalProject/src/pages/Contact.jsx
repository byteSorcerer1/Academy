import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.css";
import "leaflet/dist/leaflet.css";

function Contact() {
  const defaultCenter = [37.854753271965365, 32.46927967588733];
  const [showForm, setShowForm] = useState(true);

  const toggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact">
      <h1 className="text-center">İletişim</h1>
      <hr />
      <div className="row container">
        <div className="adress" style={{ height: "500px", width: "50%" }}>
          <MapContainer
            center={defaultCenter}
            zoom={14}
            style={{ height: "100%", width: "90%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultCenter}>
              <Popup>Meram Belediyesi</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contact-info" style={{ height: "500px", width: "40%" }}>
          {showForm ? (
            <>
              <h2>İletişim Bilgileri</h2>
              <p>
                <strong>Adres:</strong> Yenişehir Mah. Azerbaycan Cad. No: 5
                42010 Meram / KONYA
              </p>
              <p>
                <strong>Telefon:</strong> 0332 320 10 00
              </p>
              <p>
                <strong>E-posta:</strong>
                <a href="mailto:bizimmeram@meram.bel.tr">
                  bizimmeram@meram.bel.tr
                </a>
              </p>
              <p>
                <strong>KEP Adresi:</strong> merambelediyesi@hs01.kep.tr
              </p>
              <p>
                <strong>E-Tebligat:</strong> 35846-96487-38597
              </p>
              <p>
                <strong>IBAN:</strong> TR33 0001 2009 5240 0007 0000 02
              </p>
              <button className="contactButton" onClick={toggleView}>İletişim Formunu Göster</button>
            </>
          ) : (
            <>
              <h2>İletişim Formu</h2>
              {/* İletişim formunu buraya ekleyebilirsiniz */}
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputtc" className="form-label">
                    Tc Kimlik No
                  </label>
                  <input type="number" className="form-control" id="inputtc" />
                </div>
                <div className="col-md-6">
                  <label for="inputphone" className="form-label">
                    Telefon Numarası
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="inputphone"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputname" className="form-label">
                    İsim
                  </label>
                  <input type="text" className="form-control" id="inputname" />
                </div>
                <div className="col-md-6">
                  <label for="inputsurname" className="form-label">
                    Soyisim
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputsurname"
                  />
                </div>
                
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputText" class="form-label">
                    İstek veya Şikayet
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                <button className="contactButton me-2" onClick={toggleView}>İletişim Bilgilerini Göster</button>
                  <button type="submit" className="contactButton mx-auto ms-2">
                    Gönder
                  </button>
                </div>
              </form>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
