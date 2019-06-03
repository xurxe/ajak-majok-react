import React from 'react';

import './styles.css';

import BlogLink from '../../segments/BlogLink';
import ClickableLogo from '../../segments/ClickableLogo';
import Email from '../../segments/Email';
import ImageGrid from '../../segments/ImageGrid';
import ImageWithCredit from '../../segments/ImageWithCredit';
import SingleLine from '../../segments/SingleLine';
import SocialMediaLinks from '../../segments/SocialMediaLinks';
import Testimonial from '../../segments/Testimonial';
import Text from '../../segments/Text';
import YoutubeVideo from '../../segments/YoutubeVideo';

// segments are chunks of <main> content coming from Contentful
// this component decides how to render each segment based on its type
// src/components/segments contains all of the different components referenced here

const SegmentDiv = ({ segment, modifier }) => {
    const { __typename, slug } = segment;

    let jsx;

    if (__typename === 'ContentfulBlogPost' 
    && slug !== 'blogi'){ // blog page with slug 'blogi' is an example for the client, so it should not be rendered
        jsx = (
            <BlogLink
            data={segment}
            ></BlogLink>
        );
    }

    else if (__typename === 'ContentfulClickableLogo'){
        jsx = (
            <ClickableLogo
            data={segment}
            modifier='main'
            ></ClickableLogo>
        );
    }

    else if (__typename === 'ContentfulEmail') {
        jsx = (
            <Email
            data={segment}
            ></Email>
        );
    }

    else if (__typename === 'ContentfulImageGrid'){
        jsx = (
            <ImageGrid
            data={segment}
            ></ImageGrid>
        );
    }

    else if (__typename === 'ContentfulImage'){
        jsx = (
            <ImageWithCredit
            data={segment}
            ></ImageWithCredit>
        );
    }

    else if (__typename === 'ContentfulSingleLine') {
        jsx = (
            <SingleLine
            data={segment}
            ></SingleLine>
        );
    }

    else if (__typename === 'ContentfulSocialMediaLinks') {
        jsx = (
            <SocialMediaLinks
            data={segment}
            ></SocialMediaLinks>
        );
    }

    else if (__typename === 'ContentfulTestimonial') {
        jsx = (
            <Testimonial
            data={segment}
            ></Testimonial>
        );
    }

    else if (__typename === 'ContentfulText') {
        jsx = (
            <Text
            data={segment}
            modifier={modifier}
            ></Text>
        );
    }

    else if (__typename === 'ContentfulYoutubeVideo') {
        jsx = (
            <YoutubeVideo
            data={segment}
            ></YoutubeVideo>
        );
    }

    else {
        jsx = (
            <div
            className='SegmentDiv_missingType'>
                <p>[{__typename}]</p> <br />
            </div>
        );
    };

    return jsx;
};

export default SegmentDiv;