import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2} from '../../ReusableComponents/Headings.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';
import { Link  } from "react-router-dom";

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

                <p>
                    PHP ( Hypertext PreProcessor ) is an server side scripting language. 
                    and its an powerfully tool for developing dynamic interactive web applications.
                </p>

                <p>
                    If you are getting started with php start with the current stable version PHP8.
                    PHP 8.x adds many new features over PHP 7.x and PHP 5.x versions. The engine has been 
                    largely re-written and PHP now even quicker than the older versions. 
                </p>

                <p>
                    You should upgrade to latest version quickly. Upgrading is easy there are not many
                    backwards compatibility breaks. To check the current PHP version you can run the following command.
                </p>

                <Code code="php -v" />
                <br/>

                <H2 h2="Why to learn PHP?" />
                <br/>

                <p>
                    PHP started out as a small open source project that evolved as more and more people found out how useful it was. Rasmus Lerdorf unleashed the first version of PHP way back in 1994.
                </p>
                
                <p>
                    PHP is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning PHP:
                </p>

                <ul>
                    <li>PHP is pleasingly zippy in its execution, especially when compiled as an Apache module on the Unix side. The MySQL server, once started, executes even very complex queries with huge result sets in record-setting time.</li>
                    <li>PHP is a recursive acronym for "PHP: Hypertext Preprocessor".</li>
                    <li>PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.</li>
                    <li>It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.</li>
                    <li>PHP supports a large number of major protocols such as POP3, IMAP, and LDAP. PHP4 added support for Java and distributed object architectures (COM and CORBA), making n-tier development a possibility for the first time.</li>
                    <li>PHP is forgiving: PHP language tries to be as forgiving as possible.</li>
                    <li>PHP Syntax is C-Like.</li>
                </ul>

                <div className="introPage">
                    <Link to ='/introduction' className="link">Introduction</Link>
                </div>

            </div>
        </div>
    </div>
}