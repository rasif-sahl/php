import React from 'react';

export function Code({code}) {
    return <div className="display-lineBreak">
        <div className="code">
            <span></span>
            <p>{code}</p>
            <span></span>
        </div>
    </div>
}