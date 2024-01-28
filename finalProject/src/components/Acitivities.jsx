import React from "react";
import "./Activities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSquare, faBaby, faHeart, faPhoneVolume, faRoad, faTrash, faUser, faTree } from '@fortawesome/free-solid-svg-icons';
function Acitivities() {
  return (
    <div>
      <h2 className="text-center">Rakamlarla Meram</h2>
      <hr />
      <div className="belediye-stats container">
        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
          <div className="number">57,200</div>
          <div className="activity">
            Vatandaşımız Belediyemizde işlem Yaptı.
          </div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faPhoneVolume} size="2x" />
          </div>
          <div className="number">91,059</div>
          <div className="activity">Telefon Çağrısına Cevap Verildi.</div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faBaby} size="2x" />
          </div>
          <div className="number">3,155</div>
          <div className="activity">Bebek Meram'da Dünyaya Gözlerini Açtı.</div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </div>
          <div className="number">3,826</div>
          <div className="activity">
            Çiftin Meram'da Nikah İşlemleri Yapıldı.
          </div>
        </div>
        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faRoad} size="2x" />
          </div>
          <div className="number">509</div>
          <div className="activity">
            Cadde, 5,865 Sokak Süpürgeli Araç ve Yaya Personelimiz ile
            Temizlendi.
          </div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faTrash} size="2x" />
          </div>
          <div className="number">139,828 m³</div>
          <div className="activity">
            Çöp Toplanarak Ayırma ve İşleme Tesislerine Taşındı.
          </div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} size="2x" />
          </div>
          <div className="number">815</div>
          <div className="activity">Çalışanımız ile Sahada Görevdeyiz.</div>
        </div>

        <div className="stat-item">
          <div className="icon">
            <FontAwesomeIcon icon={faTree} size="2x" />
          </div>
          <div className="number">2,316,047</div>
          <div className="activity">
            Kişi ilçemizde ki Park ve Bahçeleri Ziyaret Etti.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acitivities;
