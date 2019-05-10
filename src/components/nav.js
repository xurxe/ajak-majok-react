import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactResizeDetector from 'react-resize-detector';

import './Nav.css';

import NavA from './NavA';

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            small: false,
            hidden: false,
            hiddenClass: '',
        };
    };

    handleWindowResize = () => {
        if (window.matchMedia('(max-width: 800px)').matches) {
            this.setState(() => ({
                small: true,
                hidden: true,
                hiddenClass: 'Nav_div___hidden',
            }))
        }

        else {
            this.setState(() => ({
                small: false, 
                hidden: false,
                hiddenClass: ''
            }))
        };
    }

    handleClick = () => {
        this.setState((prevState) => (
            {hidden: !prevState.hidden}
        ));

        if (this.setState.hidden) {
            this.setState(() => (
                {hiddenClass: 'Nav_div___hidden'}
            ));
        }

        else {
            this.setState(() => (
                {hiddenClass: ''}
            ));
        };
    };

    render() {

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
                const { contentfulNavigationBar } = data;
                const { internalLinks, externalLinks } = contentfulNavigationBar;
                const { hiddenClass } = this.state;

                const jsx = (

                    <ReactResizeDetector
                    handleWidth
                    onResize={this.handleWindowResize}
                    refreshMode='throttle'
                    refreshOptions={{
                        leading: true, 
                        trailing: false 
                    }}
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
            
                            <div 
                            className={`Nav_div Nav_div___internalLinks ${hiddenClass}`}>
            
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
                            className={`Nav_div Nav_div___externalLinks ${hiddenClass}`}
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

                    </ReactResizeDetector>

                );
        
                return jsx;
            }}
            />
        );
    };
};

export default Nav;