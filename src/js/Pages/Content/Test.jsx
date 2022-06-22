import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import {Quotes} from '../../ReusableComponents/Quotes.jsx';
import {YouTube} from '../../ReusableComponents/YouTube.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';

export default function Test() {
    const code= `code 
    section`;
    const quotes = `hello 
    world`;

    const youTube = <iframe width="560" height="315" src="https://www.youtube.com/embed/Xj7AkwujeOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Programming Paradigms" /></a>
                <br/>
                <a id="namespaces"><H2 h2="Namespaces" /></a>
                <br/>
                <a id="standard_php_library."><H3 h3="standard php library" /></a>
                <br/>
                <a id="command_line_interface."><H4 h4="Command line interface." /></a>
                <br/>

                <div>hello world</div>


                <a id="xdebug"><Code code={code} /></a>
                <br/>

                <a><Quotes quotes={quotes} /></a>
                <br/>

                <a><YouTube youTube={youTube} /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#Namespaces">Namespaces</a></li>
                    <li><a href="#standard_php_library">Standard php library</a></li>
                    <li><a href="#command_line_interface">Command line interface.</a></li>
                    <li><a href="#xdebug">Xdebug</a></li>
                </ul>
            </div>
        </div>
    </div>
}