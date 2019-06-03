import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactResizeDetector from 'react-resize-detector';

import './styles.css';

import NavA from '../../common/NavA';

class Nav extends Component {

    // i use the state to manage the rendering of the navigation bar
    state = {
        desktop: true,
        tucked: true,
        classNameNav: `
        Nav 
        Nav___desktop
        `,
        classNameNavP: `
        Nav_p 
        invisible
        `,
        classNameNavButton: `
        Nav_button 
        invisible
        `,
        classNameNavDiv: `
        Nav_div 
        invisible
        `,
    };

    // on mount, if the screen size is under 900px, render mobile layout; otherwise, render desktop layout
    componentDidMount = () => {
        if (window.matchMedia('(max-width: 900px)').matches) {
            this.renderMobile();
        }

        else {
            this.renderDesktop();
        }
    };

    renderDesktop = () => {
        this.setState(() => ({
            classNameNav: `
            Nav 
            Nav___desktop
            `,
            classNameNavP: `
            Nav_p 
            Nav_p___desktop
            invisible
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___desktop
            invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop 
            visible
            `,
        }));
    };

    renderMobile = () => {
        this.setState(() => ({
            desktop: false,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___tucked
            `,
            classNameNavP: `
            Nav_p 
            Nav_p___mobile 
            visible
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___mobile 
            visible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___tucked
            invisible
            `,
        }));
    };

    // when the window resizes...
    handleWindowResize = () => {

        // if currently on desktop layout, and it's a small screen, transition to mobile layout
        if (
            this.state.desktop
            && window.matchMedia('(max-width: 900px)').matches
        ) {
            this.changeDesktopToTucked();
        }

        // otherwise, if currently on tucked mobile layout, transition from tucked to desktop
        else if (
            !this.state.desktop 
            && this.state.tucked
            && !window.matchMedia('(max-width: 900px)').matches
        ) {
            this.changeTuckedToDesktop();
        }

        // otherwise, if currently on untucked mobile layout, transition from untucked to desktop
        else if (
            !this.state.desktop 
            && !this.state.tucked
            && !window.matchMedia('(max-width: 900px)').matches
        ) {
            this.changeUntuckedToDesktop();
        };
    };

    changeDesktopToTucked = () => {
        this.setState(() => ({
            desktop: false,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop 
            invisible
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___mobile 
                Nav___tucked
                `,
                classNameNavP: `
                Nav_p 
                Nav_p___mobile 
                invisible
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___mobile 
                invisible
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___tucked
                `,
            }));
        }, 500);

        setTimeout(() => {
            this.setState(() => ({
                classNameNavP: `
                Nav_p 
                Nav_p___mobile 
                visible
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___mobile 
                visible
                `,
            }));
        }, 550);
    };

    changeTuckedToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            tucked: true,
            classNameNavP: `
            Nav_p 
            Nav_p___mobile
            invisible
            `,
            classNameNavButton: `
            Nav_button 
            Nav_button___mobile
            invisible
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___desktop
            invisible
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___desktop
                `,
                classNameNavP: `
                Nav_p 
                Nav_p___desktop
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___desktop
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___desktop
                visible
                `,
            }));
        }, 500);
    };

    changeUntuckedToDesktop = () => {
        this.setState(() => ({
            desktop: true, 
            tucked: true,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            invisible
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___mobile 
                Nav___tucked
                `,
                classNameNavP: `
                Nav_p 
                Nav_p___mobile
                invisible
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___mobile
                invisible
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___desktop
                invisible
                `,
            }));
        }, 400);

        setTimeout(() => {
            this.setState(() => ({
                classNameNav: `
                Nav 
                Nav___desktop
                `,
                classNameNavP: `
                Nav_p 
                Nav_p___desktop
                `,
                classNameNavButton: `
                Nav_button 
                Nav_button___desktop
                `,
                classNameNavDiv: `
                Nav_div 
                Nav_div___desktop
                visible
                `,
            }));
        }, 900);
    };

    // when you click on the button (which is only displayed on mobile), toggle tuck/untuck
    handleClick = () => {

        if (this.state.tucked) {
            this.untuck();
        }

        else {
            this.tuck();
        };
    };

    untuck = () => {
        this.setState(() => ({
            tucked: false,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___untucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            invisible
            `,
        }));

        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___untucked 
                visible
                `,
            }));
        }, 300);
    };

    tuck = () => {
        this.setState(() => ({
            tucked: true,
            classNameNav: `
            Nav 
            Nav___mobile 
            Nav___tucked
            `,
            classNameNavDiv: `
            Nav_div 
            Nav_div___untucked 
            invisible
            `,
        }));
        
        setTimeout(() => {
            this.setState(() => ({
                classNameNavDiv: `
                Nav_div 
                Nav_div___tucked
                invisible
                `,
            }));
        }, 300);
    };

    render() {
        // to fetch from Contentful into components, you need to wrap it all in the StaticQuery component
        const staticQuery = (
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

                                <i className="fas fa-bars "></i>
            
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

        return staticQuery;
    };
};

export default Nav;