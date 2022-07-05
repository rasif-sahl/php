import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Community() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Community" /></a>
                <br/>
                <a id="user_groups"><H2 h2="User Groups" /></a>
                <br/>
                <a id="conferences"><H2 h2="Conferences" /></a>
                <br/>
                <a id="elephpants"><H2 h2="Elephpants" /></a>
                <br/>

                {/* <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/> */}

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#user_groups">User Groups</a></li>
                    <li><a href="#conferences">Conferences</a></li>
                    <li><a href="#elephpants">Elephpants</a></li>
                </ul>
            </div>
        </div>
    </div>
}