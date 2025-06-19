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
            <video className="welcome-screen__video"
                ref={videoRef}
                src="/video/video-main.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </>
    );
}

export default VideoBackground;
