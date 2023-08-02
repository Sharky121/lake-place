import { Tooltip } from 'react-tooltip';
import Image from "next/image";
import {places} from "@/data/places";
import {Place} from "@/types/types";
import {useState} from "react";

const pathStyles = {
    stroke: 'red',
    fill: 'none',
    strokeWidth: '2',
}

type SvgMapProps = {
    handlePlacePopup: (place: Place) => void;
}

const SvgMap = ({handlePlacePopup}: SvgMapProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // @ts-ignore
    const handleMouseOver = (evt) => {
        evt.target.setAttribute('fill', 'red');
    }

    // @ts-ignore
    const handleMouseLeave = (evt) => {
        evt.target.setAttribute('fill', 'none');
    }

    return (
        <>
            <Image
                src='/images/map.jpeg'
                height={720}
                width={1280}
                className="logo__img"
                alt="Карта Дом у Озера"
            />
            <svg viewBox="0 0 1280 720" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '0' }}>
                {
                    places.map((place, index) => (
                        <path key={index}
                              onClick={() => handlePlacePopup(place)}
                              onMouseOver={handleMouseOver}
                              onMouseLeave={handleMouseLeave}
                              pointerEvents="visible"
                              d={place.path}
                              data-tooltip-id="area-title"
                              data-tooltip-content={`${place.title}`}
                              stroke={pathStyles.stroke} strokeWidth={pathStyles.strokeWidth} fill={pathStyles.fill} />
                    ))
                }
            </svg>
            <Tooltip id="area-title"/>
        </>
    )
}

export default SvgMap;


