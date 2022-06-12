import React from 'react';

export function HashLink({hashUrl, hashLink}) {
    return <div className="display-lineBreak">
        <a href={hashUrl}>{hashLink}</a>
    </div>
}