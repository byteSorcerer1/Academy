import React from "react";
import "./News.css";

function News() {
  const newsData = [
    {
      id: 1,
      title: "Meram Gödene Evleri Müjdesi",
      image: "https://www.meram.bel.tr/upload/medya/cats11.jpg",
      link: "https://youtu.be/snqej4msqrU?si=h2B4FSzKK9R3jIyg",
    },
    {
      id: 2,
      title: "Bizim Meram Köyü Dağ Evi, Başvurular Başladı",
      image: "https://www.meram.bel.tr/upload/medya/cats.jpg",
      link: "https://youtu.be/5S7cI0bfICQ?si=yBkCyICSpEoxcm72",
    },
    {
      id: 3,
      title: "Turizmin yeni lokasyonu, huzurlu bir dinlenme alanı; Meram Bağları",
      image: "https://www.meram.bel.tr/upload/medya/scsddsd.jpg",
      link: "https://youtu.be/sApm7RMxrfM?si=jABHHVQL-eSRrPze",
    },
    {
      id: 4,
      title: "İstanbul'da Konya Günleri'nin Açılışını Gerçekleştirdik",
      image: "https://www.meram.bel.tr/upload/medya/ddddddddddddddd.jpg",
      link: "https://youtu.be/kx1owhSbYu0?si=pfdYHYb9lYhA0mZ4",
    },
    {
      id: 5,
      title: "Nerede bu Meram Bağları? Sorusunun artık bir cevabı var",
      image: "https://www.meram.bel.tr/upload/medya/dcd.jpg",
      link: "https://youtu.be/hn_09Lajl7U?si=_53ZvMEOJ7Md9cMs",
    },
    {
      id: 6,
      title: "Berlika Trafik Eğitim Parkımızdaki bisiklet parkuru ve kaykay pistini yeniledik",
      image: "https://www.meram.bel.tr/upload/medya/DJI_0948.jpg",
      link: "https://www.example.com/news/social",
    },
    {
      id: 7,
      title: "Klasik Otomobil Sergimizin Açılışını Gerçekleştirdik",
      image: "https://www.meram.bel.tr/upload/medya/MRM_8517.jpg",
      link: "https://youtu.be/44nFIWbzx6s?si=IqldnTdo12opEotq",
    },
    {
      id: 8,
      title: "Meram Bağı Basın Yansıması",
      image: "https://www.meram.bel.tr/upload/medya/dddddddddd_1.jpg",
      link: "https://www.youtube.com/watch?v=ZnAy1-H8C-4&t=1s&pp=ygUfbWVyYW0gYmHEn8SxIGJhc8SxbiB5YW5zxLFtYXPEsQ%3D%3D",
    },
  ];
  return (
    <div>
        <h2 className="text-center news-header">Haberler</h2>
        <hr />
      <div className="news-container container">
        {newsData.map((news) => (
          <div key={news.id} className="news-item">
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <img src={`${news.image}`} alt={news.title} />
              <div className="news-overlay">
                <h3>{news.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
