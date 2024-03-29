import React from 'react';

export function H1({h1}) {

    return <div className="heading-1">
        {h1}
        <hr/>
    </div>
}

export function H2({h2}) {

    return <div className="heading-2">
        {h2}
        <hr/>
    </div>
}

export function H3({h3}) {

    return <div className="heading-3">
        <i class="arrow right"></i> {h3}
    </div>
}

export function H4({h4}) {

    return <div className="heading-4">
        {h4}
    </div>
}