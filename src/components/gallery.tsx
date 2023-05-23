import React, {useState} from "react";
import {Photo, Photos} from "@/types/types";

type GalleryProps = {
    photos: Photos
};

const Gallery = ({photos}: GalleryProps) => {
    const THUMBS_COUNT = 6;
    const [currentSlide, setCurrentSlide] = useState(photos[0]);

    return (
        <div className="gallery">
            <div className="gallery__container">
                <img className="gallery__img" src={currentSlide.url} alt=""/>
            </div>

            <div className="gallery__thumbs lot-gallery-thumbs">
                <ul className="gallery-thumbs__list">
                    {
                        photos
                            .slice(0, THUMBS_COUNT)
                            .map((photo: Photo, index: number) => {
                                if (index === THUMBS_COUNT - 1) {
                                    return (
                                        <li key={index} className="gallery-thumbs__item">
                                            <img className="gallery-thumbs__img" src={`/${photo}`} alt=""/>
                                        </li>
                                    )
                                }

                                return (
                                    <li key={index} className="gallery-thumbs__item">
                                        <button className={`gallery-thumbs__button ${photo.id === currentSlide.id ? 'gallery-thumbs__button--active' : ''}`}
                                                type="button"
                                                onClick={() => setCurrentSlide(photo)}>
                                            <img className="gallery-thumbs__img" src={`/${photo.url}`} alt=""/>
                                        </button>
                                    </li>
                                )
                            })}
                </ul>
            </div>
        </div>
    )
}

export default Gallery;
