import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';

export default function LanguageHighlights() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Language Highlights" /></a>
                <br/>
                <a id="programmingParadigms"><H2 h2="Programming Paradigms" /></a>
                <p>
                    PHP is a flexible, dynamic language that supports a variety of programming techniques. 
                    It has evolved dramatically over the years, notably adding a solid object-oriented model in PHP 5.0 (2004), 
                    anonymous functions and namespaces in PHP 5.3 (2009), and traits in PHP 5.4 (2012).
                </p>
                <br/>
                <a id="namespaces"><H2 h2="Namespaces" /></a>
                <br/>
                <a id="standard_php_library."><H2 h2="standard php library" /></a>
                <br/>
                <a id="command_line_interface."><H2 h2="Command line interface." /></a>
                <br/>
                <a id="xdebug"><H2 h2="Xdebug" /></a>
                <br/>

                <Pagination previousLink="/codingStyle" previous="Coding Style"  nextLink="/dependencyManagement" next="Dependency"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#programmingParadigms">Programming Paradigms</a></li>
                    <li><a href="#Namespaces">Namespaces</a></li>
                    <li><a href="#standard_php_library">Standard php library</a></li>
                    <li><a href="#command_line_interface">Command line interface.</a></li>
                    <li><a href="#xdebug">Xdebug</a></li>
                </ul>
            </div>
        </div>
    </div>
}