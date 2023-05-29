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
                title="YouTube video player"
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=${videoId}`}
            />
        </>
    );
}

export default VideoBackground;
