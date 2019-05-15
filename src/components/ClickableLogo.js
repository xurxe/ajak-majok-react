import React from 'react';
import Img from 'gatsby-image';

import './ClickableLogo.css'

class ClickableLogo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fluid: props.logo.fluid,
        };
    };

    handleMouseOver = () => {
        this.setState(() => ({
            fluid: this.props.logoHover.fluid,
        }));
    };

    handleMouseOut = () => {
        this.setState(() => ({
            fluid: this.props.logo.fluid,
        }));
    };

    render () {
        const { url, modifier, alt } = this.props;

        const jsx = (
            <a 
            href={url}
            onMouseOver={this.handleMouseOver}
            onFocus={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onBlur={this.handleMouseOut}
            >
                <Img 
                alt={alt} 
                fluid={this.state.fluid}
                fadeIn={false}
                className={`ClickableLogo ClickableLogo___${modifier}`}
                ></Img>
                
            </a>
        );
    
        return jsx;
    };

};

export default ClickableLogo;