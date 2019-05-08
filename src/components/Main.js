import React from 'react'

const Main = ({layout, children}) => {

    const jsx = (
        <main className={layout}>
            {children || null}
        </main>
    );

    return jsx;
};

export default Main;