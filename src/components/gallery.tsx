import React, {useState} from "react";
import {Media, Place} from "@/types/types";
import Image from "next/image";

type GalleryProps = {
    data: Place;
};

const Gallery = ({data}: GalleryProps) => {
    const mediaFiles = [...data.videos, ...data.photos].map((element, index) => {
        return {
            id: index,
            url: element.url
        }
    });

    const [currentSlide, setCurrentSlide] = useState(mediaFiles[0]);

    const getTag = (slide: Media) => {
        if (slide.id === 0) {
            return (
                <video className="gallery__video" autoPlay={true} controls={true}>
                    <source src={`${slide.url}`} type="video/mp4"/>
                </video>
            );
        }

        return  (
            <img className="gallery__img" src={`${slide.url}`} alt=""/>
        )
    }

    return (
        <div className="gallery">
            <div className="gallery__container">
                {getTag(currentSlide)}
            </div>

            <div className="gallery__thumbs lot-gallery-thumbs">
                <ul className="gallery-thumbs__list">
                    {
                        mediaFiles
                            .map((media: Media, index: number) => {
                                if (index === 0) {
                                    return (
                                        <li key={index} className="gallery-thumbs__item">
                                            <button className={`gallery-thumbs__button ${media.id === currentSlide.id ? 'gallery-thumbs__button--active' : ''}`}
                                                    type="button"
                                                    onClick={() => setCurrentSlide(media)}>
                                                <img className="gallery-thumbs__img" src={`${data.backgroundImage}`} alt=""/>
                                            </button>
                                        </li>
                                    )
                                }

                                return (
                                    <li key={index} className="gallery-thumbs__item">
                                        <button className={`gallery-thumbs__button ${media.id === currentSlide.id ? 'gallery-thumbs__button--active' : ''}`}
                                                type="button"
                                                onClick={() => setCurrentSlide(media)}>
                                            <img className="gallery-thumbs__img" src={`${media.url}`} alt=""/>
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
