import React from "react";
import "./Home.css";
import News from "../components/News";
import Acitivities from "../components/Acitivities";

function Home() {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.meram.bel.tr/upload/medya/MRM_2455.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Mükemmel Güzellik, Meram</h3>
              <p>Meram'ın eşsiz manzarası ile buluşun.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/A847A8769_1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Doğanın Kalbinde Huzur</h3>
              <p>Meram'ın yeşil vadilerinde sakin bir mola verin.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/42197-2-kopru.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Tarihi Köprüler ve Modern Yaşam</h3>
              <p>Meram, geçmişin izlerini günümüzle buluşturuyor.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/37623-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3>Kültür ve Sanatın Buluşma Noktası</h3>
              <p>Meram, zengin kültürel etkinlikleriyle sizi bekliyor.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="president">
        <div className="container">
          <div className="row">
            <div className="col-md-6 img-go">
              <img src="/img/mustafakavus3.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="info">
                <h1>Başkan Hakkında</h1>
                <hr />
                <div className="info-text">
                  <p>
                  Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ, eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda sektörlerinde işletmecilik ve yöneticilik yaptı.

Tüm bu çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında AK Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak görev yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl Teşkilatı Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel seçimlerinde milletvekili aday adayı oldu.

 2004 yılında Konya Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ, 2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü. Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev yapmakta iken aday adaylığı başvurusu için istifa etti.

31 Mart 2019 yerel seçimlerinde Meram Belediye Başkanı seçilen Mustafa KAVUŞ evli ve iki çocuk babasıdır.


                  </p>
                  <br />
                  <br />
                  <div className="namep">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <News />
      </section>

      <section className="stat-bar">
        <Acitivities />
      </section>
    </div>
  );
}

export default Home;
