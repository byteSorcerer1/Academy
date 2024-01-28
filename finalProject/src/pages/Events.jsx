import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events">
      <div
        id="carouselExample"
        className="carousel slide carousel-fade mycarousel"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/mega2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h3>Mega Akıl ve Zeka Oyunları</h3>
              <p>
                Meram İlçe Milli Eğitim Müdürlüğü ve Meram Belediyesi iş
                birliğiyle düzenlenen "Mega Akıl ve Zeka Oyunları Turnuvası
                Meram İlçe Finalleri" büyük bir heyecanla gerçekleşti! Sizleri
                ödül törenine davet ediyoruz.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/img/araba.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h3>Klasik Tutkunları Meram'da buluşuyor</h3>
              <p>
                Meram Belediyesi, klasik otomobil tutkunlarını bir kez daha
                Meram’da buluşturuyor. Nostalji rüzgarı estirecek ‘Klasik
                Otomobil Sergisi’ 29 Eylül Cuma günü 80 Binde Devr-i Alem
                Parkı’nda açılacak. Meram Belediye Başkanı Mustafa Kavuş, yüze
                yakın aracın yer alacağı sergiye tüm klasik otomobil severleri
                davet etti.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.meram.bel.tr/upload/medya/MRM_4711.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption event-caption">
              <h3>Huzur Kafe Meram'da Sizi Bekliyor!</h3>
              <p>
                Huzur Kafe Meram, sıcak atmosferi ve lezzetli menüsüyle şehrin
                kalbinde bir mola noktasıdır! Sizi ve sevdiklerinizi misafir
                etmekten büyük mutluluk duyuyoruz.
              </p>
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
      <div className="caption container">
        <h2 className="text-center">Etkinlikler</h2>
        <hr />
        <p className="text-center">
          Meram Belediyesi olarak, her yaş grubundan vatandaşlarımıza hitap eden
          çeşitli etkinlikler düzenliyoruz. Kültür, sanat, eğitim, spor ve daha
          birçok alanda düzenlenen etkinliklerimizle Meram'da yaşayanları bir
          araya getiriyor ve sosyal etkileşimi destekliyoruz.
        </p>
      </div>

      <div className="events-container container">
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/araba2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Klasik Tutkunları Meram'da buluşuyor</h5>
            <p class="card-text">
            Meram Belediyesi, 29 Eylül Cuma günü 80 Binde Devr-i Alem Parkı'nda düzenlenecek 'Klasik Otomobil Sergisi'ne tüm otomobil tutkunlarını davet ediyor.
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/disuzun.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Necmettin Erbakan Üniversitesi 2. Uluslararası Diş Hekimliği Kongresi</h5>
            <p class="card-text">
            Gülüşlerinizi güzelleştirmek için Diş Hekimliği Günü'nde bizimle buluşun.
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/siber.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Deneyap Teknoloji Atölyeleri Siber Güvenil Eğitmenlerini Arıyor</h5>
            <p class="card-text">
            Deneyap Teknoloji Atölyeleri, siber güvenlik alanında uzmanlaşmış eğitmenler arıyor! Güvenli bir gelecek için sen de Deneyap'a katıl, siber güvenlikteki bilgi ve deneyimini paylaş.
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/m2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Çevre ve Sıfır Atık Festivali</h5>
            <p class="card-text">
            "Yeşilin ve sürdürülebilirliğin şehri Konya, doğayı keşfetme, çevre dostu projeleri keşfetme ve daha yeşil bir gelecek için bir araya gelme amacıyla Konya Çevre Festivali'ne ev sahipliği yapıyor!"
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/m5.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Bin Nefes Bir Ses Uluslararası Türkçe Tiyatro Yapan Ülkeler Festivali</h5>
            <p class="card-text">
            Sahnedeki büyülü hikayeye katılın, unutulmaz bir tiyatro deneyimi sizi bekliyor!
            </p>
          </div>
        </div><div className="event card" style={{width:'18rem'}}>
          <img src="/img/m6.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Okullararası Bilimsel Proje Sergisi</h5>
            <p class="card-text">
            Öğrenciler! Bilimsel projelerinizi sergileme ve öne çıkma şansı yakalayın. Okullar Arası Bilimsel Proje Yarışması'na katılın, geleceği keşfedin!
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/mega7.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Mega Yazılım Akademisi Başlıyor</h5>
            <p class="card-text">
             Meram Belediyesi Meram Gelişim Akademisi bünyesinde hayata geçirilen ‘MEGA Yazılım Akademisi’ başvuruları başladı. 
            </p>
          </div>
        </div>
        <div className="event card" style={{width:'18rem'}}>
          <img src="/img/sivlilik.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">Şivlilik Etkinliği</h5>
            <p class="card-text">
             Ses, kelime ve dilbilgisiyle dolu bu etkinlik, kültürümüzün zenginliklerini keşfetmenize davet ediyor. Gel, birlikte şivlenmeye hazır mısın?"
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Events;
