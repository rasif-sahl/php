import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function ServersAndDeployment() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Servers and Deployment" /></a>
                <br/>
                <a id="namespaces"><H2 h2="Namespaces" /></a>
                <br/>
                <a id="standard_php_library."><H3 h3="standard php library" /></a>
                <br/>
                <a id="command_line_interface."><H4 h4="Command line interface." /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
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