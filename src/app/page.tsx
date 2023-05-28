'use client';

import VideoBackground from "@/components/video-background";
import YandexMap from "@/components/yandex-map";
import SvgMap from "@/components/svg-map";
import {Media, Place} from "@/types/types";
import {places} from '@/data/places'
import {useState} from "react";
import MainPopup from "@/components/main-popup";
import Gallery from "@/components/gallery";
import SectionFeatures from "@/components/section-features";

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState<Place>({
        backgroundImage: "",
        id: 0,
        price: '',
        area: '',
        desc: '',
        cadastralNumber: '',
        path: "",
        photos: [],
        title: "",
        videos: []
    });
    const [modalTitle, setModalTitle] = useState('');

    const handlePlacePopup = (place: Place) => {
        setModalIsOpen((prev) => !prev);
        setModalTitle(place.title);
        setModalData(place);
    }

    return (
        <>
            <main className="page__main">
                <section className="page__section page-section page__welcome-screen welcome-screen" id="welcome">
                    <h2 className="visually-hidden">Главный экран</h2>
                    <VideoBackground videoId={'S874iBGT6HI'}/>
                    <div className="welcome-screen__container container">
                        <div className="welcome-screen__inner">
                            <h1 className="page__title">Земля у Озера</h1>
                            <a className="welcome-screen__btn" href="#features">
                                <span className="visually-hidden">Вниз</span>
                            </a>
                        </div>
                    </div>
                </section>
                <SectionFeatures/>
                <section className="page__section page-section page__places places" id="places">
                    <div className="page-section__container container">
                        <div className="page-section__head">
                            <h2 className="page-section__title">Участки</h2>
                        </div>

                        <ul className="places__list">
                            {
                                places.map((place: Place, index) => (
                                    <li key={index} className="places__item place-card"
                                        onClick={() => handlePlacePopup(place)}
                                        style={{backgroundImage: `url(${place.backgroundImage})`}}>
                                        <div className="place-card__wrapper" >
                                            <h3 className="place-card__title">{place.title}</h3>
                                        </div>
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
                        </div>
                        <div className="map__scheme">
                            <SvgMap handlePlacePopup={handlePlacePopup}/>
                        </div>
                    </div>
                </section>
                <section className="page__section page-section page__contacts contacts" id="contacts">
                    <div className="contacts__container container">
                        <div className="page-section__head">
                            <h2 className="page-section__title">Контакты</h2>
                        </div>
                        <ul className="contacts__list">
                            <li className="contacts__item">Телефон: <b>+7 (915) 596-95-24</b></li>
                            <li className="contacts__item">Email: <b>ulibabaeva@mail.ru</b></li>
                        </ul>
                    </div>
                </section>
            </main>

            {modalIsOpen && (
                <MainPopup isOpened={modalIsOpen}
                           onClose={() => setModalIsOpen(false)}>
                    <div className="popup__header">
                        <h3 className="popup__title">{modalTitle}</h3>
                    </div>
                    <div className="popup__body">
                        {isLoading
                            ? (<div>Loading</div>)
                            : (
                                <div className="place">
                                    <Gallery data={modalData}/>
                                    <div className="place__info place-info">
                                        <ul className="place-info__list">
                                            <li className="place-info__item">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     width="20" height="20"
                                                     x="0"
                                                     y="0" viewBox="0 0 64 64"
                                                     className=""><g><path d="M54.323 3.5H20.309a1.5 1.5 0 0 0 0 3h34.014A3.18 3.18 0 0 1 57.5 9.676v34.015a1.5 1.5 0 0 0 3 0V9.676A6.183 6.183 0 0 0 54.323 3.5zM55.383 48.587a1.536 1.536 0 0 0-2.12 0 1.5 1.5 0 0 0 0 2.121l2.116 2.116H14.352a3.18 3.18 0 0 1-3.176-3.177V8.621l2.116 2.116a1.536 1.536 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.121l-4.675-4.677a1.536 1.536 0 0 0-2.121 0L3.939 8.616a1.501 1.501 0 0 0 0 2.12 1.536 1.536 0 0 0 2.121 0l2.116-2.115v41.026a6.183 6.183 0 0 0 6.176 6.177H55.38l-2.117 2.115a1.5 1.5 0 1 0 2.121 2.122l4.677-4.677a1.5 1.5 0 0 0 0-2.12z" fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M38.755 42.161a1.502 1.502 0 0 0 1.5-1.5V26.195a5.726 5.726 0 0 0-9.98-3.846 5.743 5.743 0 0 0-4.24-1.893 5.584 5.584 0 0 0-2.741.718 1.5 1.5 0 0 0-2.998.071v19.416a1.5 1.5 0 0 0 3 0V26.195a2.74 2.74 0 0 1 5.48 0v14.466a1.5 1.5 0 0 0 3 0V26.195a2.74 2.74 0 0 1 5.479 0v14.466a1.502 1.502 0 0 0 1.5 1.5zM50.45 21.319l.238-.325a4.391 4.391 0 0 0 .759-2.464 4.434 4.434 0 1 0-8.868 0 1.5 1.5 0 0 0 3 0 1.434 1.434 0 1 1 2.696.689l-4.676 5.02a1.89 1.89 0 0 0 1.377 3.18h4.878a1.5 1.5 0 0 0 0-3h-2.307l2.793-2.97c.039-.04.076-.085.11-.13z"
                                                    fill="#000000" data-original="#000000"
                                                    className=""></path>
                                                </g>
                                                </svg>
                                                <p className="place-info__title">Площадь: <b>{modalData.area}</b></p>
                                            </li>
                                            <li className="place-info__item">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     version="1.1"
                                                     width="20" height="20"
                                                     y="0" viewBox="0 0 48 48"
                                                     className=""><g><path d="M29.375 28.614h-6.61v-1.777h2.467a7.108 7.108 0 1 0 0-14.216h-3.967a1.5 1.5 0 0 0-1.5 1.5v9.716h-2.606a1.5 1.5 0 1 0 0 3h2.606v1.777h-2.606a1.5 1.5 0 1 0 0 3h2.606v2.273a1.5 1.5 0 0 0 3 0v-2.273h6.61a1.5 1.5 0 0 0 0-3zm-6.61-12.993h2.467a4.108 4.108 0 1 1 0 8.216h-2.467z" fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M24 48A24 24 0 1 1 38.11 4.584a1.5 1.5 0 0 1-1.765 2.426 20.972 20.972 0 1 0 6.139 7.014 1.5 1.5 0 0 1 2.639-1.424A24.007 24.007 0 0 1 24 48z"
                                                    fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M41.121 10.9a1.5 1.5 0 0 1-1.141-.524l-.27-.311a1.5 1.5 0 1 1 2.242-1.993l.308.353a1.5 1.5 0 0 1-1.139 2.475z"
                                                    fill="#000000" data-original="#000000"
                                                    className=""></path></g></svg>
                                                <p className="place-info__title">Стоимость: <b>{modalData.price} рублей</b></p>
                                            </li>
                                            <li className="place-info__item">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                     width="20" height="20" x="0"
                                                     y="0" viewBox="0 0 64 64"
                                                     className=""><g><path d="M40.81 18.75H23.19a1 1 0 0 1-1-1V5.3a1 1 0 0 1 1-1h17.62a1 1 0 0 1 1 1v12.45a1 1 0 0 1-1 1zm-16.62-2h15.62V6.3H24.19z" fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M47.48 15.75h-6.67a1 1 0 0 1-1-1V9.19a1 1 0 0 1 1-1h6.67a1 1 0 0 1 1 1v5.56a1 1 0 0 1-1 1zm-5.67-2h4.67v-3.56h-4.67zM35.92 23.5h-7.84a1 1 0 0 1-1-1v-4.75a1 1 0 0 1 2 0v3.75h5.84v-3.75a1 1 0 0 1 2 0v4.75a1 1 0 0 1-1 1zM35.92 6.3h-7.84a1 1 0 0 1 0-2h7.84a1 1 0 0 1 0 2z"
                                                    fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M13.52 59.7H5.3a1 1 0 0 1-.85-1.53L27.23 22a1 1 0 0 1 1.7 1L7.11 57.7h5.83L27.8 31.4a1 1 0 1 1 1.74 1L14.39 59.19a1 1 0 0 1-.87.51zM51.57 60.19a1 1 0 0 1-.86-.49L34.47 32.16a1 1 0 0 1 1.72-1l15.93 27 4.88-.34L35.07 23a1 1 0 0 1 1.7-1l22.78 36.2a1 1 0 0 1-.78 1.53l-7.13.49zM32 15.17a3.65 3.65 0 1 1 3.65-3.64A3.65 3.65 0 0 1 32 15.17zm0-5.29a1.65 1.65 0 1 0 1.65 1.65A1.65 1.65 0 0 0 32 9.88z"
                                                    fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M35.33 59.7h-6.66a1 1 0 0 1-1-1V22.5a1 1 0 0 1 1-1h6.66a1 1 0 0 1 1 1v36.2a1 1 0 0 1-1 1zm-5.66-2h4.66V23.5h-4.66z"
                                                    fill="#000000" data-original="#000000" className=""></path><path
                                                    d="M28.67 51.48a1 1 0 0 1-.63-.22l-7.19-5.88a1 1 0 0 1 1.27-1.55l7.18 5.88a1 1 0 0 1 .14 1.41 1 1 0 0 1-.77.36zM35.33 51.48a1 1 0 0 1-.53-1.84l8.09-5.11a1 1 0 0 1 1.38.31 1 1 0 0 1-.27 1.38l-8.1 5.11a1 1 0 0 1-.57.15z"
                                                    fill="#000000" data-original="#000000"
                                                    className=""></path></g></svg>
                                                <p className="place-info__title">Кадастровый номер: <b>{modalData.cadastralNumber}</b></p>
                                            </li>
                                            <li className="place-info__item">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     width="20" height="20" x="0"
                                                     y="0" viewBox="0 0 24 24"
                                                     className=""><g>
                                                    <path fill="#000000" fillRule="evenodd" d="M11.5 9.003a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m1 7h-2a.5.5 0 0 1 0-1h.5v-4h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5v4.5h.5a.5.5 0 0 1 0 1m-1-13c-4.688 0-8.5 3.813-8.5 8.5s3.812 8.5 8.5 8.5c4.686 0 8.5-3.813 8.5-8.5s-3.814-8.5-8.5-8.5m0 18c-5.239 0-9.5-4.262-9.5-9.5s4.261-9.5 9.5-9.5c5.237 0 9.5 4.262 9.5 9.5s-4.263 9.5-9.5 9.5" data-original="#000000" className=""></path></g></svg>
                                                <p className="place-info__title">Описание: {modalData.desc}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </MainPopup>
            )}
        </>
    )
}
