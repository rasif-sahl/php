import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Databases() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Databases" /></a>
                <br/>
                <a id="MySQL_extension"><H2 h2="MySQL Extension" /></a>
                <br/>
                <a id="PDO_extension"><H2 h2="PDO Extension" /></a>
                <br/>
                <a id="interacting_with_databases"><H2 h2="Interacting with Databases" /></a>
                <br/>
                <a id="abstraction_layers"><H2 h2="Abstraction Layers" /></a>
                <br/>

                <Pagination previousLink="/dependencyInjection" previous="Injection"  nextLink="/templating" next="Templating"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#MySQL_extension">MySQL Extension</a></li>
                    <li><a href="#PDO_extension">PDO Extension</a></li>
                    <li><a href="#interacting_with_databases">Interacting with Databases</a></li>
                    <li><a href="#abstraction_layers">Abstraction Layers</a></li>
                </ul>
            </div>
        </div>
    </div>
}