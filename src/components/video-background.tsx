import {useEffect, useRef} from "react";

type VideoBackgroundProps = {
    videoId: string;
}

const VideoBackground = ({videoId}: VideoBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef])

    return (
        <>
            <iframe
                frameBorder="0" allow="clipboard-write; autoplay" 
                webkitAllowFullScreen 
                mozallowfullscreen
                allowFullScreen
                src={`https://rutube.ru/play/embed/${videoId}`}
            />
        </>
    );
}

export default VideoBackground;
