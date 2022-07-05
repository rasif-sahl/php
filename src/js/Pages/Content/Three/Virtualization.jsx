import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Virtualization() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Virtualization" /></a>
                <br/>
                <a id="vagrant"><H2 h2="Vagrant" /></a>
                <br/>
                <a id="docker"><H2 h2="Docker" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#vagrant">Vagrant</a></li>
                    <li><a href="#docker">Docker</a></li>
                </ul>
            </div>
        </div>
    </div>
}