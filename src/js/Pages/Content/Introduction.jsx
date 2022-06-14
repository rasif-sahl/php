import React from 'react';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import {Quotes} from '../../ReusableComponents/Quotes.jsx';
import {YouTube} from '../../ReusableComponents/YouTube.jsx';


export default function Introduction() {
    const h1 = "hello world";
    const h2 = "test world";
    const h3 = "test heading";
    const h4 = "test heading four";
    const code = `test 
    declaration`;
    const quotes = `testing the quotes...
    hello world
    test the migration`;

    const youTube = <iframe width="560" height="315" src="https://www.youtube.com/embed/cB_GurouJcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a id="hash_link_test"><H1 h1={h1} /></a>
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
                <br/>
                <Quotes quotes={quotes}/>
                <br/>
                <YouTube youTube={youTube}/>
                <br/>
            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#hash_link_test">Click here to see the content below.</a></li>
                    <li><a href="">Section 2</a></li>
                    <li><a href="">another Section </a></li>
                </ul>
            </div>
        </div>
    </div>
}