import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

import Image from '../../common/Image';

const BlogLink = (props) => {

    const { data } = props;
    const { slug, title, image, alt } = data;

    const jsx = (
        <div 
        className="BlogPost"
        >

            <Link 
            to={'/blogit/'+ slug}
            className='BlogPost_link'
            >

                <Image 
                image={image}
                alt={alt} 
                color='purple'
                className='BlogPost_image'
                ></Image>

                <p
                className='BlogPost_title'
                >
                    {title}
                </p>

            </Link>

        </div>
    );

    return jsx;
};

export default BlogLink;