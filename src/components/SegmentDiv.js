import React from 'react';

import './SegmentDiv.css';

import BlogPost from './segments/BlogPost';
import ClickableLogo from './segments/ClickableLogo';
import Email from './segments/Email';
import ImageGrid from './segments/ImageGrid';
import ImageWithCredit from './segments/ImageWithCredit';
import SingleLine from './segments/SingleLine';
import SocialMediaLinks from './segments/SocialMediaLinks';
import Testimonial from './segments/Testimonial';
import Text from './segments/Text';
import YoutubeVideo from './segments/YoutubeVideo';

const SegmentDiv = ({ segment }) => {

    const { __typename } = segment;

    let jsx;

    if (__typename === 'ContentfulBlogPost'){
        jsx = (
            <BlogPost
            data={segment}
            ></BlogPost>
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
            data={segment}></SocialMediaLinks>
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