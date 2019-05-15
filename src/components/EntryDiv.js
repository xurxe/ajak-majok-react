import React from 'react';
import Parser, { domToReact } from 'html-react-parser';
import { Link } from 'gatsby';

import './EntryDiv.css'

import Image from './Image';
import PhotographerP from './PhotographerP';
import ClickableLogo from './ClickableLogo';
import ImageGrid from './ImageGrid';

const EntryDiv = ({ entry }) => {

    const { __typename } = entry;
    const sliceIndex = ('Contentful').length;
    const entryType = (
        (__typename)
        .slice(sliceIndex, sliceIndex + 1)
        .toLowerCase()
        .concat((__typename).slice(sliceIndex + 1))
    );

    let jsx;

    if (entryType === 'text'){
        const { text } = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                {Parser(text.childMarkdownRemark.html)}

            </div>
        );
    }

    else if (entryType === 'image'){
        const { image, alt, photographer, shadow } = entry;
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

    else if (entryType === 'testimonial') {
        const { name, occupation, quote, image, alt } = entry;
    
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

    else if (entryType === 'blogPost'){
        const { slug, title, image, alt } = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <Link 
                to={'/blogit/'+ slug}
                className='EntryDiv_blogLink'
                >

                <Image 
                alt={alt} 
                image={image}
                color='purple'
                className='EntryDiv_blogImage'
                ></Image>

                    <p
                    className='EntryDiv_blogTitle'
                    >
                        {title}
                    </p>

                </Link>

            </div>
        );
    }

    else if (entryType === 'clickableLogo'){
        const { url, logo, logoHover, alt } = entry;
    
        jsx = (
            <ClickableLogo
            url={url}
            logo={logo}
            logoHover={logoHover}
            alt={alt}
            modifier='main'
            ></ClickableLogo>
        );
    }

    else if (entryType === 'imageGrid'){
        const { photographers,
            image1, image2, image3, image4, image5, image6, 
            alt1, alt2, alt3, alt4, alt5, alt6
        } = entry;

        const images = [image1, image2, image3, image4, image5, image6];
        const alts = [alt1, alt2, alt3, alt4, alt5, alt6];
    
        jsx = (
            <ImageGrid
            photographers={photographers}
            images={images}
            alts={alts}
            className={`EntryDiv EntryDiv___${entryType}`}
            ></ImageGrid>
        );
    }

    else {

        jsx = (
            <div>
                <p>[{entryType}]</p> <br />
            </div>
        );
    };

    return jsx;
};

export default EntryDiv;