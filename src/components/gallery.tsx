import React, {useEffect, useRef, useState} from "react";
import {Media, Place} from "@/types/types";
import { v4 as uuidv4 } from 'uuid';
import {Carousel, Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.css";
import Image from "next/image";

type GalleryProps = {
    data: Place;
};

const Gallery = ({data}: GalleryProps) => {
    const carouselRef = useRef(null);
    const thumbCarouselRef = useRef(null);

    const photos = data.photos;
    const video = data.videos[0];
    console.log(video);

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
            type: "classic",
        },
    });

    useEffect(() => {
        const carouselOptions = {
            slidesPerPage: 1,
            infinite: true,
            transition: "fade",
            Dots: false,
            Navigation: true,
            Thumbs: {
                type: "classic",
            },
        };
        const carousel = new Carousel(carouselRef.current, carouselOptions);
        const thumbCarousel = new Carousel(thumbCarouselRef.current, {
            Sync: {
                target: carousel,
                friction: 0
            },
            slidesPerPage: 5,
            infinite: true,
            Dots: false,
            Navigation: true,
            center: true,
        });

        return () => {
            carousel.destroy();
            thumbCarousel.destroy();
        };
    }, []);

    return (
        <div className="gallery" >
            <div className="gallery__container" ref={carouselRef}>
                {
                    video && (
                        <div className="f-carousel__slide gallery__link">
                            <video className="gallery__video" autoPlay={false} controls={true}>
                                <source src={`${video.url}`} type="video/mp4"/>
                            </video>
                        </div>
                    )
                }
                {
                    photos.map((photo, index) => {
                        return  (
                            <div key={index + uuidv4()} className="f-carousel__slide gallery__link" data-thumb-src={photo.url}>
                                <a href={photo.url} data-fancybox="gallery">
                                    <Image fill className="gallery-thumbs__img" src={`/${photo.url}`} loading="lazy" alt=""/>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="gallery__thumbs lot-gallery-thumbs">
                <div className="gallery-thumbs__list" ref={thumbCarouselRef}>
                    {
                        video && (
                            <div className="f-carousel__slide gallery-thumbs__item">
                                <svg className="gallery-thumbs__icon" width="40" height="40" x="0" y="0" viewBox="0 0 30.051 30.051">
                                    <g>
                                        <path d="m19.982 14.438-6.24-4.536a.752.752 0 0 0-1.195.607v9.069a.75.75 0 0 0 1.195.606l6.24-4.532a.747.747 0 0 0 0-1.214z" fill="currentColor"></path>
                                        <path d="M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z"
                                              fill="currentColor"></path>
                                    </g>
                                </svg>
                                <img className="gallery-thumbs__img" src={`${data.backgroundImage}`} alt=""/>
                            </div>
                        )
                    }
                    {
                        photos.map((media: Media, index: number) => {
                            return (
                                <div key={index} className="f-carousel__slide gallery-thumbs__item">
                                    <Image fill className="gallery-thumbs__img" src={`/${media.url}`} loading="lazy" alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;
