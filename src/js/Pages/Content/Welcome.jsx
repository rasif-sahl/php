import React from 'react';
import '../../../scss/pages/main.scss';
import {H1} from '../../ReusableComponents/Headings.jsx';

export default function Welcome() {
    return <div>

        <div className="welcome">
            <div className="content-display">

                <div className="welcome-top">
                    <div className="nice-to-meet">Nice to meet you!</div>
                    <div className="quote">
                        <span className="quote-top">Learn as if you will live forever,</span> 
                        <br/>
                        <span className="quote-bottom">live like you will die tomorrow.</span>
                    </div>
                    {/* <div className="developed-by">
                        <span className="name">Rasif Sahl </span>
                        <span className="company">OPENDESK</span>
                    </div> */}
                </div>
                
                <div className="welcome-heading">
                    <H1 h1="Welcome" />
                    {/* <hr/> */}
                </div>

                <p>This is the welcome section.</p>

            </div>
        </div>
    </div>
}