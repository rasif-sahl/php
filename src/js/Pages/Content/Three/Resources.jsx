import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Resources() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Resources" /></a>
                <br/>
                <a id="from_the_source"><H2 h2="From the Source" /></a>
                <br/>
                <a id="people_to_follow"><H2 h2="People to Follow" /></a>
                <br/>
                <a id="PHP_PaaS_providers"><H2 h2="PHP PaaS Providers" /></a>
                <br/>
                <a id="frameworks"><H2 h2="Frameworks" /></a>
                <br/>
                <a id="other_useful_resources"><H2 h2="Other Useful Resources" /></a>
                <br/>
                <a id="video_tutorials"><H2 h2="Video Tutorials" /></a>
                <br/>
                <a id="books"><H2 h2="Books" /></a>
                <br/>

                <Pagination previousLink="/documentingYourCode" previous="PHPDoc"  nextLink="/community" next="Community"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#from_the_source">From the Source</a></li>
                    <li><a href="#people_to_follow">People to Follow</a></li>
                    <li><a href="#PHP_PaaS_providers">PHP PaaS Providers</a></li>
                    <li><a href="#frameworks">Frameworks</a></li>
                    <li><a href="#other_useful_resources">Other Useful Resources</a></li>
                    <li><a href="#video_tutorials">Video Tutorials</a></li>
                    <li><a href="#books">Books</a></li>

                </ul>
            </div>
        </div>
    </div>
}