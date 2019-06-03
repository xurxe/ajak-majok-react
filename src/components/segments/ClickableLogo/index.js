import React from 'react';

import './styles.css';

const ClickableLogo = ({ data, modifier }) => {
    const { url, logo, logoHover, alt } = data;

    const jsx = (
        <a 
        href={url}
        className={`ClickableLogo ClickableLogo___${modifier}`}
        >

            <div
            className={`ClickableLogo_div ClickableLogo_div___${modifier}`}
            >
                <img
                alt={alt} 
                src={logo.fluid.src}
                className={`ClickableLogo_img ClickableLogo_img___${modifier}`}
                />

                <img
                alt={alt} 
                src={logoHover.fluid.src}
                className={`ClickableLogo_img ClickableLogo_img___hover ClickableLogo_img___${modifier}`}
                />

            </div>
            
        </a>
    );

    return jsx;

};

export default ClickableLogo;