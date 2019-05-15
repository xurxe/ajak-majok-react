import React from 'react';

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
        const { url, logo, logoHover, modifier, alt } = this.props;

        const jsx = (
            <a 
            href={url}
            onMouseOver={this.handleMouseOver}
            onFocus={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onBlur={this.handleMouseOut}
            className={`ClickableLogo ClickableLogo___${modifier}`}
            >

            <div
            className={`ClickableLogo_div ClickableLogo_div___${modifier}`}
            >
                <img
                alt={alt} 
                src={logo.fluid.src}
                className={'ClickableLogo_img'}
                />

                <img
                alt={alt} 
                src={logoHover.fluid.src}
                className={'ClickableLogo_img ClickableLogo_img___hover'}
                />

            
            </div>
                
            </a>
        );
    
        return jsx;
    };

};

export default ClickableLogo;