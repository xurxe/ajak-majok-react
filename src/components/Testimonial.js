import React from 'react'
import Parser from 'html-react-parser'

const Testimonial = ({entry}) => {
    const {name, occupation, quote} = entry;
    
    return (
        <div>
            <p>
                {name} 
            </p>

            <p>
                ({occupation})
            </p>

            {Parser(quote.childMarkdownRemark.html)}
        </div>
    );
};

export default Testimonial;