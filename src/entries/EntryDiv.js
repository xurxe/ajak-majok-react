import React from 'react';

import './EntryDiv.css';

import BlogPost from './BlogPost';
import ClickableLogo from './ClickableLogo';
import Email from './Email';
import ImageGrid from './ImageGrid';
import ImageWithCredit from './ImageWithCredit';
import SingleLine from './SingleLine';
import SocialMediaLinks from './SocialMediaLinks';
import Testimonial from './Testimonial';
import Text from './Text';
import YoutubeVideo from './YoutubeVideo';

const EntryDiv = ({ entry }) => {

    const { __typename } = entry;

    let jsx;

    if (__typename === 'ContentfulBlogPost'){
        jsx = (
            <BlogPost
            data={entry}
            ></BlogPost>
        );
    }

    else if (__typename === 'ContentfulClickableLogo'){
        jsx = (
            <ClickableLogo
            data={entry}
            modifier='main'
            ></ClickableLogo>
        );
    }

    else if (__typename === 'ContentfulEmail') {
        jsx = (
            <Email
            data={entry}
            ></Email>
        );
    }

    else if (__typename === 'ContentfulImageGrid'){
        jsx = (
            <ImageGrid
            data={entry}
            ></ImageGrid>
        );
    }

    else if (__typename === 'ContentfulImage'){
        jsx = (
            <ImageWithCredit
            data={entry}
            ></ImageWithCredit>
        );
    }

    else if (__typename === 'ContentfulSingleLine') {
        jsx = (
            <SingleLine
            data={entry}
            ></SingleLine>
        );
    }

    else if (__typename === 'ContentfulSocialMediaLinks') {
        jsx = (
            <SocialMediaLinks
            data={entry}></SocialMediaLinks>
        );
    }

    else if (__typename === 'ContentfulTestimonial') {
        jsx = (
            <Testimonial
            data={entry}
            ></Testimonial>
        );
    }

    else if (__typename === 'ContentfulText') {
        jsx = (
            <Text
            data={entry}
            ></Text>
        );
    }

    else if (__typename === 'ContentfulYoutubeVideo') {
        jsx = (
            <YoutubeVideo
            data={entry}
            ></YoutubeVideo>
        );
    }

    else {

        jsx = (
            <div
            className='EntryDiv_missingType'>
                <p>[{__typename}]</p> <br />
            </div>
        );
    };

    return jsx;
};

export default EntryDiv;