import React from 'react';
import Parser, { domToReact } from 'html-react-parser';
import { Link } from 'gatsby';

import './EntryDiv.css'

import Image from './Image';
import PhotographerP from './PhotographerP';
import ClickableLogo from './ClickableLogo';
import ImageGrid from './ImageGrid';
import SocialMediaLink from './SocialMediaLink';
import YoutubeVideo from './YoutubeVideo';


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

    const renderClickableLogo = () => {
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
    };

    const renderText = () => {
        const { text } = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                {Parser(text.childMarkdownRemark.html)}

            </div>
        );
    };

    const renderImageGrid = () => {
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
    };

    const renderImage = () => {
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
    };

    const renderTestimonial = () => {
        const { name, occupation, quote, image, alt, photographer } = entry;
    
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

                <PhotographerP
                photographer={photographer}
                ></PhotographerP>
    
            </div>
        );
    };

    const renderBlogPost = () => {
        const { slug, title, image, alt } = entry;
    
        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <Link 
                to={'/blogit/'+ slug}
                className={`EntryDiv_blogLink`}
                >

                <Image 
                alt={alt} 
                image={image}
                color='purple'
                className={`EntryDiv_blogImage`}
                ></Image>

                    <p
                    className={`EntryDiv_blogTitle`}
                    >
                        {title}
                    </p>

                </Link>

            </div>
        );
    };

    const renderSingleLine = () => {
        const { line } = entry;

        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >

            <p
            className={`EntryDiv_singleLineP`}
            >
            
                {line}
            
            </p>

            </div>
        );
    }

    const renderEmail = () => {
        const { email } = entry;

        jsx = (
            <div
            className={`EntryDiv EntryDiv___${entryType}`}
            >

                <address
                className={`EntryDiv_address`} 
                >
                    <a
                    className={`EntryDiv_contactEmail`}
                    href='mailto:info@ajakmajok.com'
                    >

                        {email}

                    </a>

                </address>

            </div>

        );
    };

    const renderYoutubeVideo = () => {
        const { url, alt } = entry;

        jsx = (
            <YoutubeVideo
            url={url}
            alt={alt}
            ></YoutubeVideo>
        )
    }

    const renderSocialMediaLinks = () => {
        const { links } = entry;

        jsx = (
            <div 
            className={`EntryDiv EntryDiv___${entryType}`}
            >
    
                {links.map(
                    (link) => (
    
                        <SocialMediaLink 
                        key={link.id}
                        link={link}
                        ></SocialMediaLink>
    
                    )
                )}
    
            </div>
        );
    }

    if (entryType === 'clickableLogo'){
        renderClickableLogo();
    }

    else if (entryType === 'text') {
        renderText();
    }

    else if (entryType === 'imageGrid'){
        renderImageGrid();
    }

    else if (entryType === 'image'){
        renderImage();
    }

    else if (entryType === 'testimonial') {
        renderTestimonial();
    }

    else if (entryType === 'blogPost'){
        renderBlogPost();
    }

    else if (entryType === 'singleLine') {
        renderSingleLine();
    }

    else if (entryType === 'email') {
        renderEmail();
    }

    else if (entryType === 'socialMediaLinks') {
        renderSocialMediaLinks();
    }

    else if (entryType === 'youtubeVideo') {
        renderYoutubeVideo();
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