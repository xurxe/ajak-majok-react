import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const Text = ({ data, modifier }) => {

    const { text } = data;
    
    const jsx = (
        <div 
        className={`Text Text___${modifier}`}
        >

            {Parser(text.childMarkdownRemark.html)}

        </div>
    );

    return jsx;
};

export default Text;