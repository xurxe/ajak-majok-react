import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './styles.css';

// these are the previous ("edellinen") and next ("seuraava") buttons shown at the bottom of each blogi (blog post pages)
const BlogNavigation = ({ previousSlug, nextSlug }) => {
    
    const jsx = (
        <div
        className='BlogNavigation'
        >                
            <Link 
            className='BlogNavigation_a'
            to={`/blogit/${previousSlug}`}
            >

                {Parser('<i class="fas fa-arrow-left"></i>&ensp;edellinen')}

            </Link>

            <Link 
            className='BlogNavigation_a'
            to={`/blogit/${nextSlug}`}
            >

                {Parser('seuraava&ensp;<i class="fas fa-arrow-right"></i>')}

            </Link>
        
        </div>
    );

    return jsx;
};

export default BlogNavigation;