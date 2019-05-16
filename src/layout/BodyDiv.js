import React from 'react';
import Helmet from 'react-helmet';

import './BodyDiv.css'

const BodyDiv = ({ slug, children }) => {

    let lang;

    // this is necessary because we can't have more than 2 locals with the free version of Contentful
    const determineLanguage = (slug) => {
        if (slug === 'english') {
            lang = 'en'
        }
    
        else if (slug === ('svenska')) {
            lang = 'sv'
        }
    
        else {
            lang = 'fi';
        }

        return lang;
    };

    const jsx = (
        <div 
        className={`BodyDiv BodyDiv___${slug}`}
        >

            <Helmet>

                <html lang={determineLanguage(slug)}></html>

                <title>
                    Ajak Majok
                </title>

                <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css?family=Arvo|Bungee+Shade|Bungee|Unna|Bungee+Inline|Bungee+Outline'
                />

                <link 
                rel='stylesheet' 
                href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
                integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
                crossorigin='anonymous' />
            
            </Helmet>

            <p id='top'></p>

            {children}

        </div>

    );

    return jsx;
};

export default BodyDiv;