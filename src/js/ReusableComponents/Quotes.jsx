import React from 'react';

export function Quotes({quotes}) {
    return <div className="display-lineBreak">
        <div className="quotes">
            <span className="inner-quotes">"</span>
            <p>{quotes}</p>
            <span className="inner-quotes">"</span>
        </div>
    </div>
}