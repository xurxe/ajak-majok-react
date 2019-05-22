import React from 'react';

import './styles.css';

const YoutubeVideo = ({ data }) => {

    const { url, alt } = data;

    var regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

    let urlId; 
    
    var match = url.match(regex);

    if (match && match[7].length === 11) {
        urlId = match[7];
    } 
    
    else {
        console.log('Error')
    };
    
    const jsx = (
        <div 
        className='YoutubeVideo_div'
        >
            <iframe 
            className='YoutubeVideo_iframe' 
            src={`https://www.youtube.com/embed/${urlId}`}
            frameBorder='0' 
            allowFullScreen='allowfullscreen'
            title={alt}
            ></iframe>
        </div>
    );

    return jsx;
};

export default YoutubeVideo;
