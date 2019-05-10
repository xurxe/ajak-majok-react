import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactResizeDetector from 'react-resize-detector';


import './Nav.css';

import NavA from './NavA';

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            windowWidth: window.innerWidth,
            hidden: true,
        }
    }


    handleWindowResize = () => {
        this.setState((() => ({windowWidth: window.innerWidth})));
        console.log(this.state.windowWidth)
    }

    handleClick = () => {
        this.setState(((prevState) => ({hidden: !prevState.hidden})));
    };

    render() {

        if (this.state.windowWidth < 800 && this.state.hidden) {
            return (

                <ReactResizeDetector 
                handleWidth 
                onResize={this.handleWindowResize}
                refreshMode='throttle'
                >
                
                    <nav className='Nav'>
                        
                        <p className='Nav_p'>
                            Ajak Majok
                        </p>

                        <button 
                        className='Nav_button'
                        onClick={this.handleClick}
                        >
                            <i className="fas fa-bars"></i>

                        </button>

                    </nav>

                </ReactResizeDetector>

            )
        }

        else {
            return (
                <StaticQuery 
                query={
                    graphql`
                    query {
                        contentfulNavigationBar{
                            id
                            internalLinks {
                                ... on ContentfulIndex {
                                    id
                                    longTitle
                                    iconFontAwesome
                                }
                                ... on ContentfulPage {
                                    id
                                    shortTitle
                                    slug
                                }
                            }
                            externalLinks {
                                ... on ContentfulElectionLink {
                                    id
                                    name
                                    url
                                }
                                ... on ContentfulSocialMediaLink {
                                    id
                                    name
                                    url
                                    iconFontAwesome
                                }
                            }
                        }
                    }    
                `}
                render={data => {
                    const {contentfulNavigationBar} = data;
                    const {internalLinks, externalLinks} = contentfulNavigationBar;
                    const jsx = (
                        <nav className='Nav'>
            
                            <p className='Nav_p'>
                                Ajak Majok
                            </p>
            
                            <button 
                            className='Nav_button'
                            onClick={this.handleClick}
                            >
                                <i className="fas fa-bars"></i>
            
                            </button>
            
                            <div 
                            className={`Nav_div Nav_div___internalLinks`}>
            
                                {internalLinks.map(
                                    (link) => (
            
                                        <NavA 
                                        key={link.id}
                                        link={link}
                                        ></NavA>
            
                                    )
                                )}
            
                            </div>
            
                            <div 
                            className={`Nav_div Nav_div___externalLinks`}
                            >
            
                                {externalLinks.map(
                                    (link) => (
            
                                        <NavA 
                                        key={link.id}
                                        link={link}
                                        ></NavA>
            
                                    )
                                )}
            
                            </div>
            
                        </nav>
                    );
            
                    return jsx;
                }}
                />
            )
        }

    }
}

export default Nav;