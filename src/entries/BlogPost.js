import React from 'react';
import { Link } from 'gatsby';

import './BlogPost.css';

import Image from '../components/Image';

const blogPost = ({ data }) => {
    
    const { slug, title, image, alt } = data;

    const jsx = (
        <div 
        className="BlogPost"
        >

            <Link 
            to={'/blogit/'+ slug}
            className={`BlogPost_link`}
            >

                <Image 
                image={image}
                alt={alt} 
                color='purple'
                className={`BlogPost_image`}
                ></Image>

                <p
                className={`BlogPost_title`}
                >
                    {title}
                </p>

            </Link>

        </div>
    );

    return jsx;
};

export default blogPost;