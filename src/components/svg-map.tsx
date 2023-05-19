const SvgMap = () => {
    return (
        <div>
            <img src="/images/map.jpeg" width="1280px" height="720px" alt="My Image" />
            <svg viewBox="0 0 1280 720" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <path d="M10 10 L90 10 L90 90 L10 90 Z" stroke="red" strokeWidth="2" fill="none" />
            </svg>
        </div>
    )
}

export default SvgMap;
