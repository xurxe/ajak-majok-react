import React from 'react';

import './styles.css';

const Badge = (props) => {

    const { badge } = props;
    
    const jsx = (
        <div
        className={`CoverPhoto_badge CoverPhoto_badge___${badge.length}character`}
        >

            {badge}

        </div>
    );

    return jsx;
};

export default Badge;