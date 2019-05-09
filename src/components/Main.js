import React from 'react';

const Main = ({layout, children}) => {

    const jsx = (
        <main className={`Main Main___${layout}`}>
            {children || null}
        </main>
    );

    return jsx;
};

export default Main;