import React from 'react';
import '../../../scss/pages/sideBar.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import {Quotes} from '../../ReusableComponents/Quotes.jsx';
import {YouTube} from '../../ReusableComponents/YouTube.jsx';

export default function CodingStyle() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a id="style_guide"><H1 h1="Code style guide" /></a>
                <p>This is the Code style guide section.</p>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#style_guide">Code style guide</a></li>
                </ul>
            </div>
        </div>
    </div>
}