import React from 'react'
import "./Services.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBook, faCalendar, faCalendarDays, faClipboard, faFile, faFolder, faHandshake, faLayerGroup, faPaperclip, faQuestion, faRing} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const servicesData = [
    { icon: faBaby, serviceName: 'İyi ki Doğdun Bebek' },
    { icon: faRing, serviceName: 'Evlilik İşlemleri' },
    { icon: faBook, serviceName: 'Başvuru Kılavuzu' },
    { icon: faFile, serviceName: 'Ruhsat İşlemleri' },
    { icon: faQuestion, serviceName: 'Sıkça Sorulan Sorular' },
    { icon: faClipboard, serviceName: 'Çalışma Yönetmelikleri' },
    { icon: faFolder, serviceName: 'Standart Dosya Planı' },
    { icon: faPaperclip, serviceName: 'Beyanname Formları' },
    { icon: faCalendarDays, serviceName: 'Vergi Takvimi' },
    { icon: faHandshake, serviceName: 'Arabuluculuk ' },
    { icon: faLayerGroup, serviceName: 'Hizmet Standartları' },
  ];
  return (
    <div>
      <div className="services">
      <h1 className='text-center'>Hizmetler</h1>
      <hr />

      <div className="services-card-container  container">
      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <FontAwesomeIcon icon={service.icon} size="3x" color="#4CAF50" className='service-icon'/>
          <p className="service-name">{service.serviceName}</p>
        </div>
      ))}
    </div>

      </div>
    </div>
  )
}

export default Services