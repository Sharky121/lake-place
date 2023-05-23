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
                            <use xlinkHref="#ico-cross" x="0" y="0"></use>
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
