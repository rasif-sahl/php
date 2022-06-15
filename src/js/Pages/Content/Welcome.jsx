import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import {Quotes} from '../../ReusableComponents/Quotes.jsx';
import {YouTube} from '../../ReusableComponents/YouTube.jsx';

export default function Welcome() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a id="welcome"><H1 h1="Welcome" /></a>
                <p>This is the welcome section.</p>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#welcome">Welcome</a></li>
                </ul>
            </div>
        </div>
    </div>
}