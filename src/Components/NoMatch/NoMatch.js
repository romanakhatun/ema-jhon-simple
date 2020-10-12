import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="noMatch">
            <h1>Page Not Found !!!</h1>
            <h2>404 Error</h2>
            <p>Go to home page <a className="link" href="/">Home</a></p>
        </div>
    );
};

export default NoMatch;