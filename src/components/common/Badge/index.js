import React from 'react';

import './styles.css';

// this is the round badge that can be shown on the bottom right corner of the CoverPhoto
const Badge = ({ badge }) => {
    
    const jsx = (
        <div
        className={`CoverPhoto_badge CoverPhoto_badge___${badge.length}character`}
        >

            {badge}

        </div>
    );
    
    return badge === "X" ? null : jsx;
};

export default Badge;