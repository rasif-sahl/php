import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import {Quotes} from '../../ReusableComponents/Quotes.jsx';
import {YouTube} from '../../ReusableComponents/YouTube.jsx';

export default function CodingPractices() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Coding practices" /></a>
                <br/>
                <a id="the_basics"><H2 h2="The basics" /></a>
                <br/>
                <a id="Date_time"><H2 h2="Date and time" /></a>
                <br/>
                <a id="design_patterns."><H2 h2="Design patterns" /></a>
                <br/>
                <a id="utf_8"><H2 h2="Working with UTF-8" /></a>
                <br/>
                <a id="Internationalization_Localization"><H2 h2="Internationalization and Localization" /></a>
                <br/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#the_basics">The basics</a></li>
                    <li><a href="#Date_time">Date and time</a></li>
                    <li><a href="#design_patterns">Design patterns</a></li>
                    <li><a href="#utf_8">Working with UTF-8</a></li>
                    <li><a href="#Internationalization_Localization">Internationalization and Localization</a></li>
                </ul>
            </div>
        </div>
    </div>
}