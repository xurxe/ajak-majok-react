import React from 'react'
import { Link } from 'gatsby'


const BlogLink = ({entry}) => {
    const {slug, title} = entry;
    
    return (
        <div>
            <Link to={"/blogit/"+ slug}>
                {title}
            </Link>
        </div>
    );
};

export default BlogLink;