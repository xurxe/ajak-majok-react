import React from 'react'
import Parser from 'html-react-parser'


const Text = ({entry}) => {
    const {text} = entry;
    
    return (
        <div>
            {Parser(text.childMarkdownRemark.html)}
        </div>
    );
};

export default Text;