import React from 'react';

export function YouTube({youTube}) {
    return <div className="youtube">
        <hr/>
        <div className="youtube-p">Have a small break.</div>
        <div className="youtube-iframe">{ youTube }</div>
        <hr/>
    </div>
}