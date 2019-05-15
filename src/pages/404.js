import React from "react";

import BodyDiv from '../layout/BodyDiv'
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer'

const NotFoundPage = () => (
    <BodyDiv
    slug='404'
    >

        <Nav></Nav>

        <Header 
        title='Oho!'
        subtitle='404: Sivua ei löytynyt.'
        modifier='404'
        ></Header>

        <Main 
        layout='404'>

        </Main>

        <Footer
        className='Footer Footer___404'
        ></Footer>

    </BodyDiv>

)

export default NotFoundPage
