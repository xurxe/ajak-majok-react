import React from 'react';
import Parser, { domToReact } from 'html-react-parser';
import { Link } from 'gatsby';

import Image from './Image';
import PhotographerP from './PhotographerP';

const EntryDiv = ({entry}) => {

    const sliceIndex = ('Contentful').length;
    const entryType = (
        (entry.__typename)
        .slice(sliceIndex, sliceIndex + 1)
        .toLowerCase()
        .concat((entry.__typename).slice(sliceIndex + 1))
    );

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
        const color = (shadow.toLowerCase());
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <Image 
                alt={alt} 
                image={image}
                color={color}
                ></Image>
    
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

                <Image 
                alt={alt} 
                image={image}
                color='yellow'
                ></Image>

                <p 
                className='EntryDiv_nameP'
                >

                    {name} 

                </p>
    
                <p 
                className='EntryDiv_occupationP'
                >

                    ({occupation})

                </p>

                <div
                className='EntryDiv_quoteDiv'>
                    {Parser(
                        quote.childMarkdownRemark.html, { 
                            replace: (domNode) => {
                                if (domNode.name === 'p') {

                                    jsx = (
                                        <p 
                                        className='EntryDiv_quoteP'
                                        >

                                            {domToReact(domNode.children)}

                                        </p>
                                    );

                                    return jsx;
                                }
                            }
                        }
                    )}
                </div>
    
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

                <Image 
                alt={alt} 
                image={image}
                color='purple'
                ></Image>

                    {title}

                </Link>

            </div>
        );
    }

    return jsx;
};

export default EntryDiv;