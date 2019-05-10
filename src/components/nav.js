import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactResizeDetector from 'react-resize-detector';

import './Nav.css';

import NavA from './NavA';

class Nav extends Component {

    constructor() {
        super();

        this.state = {
            mobile: false,
            tucked: true,
            classNameNav: `
            Nav
            Nav___desktop
            `,
            classNameNavP: `
            Nav_p 
            Nav_p___desktop 
            Nav_p___visible
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___desktop 
            Nav_button___visible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop
            Nav_div___visible
            `,
        };
    };

    handleWindowResize = () => {
        if (!this.state.mobile && window.matchMedia('(max-width: 800px)').matches) {
            this.setState(() => ({
                mobile: true,
                classNameNavP: `
                Nav_p 
                Nav_p___desktop 
                Nav_p___invisible
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___desktop 
                Nav_button___invisible
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___desktop 
                Nav_div___invisible
                `,
            }));

            setTimeout(() => {
                this.setState(() => ({
                    classNameNav: `
                    Nav 
                    Nav___mobile 
                    Nav___mobile___tucked`
                    ,
                    classNameNavP: `
                    Nav_p 
                    Nav_p___mobile 
                    Nav_p___invisible`
                    ,
                    classNameNavButton: `
                    Nav_button 
                    Nav_button___mobile 
                    Nav_p___invisible`
                    ,
                    classNameNavDiv: `
                    Nav_div 
                    Nav_div___tucked`
                    ,
                }))
            }, 500);

            setTimeout(() => {
                this.setState(() => ({
                    classNameNavP: `
                    Nav_p 
                    Nav_p___mobile 
                    Nav_p___visible`
                    ,
                    classNameNavButton: `
                    Nav_button 
                    Nav_button___mobile 
                    Nav_button___visible`
                    ,
                }))
            }, 550);
        }

        else if (this.state.mobile && !window.matchMedia('(max-width: 800px)').matches) {
            this.setState(() => ({
                mobile: false, 
                tucked: true,
                classNameNavP: `
                Nav_p 
                Nav_p___invisible`
                ,
                classNameNavButton: `
                Nav_button 
                Nav_button___invisible`
                ,
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                Nav_div___invisible`
                ,
            }));

            setTimeout(() => {
                this.setState(() => ({
                    classNameNav: `
                    Nav 
                    Nav___desktop`
                    ,
                    classNameNavP: `
                    Nav_p 
                    Nav_p___desktop`
                    ,
                    classNameNavButton: `
                    Nav_button 
                    Nav_button___desktop`
                    ,
                    classNameNavDiv: `
                    Nav_div 
                    Nav_div___desktop
                    Nav_div___visible`
                    ,
                }))
            }, 500);
        };
    };

    handleClick = () => {

        console.log(this.state.tucked)
        this.setState((prevState) => (
            {tucked: !prevState.tucked}
        ));

        if (this.state.tucked) {
            this.setState(() => (
                {classNameNav: `
                Nav Nav___mobile 
                Nav___mobile___tucked`
                ,
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                Nav_div___invisible`
            }
            ));
            
            setTimeout(() => {
                this.setState(() => ({
                    classNameNavDiv: `
                    Nav_div 
                    Nav_div___untucked 
                    Nav_div___tucked`
                    ,
                }))
            }, 300);
        }

        else {
            this.setState(() => (
                {classNameNav: `
                Nav 
                Nav___mobile 
                Nav___mobile___untucked`
                ,
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                Nav_div___invisible`
            }
            ))

            setTimeout(() => {
                this.setState(() => ({
                    classNameNavDiv: `
                    Nav_div 
                    Nav_div___untucked 
                    Nav_div___untucked
                    `,
                }))
            }, 300);
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
                const { classNameNav, classNameNavP, classNameNavButton, classNameNavDiv } = this.state;

                const jsx = (

                    <ReactResizeDetector
                    handleWidth
                    onResize={this.handleWindowResize}
                    refreshMode='throttle'
                    refreshRate={100}
                    >
                    
                        <nav 
                        className={classNameNav}
                        >
            
                            <p 
                            className={classNameNavP}
                            >
                                Ajak Majok
                            </p>
            
                            <button 
                            className={classNameNavButton}
                            onClick={this.handleClick}
                            >
                                <i className="fas fa-bars"></i>
            
                            </button>
            
                            <div 
                            className={classNameNavDiv}>
            
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
                            className={`${classNameNavDiv} Nav_div___right`}
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