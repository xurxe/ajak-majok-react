import React from 'react';
import Parser from 'html-react-parser';

import './Text.css';

const Text = ({ data }) => {

    const { text } = data;
    
    const jsx = (
        <div 
        className='Text'
        >

            {Parser(text.childMarkdownRemark.html)}

        </div>
    );

    return jsx;
};

export default Text;