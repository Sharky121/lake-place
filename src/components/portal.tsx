import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react';

// @ts-ignore
const Portal = ({children}) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    }, []);

    return ReactDOM.createPortal(children, container);
}

export default Portal;
