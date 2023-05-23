'use client';

import {places} from '@/data/places'
import VideoBackground from "@/components/video-background";
import YandexMap from "@/components/yandex-map";
import SvgMap from "@/components/svg-map";
import {Place} from "@/types/types";
import {useState} from "react";
import MainPopup from "@/components/main-popup";
import Gallery from "@/components/gallery";
import {makarovoPhotos} from "@/data/photos";

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePlacePopup = (title: string) => {
        setModalIsOpen((prev) => {
            return !prev;
        });
    }

    return (
        <>
            <main className="page__main">
                <section className="page__section page-section page__welcome-screen welcome-screen" id="welcome">
                    <h2 className="visually-hidden">Главный экран</h2>
                    <div className="welcome-screen__video">
                        <VideoBackground />
                    </div>
                    <div className="welcome-screen__container container">
                        <div className="welcome-screen__inner">
                            <h1 className="page__title">Земля у Озера</h1>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
                            <a className="welcome-screen__btn" href="#features">
                                <span className="visually-hidden">Вниз</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="page__section page-section page__features features" id="features">
                    <div className="page-section__container container">
                        <div className="page-section__head">
                            <h2 className="page-section__title">Причины инвестировать</h2>
                            <p className="page-section__subtitle">в землю в  заповедной Мещере</p>
                        </div>
                        <ul className="features__list">
                            <li className="features__item">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="60" height="60" x="0" y="0" viewBox="0 0 512 512"
                                    className=""><g><path d="M426.667 0c-47.052 0-85.333 38.281-85.333 85.333 0 40.814 60.469 123.419 74.637 142.22-.004 6.073 0 12.036-.147 17.509-.156 5.885 4.49 10.792 10.385 10.948h.292c5.75 0 10.5-4.594 10.656-10.385.147-5.616.143-11.746.147-17.992C451.378 208.961 512 126.195 512 85.333 512 38.281 473.719 0 426.667 0zm0 206.146c-23.448-32.26-64-93.656-64-120.813 0-35.292 28.708-64 64-64s64 28.708 64 64c0 27.157-40.552 88.552-64 120.813z" fill="#9a9d66" data-original="#9a9d66" className=""></path><path
                                    d="M426.667 64c-11.76 0-21.333 9.573-21.333 21.333 0 11.76 9.573 21.333 21.333 21.333S448 97.094 448 85.333C448 73.573 438.427 64 426.667 64zM128 234.667c-35.292 0-64 28.708-64 64s28.708 64 64 64 64-28.708 64-64-28.708-64-64-64zm0 106.666c-23.531 0-42.667-19.135-42.667-42.667S104.469 256 128 256s42.667 19.135 42.667 42.667-19.136 42.666-42.667 42.666zM289.573 384.438c-5.521-2.146-11.667.594-13.802 6.094-4.781 12.354-10.76 26.76-18.823 39.958-3.073 5.031-1.479 11.594 3.542 14.667a10.604 10.604 0 0 0 5.552 1.563c3.594 0 7.104-1.813 9.115-5.104 8.938-14.646 15.385-30.146 20.51-43.375 2.125-5.491-.604-11.668-6.094-13.803zM229.427 462.281c-10.688 8.469-22.833 14.844-37.146 19.5-5.604 1.823-8.667 7.844-6.844 13.448 1.469 4.5 5.646 7.365 10.146 7.365 1.094 0 2.208-.167 3.302-.521 16.531-5.375 31.26-13.135 43.792-23.063 4.615-3.667 5.396-10.375 1.74-14.99-3.688-4.603-10.386-5.426-14.99-1.739zM326.5 307.427c-17.604 9.99-27.385 27.333-33.219 39.5-2.552 5.313-.313 11.688 5 14.229a10.66 10.66 0 0 0 14.229-5c7.406-15.448 14.969-24.75 24.531-30.188 5.115-2.906 6.917-9.417 4-14.542-2.895-5.124-9.385-6.926-14.541-3.999zM422.708 281.021c-4.844-3.281-11.5-2.021-14.813 2.854-3.51 5.188-10.698 12.323-32.438 14.271-5.865.531-10.198 5.708-9.667 11.583.5 5.542 5.156 9.708 10.615 9.708.323 0 .646-.01.969-.042 23.094-2.073 38.854-9.781 48.188-23.563 3.303-4.874 2.021-11.509-2.854-14.811z"
                                    fill="#9a9d66" data-original="#9a9d66" ></path><path
                                    d="M153.275 490.805C186.932 454.913 256 372.341 256 298.667c0-71.771-56.229-128-128-128s-128 56.229-128 128c0 95.26 115.75 205.76 120.677 210.417a10.603 10.603 0 0 0 7.323 2.917c7.771 0 15.156-.271 22.156-.802 5.875-.448 10.281-5.563 9.833-11.438-.32-4.205-3.041-7.484-6.714-8.956zM128 486.292c-25.198-25.708-106.667-114.5-106.667-187.625C21.333 238.854 68.188 192 128 192s106.667 46.854 106.667 106.667c0 73.125-81.469 161.916-106.667 187.625z"
                                    fill="#9a9d66" data-original="#9a9d66"></path></g></svg>
                                <p>Небольшая удаленность <br/> от мегаполиса</p>
                            </li>
                            <li className="features__item">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="60" height="60" x="0" y="0" viewBox="0 0 91 91"
                                     className=""><g><path d="M32.425 35.878c-5.696 9.675-1.021 17.418.54 19.559-1.909 3.512-3.38 7.373-3.894 11.43a1.687 1.687 0 0 0 3.348.424c1.823-14.4 17.722-26.842 17.882-26.966a1.689 1.689 0 0 0-2.062-2.672c-.463.357-7.85 6.134-13.363 14.587-1.471-2.523-3.502-7.925.457-14.65 2.465-4.19 6.304-4.856 10.75-5.628 3.263-.565 6.879-1.193 10.129-3.388 1.043 4.991 2.641 16.166-2.143 22.744-2.386 3.281-6.175 5.027-11.262 5.188a1.688 1.688 0 0 0 .053 3.373h.054c6.187-.195 10.859-2.41 13.89-6.582 7.232-9.958 2.259-27.461 2.044-28.202a1.687 1.687 0 0 0-2.807-.727c-2.994 2.962-6.656 3.598-10.535 4.27-4.829.837-9.823 1.703-13.081 7.24z" fill="#9a9d66" data-original="#9a9d66" className=""></path><path
                                    d="M30.796 78.617a1.69 1.69 0 0 0 2.214-.892 1.687 1.687 0 0 0-.892-2.213C18.82 69.846 10.927 56.375 12.476 41.988c1.772-16.455 15.551-28.753 31.677-29.123l-4.167 3.356a1.688 1.688 0 0 0 2.117 2.629l7.671-6.178a1.685 1.685 0 0 0 .256-2.373l-6.179-7.67a1.688 1.688 0 0 0-2.628 2.117l3.807 4.726c-18.202-.07-33.919 13.673-35.909 32.154-1.71 15.874 7.001 30.739 21.675 36.991zM57.414 15.323c13.293 5.497 21.5 19.337 19.959 33.658C75.599 65.434 61.814 77.723 45.695 78.1l4.166-3.354a1.688 1.688 0 0 0-2.117-2.629l-7.672 6.178a1.686 1.686 0 0 0-.256 2.373l6.18 7.67a1.684 1.684 0 0 0 2.373.256c.726-.586.84-1.648.255-2.373l-3.81-4.729c.045 0 .09.004.135.004 18.14-.002 33.792-13.719 35.779-32.154 1.7-15.8-7.356-31.072-22.024-37.138a1.688 1.688 0 0 0-1.29 3.119z"
                                    fill="#9a9d66" data-original="#9a9d66"></path></g></svg>
                                <p>Абсолютно экологически чистое пространство (отсутствие промышленных предприятий, незначительная плотность населения.</p>
                            </li>
                            <li className="features__item">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="60" height="60" x="0" y="0" viewBox="0 0 128 128"><g>
                                    <path d="m117.88 73.85-22.42 6L68 64l27.46-15.85 22.42 6a2 2 0 0 0 1-3.86l-18.56-5 15.74-9.09a2 2 0 0 0-2-3.46l-15.7 9.11 5-18.56a2 2 0 0 0-3.86-1l-6 22.42-23.85 13.72L96.14 14H108a2 2 0 0 0 0-4H95a2 2 0 0 0-1.72 1L80.43 32.54a35.57 35.57 0 0 0-14.43-4V4a2 2 0 0 0-4 0v24.56a35.2 35.2 0 0 0-14 3.76L35.73 11a2 2 0 1 0-3.46 2l12.29 21.32a35.68 35.68 0 0 0-10.24 10.24L13 32.27a2 2 0 1 0-2 3.46L32.32 48a35.2 35.2 0 0 0-3.76 14H4a2 2 0 0 0 0 4h24.56a35.38 35.38 0 0 0 3.75 14L11.08 92.34a2 2 0 1 0 2 3.46L34.3 83.51a35.52 35.52 0 0 0 9.84 9.9L31.86 114H20a2 2 0 0 0 0 4h13a2 2 0 0 0 1.72-1L62 71.26v27.91l-16.41 16.42a2 2 0 0 0 2.82 2.82L62 104.83V123a2 2 0 0 0 4 0v-18.17l13.59 13.58a2 2 0 0 0 2.82-2.82L66 99.17V67.46l27.46 15.86 6 22.42a2 2 0 0 0 3.86-1l-5-18.56 15.74 9.08a2 2 0 0 0 2-3.46l-15.74-9.09 18.56-5a2 2 0 0 0-1-3.86ZM32.5 64a31.49 31.49 0 0 1 45.88-28L62.27 63 46.19 90A31.28 31.28 0 0 1 32.5 64Z" fill="#9a9d66" data-original="#9a9d66" className=""></path></g></svg>
                                <p>Уникальный климат: большое количество водного пространства (цепь Великих мещерских озер) и девственные леса. <br/> Неслучайно Мещеру называют Русской Амазонкой. <br/>Практически вся территория Мещеры находится в зоне Мешерского национального парка</p>
                            </li>
                            <li className="features__item">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="60" height="60" x="0" y="0" viewBox="0 0 64 64"><g>
                                    <path d="M35 63h2V37h26v-2H35zM1 37h26v26h2V35H1zM27 27h-2V15h-4.695l.8-8H18c0-3.309-2.691-6-6-6S6 3.691 6 7H2.895l2 20H1v2h28V1h-2zm-4 0h-8V17h8zM12 3c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zM5.105 9H6.35c.826 2.327 3.043 4 5.65 4s4.824-1.673 5.65-4h1.245l-.6 6H13v12H6.905zM61 27V15h-8V3H39v24h-2V1h-2v28h28v-2zm-2 0H49V17h10zM41 5h10v10h-4v12h-6z" fill="#9a9d66" data-original="#9a9d66" className=""></path><path
                                    d="M12.657 39 3 46.511V49h2v10h18V49h2v-2.489L15.343 39zM17 57h-6v-4h6zm4 0h-2v-6H9v6H7v-8h14zM5.629 47l7.714-6h1.313l7.714 6zM11 10h2V8h2V6h-2V4h-2v2H9v2h2zM17 19h4v2h-4zM17 23h4v2h-4zM9 15h2v2H9zM9 19h2v2H9zM9 23h2v2H9zM56 57h6.5l-5.192-12.462C56.918 43.604 56.012 43 55 43s-1.918.604-2.308 1.538L51.333 47.8l-3.026-7.262C47.918 39.604 47.012 39 46 39s-1.918.604-2.308 1.538L38.5 53H45v8h-6v2h24v-2h-7zm-1.462-11.692c.156-.373.768-.373.924 0L59.5 55h-9l.833-2H53.5l-1.083-2.599zm-9-4c.156-.373.768-.373.924 0L50.5 51h-9zM47 53h2.167L47.5 57H54v4h-7zM51 19h2v2h-2zM51 23h2v2h-2zM55 19h2v2h-2zM55 23h2v2h-2zM47 7h2v2h-2zM43 7h2v2h-2zM43 11h2v2h-2zM47 11h2v2h-2zM43 23h2v2h-2zM43 19h2v2h-2zM43 15h2v2h-2z"
                                    fill="#9a9d66" data-original="#9a9d66" className=""></path></g></svg>
                                <p>Наличие удобной инфраструктуры: газ, электричество, практически ко всем участкам проложена асфальтовая дорога.</p>
                            </li>
                        </ul>
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
                                    <li key={index} className="places__item place-card"
                                        onClick={() => handlePlacePopup(place.title)}
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

            {modalIsOpen && (
                <MainPopup isOpened={modalIsOpen}
                           onClose={() => setModalIsOpen(false)}>
                    <div className="popup__header">
                    </div>
                    <div className="popup__body">
                        {isLoading
                            ? (<div>Loading</div>)
                            : (
                                <div className="place">
                                    <Gallery photos ={makarovoPhotos}/>
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
                                                <p className="place-info__title">Площадь: <b>6,2 Га</b></p>
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
                                                <p className="place-info__title">Стоимость: <b>850 тыс. р</b></p>
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
                                                <p className="place-info__title">Кадастровый номер: <b>60:08:0090201:20</b></p>
                                            </li>
                                            <li className="place-info__item">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     width="20" height="20" x="0"
                                                     y="0" viewBox="0 0 24 24"
                                                     className=""><g>
                                                    <path fill="#000000" fillRule="evenodd" d="M11.5 9.003a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m1 7h-2a.5.5 0 0 1 0-1h.5v-4h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5v4.5h.5a.5.5 0 0 1 0 1m-1-13c-4.688 0-8.5 3.813-8.5 8.5s3.812 8.5 8.5 8.5c4.686 0 8.5-3.813 8.5-8.5s-3.814-8.5-8.5-8.5m0 18c-5.239 0-9.5-4.262-9.5-9.5s4.261-9.5 9.5-9.5c5.237 0 9.5 4.262 9.5 9.5s-4.263 9.5-9.5 9.5" data-original="#000000" className=""></path></g></svg>
                                                <p className="place-info__title">Описание: <b>отсутствует</b></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="popup__footer">

                    </div>
                </MainPopup>
            )}
        </>
    )
}
