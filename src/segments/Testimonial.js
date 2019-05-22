import React from 'react';
import Parser from 'html-react-parser';

import './Testimonial.css'

import Image from '../Image';
import PhotographerP from '../PhotographerP';

const Testimonial = ({ data }) => {
    
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