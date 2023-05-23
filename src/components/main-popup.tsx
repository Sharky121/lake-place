import React, {ReactNode} from 'react';
import OverlayingPopup from './overlaying-popup';

type MainPopupProps = {
    modificationClass?: string;
    isOpened: boolean;
    children: ReactNode;
    // @ts-ignore
    onClose: (boolean) => void;
}

const MainPopup = ({isOpened, children, onClose, modificationClass}: MainPopupProps) => {
    return (
        <OverlayingPopup onClose={() => onClose(false)} isOpened={isOpened}>
            <div className={`popup ${modificationClass ? modificationClass : ''}`}>
                <div className="popup__content">
                    <button className="popup__close" onClick={() => onClose(false)}>
                        <svg viewBox="0 0 24 24"
                             width="24"
                             height="24"
                             aria-hidden="true"
                             focusable="false">
                            <path fill="#ffffff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                        <span className="visually-hidden">Закрыть модальное окно</span>
                    </button>
                    {children}
                </div>
            </div>
        </OverlayingPopup>
    )
}

export default MainPopup;
