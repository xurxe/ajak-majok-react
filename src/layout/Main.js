import React from 'react';

import './Main.css'

import EntryDiv from '../components/EntryDiv';

const Main = ({ layout, entries }) => {

    const jsx = (
        <main 
        className={`Main Main___${(layout.toLowerCase())}`}
        >

            {entries && entries.map(entry => 
                <EntryDiv 
                entry={entry} 
                key={entry.id}
                ></EntryDiv>
            )}
            
        </main>
    );

    return jsx;
};

export default Main;