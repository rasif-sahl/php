import React from 'react';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import '../../../scss/pages/main.scss';

export default function Introduction() {
    const h1 = "hello world";
    const h2 = "test world";
    const h3 = "test heading";
    const h4 = "test heading four";
    const code = `test 
    declaration`;


    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <H1 h1={h1} />
                <br/>
                <p>hello this is the first section.</p>
                <br/>
                <Code code={code}/>
                <br/>
                <H2 h2={h2}/>
                <br/>
                <H3 h3={h3}/>
                <br/>
                <H4 h4={h4}/>
            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                The submenu will be displayed here. (Introduction)
            </div>
        </div>
    </div>
}