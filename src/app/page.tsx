'use client';

import {places} from '@/data/places'
import VideoBackground from "@/components/video-background";
import YandexMap from "@/components/yandex-map";
import SvgMap from "@/components/svg-map";
import {Place} from "@/types/types";

export default function Home() {
  return (
    <main className="page__main">
        <section className="page__section page-section page__welcome-screen welcome-screen" id="welcome">
          <h2 className="visually-hidden">Главный экран</h2>
          <div className="welcome-screen__video">
              <VideoBackground />
          </div>
          <div className="welcome-screen__container container">
              <div className="welcome-screen__inner">
                  <h1 className="page__title">Lorem Ipsum</h1>
                  <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                  <a className="welcome-screen__btn" href="#places">
                      <span className="visually-hidden">Вниз</span>
                  </a>
              </div>
          </div>
        </section>
        <section className="page__section page-section page__places places" id="places">
          <div className="page-section__container container">
              <div className="page-section__head">
                  <h2 className="page-section__title">Участки</h2>
                  <p className="page-section__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
              </div>

              <ul className="places__list">
                  {
                      places.map((place: Place, index) => (
                          <li key={index} className="places__item place-card" style={{backgroundImage: `url(${place.backgroundImage})`}}>
                              <a className="place-card__wrapper" href="">
                                  <h3 className="place-card__title">{place.title}</h3>
                              </a>
                          </li>
                      ))
                  }
              </ul>
          </div>
      </section>
        <section className="page__section page-section page__map map" id="map">
            <div className="page-section__container container">
                <div className="page-section__head">
                    <h2 className="page-section__title">Интерактивная Карта</h2>
                    <p className="page-section__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
                </div>
                <div className="map__scheme">
                    <SvgMap/>
                </div>
            </div>
        </section>
        <section className="page__section page-section page__contacts contacts" id="contacts">
            <div className="contacts__container container">
                <div className="page-section__head">
                    <h2 className="page-section__title">Контакты</h2>
                    <p className="page-section__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
                </div>
                <ul className="contacts__list">
                    <li className="contacts__item">Телефон: <b>+7 (915) 596-95-24</b></li>
                    <li className="contacts__item">Email: <b>ulibabaeva@mail.ru</b></li>
                </ul>
            </div>
            <div className="contacts__map">
                <YandexMap/>
            </div>
        </section>
    </main>
  )
}
