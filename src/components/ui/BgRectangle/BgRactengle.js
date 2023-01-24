import React from 'react';
import cl from './BgRectangle.module.css'
const BgRactengle = ({children}) => {
    return (
        <div className={cl.rectangle}>
            {children}
        </div>
    );
};

export default BgRactengle;