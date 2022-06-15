import React from 'react';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';


export default function Introduction() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <H1 h1="Getting started" />
                <br/>
                <a id="stable_version"><H2 h2="Using the current stable version" /></a>
                <br/>
                <a id="web_server"><H2 h2="Built in web-server" /></a>
                <br/>
                <a id="mac_setup"><H2 h2="Mac setup" /></a>
                <br/>
                <a id="window_setup"><H2 h2="Windows setup" /></a>
                <br/>
                <a id="directory_structure"><H2 h2="Common directory structure" /></a>
                <br/>
            </div>
        </div>

        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#stable_version">Using the current stable version</a></li>
                    <li><a href="#web_server">Built in web-server</a></li>
                    <li><a href="#mac_setup">Mac setup</a></li>
                    <li><a href="#window_setup">Windows setup</a></li>
                    <li><a href="#directory_structure">Common directory structure</a></li>
                </ul>
            </div>
        </div>
        
    </div>
}