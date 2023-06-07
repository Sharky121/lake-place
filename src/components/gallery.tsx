import React, {useState} from "react";
import {Media, Place} from "@/types/types";
import Fancybox from '@/components/fancybox';
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
            <Fancybox>
                <a data-fancybox="gallery" className="gallery__link"
                   href={`${slide.url}`}>
                    <img className="gallery__img" src={`${slide.url}`} alt=""/>
                </a>
            </Fancybox>
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
                                                <svg width="40" height="40" x="0"
                                                     y="0" viewBox="0 0 30.051 30.051"
                                                     className="gallery-thumbs__icon">
                                                    <g>
                                                        <path d="m19.982 14.438-6.24-4.536a.752.752 0 0 0-1.195.607v9.069a.75.75 0 0 0 1.195.606l6.24-4.532a.747.747 0 0 0 0-1.214z" fill="currentColor"></path>
                                                        <path d="M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z"
                                                        fill="currentColor"></path>
                                                    </g>
                                                </svg>
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
                                            <Image fill className="gallery-thumbs__img" src={`/${media.url}`} alt=""/>
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
