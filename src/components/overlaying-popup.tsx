import React, {ReactNode, useEffect} from 'react';
import Portal from './portal';

type OverlayingPopupType = {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
};

const OverlayingPopup = ({children, onClose, isOpened}: OverlayingPopupType) => {
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpened]);

    if (!isOpened) {
        return null;
    }

    return (
        <Portal>
            <div className="popup-container" role="dialog">
                <div className="popup-overlay" role="button" tabIndex={0} onClick={onClose}></div>
                {children}
            </div>
        </Portal>
    )
}

export default OverlayingPopup;
