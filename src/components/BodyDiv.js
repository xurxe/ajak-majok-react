import React from 'react';
import Helmet from 'react-helmet';

import './BodyDiv.css'

const BodyDiv = ({children}) => {

    const jsx = (
        <div 
        className='BodyDiv'
        >

            <Helmet>

            <title>
                Ajak Majok
            </title>

            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Arvo|Bungee+Shade|Bungee|Unna|Bungee+Inline|Bungee+Outline"
            />

            <link 
            rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" 
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" 
            crossorigin="anonymous" />

            </Helmet>

            {children}

        </div>

    );

    return jsx;
};

export default BodyDiv;