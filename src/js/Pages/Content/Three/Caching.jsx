import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Caching() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Caching" /></a>
                <br/>
                <a id="opcode_cache"><H2 h2="Opcode Cache" /></a>
                <br/>
                <a id="object_caching"><H2 h2="Object Caching" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#opcode_cache">Opcode Cache</a></li>
                    <li><a href="#object_caching">Object Caching</a></li>
                </ul>
            </div>
        </div>
    </div>
}