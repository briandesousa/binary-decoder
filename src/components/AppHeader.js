import React from 'react';
import './AppHeader.css';

function AppHeader(props) {
    return (
        <div>
            <h1>{props.title} <small>{props.subTitle}</small></h1>
        </div>
    );
}

export default AppHeader;