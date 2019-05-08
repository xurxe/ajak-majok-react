import React from 'react'
import Parser from 'html-react-parser'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import PhotographerP from './PhotographerP'

const EntryDiv = ({entry}) => {

    const sliceIndex = ('Contentful').length;

    const entryType = (
        (entry.__typename)
        .slice(sliceIndex, sliceIndex + 1)
        .toLowerCase()
        .concat((entry.__typename)
        .slice(sliceIndex + 1))
    )

    let jsx;

    if (entry.__typename === 'ContentfulText'){
        const {text} = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                {Parser(text.childMarkdownRemark.html)}

            </div>
        );
    }

    else if (entry.__typename === 'ContentfulImage'){
        const {image, alt, photographer, shadow} = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <Img 
                alt={alt} 
                fluid={image.fluid}
                className={`EntryDiv_img___${shadow}Shadow`}
                ></Img>
    
                <PhotographerP
                photographer={photographer}
                ></PhotographerP>

            </div>
        );
    }

    else if (entry.__typename === 'ContentfulTestimonial') {
        const {name, occupation, quote, image, alt} = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}>

                <Img 
                alt={alt} 
                fluid={image.fluid}
                className={`EntryDiv_img___yellowShadow`}
                ></Img>

                <p 
                className='EntryDiv_p___name'
                >

                    {name} 

                </p>
    
                <p 
                className='EntryDiv_p___occupation'
                >

                    ({occupation})

                </p>
    
                {Parser(quote.childMarkdownRemark.html)}
            </div>
        );
    }

    else if (entry.__typename === 'ContentfulBlogPost'){
        const {slug, title, image, alt} = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <Link 
                to={'/blogit/'+ slug}
                className={`EntryDiv_a___${entryType}`}
                >

                    <Img 
                    alt={alt} 
                    fluid={image.fluid}
                    className={`EntryDiv_img___purpleShadow`}
                    ></Img>

                    {title}

                </Link>

            </div>
        );
    }

    return jsx;
};

export default EntryDiv;