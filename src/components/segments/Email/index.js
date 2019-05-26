import React from 'react';

import './styles.css';

const Email = (props) => {

    const { data } = props;
    const { email } = data;

    const jsx = (
        <div
        className='Email'
        >

            <address
            className='Email_address' 
            >
                <a
                className='Email_a'
                href='mailto:info@ajakmajok.com'
                >

                    {email}

                </a>

            </address>

        </div>
    );

    return jsx;
};

export default Email;