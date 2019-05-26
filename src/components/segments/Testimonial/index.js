import React from 'react';
import Parser from 'html-react-parser';

import './styles.css'

import Image from '../../common/Image';
import PhotographerP from '../../common/PhotographerP';

const Testimonial = (props) => {
    
    const { data } = props;
    const { name, occupation, quote, image, alt, photographer } = data;
    
    const jsx = (
        <div 
        className='Testimonial'>

            <Image 
            alt={alt} 
            image={image}
            color='yellow'
            ></Image>

            <p 
            className='Testimonial_nameP'
            >

                {name} 

            </p>

            <p 
            className='Testimonial_occupationP'
            >

                ({occupation})

            </p>

            <div
            className='Testimonial_quoteDiv'>

                {Parser(quote.childMarkdownRemark.html)}
                
            </div>

            <PhotographerP
            photographer={photographer}
            ></PhotographerP>

        </div>
    );

    return jsx;
};

export default Testimonial;