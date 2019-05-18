import React from 'react';

import './Badge.css'

const Badge = ({ badge }) => {
    
    const jsx = (
        <div>
            <div
            className={`Badge Badge___${badge.length}character`}
            >
                {badge}
            </div>
        </div>

    );

    return jsx;
};

export default Badge;